import { useState } from "react";
import "./ExpenseForm.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [error, setError] = useState();

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (enteredTitle.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please, enter the Title!",
      });

      // return window.confirm();
    } else if (enteredAmount.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please, enter the Amount!",
      });
    } else if (enteredDate.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please, enter the Date!",
      });
    } else {
      const expenseData = {
        title: enteredTitle.trim(),
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  }

  function cancelHandler(event) {
    props.onCancel();
  }

  function errorHandler(event) {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <Button type="submit">Add Expense</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
