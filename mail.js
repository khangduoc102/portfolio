const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'hoang_lp_97@yahoo.com',
    pass: 'awyzscbwgjxcgull'
  }
});

sendMail= (from, to, subject, html, text) =>{
    let result = "OK";
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: html,
        text: text
      };
      
    try{
        transporter.sendMail(mailOptions, function(error, info){
            const time = new Date();
            if (error) {
                result= new Error('error!')
            } else {
                console.log(info);
            }
            console.log(time);
        });
    } catch(e){
        result="Error"
    }

    return result;
}

module.exports= {
    sendMail
}