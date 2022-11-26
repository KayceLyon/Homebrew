const express = require('express')
const monsters = express.Router()
const Monster = require('../models/monsters.js')

// Create: New
monsters.get('/new', (req, res) => {
    res.render('monsterNew.ejs')
});

// Create: Post
monsters.post('/', (req, res) => {
    Monster.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/monsters');
    });
});

// Read: Index
monsters.get('/', (req, res) => {
    Monster.find({}, (err, foundMonsters) => {
        res.render(
            'monsterIndex.ejs', 
            {
                monster: foundMonsters
            }
        )
    });
});

// Read: Show
monsters.get('/:id', (req, res) => {
    Monster.findById(req.params.id, (err, monstersId) => {
        res.render(
            'monsterShow.ejs',
            {
                monster: monstersId
            }
        )
    });
});

// Update: Edit
monsters.get('/:id/edit', (req, res) => {
    Monster.findById(req.params.id, (err, monstersId) => {
        res.render(
            'monsterEdit.ejs',
            {
                monster: monstersId
            }
        )
    });
});

// Update: Put
monsters.put('/:id', (req, res) => {
    Monster.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/monsters');
    });
});

// Destroy: Delete
monsters.delete('/:id', (req, res) => {
    Monster.findByIdAndRemove(req.params.id, (err, feats) => {
        res.redirect('/monsters')
    })
});

module.exports = monsters;