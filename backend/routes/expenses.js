const express = require('express');
const router = express.Router();
const Expense = require('../models/expense.model');

//This route gets files from the database
router.route('/').get((req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error:' + err));
});

//This route adds files to the database 
router.route('/add').post((req,res) => {
    const expensetype = req.body.expensetype;
    const itemname = req.body.itemname;
    const amount = Number(req.body.amount);
    const description = req.body.description;
    const icon = req.body.icon;
    const date = Date.parse(req.body.date);

    const newExpense = new Expense({
        expensetype,
        itemname,
        amount,
        description,
        icon,
        date
});

//This gets an expense from the database with its id 
router.route('/:id').get((req,res) => {
    Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json('Error: ' + err));
});

newExpense.save()
.then(() => res.json('Expense added!'))
.catch(err => res.status(400).json('Error:' + err));
});




module.exports = router;