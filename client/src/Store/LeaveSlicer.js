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



const leaveSlicer=createSlice({
    name:"leaves",
    initialState:[],
     reducers:{
      

     },
     extraReducers:{
       [getUserLeave.fulfilled]:(state,action)=>{
        return action.payload
       }
        }
     
})


export default leaveSlicer.reducer