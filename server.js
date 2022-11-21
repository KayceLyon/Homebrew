require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');


let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

const Spell = require('./models/spells');

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
  
mongoose.connect('mongodb+srv://klyon:JqIO7Olb8If4S0kg@homebrew.hethkpl.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Connected.');
});

app.use(session({
    secret: 'Ibu$0me3mEr0p1@',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use('/users', userController);
app.use('/sessions', sessionsController);



// Sign-Up Page



// Routes for Spells

// Create: New
app.get('/spells/new', (req, res) => {
    res.render('spellNew.ejs')
});

app.post('/spells', isAuthenticated, (req, res) => {
    Spell.create(req.body, (err, newSpell) => {
        res.redirect('/spells');
    });
});

// Read: Index

app.get('/spells', isAuthenticated, (req, res) => {
    Spell.find({}, (err, foundSpells) => {
        res.render(
            'spellIndex.ejs', 
            {
                spells: foundSpells
            }
        )
    });
});

// Read: Show

app.get('/spells/:id', isAuthenticated, (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'spellShow.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Edit

app.get('/spells/:id/edit', isAuthenticated, (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'spellShow.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Put

app.put('/spells/:id', isAuthenticated, (req, res) => {
    Spell.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redict('/spells');
    });
});

// Destroy: Delete

app.delete('/spells/:id', isAuthenticated, (req, res) => {
    Spell.findByIdAndRemove(req.params.id, (err, spell) => {
        res.redirect('/spells')
    })
});

app.listen(PORT, () => {
    console.log('listening...');
});