const mailer = require('nodemailer');

const getEmailData = (subject,name,email,content)=>{
    let data = null
    data = {
        from: email,
        to:"kubitssu@gmail.com",
        subject,
        text: `${name} napisał: ${content}`
     }
     return data;
}

const sendEmail = (subject,name,email,content) =>{

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user:'appkatest69@gmail.com',
            pass: 'qzNLgJ84zidCFuX'
        }
    })

    const mail = getEmailData(subject,name,email,content)

    smtpTransport.sendMail(mail,function(error,response) {
        if(error){
            console.log(error);
        }
        else {
        console.log ("email sent")    
        }
        smtpTransport.close();
    })
}

module.exports = {sendEmail}