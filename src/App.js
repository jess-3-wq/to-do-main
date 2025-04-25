import './App.css';
import DisplayList from './components/DisplayList';
import DispalyList from './components/DisplayList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import React,{ useState } from 'react';

function App() {

const [todos,setTodo]=useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setTodo={setTodo}/>
      <DisplayList todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
