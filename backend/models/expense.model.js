const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    expensetype: { type: String, required: true},
    itemname: { type: String, required: true},
    amount: { type: Number, required: true},
    description: { type: String, required: false},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;