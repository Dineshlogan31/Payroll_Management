const express=require("express")
const { getUserLeave, applyLeaveByEmployee, getAllLeaveAppliedByEmployee } = require("../controller/leaveController")

const LeaveRouter=express.Router()


LeaveRouter.get("/getUserLeave/:employeeId",getUserLeave)
LeaveRouter.post("/applyLeave",applyLeaveByEmployee)
LeaveRouter.get("/getAllLeaveAppliedByEmployee",getAllLeaveAppliedByEmployee)

module.exports=LeaveRouter