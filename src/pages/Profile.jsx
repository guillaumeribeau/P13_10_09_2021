import React from "react";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

const Profile = () => {
  return (
    <div>
      <Header />
      <main class="main bg-dark">
        <Welcome />
        <Account title="Argent Bank Checking (x8349)" amount='$2,082.79' description='Available Balance' button='View transactions' />
        <Account title="Argent Bank Credit Card (x8349)" amount='$10,928.42' description='Available Balance' button='View transactions' />
        <Account title="Argent Bank Savings (x6712)" amount='$184.30' description='Available Balance' button='View transactions' />
      
      </main>
      <Footer />
    </div>
  );
};

export default Profile;



  