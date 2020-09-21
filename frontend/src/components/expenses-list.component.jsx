import React, {Component} from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'; 


const Expense = props => (
    <tr>
        <td>{ props.expense.expensetype }</td>
        <td>{ props.expense.itemname }</td>
        <td>{ props.expense.amount }</td>  
    </tr>

)
export default class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExpense = this.deleteExpense.bind(this);
        this.state = {
            expenses: [],
            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -45
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Expenses'
              },
              labels: ['Utilities', 'Food', 'Transportation', 'School', 'Shopping'],

              theme: {
                palette: 'palette2' // upto palette10
              },

              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 360
                  },
                //   legend: {
                //     position: 'bottom'
                //   }
                }
              }]
            },
        }
     
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/expenses/')
            .then(response => {
                this.setState({ expenses: response.data})
        })
            .catch((error) => {
                console.log(error);
        })
    }

    deleteExpense(id) {
        this.setState({
            expenses: this.state.expenses.filter(el => el.id !== id),
        });
        axios.delete('http://localhost:4000/expenses/'+id)
        .then(response => {
            console.log(response.data);
            window.location="/";
    })
}
    expenseList() {
        return this.state.expenses.map(currentexpense => {
            return <Expense expense={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id}/>
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col" style={{padding:"20px"}}>
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
                </div>
                <div className="col">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Expensetype</th>
                            <th>Itemname</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.expenseList() }
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        )
    }
}