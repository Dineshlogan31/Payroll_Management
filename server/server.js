const express=require("express")
const mongoose=require("mongoose")
const userRouter = require("./router/userRouter")
const cors=require("cors")
const employeeRouter = require("./router/employeeRouter")
const taskRouter = require("./router/taskRouter")
const LeaveRouter =require("./router/leaveRouter")

require("dotenv").config()

const app=express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://payroll-management.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


app.use(cors())

app.use('/',userRouter)
app.use('/',employeeRouter)
app.use('/',taskRouter)
app.use('/',LeaveRouter)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT || 5000,(err)=>{
        if(err) throw err
        console.log("Database connected && listening on port 5000");
    })
}).catch((err)=>{
    console.log(err);
})
  


