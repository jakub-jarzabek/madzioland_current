const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { sendEmail } = require('./mail');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
if(process.env.IP_ADDRESS)
{
    IP_ADDRESS = "http://"+process.env.IP_ADDRESS
}
else
{
    IP_ADDRESS= "http://localhost:3000"
} 

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', IP_ADDRESS);
    res.header("Access-Control-Allow-Headers", true);
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    next();
});

app.post("/api/send", async (req,res)=>{
   console.log(req.body)
    await sendEmail(req.body.topic,req.body.name,req.body.email,req.body.content);
    res.send("done")
})

app.listen(5000 ,()=>{
    console.log("listening on port 5000")
})