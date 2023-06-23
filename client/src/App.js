import React, { useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
// import UserSidebar from './Components/UserSidebar'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'
import Employee from './Components/Employee/Employee'
import Mailcomponent from './Components/MailBox/Mailcomponent'
import Dashboard from './Components/Dashboard/Dashboard'
import Task from './Components/Tasks/Task'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'




const App = () => {
  const [log,setLog]=useState()
 const user=useSelector((state)=>state.user[0])
 console.log(user);

useEffect(()=>{
  const value=localStorage.getItem("user")
  setLog(value)
},[setLog,user])
  
  return (
   
    <div>
 {/* <div style={{position:"fixed"}}>
     <SideBar/>
     </div> */}
        <BrowserRouter> 
        <ToastContainer/>
            <Routes>
            <Route path='/' element={
            log?
            <SideBar/>:<Login/>}/>
            <Route path='/demo' element={<SideBar/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/forgetPassword' element={<ForgetPassword/>}/>
              <Route path='/tasks' element={<Task/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/mailbox' element={<Mailcomponent/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
            {window.location.pathname==="/logout"?localStorage.clear():null}
          {/* </div> */}
        </BrowserRouter>
        </div>
   
  )
}

export default App