import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_user": {
      const userFound = state.users.some(
        (user) => user.email === action.payload.email
      );
      if (userFound) return { ...state, errorMessage: null };
      else
        return { users: [...state.users, action.payload], errorMessage: null };
    }
    case "get_allUser":
      return { users: action.payload, errorMessage: null };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
const saveUser = (dispatch) => {
  return async (userInfo) => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      dispatch({ type: "add_error", payload: "Github user not found !!" });
      return { error: "User Not Found !" };
    }
    const resData = await response.json();
    const user = {
      ...resData.data,
      ...userInfo,
    };
    dispatch({ type: "add_user", payload: user });
    return resData;
  };
};

const getAllUser = (dispatch) => {
  return async () => {
    const response = await fetch("/api/users", {
      method: "GET",
    });
    if (!response.ok)
      dispatch({
        type: "add_error",
        payload: "Getting Error While getting All User Info !!",
      });
    const resData = await response.json();
    dispatch({ type: "get_allUser", payload: resData.data });
    return resData;
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { saveUser, getAllUser },
  {
    users: [],
    errorMessage: "",
  }
);
