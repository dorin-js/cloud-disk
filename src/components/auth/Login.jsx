import React from "react";
import "./Auth.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Login() {
  return (
    <div className="auth-form df aic jcc">
      <div className="form-container df">
        <form className="form df">
          <Input type="text" placeholder="Email" aria-label="name" />
          <Input type="password" placeholder="Password" aria-label="password" />
          <Button content="Login" />
        </form>
      </div>
    </div>
  );
}
