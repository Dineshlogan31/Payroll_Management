const Employee=require("../model/employeeModel")
const LeaveApply=require("../model/leaveModel")

const getUserLeave=async(req,res)=>{
const {employeeId}=req.params
const leaves=await Employee.find({employeeId})

  res.status(200).json(leaves)
}

//apply leave by employee
const applyLeaveByEmployee=async (req,res)=>{
  const {leaveType,employeeId,startDate,endDate,employeeName}=req.body
  const applyLeaves=await LeaveApply.create({leaveType,employeeId,startDate,endDate,employeeName})
  res.status(200).json(applyLeaves)
}

const getAllLeaveAppliedByEmployee=async (req,res)=>{
  const leavesAlliedByEmployee=await LeaveApply.find({})
  res.status(200).json(leavesAlliedByEmployee)
}

module.exports={getUserLeave,applyLeaveByEmployee,getAllLeaveAppliedByEmployee}