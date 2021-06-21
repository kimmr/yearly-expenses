import React, {useState} from 'react';

import ExpenseComponents from './components/Expenses/ExpenseComponents';
import AddExpense from './components/AddExpense/AddExpense';
import './App.css';

const tempExpenses = [
  {
    id: '1',
    title: 'Books',
    price: 24.99,
    date: new Date(2019, 5, 3),
  },
  {
    id: '2',
    title: 'Snacks and drinks',
    price: 23.05,
    date: new Date(2020, 3, 9),
  },
  {
    id: '3',
    title: 'An office chair',
    price: 64.99,
    date: new Date(2020, 11, 27),
  },
  {
    id: '4',
    title: 'A new phone',
    price: 699.99,
    date: new Date(2021, 1, 16),
  },
  {
    id: '5',
    title: 'A microphone',
    price: 199.99,
    date: new Date(2019, 1, 16),
  },
  {
    id: '6',
    title: 'A fan',
    price: 39.99,
    date: new Date(2021, 6, 16),
  },
  {
    id: '7',
    title: 'A new desk',
    price: 199.69,
    date: new Date(2021, 5, 8),
  },
  {
    id: '8',
    title: 'A lamp',
    price: 59.99,
    date: new Date(2021, 8, 3),
  },
  {
    id: '9',
    title: 'notebooks',
    price: 10.99,
    date: new Date(2021, 10, 12),
  },
  {
    id: '10',
    title: 'Sony xm4 headphone',
    price: 299.99,
    date: new Date(2021, 11, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(tempExpenses);
  
  const AddExpenseHandler = (newExpense) => {
    setExpenses((existingExpenses) => {
      return [newExpense, ...existingExpenses]; 
    });
  };

  return (
    <div>
      <AddExpense onAddExpense= {AddExpenseHandler} />
      <ExpenseComponents items = {expenses} />
    </div>
  );
}

export default App;
