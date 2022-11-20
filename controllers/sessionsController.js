const bcrypt = require('bcrypt');
const express = require('express');
const sessions = express.Router();
const User = requiire('../models/users.js');

sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    });
});

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err) {
            console.log(err);
            res.send('DB does not work.');
        } else if(!foundUser) {
            res.send('<a href="/"User not found. </a>');
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.redirect('/');
            } else {
                res.send('<a href="/" Incorrect password. </a>');
            }
        };
    });

});

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = sessions;