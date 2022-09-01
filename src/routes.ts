import express from 'express'
import multer from 'multer'
import { NodeMailerAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router()
const upload = multer()

routes.post('/send', upload.none(), async (req, res) => {

    const {name, mail, content} = req.body
    try {
        const nodeMailerAdapter = new NodeMailerAdapter();
        await nodeMailerAdapter.sendMail({
            subject: "destino@gmail.com",
            body: [
                `<div style="font-family: sans:serif;font-size: 16px; color: #111">`,
                `<p>Nome: ${name}</p>`,
                `<p>E-mail: ${mail}</p>`,
                content ? `${content}` : null,
                `</div>`
            ].join('\n')
        })
    
        return res.status(201).send("E-mail enviado!");
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }

    return res.status(201).send();
})