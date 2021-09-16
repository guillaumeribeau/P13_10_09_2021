import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../actions/editName.action";

const Welcome = () => {
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const displayUserInfos = useSelector((state) => state.signInReducer);
  const dispatch = useDispatch();

  const editUserNameWithForms = () => {
    const dataUser={
      firstName: firstName,
      lastName:lastName,
    }
    
    const accessJwt = localStorage.getItem("token");
    dispatch(editUserName(accessJwt,dataUser));
    setEditName(false);
  };

  return (
    <>
      {editName ? (
        <>
          <h1 className="welcome_name">Welcome Back</h1>
          <div className="container_input_name">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="input_name "
              type="text"
              placeholder={displayUserInfos.body.firstName}
            ></input>
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="input_name "
              type="text"
              placeholder={displayUserInfos.body.lastName}
            ></input>
          </div>
          <div className="container_button_name">
            <button
              className="submit_edit_button"
              onClick={editUserNameWithForms}
            >
              Save
            </button>
            <button className="submit_edit_button">Cancel</button>
          </div>

          <form></form>
        </>
      ) : (
        <div class="header">
          <h1>
            Welcome back
            <br />
            {`${displayUserInfos.body.lastName} ${displayUserInfos.body.firstName}`}
          </h1>
          <button class="edit-button" onClick={() => setEditName(!editName)}>
            Edit Name
          </button>
        </div>
      )}
    </>
  );
};

export default Welcome;
