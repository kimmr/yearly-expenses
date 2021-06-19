import ExpenseComponents from './components/Expenses/ExpenseComponents';
import './App.css';

function App() {
  const expenses = [
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
      price: 1099.99,
      date: new Date(2021, 1, 16),
    },
  ];

  return (
    <div>
      <ExpenseComponents item = {expenses} />
    </div>
  );
}

export default App;
