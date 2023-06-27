import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"
import CreateNewEmployee from './CreateNewEmployee'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllEmployee,deletEmployee } from '../../Store/EmployeeSlicer'
import SideBar from '../SideBar'


const Employee = () => {
  const employees=useSelector((state)=>state.employee)
  const dispatch=useDispatch()
  const [show,setShow]=useState(false)
  const [employeeEdit,setEditEmployee]=useState()

  const removeEmployee=(e,employee)=>{
    dispatch(
      deletEmployee(employee)
    )
  }

  const editEmployee=(e,employee)=>{
    e.preventDefault()
    setShow(true)
    setEditEmployee(employee)
  }


  useEffect(()=>{
     dispatch(
       getAllEmployee()
     )
  },[dispatch])
  return (
    <>
    <SideBar/>
    <div style={{position:"relative",marginLeft:"15%"}} >
     <Button onClick={()=>setShow(true)}>Create New Employee</Button><br/>
     <CreateNewEmployee show={show} editEmployee={employeeEdit} clodeModel={()=>setShow(!show)}/>
       <Table responsive striped bordered hover size="sm" style={{marginTop:"20px",marginLeft:"5px",padding:"10px"}}>
      <thead >
        <tr>
            <th>S.no</th>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Role</th>
            <th> Address</th>
            <th>City</th>
            <th> State</th>
            <th>Edit/Delete</th>
            
        </tr>
      </thead>
      <tbody>
        {Array.isArray(employees) && employees.map((employee,index)=>{
          return(
            <tr key={index}>
            <td >{index+1}</td>
            <td>{employee.employeeId}</td>
            <td>{employee.firstName} {employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.mobile}</td>
            <td>{employee.role}</td>
            <td>{employee.address}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>
            <Button  variant="warning" onClick={(e)=>{editEmployee(e,employee)}} type="submit">
        Edit
      </Button>
      <Button onClick={(e)=>{removeEmployee(e,employee)}} variant="danger" type="submit">
        Delete
      </Button>
            </td>
        </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Employee