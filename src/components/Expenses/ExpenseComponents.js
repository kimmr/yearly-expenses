import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

import './ExpenseComponents.css';

const ExpenseComponents = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSendAYear={yearFilterHandler}
        />
        <ExpenseItem
          title={props.item[0].title}
          price={props.item[0].price}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          price={props.item[1].price}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          price={props.item[2].price}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          price={props.item[3].price}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseComponents;
