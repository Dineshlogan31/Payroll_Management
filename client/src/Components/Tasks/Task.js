import React ,{useEffect, useState}from 'react'
import './task.css'
import { useSelector,useDispatch } from "react-redux"
import { getAllEmployee } from '../../Store/EmployeeSlicer'
import { addTask, getAllTasks } from '../../Store/TaskSlicer'
import { Table } from 'react-bootstrap'


const Task = () => {
const [task,setTask]=useState('')
const [employee,setEmployee]=useState([])
// const [employeeDept,setEmployeeDept]=useState('')


  const dispatch=useDispatch()
  const employees=useSelector((state)=>state.employee)
  const tasks=useSelector((state)=>state.task)
  const addTasksSync=(e)=>{
    e.preventDefault()
    const user=JSON.parse(localStorage.getItem("user"))
    const assignedBy=user.firstName
    // console.log("employee",employee);
    dispatch(
      addTask({task,assignedBy,employee})
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
        
        <div className='task-container'>
        <h3>No Of Employees:{employees.length}</h3>
          <form className='task-form' onSubmit={(e)=>addTasksSync(e)}>
            <div className='task-input'>
              <label>Task</label>
              <input type='text' name='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
            </div>
            <div className='task-department'>
              <select >
                <option value="" >
                  Select Employee
                </option>
                {/* {employees && 
                 employees.map((employee)=>{
                  return <option value={{employee}} key={employee.employeeId}>{employee.firstName}</option>
                 })
                } */}
              </select>
            </div>
            <div className='task-option'>
              <select onChange={(e)=>setEmployee(e.target.value)}>
                <option value="" >
                  Select Employee
                </option>
                {employees && 
                 employees.map((employee)=>{
                  return <option value={JSON.stringify(employee)} key={employee.employeeId}>{employee.firstName}</option>
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


          <Table responsive striped bordered hover size="sm">
          <thead>
        <tr className='table-row'>
              <th>S.No</th>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Task</th>
              <th>Assigned By</th>
              <th>status</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(tasks) && tasks.map((task,index)=>{
            return (
            <tr key={index}>
              <td>{index+1}</td>
            <td>{task.employeeId}</td>
            <td>{task.employeeName}</td>
            <td>{task.task}</td>
            <td>{task.assignedBy}</td>
            <td>{task.status}</td>
            
           
            </tr>)
          })}
        </tbody>
          </Table>
          <table style={{border:"1px solid black"}}>
            {/* <tr>
              <th>S.No</th>
              <th>Employee Id</th>
              <th>Task</th>
              <th>Assigned By</th>
              <th>status</th>

            </tr> */}
           
            {/* {tasks && tasks.map((task,index)=>{
            return (
            <tr key={index}>
              <td>{index+1}</td>
            <td>{task.employeeId}</td>
            <td>{task.task}</td>
            <td>{task.assignedBy}</td>
            <td>{task.status}</td>
            </tr>)
          })} */}
          </table>
          
        </div>
       </div>
       
   
  )
}

export default Task