const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const Devicedetails=require('./model/data');
const durl="mongodb+srv://TOdo:firstproject@cluster0.pbeee.mongodb.net/E-commerce?retryWrites=true&w=majority";
mongoose.connect(durl,(err,db)=>{
    if (err) throw err;
    console.log("Database created!");
    global.db=db;
});
app.use(cors());
app.listen(process.env.PORT||3003);
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/data",(req,res)=>{
    Devicedetails.find((err,result)=>{
        if(err)
        console.log(err);
        else
        {
            res.send(result);
        }
    })
})