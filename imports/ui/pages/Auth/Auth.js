import React, { useState } from "react";

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signup, setSignup] = useState(true);

  const setError = (message) => {
    setErrorMessage(message);
    setIsError(true);
    setTimeout(() => setIsError(false), 3000);
  };

  const submit = (e) => {
    e.preventDefault();

    if (signup) {
      if (password !== confirmPass) {
        setError("Make sure that the Password is Same as the Confirm Password");
        return;
      }

      Accounts.createUser(
        {
          email,
          password,
        },
        (error) => setError(error.message.replace(/[^A-Za-z]+/g, " "))
      );
    }

    if (!signup) {
      Meteor.loginWithPassword(email, password, (error) =>
        setError(error.message.replace(/[^A-Za-z]+/g, " "))
      );
    }
  };

  const switchSignOption = () => setSignup((pre) => !pre);

  const headerContent = signup ? (
    <div className="authFormHeader">
      <h1>Create Account</h1>
      <p>
        Already have an Account? <a onClick={switchSignOption}>Login</a>
      </p>
    </div>
  ) : (
    <div className="authFormHeader">
      <h1>Welcome to MRF</h1>
      <p>
        Don't have an Account? <a onClick={switchSignOption}>Signup</a>
      </p>
    </div>
  );

  const confirmPasswordInput = signup && (
    <input
      className="authInput"
      type="password"
      placeholder="Confirm Password"
      name="password"
      required
      onChange={(e) => setConfirmPass(e.target.value)}
    />
  );

  const errorContent = isError && <p className="error">{errorMessage}</p>;

  return (
    <div className="authFormOuterContainer">
      <div className="authFormInnerContainer">
        <form onSubmit={submit} className="authForm">
          {headerContent}

          {errorContent}

          <input
            className="authInput"
            type="text"
            placeholder="Jon.doe@domain.com"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="authInput"
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {confirmPasswordInput}

          <button type="submit" className="authBtn">
            {signup ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
