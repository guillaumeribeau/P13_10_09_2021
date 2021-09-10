import React from "react";
import { useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../actions/signIn.action";

const SignInForms = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector(state => state.signInReducer)
  const dispatch = useDispatch();

  //voir pour mettre en async
  const submit = (e) => {
    e.preventDefault();
    dispatch(signInUser())
  };

  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <PersonCircle />
        <h1>Sign In</h1>
        <form onSubmit={submit}>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input onChange={(e)=>{setUser(e.target.value)}} type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button class="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignInForms;
