const express=require("express");
const app=express();
const ejs=require("ejs");
const mongoose=require("mongoose");
let dotenv=require("dotenv");
dotenv.config();
let cookie_parser=require("cookie-parser");
//middleware
let errorMiddleware=require("./middlewares/error");
//router
let userRouter=require("./routes/user");




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view-engine","ejs");
app.use(cookie_parser());


mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connect to MongoDB Atlas");
}).catch(err=>{
    console.log(err);
});




app.use("/api/user",userRouter);


app.get("/",(req,res)=>{
    res.render("index.ejs");
})



app.use(errorMiddleware);

app.listen(3000,()=>{
    console.log("server is running");
})