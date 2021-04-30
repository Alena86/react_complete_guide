import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState - react hook, must be called inside of component function not nested or outside.
  const [title, setTitle] = useState(props.title); // returns updated value and function to change
  // title is pointer to props.title, setTitle function that changes the value.
  // using useState forces component to be reevaluated! Works per component instance!

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <Card><button onClick={clickHandler}>Change Title</button></Card>
    </Card>
  );
}

export default ExpenseItem;
