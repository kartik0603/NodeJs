const mongoose=require("mongoose");

const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Lec-1");
    console.log("Connect to DB");

}

module.exports=dbConnect;