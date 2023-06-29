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
const updateTaskStatus=async(req,res)=>{
  const {_id}=req.body
  const task=await Tasks.findById({_id})
  task.status="Completed"
  task.save()
  res.status(200).json(task)

}
const getUserTasks=async (req,res)=>{
  const {employeeId}=req.params
  const tasks=await Tasks.find({employeeId})
  res.status(200).json(tasks)
}
module.exports={addTask,getAllTasks,updateTaskStatus,getUserTasks}