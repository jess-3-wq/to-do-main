import React, { useEffect } from 'react'

function Delete({onDelete,id}) {
   
function handleDelete(){
    fetch(`https://my-data-kappa.vercel.app/todos/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":'application/json',
            'Accept':"application/json"
        }
    })
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        onDelete(id)
    })
}

  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete