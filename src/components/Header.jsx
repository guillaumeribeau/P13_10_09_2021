import React, { useEffect } from "react";
import logo from "../assets/images/argentBankLogo.png";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  PersonCircle,
  BoxArrowRight,
  PersonBadge,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { accessProfilePage, signInUser } from "../actions/signIn.action";
import { signOutUser } from "../actions/signOut.action";

const Header = () => {
  const userLogin = useSelector((state) => state.signInReducer);
  const dispatch = useDispatch();

  let history = useHistory();

  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(signOutUser());

    history.push({
      pathname: "/",
    });
  };

  return (
    <>
      <nav class="main-nav">
        <Link to="/">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

          <h1 class="sr-only">Argent Bank</h1>
        </Link>

        {userLogin.status === 200 ? (
          <div className="sign-container">
            <div className="icon-container">
              <PersonBadge className="person-badge" />
              <span className="user-first-name">
                {userLogin.body.firstName}
              </span>
            </div>

            <Link to="/" class="main-nav-item">
              <div onClick={signOut} className="icon-container">
                <BoxArrowRight className="signOut" />
                <span>Sign out</span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="sign-container">
            <Link to="/signIn" class="main-nav-item">
              <div classsName="icon-container">
                <PersonCircle className="icon-person" />
                <span>Sign in</span>
              </div>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
