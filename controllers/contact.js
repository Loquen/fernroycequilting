const nodemailer = require('nodemailer');

module.exports = {
  sendEmail
};

// Send user's email 
async function sendEmail(req, res) {

  // https://nodemailer.com/about/
  let testAccount = await nodemailer.createTestAccount();
  // 1. Create a Nodemailer transporter using either SMTP or some other transport mechanism
  // 2. Set up message options (who sends what to whom)
  // 3. Deliver the message object using the sendMail() method of your previously created transporter

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return res.json(req.body);
}
