const express=require("express")
const mongoose=require("mongoose")
const userRouter = require("./router/userRouter")
const cors=require("cors")
const employeeRouter = require("./router/employeeRouter")
const taskRouter = require("./router/taskRouter")

require("dotenv").config()

const app=express()
app.use(express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))

app.use('/',userRouter)
app.use('/',employeeRouter)
app.use('/',taskRouter)


mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT || 5000,(err)=>{
        if(err) throw err
        console.log("Database connected && listening on port 5000");
    })
}).catch((err)=>{
    console.log(err);
})
  


