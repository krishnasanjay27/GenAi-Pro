const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already taken "],
        required: true,
    },
    email:{
         type:String,
         unique:[true,"Account already exists with this email"],
         required:true,
    },
    password:{
        type: String,
        required:true
    }
})

const userModel = mongoose.model("users",userSchema)
// model() is a Mongoose function that creates a model from userSchema.
// Documents created using this model will be stored in the "users" collection.
module.exports=userModel