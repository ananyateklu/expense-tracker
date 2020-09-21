const express = require('express');
const router = express.Router();
const Income = require('../models/income.model');

//This route gets files from the database
router.route('/').get((req, res) => {
    Income.find()
        .then(income => res.json(income))
        .catch(err => res.status(400).json('Error:' + err));
});

//This route adds files to the database 
router.route('/add').post((req,res) => {
    const incometype = req.body.incometype;
    const amount = req.body.amount;
    const date = Date.parse(req.body.date);

    const newIncome = new Income({
        incometype,
        amount,
        date
});

newIncome.save()
.then(() => res.json('Income added!'))
.catch(err => res.status(400).json('Error:' + err));
});




module.exports = router;