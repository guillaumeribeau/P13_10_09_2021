import React from "react";
import Accordion from "../components/Accordion";
import AccountTitle from "../components/AccountTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AvailableBalance from "../components/AvailableBalance";

const Transactions = () => {
  return (
    <div className="transactions_page">
      <Header />
      <AvailableBalance />
      <div className="accordion_container">
        <AccountTitle />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
      <Footer />
    </div>
  );
};

export default Transactions;
