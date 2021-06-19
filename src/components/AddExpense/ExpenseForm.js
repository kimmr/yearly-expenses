import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  /*
  const [enteredTitle, setEnteredTitle] = useState(''); // '' - nothing was entered initially
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  */
  const [newValues, setNewValues] = useState({
    newTitle: '',
    newPrice: '',
    newDate: '',
  });

  const titleChangeHandler = (event) => {
    setNewValues({
      ...newValues,
      newTitle: event.target.value, // override from newValues
    });
    //setEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setNewValues({
      ...newValues,
      newPrice: event.target.value, // override from newValues
    });
    //setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setNewValues({
      ...newValues,
      newDate: event.target.value, // override from newValues
    });
    //setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // javascript, prevent unchanged data

    const expenseValues = {
      title: newValues.newTitle,
      price: newValues.newPrice,
      date: new Date(newValues.newDate),
    };
    props.onSaveExpenseValues(expenseValues);
    // Clear the form after submitted by setting new values to empty string again.
    setNewValues({
      newTitle: '',
      newPrice: '',
      newDate: '',      
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-expense__controls">
        <div className="add-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newValues.newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="add-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newValues.newPrice}
            onChange={priceChangeHandler}
          ></input>
        </div>
        <div className="add-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2021-12-31"
            value={newValues.newDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="add-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
