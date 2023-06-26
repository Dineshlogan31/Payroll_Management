const express=require("express")
const { addTask, getAllTasks } = require("../controller/taskController")



const taskRouter=express.Router()

taskRouter.post("/addTask",addTask)
taskRouter.get("/getAllTasks",getAllTasks)



module.exports=taskRouter