const express = require("express")
const router = express.Router()

//Controller
const {register, login} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {userCreateValidation, loginValidation} = require("../middlewares/userValidations")
 
//Routes
router.post("/register",userCreateValidation(),loginValidation, validate,register)
router.post("/login",loginValidation(), validate, login)

module.exports = router