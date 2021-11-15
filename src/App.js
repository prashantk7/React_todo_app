import "./App.css";

function App() {
  return (
    <div className="box">
      <h1>Todo App</h1>
      <div className="todo-app">
        <input type="text" placeholder="input your Task"></input>
        <button>Add Task</button>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
