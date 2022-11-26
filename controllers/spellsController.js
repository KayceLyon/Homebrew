const express = require('express')
const spells = express.Router()
const Spell = require('../models/spells.js')

// Create: New
spells.get('/new', (req, res) => {
    res.render(
        'spellNew.ejs',
        {
            currentUser: req.session.currentUser
        })
});

// Create: Post
spells.post('/', (req, res) => {
    Spell.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/spells');
    });
});

// Read: Index
spells.get('/', (req, res) => {
    Spell.find({}, (err, foundSpells) => {
        res.render(
            'spellIndex.ejs', 
            {
                spell: foundSpells,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Read: Show
spells.get('/:id', (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'spellShow.ejs',
            {
                spell: spellId,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Update: Edit
spells.get('/:id/edit', (req, res) => {
    Spell.findById(req.params.id, (err, spellId) => {
        res.render(
            'spellEdit.ejs',
            {
                spell: spellId,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Update: Put
spells.put('/:id', (req, res) => {
    Spell.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/spells');
    });
});

// Destroy: Delete
spells.delete('/:id', (req, res) => {
    Spell.findByIdAndRemove(req.params.id, (err, spell) => {
        res.redirect('/spells')
    })
});

module.exports = spells;