var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')

/* GET home page. */

router.post('/', async(req,res)=>{
    const {phone} = req.body
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'gruzmhk@gmail.com',
          pass: 'gr2022uz',
      },
  })
await transporter.sendMail({
    from: 'gruzmhk@gmail.com',
    to: 'gruzmhk@gmail.com',
    subject: 'Заявка на звонок',
    text: `Телефон ${phone}`
  })
  res.sendStatus(200)
})
router.post('/vacanci', async(req,res)=>{
  const {name,email,message} = req.body
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gruzmhk@gmail.com',
        pass: 'testwebsite',
    },
})
await transporter.sendMail({
  from: 'gruzmhk@gmail.com',
  to: 'gruzmhk@gmail.com',
  subject: 'Вакаесии',
  text: `ФИО ${name}, email - ${email}, сообщение ${message}`
})
res.sendStatus(200)
})

module.exports = router;
