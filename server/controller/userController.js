const User=require("../model/userModel")
const jwt=require("jsonwebtoken")
const nodemailer=require('nodemailer')

const getUser=(req,res)=>{
    res.json({Msg:'Get All User'})
}

//creating json web tokens for user
function createToken(_id)
{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'1d'})
}

//signup  user we using statics methods in signup
const signupUser=async (req,res)=>{
  try {
    const {name,email,mobile,password,role,department}=req.body
    const user=await User.signup(name,email,mobile,password,role,department)
    const token= createToken(user._id)
    const transporter=await nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"dineshlogan31@gmail.com",
            pass:"mqvlrspjmhetrolh"
        }
    })

    const mailContent={
         from:"dineshlogan31@gmail.com",
         to:email,

         subject:"Email Verification",

         html:`<a href="http://localhost:5000/verify/${token}">Click here to verify your account</a>`
    }

    transporter.sendMail(mailContent,(err,info)=>{
        if(err) throw err
        console.log("Email send Successfully");
    })
    res.status(200).json({user,token,Msg:"Mail sent successfully"})
  } catch (error) {
    res.status(404).json({error:error.message})
  }

}

const login=async (req,res)=>{
    const {email,password}=req.body
try {
    const user=await User.login(email,password)
    if(user.verified==false)
    {
       return res.json({VerifyMessage:"Verify your Email"})
    }
    res.status(200).json(user)
} catch (error) {
    res.status(404).json({error:error.message})
}
}

const verifyUser=async (req,res)=>{
    const {token}=req.params
    const data=await jwt.verify(token,process.env.SECRET)

    const user=await User.findOne({_id:data._id}).exec()

    if(!user)
    {
        res.json({Msg:"User is not exist"})
    }
    user.verified=true
    await user.save()
    res.json({Msg:"Account Verified Successfully"})
}

module.exports={getUser,signupUser,login,verifyUser}