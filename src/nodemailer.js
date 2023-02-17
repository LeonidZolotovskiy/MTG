const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      // Пожалуйста, используйте свой собственный аккаунт для рассылки
      user: "ttarasovuch@mail.ru", // (замените звездочики на название вашего почтового ящика)
      // pass: "tfrenckiedgar", //  (замените звездочики на пароль вашего почтового ящика)
      pass:'ZrddMuhbHYcGjaTEphac'
    },
  },
  {
    from: "Mailer Test <ttarasovuch@mail.ru>",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
