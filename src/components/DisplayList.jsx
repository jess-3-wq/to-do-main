import React, { useEffect, useState } from 'react';
import Delete from './Delete';

function DisplayList({ todos, setTodo }) {
  const [loading, setLoading] = useState(true);


  const handleDelete = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  
  function handleChange(id) {
    setTodo((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  useEffect(() => {
    fetch('https://my-data-kappa.vercel.app/todos')
      .then((resp) => resp.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ......</p>;

  const list = todos.map((todo) => (
    <div className="list" key={todo.id}>
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed} // Check box state based on completed
        onChange={() => handleChange(todo.id)} // Trigger handleChange on checkbox click
      />
      <li className={todo.completed ? 'strike' : ''}>{todo.title}</li>
      <Delete onDelete={handleDelete} id={todo.id} />
    </div>
  ));

  return <ol>{list}</ol>;
}

export default DisplayList;
