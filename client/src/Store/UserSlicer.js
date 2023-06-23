import {createSlice} from "@reduxjs/toolkit"



export const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
         loginUser:(state,action)=>
        {
            state.push(action.payload)
        }

    },
    extraReducers:{

    }
})

export const {loginUser}=userSlice.actions

export default userSlice.reducer