import React,{useEffect} from "react";

import {v4 as uuidV4} from "uuid";
const Inputform = ({ input, setInput, todos, setTodos,editTodo,setEditTodo}) => {
    const onInputChange=(e)=>{
        setInput(e.target.value);
        
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput("")
        }
    },[setInput,editTodo]);
    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((value)=>
            value.id===id?{title,id,completed}:value
        )
        setTodos(newTodo);
        setEditTodo("");
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        // console.log(input);
        if(!editTodo){
            setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
            setInput(" ");

        }
        else{
            updateTodo(input,editTodo.id,editTodo.completed);
        }
        
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
              type="text" 
              placeholder="Enter yout task" 
              className="task-input" 
              input={input} required
              onChange={onInputChange}/>
            <button  type="submit" className="glow-on-hover">
                {editTodo?"OK":"ADD"}
            </button>

        </form>
    )
}


export default Inputform;