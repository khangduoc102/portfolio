const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
const mailService = require('./mail');

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    console.log('connected');
    res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.post('/sendMail', function (req, res) {
        console.log('run');
        console.log(req.body);
        let result1 = mailService.sendMail(req.body.mail.from, req.body.mail.to, req.body.mail.subject, req.body.mail.html, req.body.mail.text);
        let result2 = mailService.sendMail(req.body.responsedMail.from, req.body.responsedMail.to, req.body.responsedMail.subject, req.body.responsedMail.html, req.body.responsedMail.text);
        console.log(result1 + result2);
        if(result1 === "Error" || result2 === "Error"){
            res.sendStatus(500);
        }
        else{
            res.sendStatus(200);
        }

})

app.listen(4000, () => console.log('Example app listening on port 4000!'))