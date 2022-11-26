const express = require('express')
const races = express.Router()
const Race = require('../models/races.js')

// Create: New
races.get('/new', (req, res) => {
    res.render('raceNew.ejs')
});

// Create: Post
races.post('/', (req, res) => {
    Race.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/races');
    });
});

// Read: Index
races.get('/', (req, res) => {
    Race.find({}, (err, foundRaces) => {
        res.render(
            'raceIndex.ejs', 
            {
                race: foundRaces
            }
        )
    });
});

// Read: Show
races.get('/:id', (req, res) => {
    Race.findById(req.params.id, (err, racesId) => {
        res.render(
            'raceShow.ejs',
            {
                race: racesId
            }
        )
    });
});

// Update: Edit
races.get('/:id/edit', (req, res) => {
    Race.findById(req.params.id, (err, racesId) => {
        res.render(
            'raceEdit.ejs',
            {
                race: racesId
            }
        )
    });
});

// Update: Put
races.put('/:id', (req, res) => {
    Race.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/races');
    });
});

// Destroy: Delete
races.delete('/:id', (req, res) => {
    Race.findByIdAndRemove(req.params.id, (err, races) => {
        res.redirect('/races')
    })
});

module.exports = races;