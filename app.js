const express=require("express");

const bodyparser=require("body-parser");

const router=require("./api/router")

const app=express();

app.use(express.json());


app.use("/", router);


app.listen(3009,(req,res)=>{
    console.log("Server started successfully at port 3009")
});



