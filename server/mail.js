const mailer = require('nodemailer');
require('dotenv').config()


let transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWD,
    },
  });


const getEmailData = (subject,name,email,content)=>{
    let data = null
    data = {
        from: process.env.USER_MAIL,
        to: process.env.USER_TO,
        subject: subject,
        text:"czesc",
        html: `
        <h4>Imię i Nazwisko: </h4>
        <span>${name}<span/>
        <h4>Email: </h4>
        <span>${email}</span>
        <h4>Temat:</h4>
        <span>${subject}<span>
        <h4>Treść:</h4>
        <p>${content}</p>
        `
     }
     return data;
}

const sendEmail = async (subject,name,email,content) =>{
 

    const mail = await getEmailData(subject,name,email,content)

    transporter.sendMail(mail,function(error,response) {
        if(error){
            console.log(error);
        }
        else {

        console.log (`email sent from: ${mail.from} to: ${mail.to}`);
        }
    })


}

module.exports = {sendEmail}