
require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: proces.env.EMAIL,
         pass: proces.env.PASSWORD
     }
})

const mailOptions = {
    from:'visvan3333@gmail.com',
    to:'visvan3333@gmail.com',
    subject: 'sadasdsdasdadsadsa',
    text: 'sadasdadsadasdadsadasddasddadsasdasdasdadsa'
}

transporter.sendMail(mailOptions);