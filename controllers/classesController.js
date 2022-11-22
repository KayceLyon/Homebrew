const express = require('express')
const classes = express.Router()
const Class = require('../models/classes.js')

// Create: New
classes.get('/new', (req, res) => {
    res.render('classNew.ejs')
});

// Create: Post
classes.post('/', (req, res) => {
    Class.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/classes');
    });
});

// Read: Index
classes.get('/', (req, res) => {
    Class.find({}, (err, foundSpells) => {
        res.render(
            'classIndex.ejs', 
            {
                spells: foundSpells
            }
        )
    });
});

// Read: Show
classes.get('/:id', (req, res) => {
    Class.findById(req.params.id, (err, spellId) => {
        res.render(
            'classShow.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Edit
classes.get('/:id/edit', (req, res) => {
    Class.findById(req.params.id, (err, spellId) => {
        res.render(
            'classEdit.ejs',
            {
                spells: spellId
            }
        )
    });
});

// Update: Put
classes.put('/:id', (req, res) => {
    Class.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/classes');
    });
});

// Destroy: Delete
classes.delete('/:id', (req, res) => {
    Class.findByIdAndRemove(req.params.id, (err, spell) => {
        res.redirect('/classes')
    })
});

module.exports = classes;