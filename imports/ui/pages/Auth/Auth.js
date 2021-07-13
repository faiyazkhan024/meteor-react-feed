import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

import "./Auth.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(true);

  const submit = (e) => {
    e.preventDefault();

    if (signup) {
    }

    if (!signup) {
      Meteor.loginWithPassword(username, password);
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
      onChange={(e) => setPassword(e.target.value)}
    />
  );

  return (
    <div className="authFormOuterContainer">
      <div className="authFormInnerContainer">
        <form onSubmit={submit} className="authForm">
          {headerContent}

          <input
            className="authInput"
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
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
