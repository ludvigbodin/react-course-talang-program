import { Actions } from "../actions/constants";

const initialState = { name: "", lastname: "" };

export const userInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_INFORMATION:
      return action.data;
    default:
      return state;
  }
};
