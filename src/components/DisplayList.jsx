import React, { useEffect, useState } from 'react'
import Delete from './Delete';

function DisplayList({todos,setTodo}) {
    
    const [loading,setLoading]=useState(true)
     const handleDelete=(id)=>{
              setTodo(todos.filter((todo)=>todo.id !== id))
     }


     function handleChange(id){
      setTodo((previousTodos)=>previousTodos.map((todo)=>todo.id===id?{...todos, completed: !todo.completed}: todos))
     }


    useEffect(()=>{
    fetch("https://my-data-kappa.vercel.app/todos")
    .then(resp=>resp.json())
    .then(data=>{setTodo(data);
                setLoading(false)})},[])
    
    if(loading) return <p>Loading ......</p>


    console.log(todos)
  
    const list=todos.map((todo)=>(
      <div className='list' key={todo.id}>
      
       <input type="checkbox" className='checkbox'  onChange={()=> handleChange(todo.id)} />
    
      <li className={todo.completed ? 'strike':''}>{todo.title}</li>
    
     <Delete onDelete={handleDelete}id={todo.id}/>
     </div>)
     )
        return (
    <ol>
       {list}
    </ol>
  )
}

export default DisplayList