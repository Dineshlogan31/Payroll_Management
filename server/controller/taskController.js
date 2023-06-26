const Tasks=require("../model/taskModel")

const addTask=async(req,res)=>{
    const {task,employeeId,assignedBy}=req.body
    console.log({task,employeeId,assignedBy});
     const addedtask=await Tasks.create({task,employeeId,assignedBy})
    res.status(200).json(addedtask)

}

const getAllTasks=async(req,res)=>{
  const tasks=await Tasks.find({})
    res.status(200).json(tasks)

}
module.exports={addTask,getAllTasks}