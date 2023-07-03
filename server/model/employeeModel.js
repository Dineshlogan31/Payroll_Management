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
    },
    leave:{
        CausualLeave:{
        type:Number,
        required:true,
        default:2
        },
    AnnualLeave:{
            type:Number,
            required:true,
            default:7
            },
     SickLeave:{
        type:Number,
        required:true,
        default:1
     },
    PaidLeave:{
        type:Number,
        required:true,
        default:3
        },     
     Maternity:{
        type:Number,
        required:true,
        default:50
        },        
     Paternity:{
        type:Number,
        required:true,
        default:15
        },             
     LossOfpay:{
        type:Number,
        required:true,
        default:3
        },                  
    MarriageLeave:{
        type:Number,
        required:true,
        default:7
        },                        
    BereavementLeave:{
        type:Number,
        required:true,
        default:3
        }                             
    }
})

employeeSchema.statics.login= async function(email,password)
{
    if(!email)
    {
        throw Error("Enter your Email")
    }
    if(!password)
    {
        throw Error("Enter your Password")
    }
    const user=await this.findOne({email})
    if(!user)
    {
        throw Error("User not exist")
    }
    if(user.password !== password)
    {
     throw Error("Incorrect Password")
    }
    return user
}

const Employee=model("Employee",employeeSchema)

module.exports=Employee