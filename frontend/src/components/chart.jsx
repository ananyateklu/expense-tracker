import React, { Component } from "react";

import Chart from "react-apexcharts";
import "./components.css";
// import { GiKnifeFork } from 'react-icons/gi';
// const Expense = (props) => (
//   <tr>
//     <td>{props.expense.expensetype}</td>
//     <td>{props.expense.itemname}</td>
//     <td>{props.expense.amount}</td>
//   </tr>
// );
export default class Dchart extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      
      series: [this.props.food, this.props.utilities, this.props.transportation, this.props.shopping, this.props.school],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -45,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Expenses",
        },
        labels: ["Utilities", "School", "Shopping", "Food", "Transportation"],

        theme: {
          palette: "palette2", // upto palette10
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 360,
              },
              //   legend: {
              //     position: 'bottom'
              //   }
            },
          },
        ],
      },
    };
   
  }
  

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col" style={{ padding: "20px" }}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="380"
            />
          </div>
          
        </div>
      </div>
    );
  }
}
