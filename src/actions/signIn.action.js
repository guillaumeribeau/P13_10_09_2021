import axios from 'axios'


export const SIGNIN_USER = "SIGNIN_USER";




export const signInUser = () => {
    return (dispatch) => {
      return axios
        .post(`http://localhost:3001/api/v1/user/signup`)
        .then((res) => {
          
          dispatch({ type: SIGNIN_USER, payload: res.data.data });
          console.log(res.data.data)
        })
        .catch((err) => console.log(err));
    };
  };