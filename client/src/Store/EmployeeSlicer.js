import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

export const createEmployee = createAsyncThunk(
    "api/createEmployee",
    async (payload) => {
        try {
            const response = await axios.post("https://payroll-management-rouge.vercel.app/createEmployee", payload)
            return response.data
        } catch (error) {
            console.error(error);
        }

    }
)

export const deletEmployee = createAsyncThunk(
    "api/deleteEmployee",
    async (payload) => {
        try {
            const response = await axios.delete(`https://payroll-management-rouge.vercel.app/deleteEmployee/${payload._id}`)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)

export const editEmployeeAsync = createAsyncThunk(
    "api/editEmployee",
    async (payload) => {
        try {
            const response = await axios.put(`https://payroll-management-rouge.vercel.app/editEmployee/${payload.id}`, payload.employee)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)


export const getAllEmployee = createAsyncThunk(
    "api/getAllEmployee",
    async () => {
        try {
            const response = await axios.get("https://payroll-management-rouge.vercel.app/getAllEmployee")
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
)


export const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [createEmployee.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [getAllEmployee.fulfilled]: (state, action) => {
            return action.payload
        },
        [deletEmployee.fulfilled]: (state, action) => {
            console.log(action.payload);
            return state.filter((employee) => {
                return employee._id !== action.payload.user._id
            })
        },
        [editEmployeeAsync.fulfilled]: (state, action) => {

            const index = state.findIndex((employee) =>employee._id===action.payload[0]._id)
            state[index] = action.payload[0]


        }
    }
})

export default employeeSlice.reducer