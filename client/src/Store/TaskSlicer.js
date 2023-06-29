import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { deletEmployee } from "./EmployeeSlicer"

export const addTask=createAsyncThunk(
    "task/addTask",
    async (payload)=>{
        try {
           const response= await axios.post("http://localhost:5000/addTask",payload)
           return response.data
        } catch (error) {
            if(error)
            {
                return error.message
            }
        }
    }
)

export const getAllTasks=createAsyncThunk(
    "task/getAllTasks",
    async ()=>{
        try {
           const response= await axios.get("http://localhost:5000/getAllTasks")
           return response.data
        } catch (error) {
            if(error)
            {
                return error.message
            }
        }
    }
)
export const updateStatusOfTask=createAsyncThunk(
    "task/updateStatusOfTask",
    async (payload)=>{
        try {
           const response= await axios.put("http://localhost:5000/updateStatusTask",payload)
           return response.data
        } catch (error) {
            if(error)
            {
                return error.message
            }
        }
    }
)
export const getUserTasks=createAsyncThunk(
    "task/getUserTasks",
    async (payload)=>{
        console.log("Slice Payload",payload);
        try {
           const response= await axios.get(`http://localhost:5000/getUserTasks/${payload.employeeId}`)
           return response.data
        } catch (error) {
            if(error)
            {
                return error.message
            }
        }
    }
)

const taskSlicer=createSlice({
    name:"tasks",
    initialState:[],
     reducers:{
        // getUserTasks:(state,action)=>{
        //     return state.filter((task)=>{
        //         return task.employeeId === action.payload.employeeId
        //     })

        // }

     },
     extraReducers:{
       [addTask.fulfilled]:(state,action)=>{
        state.push(action.payload)
       },
       [getAllTasks.fulfilled]:(state,action)=>{
        return action.payload
       },
       [deletEmployee.fulfilled]:(state,action)=>{
        return state.filter((task)=>{
            return task.employeeId !== action.payload.user.employeeId
        })
       },
       [getUserTasks.fulfilled]:(state,action)=>{
        return action.payload
       },
       [updateStatusOfTask.fulfilled]:(state,action)=>{
        const index=state.findIndex((task)=>{
            return task._id=== action.payload._id
        })
        state[index].status=action.payload.status
       }
     }
})


export default taskSlicer.reducer