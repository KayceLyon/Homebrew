const express = require('express')
const compendiumSpells = express.Router()
const compendiumSpell = require('../models/compendiumSpells.js')

// Create: New
compendiumSpells.get('/new', (req, res) => {
    res.render(
        'compendiumSpellNew.ejs',
        {
            currentUser: req.session.currentUser
        })
});

// Create: Post
compendiumSpells.post('/', (req, res) => {
    compendiumSpell.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/compendiumSpells');
    });
});

// Read: Index
compendiumSpells.get('/', (req, res) => {
    compendiumSpell.find({}, (err, foundSpells) => {
        res.render(
            'compendiumSpellIndex.ejs', 
            {
                compendiumSpell: foundSpells,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Read: Show
compendiumSpells.get('/:id', (req, res) => {
    compendiumSpell.findById(req.params.id, (err, spellId) => {
        res.render(
            'compendiumSpellShow.ejs',
            {
                compendiumSpell: spellId,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Update: Edit
compendiumSpells.get('/:id/edit', (req, res) => {
    compendiumSpell.findById(req.params.id, (err, spellId) => {
        res.render(
            'compendiumSpellEdit.ejs',
            {
                compendiumSpell: spellId,
                currentUser: req.session.currentUser
            }
        )
    });
});

// Update: Put
compendiumSpells.put('/:id', (req, res) => {
    compendiumSpell.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/compendiumSpells');
    });
});

// Destroy: Delete
compendiumSpells.delete('/:id', (req, res) => {
    compendiumSpell.findByIdAndRemove(req.params.id, (err, compendiumSpell) => {
        res.redirect('/compendiumSpells')
    })
});

module.exports = compendiumSpells;