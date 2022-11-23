//==============DEPENDENCIES===========

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

//==============ROUTES================

const userController = require('./controllers/usersController.js');
const sessionsController = require('./controllers/sessionsController.js');
const spellsController = require('./controllers/spellsController.js');
const classesController = require('./controllers/classesController.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

//==============MIDDLEWARE==============
  
app.use(session({
    /* Setting the secret in the .env file produced the following error when trying to perform heroku open:
       express-session deprecated req.secret; provide secret option at server.js:37:9. */

    secret: 'Ibu$0me3mEr0p1@',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));


app.use('/users', userController);
app.use('/sessions', sessionsController);
app.use('/spells', spellsController);
app.use('/classes', classesController);

// app.get('/', (req, res) => {
//     res.render('index.ejs');
// })

//==============LISTENERS=============

mongoose.connect('mongodb+srv://klyon:JqIO7Olb8If4S0kg@homebrew.hethkpl.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Connected.');
});

app.listen(PORT, () => {
    console.log('listening...');
});