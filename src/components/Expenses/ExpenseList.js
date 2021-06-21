import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.elist.length === 0) {
    return <h2 className="expense-list__fallback">No expenses in this year.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.elist.map((item) => (
        <ExpenseItem
         key={item.id} // help identifying an item
         title={item.title}
         price={item.price}
         date={item.date}
        />
      ))
      }
    </ul>
  );
};

export default ExpenseList;
