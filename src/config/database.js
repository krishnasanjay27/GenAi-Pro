const mongoose = require("mongoose")

async function connectToDb(){
    try{mongoose.connect(process.env.MONGO_URI)
    console.log("conenct to databse")}
    catch(err){
        console.log(err);
        

    }
}
module.exports = connectToDb