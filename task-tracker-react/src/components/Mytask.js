import React from 'react'
import Task from './Task'





const Mytask = ({tasks,onDelete, onToggle}) => {
    
    return (
        <>
           {tasks.map((task)=>(
            <Task 
             key={task.id} onToggle={onToggle} task={task} onDelete= {onDelete} /> 
           ))} 
        </>
    )
}

export default Mytask
