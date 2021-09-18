import axios from "axios";

export const SIGNIN_USER = "SIGNIN_USER";
export const ACCES_PROFIL = "ACCES_PROFIL";
export const SIGNIN_ERROR = "SIGNIN_ERROR";



export const signInUser = (userMail, password) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:3001/api/v1/user/login`,
      data: {
        email: userMail,
        password: password,
      },
    })
      .then((response) => {
        dispatch({ type: SIGNIN_USER, payload: response.data.body.token });
        localStorage.setItem("token", response.data.body.token);
      })
      .catch((error) => {console.log(error)
        dispatch({type : SIGNIN_ERROR , payload: error })
      });
      
  };
};



export const accessProfilePage = () => {
  return (dispatch) => {
    const accessJwt = localStorage.getItem("token");

    return axios({
      method: "post",
      url: `http://localhost:3001/api/v1/user/profile`,
      headers: {
        Authorization: `Bearer ${accessJwt}`,
      },
    })
      .then((response) => {
        dispatch({ type: ACCES_PROFIL, payload: response.data });
      })
      .catch((err) => console.log(err));
  };
};
