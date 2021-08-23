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
        from: "mdziolandsmtp@gmail.com",
        to: "kubitssu@gmail.com",
        subject: subject,
        text:"czesc",
        html: `<h1>${name} z emaila ${email} napisał: </h1>
        <br>
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