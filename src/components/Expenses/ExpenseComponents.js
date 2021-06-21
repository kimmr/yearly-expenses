import React, { useState } from 'react';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseGraph from './ExpenseGraph';
import Card from '../UI/Card';

import './ExpenseComponents.css';

const ExpenseComponents = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesByYear = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSendAYear={yearFilterHandler}
        />
        <ExpenseGraph expenses={filteredExpensesByYear}/>
        <ExpenseList elist={filteredExpensesByYear}/>
      </Card>
    </div>
  );
};

export default ExpenseComponents;
