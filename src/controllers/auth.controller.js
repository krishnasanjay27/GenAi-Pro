const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * @name registerUsercontroller
 * @description Controller function to handle user registration.
 * @access Public
 */

async function registerUsercontroller(req, res) {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
    })
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username,
        email,
        password: hash
    })
    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
    res.cookie("token", token)
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}
module.exports = { registerUsercontroller }