let router=require("express").Router();
let asyncErrorHandler=require("../middlewares/asyncErrorHandler");
let ErrorHandler=require("../utils/errorHandler");
const User=require("../model/user");
let sendToken=require("../utils/sendToken");

//    /api/user
router.post("/register",asyncErrorHandler(async(req,res)=>{
    let {name,password}=req.body;
    console.log(name);
    console.log(password);
    let user = await User.create({...req.body,role:"student"});
    sendToken(user,200,res);
}))

module.exports=router;