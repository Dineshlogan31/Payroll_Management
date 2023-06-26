import {configureStore} from "@reduxjs/toolkit"
import employeeReducer from "./EmployeeSlicer"
import userReducer from "./UserSlicer"
import taskReducer from "./TaskSlicer"

export default configureStore({
    reducer:{
      employee:employeeReducer,
      user:userReducer,
      task:taskReducer
    }
})