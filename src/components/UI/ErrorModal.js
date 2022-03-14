import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";

function ErrorModal(props) {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <body className={styles.content}>
          <p>{props.message}</p>
        </body>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}
export default ErrorModal;
