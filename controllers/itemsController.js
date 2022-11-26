const express = require('express')
const items = express.Router()
const Item = require('../models/items.js')

// Create: New
items.get('/new', (req, res) => {
    res.render('itemNew.ejs')
});

// Create: Post
items.post('/', (req, res) => {
    Item.create(req.body, (err, data) => {
        console.log(req.body);
            if(err){
           console.log(err)
            } else {
            console.log(data)
           }
        res.redirect('/items');
    });
});

// Read: Index
items.get('/', (req, res) => {
    Item.find({}, (err, foundItems) => {
        res.render(
            'itemIndex.ejs', 
            {
                item: foundItems
            }
        )
    });
});

// Read: Show
items.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, itemsId) => {
        res.render(
            'itemShow.ejs',
            {
                item: itemsId
            }
        )
    });
});

// Update: Edit
items.get('/:id/edit', (req, res) => {
    Item.findById(req.params.id, (err, itemsId) => {
        res.render(
            'itemEdit.ejs',
            {
                item: itemsId
            }
        )
    });
});

// Update: Put
items.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/items');
    });
});

// Destroy: Delete
items.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, items) => {
        res.redirect('/items')
    })
});

module.exports = items;