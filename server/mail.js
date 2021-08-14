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

const sendEmail = async (subject,name,email,content) =>{

    let testAccount = await mailer.createTestAccount();

    const smtpTransport = mailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    smtpTransport.verify(function (error, success){
        if (error){
            console.log(error)
        }else {
            console.log("Server ready")
        }
    })


    const mail = await getEmailData(subject,name,email,content)

    smtpTransport.sendMail(mail,function(error,response) {
        if(error){
            console.log(error);
        }
        else {

        console.log (`email sent from: ${mail.from} to: ${mail.to}`);
        }
         smtpTransport.close();
    })


}

module.exports = {sendEmail}