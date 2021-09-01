let mongoose=require("mongoose");
let jwt=require("jsonwebtoken");




let userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["student","teacher","admin"]
    }
})
userSchema.methods.isAdmin=function(){
    return this.role==="admin";
}

userSchema.methods.isStudent=function(){
    return this.role==="student";
}

userSchema.methods.isTeacher=function(){
    return this.role==="teacher";
}

userSchema.methods.getToken()=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

module.exports=mongoose.model("User",userSchema);