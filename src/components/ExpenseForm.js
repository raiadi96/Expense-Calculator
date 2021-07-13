import "./ExpenseForm.css";
import React, { useState } from "react";
import { conditionalExpression } from "@babel/types";
const ExpenseForm = (props) => {
  const [userInput, UpdateUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (evt) => {
    UpdateUserInput((prevState) => {
      return { ...prevState, enteredTitle: evt.target.value };
    });
  };
  const dateChangeHandler = (evt) => {
    UpdateUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: evt.target.value,
      };
    });
  };
  const amountChangeHandler = (evt) => {
    UpdateUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: evt.target.value,
      };
    });
  };

  const SaveForm = (evt) =>{
      evt.preventDefault();

      const ExpenseDetails = {
          title : userInput.enteredTitle,
          date : new Date(userInput.enteredDate),
          amount : userInput.enteredAmount
        }
    props.addExpenseData(ExpenseDetails);   
    UpdateUserInput({
        enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    });
    props.toggleSwitch(true)
  }

  const cancelHandler = (evt) =>{
    evt.preventDefault();
    props.toggleSwitch(true);
  }

  return (
    <form onSubmit = {SaveForm}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value = {userInput.enteredTitle}
          placeholder="Enter Title"
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value = {userInput.enteredAmount}
          onChange={amountChangeHandler}
          placeholder="Select Expense Amount"
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          value = {userInput.enteredDate}
          placeholder="Select Date"
        ></input>
      </div>

      <button type = 'submit' className="new-expense__actions">Add Expense</button>
      <button type = 'cancel' onClick = {cancelHandler} className="new-expense__actions">Cancel</button>
    </div>
    </form>
  );
};

export default ExpenseForm;
