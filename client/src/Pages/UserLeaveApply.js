import React, { useState } from 'react'
import  ReactDOM  from 'react-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useDispatch} from 'react-redux'
import { applyLeaveByEmployee } from '../Store/LeaveSlicer';
import '../Css/userLeave.css'


const UserLeaveApply = ({show,applyUser,closeModel}) => {
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
const {leaveType,employeeId,employeeName}=applyUser ?? {}
    const dispatch=useDispatch()

    const leavePeriod={startDate,endDate,leaveType,employeeId,employeeName}
    console.log("Hello",leavePeriod);

    const applyLeave=(e)=>{
    e.preventDefault()
    dispatch(applyLeaveByEmployee(leavePeriod))
    }


    if(!show) return null;
  return ReactDOM.createPortal (
    <div className='applyDiv'>
        <div>UserLeaveApply</div>
       <Form onSubmit={applyLeave}>
       <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" name="startDate" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDOJ">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" name="endDate" value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}  />
        </Form.Group>
      </Row>
     <div className='applyLeave-button'>
     <Button variant='success' type='submit'  >Apply</Button>
      <Button onClick={closeModel} >Close</Button>
     </div>
       </Form>
    </div>,
    document.getElementById("model")
  )
}

export default UserLeaveApply