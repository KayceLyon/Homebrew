const express = require('express')
const armor = express.Router()
const Armor = require('../models/armor.js')

// Create: New
armor.get('/new', (req, res) => {
    res.render('armorNew.ejs')
});

// Create: Post
armor.post('/', (req, res) => {
    Armor.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/armor');
    });
});

// Read: Index
armor.get('/', (req, res) => {
    Armor.find({}, (err, foundArmor) => {
        res.render(
            'armorIndex.ejs', 
            {
                armor: foundArmor
            }
        )
    });
});

// Read: Show
armor.get('/:id', (req, res) => {
    Armor.findById(req.params.id, (err, armorId) => {
        res.render(
            'armorShow.ejs',
            {
                armor: armorId
            }
        )
    });
});

// Update: Edit
armor.get('/:id/edit', (req, res) => {
    Armor.findById(req.params.id, (err, armorId) => {
        res.render(
            'armorEdit.ejs',
            {
                armor: armorId
            }
        )
    });
});

// Update: Put
armor.put('/:id', (req, res) => {
    Armor.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/armor');
    });
});

// Destroy: Delete
armor.delete('/:id', (req, res) => {
    Armor.findByIdAndRemove(req.params.id, (err, armor) => {
        res.redirect('/armor')
    })
});

module.exports = armor;