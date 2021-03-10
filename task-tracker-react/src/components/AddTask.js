import React from 'react'
import {useState } from 'react'

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)


// function for onSubmit and also check validation to prevent adding empty Task
const onSubmit = (e) =>{
// prevent the default
e.preventDefault()
if(!text){
    alert('Task area is required!')
    return
}
if(!date){
    alert('Date area is required!')
    return

}

onAddTask ({text, date , reminder});
setText('')
setDate('')
setReminder(false)
}
    return (
        <form className="form-add" onSubmit={onSubmit}>
<div className="form-control">
    <label id="task">Task</label>
    <input  type="text" placeholder="Add Task" value={text}
    onChange={(e)=> setText(e.target.value)}/>
</div>
<div className="form-control">
    <label id="date">Date</label>
    <input  type="text" placeholder="Add Date and Time"
    value={date}
    onChange={(e)=> setDate(e.target.value)}/>
</div>
<div className="form-control form-control-check">
    <label id="reminder" >Reminder</label>
    <input checked={reminder} type="checkbox" className="form-control form-control-check"
    value={reminder}
    onChange={(e)=> setReminder(e.currentTarget.checked)}/>
</div>
<input type="submit" value="Add Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
