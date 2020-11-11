import "./App.css";
import TodosContainer from "./components/todos/TodosContainer";
import UserInformationContainer from "./components/user/UserInformationContainer";

function App() {
  return (
    <div className="App">
      <UserInformationContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
