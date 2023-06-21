import React from 'react'
import SideBar from './Components/SideBar'
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



const App = () => {
  
  return (
   
    <div>

    <div style={{position:"fixed"}}>
    <SideBar/>
    </div>
        <BrowserRouter> 
        <ToastContainer/>
          <div className='components'>
            <Routes>
              <Route path='/' element={<SideBar/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/forgetPassword' element={<ForgetPassword/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/mailbox' element={<Mailcomponent/>}/>
              <Route path='/tasks' element={<Task/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        </div>
   
  )
}

export default App