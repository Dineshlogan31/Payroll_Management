const Employee=require("../model/employeeModel")
//getAllEmployee from employee collection
const getAllEmployee=async (req,res)=>{
    const employees=await Employee.find({})
    res.status(200).json(employees)
}

//create employee by admin user
const createEmployee=async (req,res)=>{
    const {firstName,lastName,mobile,password,aadhar,
        email,dateOfBirth,dateOfJoining,address,
        city,state,zipcode}=req.body

        let employeeId=Date.now()

        const employee=await Employee.create({employeeId,firstName,lastName,mobile,password,aadhar,
            email,dateOfBirth,dateOfJoining,address,
            city,state,zipcode})

    res.status(200).json(employee)
}


//Delete an employee based on req id
const deleteEmployee=async(req,res)=>{
    const {id}=req.params

    const user=await Employee.findOneAndDelete({_id:id})
    res.status(200).json(user)
}

const editEmployee=async (req,res)=>{
    const {id}=req.params
    const {firstName,lastName,mobile,password,aadhar,
        email,dateOfBirth,dateOfJoining,address,
        city,state,zipcode}=req.body

    const user=await Employee.findOneAndUpdate({_id:id},{firstName,lastName,mobile,password,aadhar,
        email,dateOfBirth,dateOfJoining,address,
        city,state,zipcode})
        const employee=await Employee.find({_id:user._id})
        res.status(200).json(employee)
}

module.exports={createEmployee,getAllEmployee,deleteEmployee,editEmployee}