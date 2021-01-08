import React from "react";

function Card(props) {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="items">
          <div className="etype">
            {props.expensetype}
          </div>
          <h5 className="iname">{props.itemname}</h5>
          <small>{props.amount}</small>
        </div>
        <small>{props.date}</small>
      </div>
    </div>
  );
}

export default Card;