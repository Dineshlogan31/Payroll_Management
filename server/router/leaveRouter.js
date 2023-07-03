const express=require("express")
const { getUserLeave } = require("../controller/leaveController")

const LeaveRouter=express.Router()


LeaveRouter.get("/getUserLeave/:employeeId",getUserLeave)

module.exports=LeaveRouter