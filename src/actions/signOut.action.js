export const SIGNOUT_USER = "SIGNOUT_USER";

export const signOutUser = () => {
  return (dispatch) => {
    dispatch({ type: SIGNOUT_USER });
  };
};
