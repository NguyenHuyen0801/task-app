const sgMail = require("@sendgrid/mail");

// const sendGridApiKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "huyen7598@gmail.com",
    subject: "Thank for joining in!",
    text: `Welcome to the app, ${name}, let me know how you ger along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "huyen7598@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
