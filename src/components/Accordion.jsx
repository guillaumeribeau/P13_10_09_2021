import React, { useState } from "react";
import { PencilFill } from "react-bootstrap-icons";
import chevronBas from "../assets/images/chevron_bas.svg";
import chevronHaut from "../assets/images/chevron_haut.svg";

const Accordion = ({ title, text }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? (
        <>
          <div className="accordion-container accordion-container-toggle">
            <img
              onClick={() => setToggle(false)}
              src={chevronHaut}
              alt="chevronHaut"
            />

            <span>June 20th, 2020</span>
            <span>Golden Sun Bakery</span>
            <span>$30.00</span>
            <span>$2082.79</span>
          </div>

          <div className="edit_dropdown">
            <span>Transaction Type: Electronic</span>
            <div className="edit">
              <span>Category: Food </span>
              <PencilFill />
            </div>
            <div className="edit">
              <span>Notes:</span>
              <PencilFill />
            </div>
          </div>
        </>
      ) : (
        <div className="accordion-container">
          <img
            onClick={() => setToggle(true)}
            src={chevronBas}
            alt="chevronBas"
          />

          <span>June 20th, 2020</span>
          <span>Golden Sun Bakery</span>
          <span>$30.00</span>
          <span>$2082.79</span>
        </div>
      )}
    </>
  );
};

export default Accordion;
