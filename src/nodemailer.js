const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'myrtice.collier97@ethereal.email',
      pass: 'bAyQb4RFhDSGGRHeMw',
    },
  },
  {
    from: 'Myrtice Collier <myrtice.collier97@ethereal.email>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent:${info.response}`);
    }
  });
};

module.exports = mailer;
