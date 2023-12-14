const express = require("express")
const router = express.Router()

//Controller
const {register} = require("../controllers/UserController")

//middlewares
const validade = require("../middlewares/handleValidation")

//Routes
router.post("/register",validade, register)

module.exports = router