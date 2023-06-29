import React, { useEffect } from 'react'
import {Button, Table} from "react-bootstrap"
import {useDispatch,useSelector} from "react-redux"
import { getUserTasks, updateStatusOfTask } from '../Store/TaskSlicer'


const UserTasks = () => {
  const dispatch=useDispatch()
  const tasks=useSelector((state)=>state.task)
 

  const updateTaskStatus=(e,task)=>{
    e.preventDefault();
   dispatch(updateStatusOfTask(task))
  }

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user);
    dispatch(getUserTasks(user))
  },[dispatch])
  return (
    <div style={{marginLeft:"16%"}}>
    <h1 style={{textAlign:"center"}}>UserTasks</h1>
    <Table responsive striped bordered hover size="sm">
          <thead>
        <tr className='table-row'>
              <th>S.No</th>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Task</th>
              <th>Assigned By</th>
              <th>status</th>
              <th>Completed</th>
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
            <td><Button disabled={task.status==="Completed"} onClick={(e)=>updateTaskStatus(e,task)}>Completed</Button></td>
            
           
            </tr>)
          })}
        </tbody>
          </Table>
    </div>
  )
}

export default UserTasks