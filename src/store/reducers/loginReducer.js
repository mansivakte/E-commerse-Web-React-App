import { LOGIN_USER } from "../constant";

const initial_state = { name: "", tocken: "" };

const loginReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const newState = { ...state };
      newState.name = action.name;
      newState.tocken = action.tocken;
      return newState;
    }
    default:
      return state;
  }
};

export default loginReducer;
