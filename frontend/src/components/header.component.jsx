import React, {Component} from 'react';
import { Link } from 'react-router-dom';
 

export default class Header extends Component {
    render(){
        return (
           <header className="header">
              <div>
               <ul>
                   <li><h4>Expense-Tracker</h4></li>
                   <li><Link className="links" to="/"> Expenses </Link></li>
                   <li><Link className="links" to="/income"> Income </Link></li>
                   <li><Link className="links" to="/create"> CExpenses </Link></li>
                   <li><Link className="links" to="/createincome"> Cincome </Link></li>
               </ul>
               
               </div>
           </header>
        );
    }
}