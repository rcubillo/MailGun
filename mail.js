const nodemailer = require ('nodemailer');

//Dotenv
require('dotenv').config()

const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key: process.env.api_key,
        domain: process.env.domain,
    }
};

const transporter = nodemailer.createTransport (mailGun(auth));

const sendMail = (email, subject,text,callback ) =>{
const mailOptions = {
      from: email,
      to: 'chinocubillo@gmail.com',
      subject,
      text,
};

transporter.sendMail(mailOptions, function(err,data){
    if (err) {
        callback(err,null);
    }else{
        callback(null,data);
    }
});
}

sendMail ('', '', '', function(err,data){

});

//Exporting the function
module.exports=sendMail;