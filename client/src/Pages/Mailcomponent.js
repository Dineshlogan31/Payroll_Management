import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getAllLeaveAppliedByEmployee } from '../Store/LeaveSlicer'
import Button from 'react-bootstrap/esm/Button'


const Mailcomponent = () => {
  const leaveAlliedByEmployee=useSelector((state)=>state.leave)
  console.log(leaveAlliedByEmployee);
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllLeaveAppliedByEmployee())
  },[dispatch])

  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInTime = end.getTime() - start.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays;
  }
  return (
    <div className='mail-container'>
    <h1 style={{textAlign:"center"}}>MailBox</h1><br></br>
    <table>
      <tbody>
    {
      leaveAlliedByEmployee.map((leaves,index)=>{
     
        const reversedStartDate = new Date(leaves.startDate).toLocaleDateString();
        const reversedEndDate = new Date(leaves.endDate).toLocaleDateString();
        const daysBetween = calculateDays(leaves.startDate, leaves.endDate);
        return (
          
          <tr key={index}>
            <td >{leaves.employeeName} applied {leaves.leaveType} for {daysBetween} days from {reversedStartDate} to {reversedEndDate} <Button variant='success'>Approved</Button> <Button>Reject</Button></td>
          </tr>
        )
      })
    }
    </tbody>
    </table>

    </div>
  )
}

export default Mailcomponent