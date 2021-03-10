import React from 'react'
import { FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':""}`} onDoubleClick={()=>onToggle(task.id)}>
           <h3> 
            {task.text}

           <FaTimes 
           onClick={() =>onDelete(task.id)}
            style={fattimesStyle}
             />
             </h3> 
           <p>{task.date}</p>
        </div>
    )
}

const fattimesStyle = {
    color: 'red',
    cursor: 'pointer'
}

export default Task
