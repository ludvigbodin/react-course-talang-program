import { Actions } from "../actions/constants";

export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case Actions.ADD_TODOS:
      return {
        ...state,
        todos: action.data
      };
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.data]
      };
    case Actions.REMOVE_ALL_TODOS:
      return {
        ...state,
        todos: []
      };
    default:
      return state;
  }
};
