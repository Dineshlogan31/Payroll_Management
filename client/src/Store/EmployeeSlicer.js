import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios  from 'axios';

export const createEmployee=createAsyncThunk(
    "api/createEmployee",
   async (payload)=>{
         try {
            const response=await axios.post("http://localhost:5000/createEmployee",payload)
            return response.data
         } catch (error) {
            console.error(error);
         }

   }
)

export const deletEmployee=createAsyncThunk(
    "api/deleteEmployee",
    async (payload)=>{
        try {
            const response=await axios.delete(`http://localhost:5000/deleteEmployee/${payload._id}`)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)

export const editEmployeeAsync=createAsyncThunk(
    "api/editEmployee",
    async (payload)=>{
        try {
            const response=await axios.put(`http://localhost:5000/editEmployee/${payload.id}`,payload.employee)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)


export const getAllEmployee=createAsyncThunk(
    "api/getAllEmployee",
    async ()=>{
        try {
            const response=await axios.get("http://localhost:5000/getAllEmployee")
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)


export const employeeSlice=createSlice({
    name:"employee",
    initialState:[],
    reducers:{

    },
    extraReducers:{
     [createEmployee.fulfilled]:(state,action)=>{
        state.push(action.payload)
     },
     [getAllEmployee.fulfilled]:(state,action)=>{
        return action.payload
     },
     [deletEmployee.fulfilled]:(state,action)=>{
         return state.filter((employee)=>{
            return employee._id!==action.payload._id
         })
     },
     [editEmployeeAsync.fulfilled]:(state,action)=>{
       const index=state.findIndex((employee)=>employee._id===action.payload._id)
       return state[index]=action.payload
       
       
     }
    }
})

export default employeeSlice.reducer