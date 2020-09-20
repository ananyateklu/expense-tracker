const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(cors());

//Create a connection with the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB successfully connected");
})

//Use the routes here 
const expensesRouter = require('./routes/expenses');
const incomeRouter = require('./routes/income');
const usersRouter = require('./routes/users');


app.use('/expenses', exercisesRouter);
app.ust('/income', incomeRouter);
app.use('/users', usersRouter);


//server listens to the given port
app.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
