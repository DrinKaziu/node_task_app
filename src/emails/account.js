const sgmail = require('@sendgrid/mail');

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: 'dak4410@gmail.com',
    subject: 'Welcome To TaskApp',
    text: `Welcome to the app ${name}! Let me know how you get a long with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: 'dak4410@gmail.com',
    subject: 'Sad to see you leave.',
    text: `Goodbye ${name}! Hope to see you soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}