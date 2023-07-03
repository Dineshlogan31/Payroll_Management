import {configureStore} from "@reduxjs/toolkit"

import employeeReducer from "./EmployeeSlicer"
import taskReducer from "./TaskSlicer"
import logggedUserReducer from "./LoggedUserSlicer"

export default configureStore({
    reducer:{
      employee:employeeReducer,
      loggedUser:logggedUserReducer,
      task:taskReducer
    }
})