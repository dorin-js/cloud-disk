import React, { useState } from "react";
import { registration } from "../../actions/user";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = () => {
    // e.preventDefault();
    registration(name, email, password);
  };
  return (
    <div className="auth-form df aic jcc">
      <div className="form-container df">
        <div className="form df">
          <Input
            value={name}
            setValue={setName}
            type="text"
            placeholder="Name"
            aria-label="name"
          />
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Email"
            aria-label="email"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
            aria-label="password"
          />
          <Button content="Register" onclick={onFormSubmit} />
        </div>
      </div>
    </div>
  );
}
