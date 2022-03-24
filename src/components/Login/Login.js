import React, { useState, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

function emailReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
}

function passwordReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
}

function Login(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  function emailChangeHandler(event) {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  }

  function passwordChangeHandler(event) {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  }

  function submitHandler(event) {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  }

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
