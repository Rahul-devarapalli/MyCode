import express from "express";
import bodyParser from "body-parser";
const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit",(req,res)=>{
    console.log(req.body);
});

app.get("/",(req,res)=>{
    res.send("hey im working!");
});

app.get("/about",(req,res)=>{
    res.send("<h1>im rahul!</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>rahuldevarapalli02@gamil.com</h1>");
});

app.listen(3000, ()=> {
    console.log("server running on port 3000.")
});