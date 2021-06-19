import ExpenseForm from './ExpenseForm';
import './AddExpense.css';

const AddExpense = (props) => {

  const saveExpenseValuesHandler = (addedExpenseValues) => {
    const newValues = {
      ...addedExpenseValues,
      id: Math.random().toString()
    };
    props.onAddExpense(newValues);
  };

  return (
    <div className="add-expense">
      <ExpenseForm onSaveExpenseValues={saveExpenseValuesHandler} />
    </div>
  );
};

export default AddExpense;
