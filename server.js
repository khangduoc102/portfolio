const express = require('express')
const app = express();
const path = require('path');
const mailService = require('./mail');

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.post('/sendMail', function (req, res) {
    console.log(req.body);
    mailService.sendMail(req.body.mail.from, req.body.mail.to, req.body.mail.subject, req.body.mail.html);
    mailService.sendMail(req.body.responsedMail.from, req.body.responsedMail.to, req.body.responsedMail.subject, req.body.responsedMail.html);
    res.sendStatus(200);
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))