import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Button from "../../UI/Button/Button";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false);

    props.onAddExpense(expenseData);
  }
  function startEditingHandler() {
    setIsEditing(true);
  }
  function cancelHandler() {
    setIsEditing(false);
  }

  return (
    <div className={`${styles["new-expense"]} ${isEditing && styles.transit}`}>
      {!isEditing && (
        <Button onClick={startEditingHandler}>Add New Expense</Button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
