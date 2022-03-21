import React, { useState, useRef } from "react";
import "./ExpenseForm.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

function ExpenseForm(props) {
  const [error, setError] = useState();

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (enteredTitle.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please, enter the Title!",
      });
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
    }
  }

  function cancelHandler(event) {
    props.onCancel();
  }

  function errorHandler(event) {
    setError(null);
  }

  return (
    <React.Fragment>
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
            <input type="text" ref={titleInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              ref={dateInputRef}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <Button type="submit">Add Expense</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ExpenseForm;
