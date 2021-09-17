import axios from "axios";

export const SIGNIN_USER = "SIGNIN_USER";
export const ACCES_PROFIL = "ACCES_PROFIL";

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
      .catch((err) => console.log(err));
  };
};



export const accessProfilePage = (token) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `http://localhost:3001/api/v1/user/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({ type: ACCES_PROFIL, payload: response.data });
      })
      .catch((err) => console.log(err));
  };
};
