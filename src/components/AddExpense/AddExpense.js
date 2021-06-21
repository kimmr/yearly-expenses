import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './AddExpense.css';

const AddExpense = (props) => {
  const [buttonOn, setButtonOn] = useState(false);

  const buttonOnHandler = () => {
    setButtonOn(true);
  };

  const buttonOffHandler = () => {
    setButtonOn(false);
  };

  const saveExpenseValuesHandler = (addedExpenseValues) => {
    const newValues = {
      ...addedExpenseValues,
      id: Math.random().toString(),
    };
    props.onAddExpense(newValues);
    setButtonOn(false)
  };

  return (
    <div className="add-expense">
      {!buttonOn ? (
        <button onClick={buttonOnHandler}>
          Add expense
        </button>
      ) : (
        <ExpenseForm onSaveExpenseValues={saveExpenseValuesHandler}
        onBack = {buttonOffHandler} 
        />
      )}
    </div>
  );
};

export default AddExpense;
