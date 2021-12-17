import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/TodosContext";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
