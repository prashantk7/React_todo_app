import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [todolist, setTodos] = useState([
    {
      sNO: "1",
      todo: "task 1",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    {
      sNO: "2",
      todo: "task 2",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    {
      sNO: "3",
      todo: "task 3",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    {
      sNO: "4",
      todo: "task 4",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    {
      sNO: "5",
      todo: "task 5",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    ,
    {
      sNO: "6",
      todo: "task 6",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    ,
    {
      sNO: "7",
      todo: "task 7",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
    ,
    {
      sNO: "8",
      todo: "task 8",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat corporis animi, voluptatibus.",
    },
  ]);

  const onDelete = (todo) => {
    setTodos(
      todolist.filter((e) => {
        return e !== todo;
      })
    );
  };

  return (
    <div className="app">
      <Header title="Todo App" searchBar={true} />
      <Main onDelete={onDelete} todolist={todolist} />
      <Footer />
    </div>
  );
}

export default App;
