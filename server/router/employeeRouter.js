const express=require("express")
const { createEmployee, getAllEmployee, deleteEmployee, editEmployee } = require("../controller/employeeController")


const employeeRouter=express.Router()

employeeRouter.post("/createEmployee",createEmployee)
employeeRouter.get("/getAllEmployee",getAllEmployee)
employeeRouter.delete("/deleteEmployee/:id",deleteEmployee)
employeeRouter.put("/editEmployee/:id",editEmployee)


module.exports=employeeRouter