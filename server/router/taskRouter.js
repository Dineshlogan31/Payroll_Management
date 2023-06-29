"use strict";

const express=require("express")
const { addTask, getAllTasks, updateTaskStatus, getUserTasks } = require("../controller/taskController")



const taskRouter=express.Router()

taskRouter.post("/addTask",addTask)
taskRouter.get("/getAllTasks",getAllTasks)
taskRouter.put("/updateStatusTask",updateTaskStatus)
taskRouter.get("/getUserTasks/:employeeId",getUserTasks)



module.exports=taskRouter