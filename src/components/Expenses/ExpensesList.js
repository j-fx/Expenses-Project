import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expenseItems = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  ); // default value

  if (props.items.length > 0) {
    expenseItems = props.items.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }
  return <ul className="expenses-list">{expenseItems}</ul>;
}
export default ExpensesList;
