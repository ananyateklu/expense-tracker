import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/header.component";
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";
import CreateIncome from "./components/create-income.component";
import EditIncome from "./components/edit-income.component";
import IncomeList from "./components/income-list.component";
import "./App.css"


function App() {
  return (
       <Router>
        <Header/>
        <br/>
        <Route path="/" exact component={ExpensesList}/>
        <Route path="/edit/:id" exact component={EditExpense}/>
        <Route path="/create" exact component={CreateExpense}/>
        <Route path="/user" exact component={CreateUser}/>
        <Route path="/createincome" exact component={CreateIncome}/>
        <Route path="/income" exact component={IncomeList}/>
        <Route path="/editIncome" exact component={EditIncome}/>
      </Router>
  
      
 
  );
 
}

export default App;