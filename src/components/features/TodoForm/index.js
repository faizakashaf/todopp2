import React from 'react'
import './style.css'

const TodoForm = () => {
  return (
    <>
    <h1>Todo Form</h1>
   <form>
    <div>
    <label>Title</label>
    <input type='text' name='title'/>
    </div>
    <div>
    <label>Email</label>
    <input type='email' name='email'/>
    </div>
   </form>
    </>
  )
}

export default TodoForm