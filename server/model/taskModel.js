const {model,Schema}=require("mongoose")

const taskSchema=new Schema({
    employeeId:{
        type:Number,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    assignedBy:{
        type:String,
         required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    }
})

const Tasks=model("Task",taskSchema)
module.exports=Tasks