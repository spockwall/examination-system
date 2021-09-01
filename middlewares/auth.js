let User=require("../model/user");
let asyncErrorHandler=require("./asyncErrorHandler");
let ErrorHandler=require("../utils/errorHandler");
let jwt=require("jsonwebtoken");
module.exports.userIsAuthenticated=asyncErrorHandler(async(req,res,next)=>{
    let token=req.cookies;
    if(!token){
        return next(new ErrorHandler("請先登入",403));
    }
    let decodedToken=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decodedToken.id);
    next();
})