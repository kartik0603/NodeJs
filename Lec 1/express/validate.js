const isValid =(req,res,next)=>{
    let {email,username,password,number}=req.body;

    if (email && username && password && number){
        next();
    }
    else{
        res.send("Please fill all the fields")
    }
}
module.exports = isValid;
