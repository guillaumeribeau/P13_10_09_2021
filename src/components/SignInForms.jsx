import React from "react";
import { useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { accessProfilePage, signInUser } from "../actions/signIn.action";
import signInReducer from "../reducers/signIn.reducer";

const SignInForms = () => {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector(state => state.signInReducer)
  const dispatch = useDispatch();
  
 
  const submit = async (e) => {
    e.preventDefault();
 await dispatch(signInUser(userMail,password))
  console.log(userLogin)
  const userJwt= userLogin.body.token
  console.log(userJwt)
const jwt = localStorage.setItem('token', userJwt)
    console.log(jwt)
  const accessJwt = localStorage.getItem('token')
  dispatch(accessProfilePage(accessJwt))  
    
  };

  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <PersonCircle />
        <h1>Sign In</h1>
        <form onSubmit={submit}>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input onChange={(e)=>{setUserMail(e.target.value)}} type="text" id="username" />
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
