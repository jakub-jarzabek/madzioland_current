const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { sendEmail } = require('./mail');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.post("/api/send", async (req,res)=>{
   console.log(req.body)
    await sendEmail(req.body.subject,req.body.name,req.body.email,req.body.content);
})

app.get('/', (req,res)=>{
    res.send('jachu lize jaja')
})

app.listen(5000 ,()=>{
    console.log("listening on port 5000")
})