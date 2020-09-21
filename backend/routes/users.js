const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

//This route gets a list of all the users from the database
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

//This route adds new users to the database 
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(()=> res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;