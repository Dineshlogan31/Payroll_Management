import {configureStore} from "@reduxjs/toolkit"
import employeeReducer from "./EmployeeSlicer"
import userReducer from "./UserSlicer"

export default configureStore({
    reducer:{
      employee:employeeReducer,
      user:userReducer
    }
})