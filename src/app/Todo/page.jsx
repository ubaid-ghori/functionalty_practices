"use client";
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const HandleTodos = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const updateTodo=(index)=>{
    const todo=todos[index]
    console.log(todo)
    setInput(todo)
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-700">
          Todos App
        </h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter a Todo"
            className="flex-grow border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="ml-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-400 hover:to-blue-500 transition duration-200 shadow-lg"
            onClick={HandleTodos}
          >
            Add Todo
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 rounded-lg p-2 shadow-sm"
            >
              <span className="text-gray-700">{item}</span>
              <button
                className="text-red-500 hover:text-red-700 transition duration-200 font-semibold"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
              <button
                className="text-red-500 hover:text-red-700 transition duration-200 font-semibold"
                onClick={() => updateTodo(index)}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
