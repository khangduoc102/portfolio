const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'hoang_lp_97@yahoo.com',
    pass: 'awyzscbwgjxcgull'
  }
});

sendMail= (from, to, subject, html, text) =>{
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: html,
        text: text
      };
      
    transporter.sendMail(mailOptions, function(error, info){
        const time = new Date();
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
        console.log(time);
    });
}

module.exports= {
    sendMail
}