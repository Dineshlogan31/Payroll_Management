import React,{useEffect} from 'react'
import SideBar from './Components/SideBar'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'
import Employee from './Components/Employee/Employee'
import Mailcomponent from './Pages/Mailcomponent'
import Dashboard from './Pages/Dashboard'
import Document from './Pages/Document'
import Task from './Components/Tasks/Task'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSidebar from './Components/UserSidebar'
import { useSelector,useDispatch } from 'react-redux'
import { loggedIn } from './Store/LoggedUserSlicer'
import UserTasks from './Pages/UserTasks'
import UserProfile from './Pages/UserProfile'
import Usermailbox from './Pages/Usermailbox'
import UserDashboard from './Pages/UserDashboard'
import UserLeave from './Pages/UserLeave'


const App = () => {
  const dispatch=useDispatch()
 
  const loggedUser=useSelector((state)=>state.loggedUser)
const user=loggedUser[0]



useEffect(()=>{
  const user=JSON.parse(localStorage.getItem("user"))
  dispatch(loggedIn(user))

},[dispatch])
  
  return (
    <div className='app-container'>
        <BrowserRouter>
        {user && user.role==="admin"?<SideBar/>:null}
        {user && user.role==="user"?<UserSidebar/>:null}
        <ToastContainer/>
            <Routes>
              <Route path='/' element={!user?<Login/>:null}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={!user?<Signup/>:null}/>
              <Route path='/forgetPassword' element={!user?<ForgetPassword/>:null}/>
              <Route path='/task' element={<Task/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/mailbox' element={<Mailcomponent/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/document' element={<Document/>}/>
              <Route path='/UserTasks' element={<UserTasks/>}/>
              <Route path='/UserProfile' element={<UserProfile/>}/>
              <Route path='/UserMailbox' element={<Usermailbox/>}/>
              <Route path='/UserDashboard' element={<UserDashboard/>}/>
              <Route path='/LeaveManagement' element={<UserLeave/>}/>
            </Routes>
        </BrowserRouter>
        
      
        </div>
   
  )
}

export default App