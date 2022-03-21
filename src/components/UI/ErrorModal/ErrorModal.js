import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
}

function ModalOverlay(props) {
  return (
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
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
export default ErrorModal;
