import React, { useEffect } from 'react'
import '../Css/userLeave.css'
import {useSelector,useDispatch} from "react-redux"
import { getUserLeave } from '../Store/LeaveSlicer'

const UserLeave = () => {
  const user=useSelector((state)=>state.leave)
  const dispatch=useDispatch()
  
 
  
  useEffect(()=>{
    const LoggedPerson=JSON.parse(localStorage.getItem("user"))
     dispatch(getUserLeave(LoggedPerson))
  },[dispatch])

  return (
   
    <div className='container'>
    <h1 style={{textAlign:"center"}}>UserLeave</h1>
   
    
    <div className='leave-container'>
       {user.map((employee) => (
        <div className='leave-container' key={employee.employeeId}>
          {Object.entries(employee.leave).map(([key, value]) => (
            <div className='leave-card' key={key}>
             <h4>{key}</h4>
             <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    
    </div>
    </div>
  )
}


export default UserLeave