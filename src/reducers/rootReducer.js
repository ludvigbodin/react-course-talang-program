import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userInformationReducer } from "./userInformationReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  userInformation: userInformationReducer
});
