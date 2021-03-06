import React, { Component } from "react";
import "./components.css";
import dateFormat from "dateformat";



export default class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
          


        }
  
    
    }
   
        render() {
        
           return (
            <div className="entries">
                 <div className="list-group">
                    <div className="list-group-item ">
                    <div className="items">
                        <div className="etype">
                        <img alt="icon" src={this.props.icon}/>
                        </div>
                        <img className="remove" alt="remove" src="https://img.icons8.com/fluent-systems-regular/50/4a90e2/filled-trash.png"/>
                        <div className="typeamount">
                        <small className="type">$ {this.props.amount}</small>
                       
                        <h6 className="iname">{this.props.itemname}</h6>
                    
                        <small>{(dateFormat(this.props.date, "mmmm dS"))}</small>
                        
                        </div>
                    
                    </div>
                    
                    </div>
                </div>
            </div>
               

        );
    }
}