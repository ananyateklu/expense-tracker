const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    incomeType: { type: String, required: true},
    amount: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;