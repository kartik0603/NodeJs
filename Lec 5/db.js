const mongoose =require("mongoose");




const dbConnect = async ()=>{

    await mongoose.connect("mongodb://localhost:27017/Lec5");
    console.log("connect to the database");

}

module.exports=dbConnect;