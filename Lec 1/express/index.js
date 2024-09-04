const User = require('./models/User.schema');
 const express =require("express");
 const dbConnect=require("./db");
 const isValid = require("./validate");

 const app=express();
app.use(express.json());



app.get("/",async(req,res)=>{
    let data=await User.find()
    res.send(data)
    
})

app.post("/",isValid, async(req,res)=>{
    
    let data=await User.create(req.body)
    res.send(data)
})

app.delete("/:id",async (req,res)=>{
    let {id}=req.params;
    let data= await User.findByIdAndDelete(id);
    console.log(id);
    res.send("delete");
})

app.patch("/:id", async (req,res)=>{

    let {id}=req.params;
     let data = await User.findByIdAndUpdate(id,req.body)
     res.send(data)
})


 app.listen(8099,()=>{
    dbConnect();
    console.log("server is running on port 8099");
 })