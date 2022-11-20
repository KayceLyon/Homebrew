const express = require('express');
const app = express();
const session = require('express-session');

require('dotenv').config();
const PORT = process.env.PORT;

const Spell = require('./models/spells');
const Login = require('./models/users');

const methodOverride = require('method-override');

const mongoose = require('mongoose');
const db = mongoose.connection;

const mongodbURI = process.env.MONGODBURI;

const userController = require('./controllers/usersController.js');
const sessionsController = require('./controllers/sessionsController.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }
  
mongoose.connect(mongodbURI, () => {
    console.log('Connected.');
});

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/users', userController);
app.use('/sessions', sessionsController);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// Sign-Up Page



// Routes for Spells

// Create: New
app.get('/spells', (req, res) => {
    res.render('new.ejs')
});

app.post('/spells', (req, res) => {
    Spell.create(req.body, (err, newSpell) => {
        res.redirect('/spells');
    });
});

// Read: Index

app.get('/spells', (req, res) => {
    Spell.find({}, (err, foundSpells) => {
        res.render(
            'index.ejs', 
            {
                spells: foundSpells
            }
        )
    });
});

// Read: Show

app.get('/spells/:id', (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'show.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Edit

app.get('/spells/:id/edit', (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'show.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Put

app.put('/spells/:id', (req, res) => {
    Spell.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redict('/spells');
    });
});

// Destroy: Delete

app.delete('/spells/:id', (req, res) => {
    Spell.findByIdAndRemove(req.params.id, (err, spell) => {
        res.redirect('/spells')
    })
});

app.listen(PORT, () => {
    console.log('listening...');
});