import React, { Component } from "react";
import axios from "axios";
import Entry from "./entry";
import "./components.css";
import testData from "./testexpenseData.js";
import Dchart from "./chart.jsx";
// import moment from "moment";
// import { GiKnifeFork } from 'react-icons/gi';
// const Expense = (props) => (
//   <tr>
//     <td>{props.expense.expensetype}</td>
//     <td>{props.expense.itemname}</td>
//     <td>{props.expense.amount}</td>
//   </tr>
// );
export default class ExpensesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);
    this.state = {
      expenses: testData,
      testOne: 1223,
      testTwo: 3455,
      testThree: 288,
      testFour: 233,
      testFive: 912,
    };
  }

  componentDidMount() {
    // axios
    //   .get("http://localhost:4000/expenses/")
    //   .then((response) => {
    //     this.setState({ expenses: response.data });
    //     console.log(this.state.expenses);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  deleteExpense(id) {
    this.setState({
      expenses: this.state.expenses.filter((el) => el.id !== id),
    });
    axios.delete("http://localhost:4000/expenses/" + id).then((response) => {
      console.log(response.data);
      window.location = "/";
    });
  }
  createEntry(expenseone) {
    return (
      <Entry
        key={expenseone._id}
        expensetype={expenseone.expensetype}
        itemname={expenseone.itemname}
        amount={expenseone.amount}
        description={expenseone.description}
        icon={expenseone.icon}
        date={expenseone.date}
      />
    );
  }

  render() {
    const expenseItems = this.state.expenses.map((expenseone) => (
      <Entry
        key={expenseone._id}
        expensetype={expenseone.expensetype}
        itemname={expenseone.itemname}
        amount={expenseone.amount}
        description={expenseone.description}
        icon={expenseone.icon}
        date={expenseone.date}
      />
    ));

    return (
       
        <div className="flex-container">

        <div className="flex-child magenta">
          <div className="myChart"> 
             <Dchart
                food={this.state.testOne}
                utilities={this.state.testTwo}
                transportation={this.state.testThree}
                school={this.state.testFour}
                shopping={this.state.testFive}
              />
              </div>
              
              
        </div>
       
        
        <div className="flex-child green">
          <div className = "big-div">
            {/* {this.state.expenses.map(this.createEntry)} */}
            {expenseItems}
          </div>
         
          
        </div>
       
      </div>
    );
  }
}
