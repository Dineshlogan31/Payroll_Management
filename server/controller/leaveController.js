const Employee=require("../model/employeeModel")

const getUserLeave=async(req,res)=>{
const {employeeId}=req.params
const leaves=await Employee.find({employeeId})
  res.status(200).json(leaves)
}

module.exports={getUserLeave}