const {model,Schema}=require("mongoose")

const leaveSchema=new Schema({
    leaveType:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
    employeeName:{
        type:String,
        required:true
    }
})
const LeaveApply=model("AppliedLeaves",leaveSchema)
module.exports=LeaveApply