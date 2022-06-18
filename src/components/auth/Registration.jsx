import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Registration() {
  return (
    <div className="auth-form df aic jcc">
      <div className="form-container df">
        <form className="form df">
          <Input type="text" placeholder="Name" aria-label="name" />
          <Input type="email" placeholder="Email" aria-label="email" />
          <Input type="password" placeholder="Password" aria-label="password" />
          <Button content="Register" />
        </form>
      </div>
    </div>
  );
}
