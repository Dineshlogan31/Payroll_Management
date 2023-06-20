const express=require("express")
const mongoose=require("mongoose")
const userRouter = require("./router/userRouter")
const cors=require("cors")

require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())

app.use('/',userRouter)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT || 5000,(err)=>{
        if(err) throw err
        console.log("Database connected && listening on port 5000");
    })
}).catch((err)=>{
    console.log(err);
})
  


