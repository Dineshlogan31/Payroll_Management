import {configureStore} from "@reduxjs/toolkit"
import employeeReducer from "./EmployeeSlicer"

export default configureStore({
    reducer:{
      employee:employeeReducer
    }
})