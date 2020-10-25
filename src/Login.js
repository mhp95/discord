import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://discord.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
