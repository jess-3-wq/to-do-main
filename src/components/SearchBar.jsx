import React, { useState } from 'react';

function SearchBar({ setTodo }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    fetch('https://my-data-kappa.vercel.app/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ title: task }),
    })
      .then((resp) => resp.json())
      .then((newTodo) => {
        setTask('');
        setTodo((data)=>[...data,newTodo])
      
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ADD TASK"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default SearchBar;