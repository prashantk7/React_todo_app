import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchBar, setsearchBar] = useState(true);


  let todoArray;
  if (localStorage.getItem("todolist") === null) {
    todoArray = [];
  }
  else {
    todoArray = JSON.parse(localStorage.getItem("todolist"))
  }

  const [todolist, setTodos] = useState(todoArray);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));

  }, [todolist])

  function onDelete(todo) {
    setTodos(
      todolist.filter((e) => {
        return e !== todo;
      })
    );

  }

  function addTodo(todoValue, desValue) {
    let newTodo = {
      todo: todoValue,
      des: desValue
    }
    setTodos([...todolist, newTodo])

  }

  return (
    <div className="app">
      <Header title="Todo App" searchBar={searchBar} setsearchBar={setsearchBar} />
      <Main onDelete={onDelete} todolist={todolist} addTodo={addTodo} />
      <Footer />
    </div>
  );
}

export default App;