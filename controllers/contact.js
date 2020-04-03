const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS
} = process.env;

const Mailing = {};

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

module.exports = {
  sendEmail
};

// Send user's email 
async function sendEmail(req, res) {
  // Set Up OAuth Credentials
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN
  });

  // Get the access token
  const accessToken = oauth2Client.getAccessToken();

  // Create a Nodemailer transporter using SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken
    }
  });
  
  // Set up message options
  let message = {
    from: SENDER_EMAIL_ADDRESS, // for Google Auth
    to: req.body.email, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
  }

  // Deliver the message object using the sendMail() method of transporter
  // send mail with defined transport object
  transporter.sendMail(message, (err, info) => {
    if(err){
      console.log(err);
    }else{
      console.log(info);
    }
  });
  
  return res.json(req.body);
}