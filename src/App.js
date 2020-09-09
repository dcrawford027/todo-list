import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [allToDos, setAllToDos] = useState([]);

  return (
    <div className="App container">
      {
        allToDos.map((todo, i) =>
          <List todo={todo} allToDos={allToDos} setAllToDos={setAllToDos} index={i}/>
        )
      }
      <Input allToDos={allToDos} setAllToDos={setAllToDos}/>
    </div>
  );
}

export default App;
