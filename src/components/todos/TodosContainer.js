import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodosFromAPI } from "../../actions/todoActions";

function TodosContainer() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const userInformation = useSelector(state => state.userInformation);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    dispatch(fetchTodosFromAPI());
  }

  function addTodoToRedux() {
    dispatch(addTodo(todo));
  }

  function removeAllTodos() {
    dispatch(removeAllTodos());
  }

  const userIsValid = userInformation.name && userInformation.lastname;

  return (
    <>
      <h2> Todos </h2>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={addTodoToRedux} disabled={!userIsValid}>
        Lägg till
      </button>
      <button onClick={removeAllTodos} disabled={!userIsValid}>
        Ta bort alla Todos
      </button>
      {todos.map(todo => (
        <h5>{todo.title}</h5>
      ))}
    </>
  );
}

export default TodosContainer;
