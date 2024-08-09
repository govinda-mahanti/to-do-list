import React from 'react'
import './TodoForm.css'
import { useState } from 'react'
const TodoForm = () => {

    const [text, setText]=useState();

    const handleSubmin =()=>{
        console.log('Form submitted')
    }
    const onInputChange =(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
  return (
    <>
    <form className='form' onSubmit={handleSubmin}>
        <input 
            placeholder='Enter a new todo' 
            className='input'
            onChange={onInputChange}
        />
    </form>
    </>
  )
}

export default TodoForm