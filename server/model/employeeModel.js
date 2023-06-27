const {model,Schema}=require("mongoose")

const employeeSchema=new Schema({
    employeeId:{
       type:Number,
       required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:false
    },
    dateOfJoining:{
        type:Date,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    }
})

const Employee=model("Employee",employeeSchema)

module.exports=Employee