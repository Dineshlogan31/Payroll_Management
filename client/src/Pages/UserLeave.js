import React, { useEffect } from 'react'
import '../Css/userLeave.css'
import {useSelector,useDispatch} from "react-redux"
import { getUserLeave } from '../Store/LeaveSlicer'

const UserLeave = () => {
  const user=useSelector((state)=>state.leave)
  const leave= user[0].leave
  let types=Object.keys(leave)
  console.log("hii",types);
  const dispatch=useDispatch()
  
 
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
     dispatch(getUserLeave(user))
  },[dispatch])

  return (
   
    <div className='container'>
    <h1 style={{textAlign:"center"}}>UserLeave</h1>
   
    
    <div className='leave-container'>
    {Array.isArray(types) && types.map((value,index)=>{
     return( <div key={index} className='leave-card'>
      <h5>{value}</h5>
      <span >{leave[value]}</span>
     </div>)
    })}
    </div>
    </div>
  )
}

export default UserLeave