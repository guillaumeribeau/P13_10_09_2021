import React from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { accessProfilePage, signInUser } from "../actions/signIn.action";
import { useForm } from "react-hook-form";

const SignInForms = () => {
  const userLogin = useSelector((state) => state.signInReducer);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    console.log(data);
    await dispatch(signInUser(data.username, data.password));
    dispatch(accessProfilePage());
  };

  return (
    <>
      {userLogin.status === 200 && <Redirect to="/profile" />}
      <main class="main bg-dark">
        <section class="sign-in-content">
          <PersonCircle />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(submit)}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                {...register("username", { required: true })}
                id="username"
                name="username"
              />
              {errors.username?.type === "required" && "Username is required"}
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                className="form-control is-invalid"
                {...register("password", { required: true })}
                id="password"
                type="password"
                name="password"
              />
              {errors.password?.type === "required" && "Password is required"}
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button">Sign In</button>
            {userLogin.name === "Error" && (
              <span>Votre identifiant et/ou mot de passe est incorrect</span>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default SignInForms;
