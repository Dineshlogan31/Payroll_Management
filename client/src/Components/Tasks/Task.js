import React ,{useEffect, useState}from 'react'
import SideBar from '../SideBar'
import './task.css'
import { useSelector,useDispatch } from "react-redux"
import { getAllEmployee } from '../../Store/EmployeeSlicer'
import { addTask, getAllTasks } from '../../Store/TaskSlicer'


const Task = () => {
const [task,setTask]=useState('')
const [employeeId,setEmployeeId]=useState('')


  const dispatch=useDispatch()
  const employees=useSelector((state)=>state.employee)
  const tasks=useSelector((state)=>state.task)
console.log(tasks);
  const addTasksSync=(e)=>{
    e.preventDefault()
    const assignedBy=localStorage.getItem("name")
    dispatch(
      addTask({task,employeeId,assignedBy})
    )
  }

  useEffect(()=>{
    dispatch(
      getAllEmployee()
    )
    dispatch(getAllTasks())
 },[dispatch])
  return (
  
       <div className='main'>
        <div>
        <SideBar/>
        </div>
        
        <div className='task-container'>
        <h3>No Of Employees:{employees.length}</h3>
          <form className='task-form' onSubmit={(e)=>addTasksSync(e)}>
            <div className='task-input'>
              <label>Task</label>
              <input type='text' name='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
            </div>
            <div className='task-option'>
              <select onChange={(e)=>setEmployeeId(e.target.value)}>
                <option value="" >
                  Select Employee
                </option>
                {employees && 
                 employees.map((employee)=>{
                  return <option value={employee.employeeId} key={employee.employeeId}>{employee.firstName}</option>
                 })
                }
              </select>
            </div>
            <div className='task-button'>
              <button type='submit' >Assign</button>
            </div>
          </form>
        </div>
        <div className='task-table'>
          <table style={{border:"1px solid black"}}>
            <tr>
              <th>S.No</th>
              <th>Employee Id</th>
              <th>Task</th>
              <th>Assigned By</th>
              <th>status</th>

            </tr>
           
            {tasks && tasks.map((task,index)=>{
            return (
            <tr key={index}>
              <td>{index+1}</td>
            <td>{task.employeeId}</td>
            <td>{task.task}</td>
            <td>{task.assignedBy}</td>
            <td>{task.status}</td>
            </tr>)
          })}
          </table>
          
        </div>
       </div>
       
   
  )
}

export default Task