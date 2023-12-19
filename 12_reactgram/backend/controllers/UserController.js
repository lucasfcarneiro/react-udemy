const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

//generate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, { expiresIn: "7d", })
}

//Register user and sign in 
const register = async (req, res) => {

    try {
        const { name, email, password } = req.body

        //check if user exists
        const user = await User.findOne({ email })

        if (user) {
            return res.status(422).json({ errors: ["Email ja cadastrado"] })
        }

        //Generate password hash
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        //Create user
        const newUser = await User.create({
            name,
            email,
            password: passwordHash
        })
        //if user was created successfully, return the token
        return res.status(201).json({
            _id: newUser._id,
            token: generateToken(newUser._id)
        })
    }
    catch (error) {
        if (newUser) {
            return res.status(422).json({ errors: ["Houve um error, por favor tente mais tarde"] })
        }
    }
}

//sign user in
const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    //check if user exist
    if (!user) {
        res.status(404).json({ errors: "Usuario nao encontrado" })
        return
    }

    //check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({ errors: ["Senha invalida"] })
        return
    }

    //return user with token
    return res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })
}

module.exports = {
    register, login
}