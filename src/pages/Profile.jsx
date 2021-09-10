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
        <Account />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
