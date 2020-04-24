import React from "react";
import SignIn from "../sign-in/sign-in";
import SignUp from "../signUp/signUp";
import "./signin-and-signup.scss";

const SigninAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    SIGN IN
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignUp;
