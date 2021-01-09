import React, { Component } from "react";
import "./components.css";



export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
  
    
    }
   
        render() {
           return (
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="items">
                    <div className="etype">
                    <img alt="icon" src={this.props.icon}/>
                    </div>
                    <div className="typeamount">
                    <h5 className="iname">{this.props.itemname}</h5>
                    <h6>$ {this.props.amount}</h6>
                    </div>
                   
                </div>
                <small>{this.props.date}</small>
                </div>
            </div>

        );
    }
}