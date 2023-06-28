import {createSlice} from "@reduxjs/toolkit"

const LoggedUserSlicer=createSlice({
    name:"loggeduser",
    initialState:[],
    reducers:{
        loggedIn:(state,action)=>{
          state.push(action.payload)
        },
        loggedOut:(state,action)=>{
            state.pop()
        }
    }
})
export const {loggedIn,loggedOut}=LoggedUserSlicer.actions

export default LoggedUserSlicer.reducer