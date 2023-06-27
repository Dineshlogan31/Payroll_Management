const Tasks=require("../model/taskModel")

const addTask=async(req,res)=>{
    const {task,employee,assignedBy}=req.body
     const a=JSON.parse(employee)
     const employeeName=a.firstName
     const employeeId=a.employeeId
     const addedtask=await Tasks.create({task,assignedBy,employeeName,employeeId})
    res.status(200).json(addedtask)

}

const getAllTasks=async(req,res)=>{
  const tasks=await Tasks.find({})
    res.status(200).json(tasks)

}
module.exports={addTask,getAllTasks}