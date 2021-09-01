let ErrorHandler=require("../utils/errorHandler");
module.exports=(err,req,res,next)=>{
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}