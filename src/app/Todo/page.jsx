"use client"
import React, { useState, useEffect } from 'react'

const Todo = () => {
    const [todos,setTodos] = useState([])
    const [input,setInput] = useState("")

    const HandleTodos=()=>{
        setTodos([...todos,input])
        setInput("")
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Todos App</h1>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Enter a Todo" 
            className="flex-grow border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={e=> setInput(e.target.value)}
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={HandleTodos}
          >
            Add Todo
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Update Todo
          </button>
        </div>
        <ul>
            {todos.map((item,index)=>(
                <li>{item}
                <button>Delete</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
