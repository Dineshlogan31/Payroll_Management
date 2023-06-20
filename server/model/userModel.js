const {model,Schema}=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    }
})


userSchema.statics.signup=async function (name,email,mobile,password,role,department){

if(!email || !password)
{
    throw  Error("Please enter your Email and Mobile number")
}
if(!validator.isEmail(email))
{
    throw Error("Invalid email")
}
if(!validator.isStrongPassword(password))
{
    throw Error("Password is weak")
}
const exist=await this.findOne({email})
if(exist)
{
    throw Error("User Already exist")
}
const salt=await bcrypt.genSalt(10)
const hash=await bcrypt.hash(password,salt)
const user=await this.create({name,email,mobile,password:hash,role,department})
return user;

}

userSchema.statics.login=async function(email,password)
{
    if(!email)
    {
        throw Error("Enter your Email")
    }
    if(!password)
    {
        throw Error("Enter your Password")
    }
    const exist=await this.findOne({email})
    if(!exist)
    {
        throw Error("User not exist")
    }
    const user=await bcrypt.compare(password,exist.password)
    if(!user)
    {
        throw Error("Incorrect Password")
    }
    return exist
}

const Users=model("Users",userSchema)
module.exports=Users