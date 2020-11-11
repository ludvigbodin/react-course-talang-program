import { Actions } from "./constants";

export const addTodo = todo => {
  return {
    type: Actions.ADD_TODO,
    data: todo
  };
};

export const removeAllTodos = () => {
  return {
    type: Actions.REMOVE_ALL_TODOS
  };
};

export const fetchTodosFromAPI = () => {
  return async dispatch => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    dispatch({
      type: Actions.ADD_TODOS,
      data: result
    });
  };
};
