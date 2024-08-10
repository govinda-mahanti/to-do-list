import React from 'react'
import './TodoForm.css'
import { useState } from 'react'
import { addNewTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
const TodoForm = () => {

    const [text, setText]=useState();

    const dispatch=useDispatch()

    const handleSubmin =(e)=>{
        e.preventDefault();
        dispatch(addNewTodo());
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