import React, {  useState } from 'react'
import style from "../Css/signup.module.css"
import { toast } from 'react-toastify'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const [department,setDepartment]=useState('')
    const [error,setError]=useState(null)
    const [agree,setAgree]=useState(true)

    const navigate=useNavigate()

   
   

    const user={name,email,mobile,password,role,department}

    const signupSubmit=async (e)=>{
           e.preventDefault()
       axios.post("https://payroll-management.onrender.com/signup",user)
       .then((response)=>{
                 toast(response.data.Msg)
                 setName('')
                 setEmail('')
                 setMobile('')
                 setPassword('')
                 setRole('')
                 setDepartment('')
                 setError(null)
                 navigate("/login")
       }).catch((err)=>{
        if(err)
        {
            console.log(err.response);
            setError(err.response.data.error)
        }
       })
    
    }
   
  return (
    <div className={style.Container}>
    <div className={style.login_card}>
        <form onSubmit={signupSubmit}>
       <div className={style.login_header}>
        <span>Signup</span>
       </div>
       <div className={style.login_body}>
       <div className={style.login_email}>
        <label >Full Name</label>
        <input autoComplete='off' type='text' value={name} name='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name'></input>
       </div>
       <div className={style.login_email}>
        <label >Email</label>
        <input type='text' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'></input>
       </div>
       <div className={style.login_email}>
       <label >Phone Number</label>
        <input type='number' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your Phone Number'></input>
       </div>
       <div className={style.login_email}>
       <label >Password</label>
        <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Phone Number'></input>
       </div>
       <div className={style.login_role}>
       <label >Role</label>
        <select name='role' value={role}  onChange={(e)=>setRole(e.target.value)} >
        <option value='' disabled >Choose Your Role</option>
            <option value="superAdmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
       </div>
       <div className={style.signup_department}>
       <label >Department</label>
        <select name='department'  value={department}  onChange={(e)=>setDepartment(e.target.value)}>
        <option value='' disabled >Choose Your Department</option>
            <option value="administration">Administration</option>
            <option value="humanResource">Human Resource</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="testing">Testing</option>
            <option value="marketing">Marketing</option>
        </select>
       </div>
       </div>
       <div className={style.login_footer}>
        {error && <span className={style.error}>{error}*</span>}
        
        <label htmlFor="agree"><input type='checkbox' name='agree' id="agree" onChange={(e)=>setAgree(!agree)}  value={agree}  ></input>
            I agree to the privacy policy and terms of use.
        </label>
        
        <button disabled={agree} type='submit'>Signup</button>
        <span  ><Link to="/login" style={{color:"white"}}>Already have an account?Login!</Link></span>
        
       </div>
       </form>
    </div>
</div>
  )
}

export default Signup