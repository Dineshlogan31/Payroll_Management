import React, { useEffect,useState } from 'react'
import '../Css/userLeave.css'
import {useSelector,useDispatch} from "react-redux"
import { getUserLeave } from '../Store/LeaveSlicer'
import UserLeaveApply from './UserLeaveApply'

const UserLeave = () => {
const [show,setShow]=useState(false)
const [applyUser,setApplyUser]=useState()

  const user=useSelector((state)=>state.leave)
  const dispatch=useDispatch()
  

  const applyLeave=(e,leaveType,employeeId,employeeName)=>{
    e.preventDefault();
    const applyUser={leaveType,employeeId,employeeName}
    setApplyUser(applyUser)
    console.log(applyUser);
    setShow(true)
    
  }
 
  
  useEffect(()=>{
    const LoggedPerson=JSON.parse(localStorage.getItem("user"))
     dispatch(getUserLeave(LoggedPerson))
  },[dispatch])

  return (
    <>
   <UserLeaveApply show={show}  applyUser={applyUser} closeModel={()=>{setShow(false)}}/>
    <div className='container'>
    <h1 style={{textAlign:"center"}}>UserLeave</h1>
   
    
    <div className='leave-container'>
       {user.map((employee) => (
        <div className='leave-container' key={employee.employeeId}>
          {Object.entries(employee.leave).map(([leaveType, value]) => (
            <div className='leave-card' key={leaveType} onClick={(e)=>{applyLeave(e,leaveType,employee.employeeId,employee.firstName)}}>
             <h4>{leaveType}</h4>
             <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    
    </div>
    </div>
    </>
  )
}


export default UserLeave