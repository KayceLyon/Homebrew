const express = require('express')
const backgrounds = express.Router()
const Background = require('../models/backgrounds.js')

// Create: New
backgrounds.get('/new', (req, res) => {
    res.render('backgroundNew.ejs')
});

// Create: Post
backgrounds.post('/', (req, res) => {
    Background.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/backgrounds');
    });
});

// Read: Index
backgrounds.get('/', (req, res) => {
    Background.find({}, (err, foundBackgrounds) => {
        res.render(
            'backgroundIndex.ejs', 
            {
                background: foundBackgrounds
            }
        )
    });
});

// Read: Show
backgrounds.get('/:id', (req, res) => {
    Background.findById(req.params.id, (err, backgroundsId) => {
        res.render(
            'backgroundShow.ejs',
            {
                background: backgroundsId
            }
        )
    });
});

// Update: Edit
backgrounds.get('/:id/edit', (req, res) => {
    Background.findById(req.params.id, (err, backgroundsId) => {
        res.render(
            'backgroundEdit.ejs',
            {
                background: backgroundsId
            }
        )
    });
});

// Update: Put
backgrounds.put('/:id', (req, res) => {
    Background.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/backgrounds');
    });
});

// Destroy: Delete
backgrounds.delete('/:id', (req, res) => {
    Background.findByIdAndRemove(req.params.id, (err, backgrounds) => {
        res.redirect('/backgrounds')
    })
});

module.exports = backgrounds;