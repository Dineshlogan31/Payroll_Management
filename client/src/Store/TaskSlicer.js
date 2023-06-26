import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

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

const taskSlicer=createSlice({
    name:"tasks",
    initialState:[],
     reducers:{

     },
     extraReducers:{
       [addTask.fulfilled]:(state,action)=>{
        state.push(action.payload)
       },
       [getAllTasks.fulfilled]:(state,action)=>{
        console.log(action.payload);
        return action.payload
       }
     }
})

export default taskSlicer.reducer