import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useTodo from '../context/TodoContext';


function TodoForm() {
let [todoMsg,setTodomsg]=useState("")

let {addTodo}=useTodo()
let add=(e)=>{
        e.preventDefault()
        if(!todoMsg) return
            let todo={
                id:uuidv4(),
                msg:todoMsg,
                completed:false
            }
            addTodo(todo)
            setTodomsg("")

    
}

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e)=>setTodomsg(e.target.value)}
            />
            <button type="button" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={add}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

