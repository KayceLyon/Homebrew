const express = require('express')
const weapons = express.Router()
const Weapon = require('../models/weapons.js')

// Create: New
weapons.get('/new', (req, res) => {
    res.render('weaponNew.ejs')
});

// Create: Post
weapons.post('/', (req, res) => {
    Weapon.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/weapons');
    });
});

// Read: Index
weapons.get('/', (req, res) => {
    Weapon.find({}, (err, foundweapons) => {
        res.render(
            'weaponIndex.ejs', 
            {
                Weapon: foundweapons
            }
        )
    });
});

// Read: Show
weapons.get('/:id', (req, res) => {
    Weapon.findById(req.params.id, (err, weaponsId) => {
        res.render(
            'weaponShow.ejs',
            {
                Weapon: weaponsId
            }
        )
    });
});

// Update: Edit
weapons.get('/:id/edit', (req, res) => {
    Weapon.findById(req.params.id, (err, weaponsId) => {
        res.render(
            'weaponEdit.ejs',
            {
                Weapon: weaponsId
            }
        )
    });
});

// Update: Put
weapons.put('/:id', (req, res) => {
    Weapon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/weapons');
    });
});

// Destroy: Delete
weapons.delete('/:id', (req, res) => {
    Weapon.findByIdAndRemove(req.params.id, (err, weapons) => {
        res.redirect('/weapons')
    })
});

module.exports = weapons;