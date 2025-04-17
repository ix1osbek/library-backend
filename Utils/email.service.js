const nodemailer = require('nodemailer');

function emailServiceSender(email , randomCode) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.VERIFIER_GMAIL,
            pass: process.env.GOOGLE_PASS

        }
    })


    const emailOptions = {
        from: process.env.VERIFIER_GMAIL,
        to: email,
        subject: "Email verifying",
        html: `<b> Tasdiqlash kodingiz:</b> ${randomCode}`
    }

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log(error);

        }

        if (info) {
            console.log(info);

        }
    })
}

module.exports = emailServiceSender