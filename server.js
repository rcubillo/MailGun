const express = require('express');
const log = console.log;
const app = express();
const path = require('path');


//Bringing the sendMail function.
const sendMail = require('./mail');

const PORT = 8080;

//Data parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.post('/email', (req, res) => {
  //send email here
  const { subject, email, text } = req.body;

  console.log('Data: ', req.body);
  sendMail(email, subject, text, function(err, data) {
    if (err) {
      res.status(500).json({ message: 'Internet Error' });
    } else {
      res.json({ message: 'Email sent!' });
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));
