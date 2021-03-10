import Header from './components/Header'
import Mytask from './components/Mytask'
import {useState} from 'react'
import AddTask from './components/AddTask'


const  App =()=> {
  const [showtoggle,setShowtoggle] = useState(true)
  const [tasks, setTaks]= useState([
    {
    id: 1,
    text: ' going to doctor',
    date: 'March 28th',
    reminder: true,

    }, 

  {
    id: 2,
    text: ' going to Mom',
    date: 'March 27th',
    reminder: false,

  },
  {
    id: 3,
    text: ' grocery shopping',
    date: 'March 1th',
    reminder: true,

  },
])


const AddTasks =(task)=>{
  const id = Math.floor(Math.random()* 1000)+1;
  const newTask = {id, ...task}
  setTaks([...tasks, newTask])


}
const reminder = (id)=>{
setTaks(tasks.map((task)=>task.id === id ?{...task,reminder: !task.reminder}:task))

}

const deleteTask =(id ) =>{
setTaks(tasks.filter((task)=> task.id !== id))
}
  return (
    <div className="container">
      <Header onAddShow = {()=> setShowtoggle(!showtoggle)} onShowText = {showtoggle}/>  
      {tasks.length > 0 ?<Mytask 
       onToggle={reminder} tasks={tasks} onDelete={deleteTask}/>: 'There is no Task!'}
 {showtoggle && <AddTask onAddTask={AddTasks} />}
  </div> 
  );
}

export default App;
