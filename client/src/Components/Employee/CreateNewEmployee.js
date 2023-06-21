import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  ReactDOM  from 'react-dom';
import "./NewEmployee.css"
import { useDispatch } from 'react-redux';
import { createEmployee, editEmployeeAsync } from '../../Store/EmployeeSlicer';



const CreateNewEmployee = ({show,editEmployee,clodeModel}) => {

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [password,setPassword]=useState('')
  const [aadhar,setAadhar]=useState('')
  const [dateOfBirth,setDOB]=useState('')
  const [dateOfJoining,setDOJ]=useState('')
  const [address,setAddress]=useState('')
  const [city,setCity]=useState('')
  const [state,setState]=useState('')
  const [zipcode,setZipcode]=useState('')

  const dispatch=useDispatch()
  

  const employee={firstName,lastName,email,mobile,password,aadhar,dateOfBirth,dateOfJoining,address,city,state,zipcode}
  

  const submitEmployee=(e)=>{
     e.preventDefault();
     dispatch(
      createEmployee(employee)
     )
     clodeModel()
  } 

  const handleEdit=(e,id)=>{
    e.preventDefault()
    dispatch(
      editEmployeeAsync({id,employee})
    )
    clodeModel()
  }
  
  useEffect(()=>{
   if(editEmployee)
   {
    setFirstName(editEmployee.firstName)
   setLastName(editEmployee.lastName)
   setEmail(editEmployee.email)
   setMobile(editEmployee.mobile)
   setAadhar(editEmployee.aadhar)
   setPassword(editEmployee.password)
   setAddress(editEmployee.address)
   setCity(editEmployee.city)
   setState(editEmployee.state)
   setZipcode(editEmployee.zipcode)
   setDOB(editEmployee.dateOfBirth.slice(0,10))
   setDOJ(editEmployee.dateOfJoining.slice(0,10))
   }
   
  },[editEmployee])

    if(!show) return null;
  return ReactDOM.createPortal (
    <div className='newEmployee'>
        
         <Form onSubmit={submitEmployee}>
         <h3 style={{textAlign:"center",backgroundColor:"gray"}}>Add Employee </h3>
         <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="Enter FirstName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Enter LastName" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter Mobile Number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAadhar">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control type="text" name="aadhar" value={aadhar} onChange={(e)=>{setAadhar(e.target.value)}} placeholder="Enter Aadhar Number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dateOfBirth" value={dateOfBirth} onChange={(e)=>{setDOB(e.target.value)}} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDOJ">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control type="date" name="dateOfjoining" value={dateOfJoining} onChange={(e)=>{setDOJ(e.target.value)}} placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="1234 Main St" />
      </Form.Group>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control name="state" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zipcode" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} />
        </Form.Group>
      </Row>

    

      <Button className='Submit-button' onClick={(e)=>{handleEdit(e,editEmployee._id)}} variant="primary" type="submit">
        {editEmployee?"Update":"Submit"}
      </Button>
      <Button className='cancel-button' variant="danger" type="submit" onClick={clodeModel}>
        Close
      </Button>
    </Form>
    </div>,
    document.getElementById("model")
  )
}

export default CreateNewEmployee