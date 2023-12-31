const express = require("express")
const { getUser, signupUser, login, verifyUser } = require("../controller/userController")

const userRouter = express.Router()

userRouter.post("/signup", signupUser)
userRouter.post("/login", login)
userRouter.get("/verify/:token", verifyUser)

module.exports = userRouter