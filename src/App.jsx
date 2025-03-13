import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
let [todos,setTodos]=useState([])
let addTodo=(todo)=>{
  setTodos((prevTodos)=>[...prevTodos,todo])
}

let updateTodo=(id,todo)=>{
  setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo==id?todo:prevTodo))
}

let deleteTodo=(id)=>{
  setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>prevTodo.id!==id))
}

let doneTodo=(id)=>{
  setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
}

useEffect(()=>{
let todos=JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length>0){
  setTodos(todos)
}
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
   
    // bg-[#172842]
   <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,doneTodo}}>
   <div className="bg-[#1E1B4B] min-h-screen py-8" >
                <div className=" w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo - List</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoContextProvider>
   
  )
}

export default App
