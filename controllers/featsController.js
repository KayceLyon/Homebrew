const express = require('express')
const feats = express.Router()
const Feat = require('../models/feats.js')

// Create: New
feats.get('/new', (req, res) => {
    res.render('featNew.ejs')
});

// Create: Post
feats.post('/', (req, res) => {
    Feat.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/feats');
    });
});

// Read: Index
feats.get('/', (req, res) => {
    Feat.find({}, (err, foundFeats) => {
        res.render(
            'featIndex.ejs', 
            {
                feat: foundFeats
            }
        )
    });
});

// Read: Show
feats.get('/:id', (req, res) => {
    Feat.findById(req.params.id, (err, featsId) => {
        res.render(
            'featShow.ejs',
            {
                feat: featsId
            }
        )
    });
});

// Update: Edit
feats.get('/:id/edit', (req, res) => {
    Feat.findById(req.params.id, (err, featsId) => {
        res.render(
            'featEdit.ejs',
            {
                feat: featsId
            }
        )
    });
});

// Update: Put
feats.put('/:id', (req, res) => {
    Feat.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/feats');
    });
});

// Destroy: Delete
feats.delete('/:id', (req, res) => {
    Feat.findByIdAndRemove(req.params.id, (err, feats) => {
        res.redirect('/feats')
    })
});

module.exports = feats;