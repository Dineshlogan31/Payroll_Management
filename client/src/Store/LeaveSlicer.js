import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getUserLeave=createAsyncThunk(
    "leave/getAllLeave",
    async (payload)=>{
        try {
           const response= await axios.get(`https://payroll-management.onrender.com/getUserLeave/${payload.employeeId}`)
           return response.data
        } catch (error) {
            if(error)
            {
                return error.message
            }
        }
    }
)
export const applyLeaveByEmployee=createAsyncThunk(
    "leave/applyLeave",
    async (payload)=>{
        try {
            const response=await axios.post("https://payroll-management.onrender.com/applyLeave",payload)
            console.log(response.data);
            return response.data
        } catch (error) {
            if(error)
            {
                return error
            }
        }
    }
)
export const getAllLeaveAppliedByEmployee=createAsyncThunk(
    "leave/getAllLeaveAppliedByEmployee",
    async ()=>{
        try {
            const response=await axios.get("https://payroll-management.onrender.com/getAllLeaveAppliedByEmployee")
            return response.data
        } catch (error) {
            if(error)
            {
                return error
            }
        }
    }
)



const leaveSlicer=createSlice({
    name:"leaves",
    initialState:[],
     reducers:{
      

     },
     extraReducers:{
       [getUserLeave.fulfilled]:(state,action)=>{
        return action.payload
       },
       [applyLeaveByEmployee.fulfilled]:(state,action)=>{
       return state
       },
       [getAllLeaveAppliedByEmployee.fulfilled]:(state,action)=>{
        return action.payload
       }
        }
     
})


export default leaveSlicer.reducer