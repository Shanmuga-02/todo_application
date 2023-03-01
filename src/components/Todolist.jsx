import React from "react";


const Todolist=({todos,setTodos,setEditTodo})=>{

    const handleDelete=({id})=>{
        setTodos(todos.filter((value)=>value.id!==id));
    }
    const handleComplete=(value)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===value.id){
                    return{...item,completed:!item.completed}
                }
                return item;
            }) 
        )
    }

    const handleEdit=({id})=>{
        const findTodo=todos.find((value)=>value.id===id);
        setEditTodo(findTodo);
    }
    return(
        <div>
            {todos.map((value)=>(
                <li className="list-item" key={value.id}>
                    <input 
                    type="text"
                    value={value.title}
                    className={'list ${todo.completed}?"complete":""'}
                    onChange={(e)=>e.preventDefault()}
                />
                <div>
                    <button className="button-complete task-button" onClick={()=>handleComplete(value)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-edit task-button" onClick={()=>handleEdit(value)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="button-delete task-button" onClick={()=> handleDelete(value)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>

                </li>
            ))}

        </div>
    )
};

export default Todolist;