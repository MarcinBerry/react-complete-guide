import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos";

function App() {
    const items = ["MyList", "Learn React"]
  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;
