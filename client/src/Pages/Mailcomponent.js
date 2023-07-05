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
  return (
    <div className='mail-container'>
    <h1 style={{textAlign:"center"}}>MailBox</h1><br></br>
    <table>
      <tbody>
    {
      leaveAlliedByEmployee.map((leaves,index)=>{
        return (
          <tr key={index}>
            <td >{leaves.employeeName} applied {leaves.leaveType} for 2 days from {leaves.startDate.reverse} to {leaves.endDate} <Button variant='success'>Approved</Button> <Button>Reject</Button></td>
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