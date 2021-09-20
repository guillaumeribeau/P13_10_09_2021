import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Account = ({ title, amount, description, button }) => {
  return (
    <>
      <Link to="/transactions">
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">{title}</h3>
            <p class="account-amount">{amount}</p>
            <p class="account-amount-description">{description}</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">{button}</button>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Account;

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
};
