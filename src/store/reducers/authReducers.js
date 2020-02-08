const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        token: null,
        userId: null,
        error: null,
        loading: true,
        authRedirectPath: "/"
      };
    case "AUTH_SUCCESS":
      return {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        authRedirectPath: "/"
      };
    case "AUTH_FAIL":
      return {
        token: null,
        userId: null,
        error: action.error,
        loading: false,
        authRedirectPath: "/"
      };
    case "AUTH_LOGOUT":
      return {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: "/"
      };
    case "SET_AUTH_REDIRECT_PATH":
      return {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: action.path
      };
    default:
      return state;
  }
};

export default authReducer;
