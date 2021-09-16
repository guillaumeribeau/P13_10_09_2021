import axios from "axios";

export const EDIT_NAME = "EDIT_NAME";

export const editUserName = (token, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3001/api/v1/user/profile`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({ type: EDIT_NAME, payload: response.data });
      })
      .catch((err) => console.log(err));
  };
};
