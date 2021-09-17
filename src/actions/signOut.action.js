

export const SIGNOUT_USER = "SIGNIN_USER";


export const signOutUser = () => {
  return (dispatch) => {
     localStorage.removeItem('token')
        dispatch({ type: SIGNOUT_USER});
     
      }
      
  
    }
