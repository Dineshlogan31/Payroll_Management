import {configureStore} from "@reduxjs/toolkit"

import employeeReducer from "./EmployeeSlicer"
import taskReducer from "./TaskSlicer"
import logggedUserReducer from "./LoggedUserSlicer"
import leaveReducer from "./LeaveSlicer"

export default configureStore({
    reducer:{
      employee:employeeReducer,
      loggedUser:logggedUserReducer,
      task:taskReducer,
      leave:leaveReducer
    }
})