const nodemailer = require('nodemailer');

module.exports = {
  sendEmail
};

// Send user's email 
async function sendEmail(req, res) {
  // 1. Create a Nodemailer transporter using either SMTP or some other transport mechanism
  let transporter = nodemailer.createTransport({
    service:  'gmail', //'smtp.mailtrap.io',
    // port: 2525,
    auth: {
      user: process.env.USERNAME, // 'b98eb97577454c',
      pass: process.env.PASS // '5d33d3333f013f'
    }
  });
  
  // 2. Set up message options (who sends what to whom)
  let message = {
    from: req.body.email, // sender address
    to: 'lrjones416@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
  }

  // 3. Deliver the message object using the sendMail() method of your previously created transporter
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
