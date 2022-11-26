const express = require('express')
const subclasses = express.Router()
const Subclass = require('../models/subclasses.js')

// Create: New
subclasses.get('/new', (req, res) => {
    res.render('subclassNew.ejs')
});

// Create: Post
subclasses.post('/', (req, res) => {
    Subclass.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/subclasses');
    });
});

// Read: Index
subclasses.get('/', (req, res) => {
    Subclass.find({}, (err, foundSubclasses) => {
        res.render(
            'subclassIndex.ejs', 
            {
                subclass: foundSubclasses
            }
        )
    });
});

// Read: Show
subclasses.get('/:id', (req, res) => {
    Subclass.findById(req.params.id, (err, subclassesId) => {
        res.render(
            'subclassShow.ejs',
            {
                subclass: subclassesId
            }
        )
    });
});

// Update: Edit
subclasses.get('/:id/edit', (req, res) => {
    Subclass.findById(req.params.id, (err, subclassesId) => {
        res.render(
            'subclassEdit.ejs',
            {
                subclass: subclassesId
            }
        )
    });
});

// Update: Put
subclasses.put('/:id', (req, res) => {
    Subclass.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/subclasses');
    });
});

// Destroy: Delete
subclasses.delete('/:id', (req, res) => {
    Subclass.findByIdAndRemove(req.params.id, (err, subclasses) => {
        res.redirect('/subclasses')
    })
});

module.exports = subclasses;