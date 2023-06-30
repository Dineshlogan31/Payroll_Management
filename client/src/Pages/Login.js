import React, { useState } from 'react'
import "../Css/login.css"
import axios from "axios"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../Store/LoggedUserSlicer'

 
 const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)
    const user={email,password}


    const navigate=useNavigate()
    const dispatch=useDispatch()

    const loginSubmit=(e)=>{
      e.preventDefault()
      let headers=new Headers()
      headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'https://payroll-management-3od1.vercel.app/');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');
      axios.post("https://payroll-management-rouge.vercel.app/login",user,{
        headers:headers
      })
      .then((response)=>{
      if(response.data.VerifyMessage)
      {
        toast.warning(response.data.VerifyMessage)
      }
       else{
       localStorage.setItem("user",JSON.stringify(response.data))
        const user=JSON.parse(localStorage.getItem("user"))
        dispatch(loggedIn(user))
        setEmail('')
        setPassword('')
        setError(null)
        navigate("/")
       }
      }).catch((error)=>{
        if(error)
        setError(error.response.data.error)
      })
    }

  return (
    <div className='Container'>
       <div className='login-card'>
        <form onSubmit={loginSubmit}>
         <div className='login-header'>
         <span>Login</span>
         </div>
         <div className='login-body'>
         <div className='login-email'>
        <label >Email</label>
        <input  type='text' name='email'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'></input>
       </div>
       <div className='login-password'>
        <span ><Link style={{color:"white"}} to="forgetPassword">forget password?</Link></span>
        <label >Password</label>
        <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your password'></input>
       </div>
       {error && <span className='error'>{error}*</span>}
         </div>
         <div className='login-footer'>
         <button type='submit'>Login</button>
         <span  ><Link to="/signup" style={{color:"white"}}>I'm new User?Create Account!</Link></span>
         </div>

        </form>
       </div>
    </div>
  )
}
export default Login
