import React, { useState } from "react";
import "./Auth.scss";
import Input from "../Input/Input";
// import Button from "../Button/Button";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const onFormSubmit = () => {
  //   login(email, password);
  // };
  return (
    <div className="auth-form df aic jcc">
      <div className="form-container df">
        <form className="form df">
          <Input
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Email"
            aria-label="name"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Password"
            aria-label="password"
          />
          <button
            type="submit"
            content="Login"
            onClick={(e) => {
              e.preventDefault();
              dispatch(login(email, password));
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
