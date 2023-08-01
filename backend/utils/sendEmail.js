const nodemailer =require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.SMTP_EMAIL ,
          pass: process.env.SMTP_From_PASSWORD
        }
      });

      const message = {
        from: ` ${process.env.SMTP_From_NAME} <${process.env.SMTP_From_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
      }

   // await transporter.sendEmail(message);


}

module.exports = sendEmail;