import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const [editName, setEditName] = useState(false);
  const displayUserInfos= useSelector((state) => state.signInReducer);
  const dispatch = useDispatch()
  console.log(displayUserInfos)
  return (
    <>
      {editName ? (
        <>
        <h1 className='welcome_name'>Welcome Back</h1>
        <div className='container_input_name'>
        <input className='input_name ' type='text' placeholder='tony'></input>
        <input className='input_name ' type='text' placeholder='jarvis'></input>
        </div>
        <div className='container_button_name'>
        <button className='submit_edit_button'>Save</button>
        <button className='submit_edit_button'>Cancel</button>
        </div>
        
       <form>
       


       </form>
       </>
      ) : (
        <div class="header">
          <h1>
            Welcome back
            <br />
            {displayUserInfos.body.name}
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
