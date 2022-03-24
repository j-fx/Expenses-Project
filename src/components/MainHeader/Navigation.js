import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";
function Navigation() {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {ctx.isLoggedIn && (
        <ul>
          <li>
            <Button onClick={ctx.onLogout}>Logout</Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
