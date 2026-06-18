const express = require('express')
const authCOntroller = require("../controllers/auth.controller")
const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public 
 */

authRouter.post("/register",authCOntroller.registerUsercontroller)

module.exports = authRouter