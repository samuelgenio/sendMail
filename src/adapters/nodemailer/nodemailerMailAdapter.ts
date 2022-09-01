import { SendMailData, MailAdapter } from "../mailAdapter";
import nodemailer from 'nodemailer'

//use https://mailtrap.io/ to test
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "xyz",
      pass: "xyz"
    }
});

export class NodeMailerAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        transport.sendMail({
            from: "Test email",
            to: subject,
            subject: subject,
            html: body
        })

    }
}