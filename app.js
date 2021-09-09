//jshint esversion:6
const express =require("express");
const bodyParser=require("body-parser");

const app=express();

//const livereload=require("livereload");

//const connectLivereload=require("connect-livereload");

//app.use(connectLivereload());


app.use(express.static("public"));
 

var items=["One-1","Two","Three","Four"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res){

    var today=new Date();

    var options={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    };
    var day=today.toLocaleDateString("en-US",options);

    res.render("list",{kindsOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
  var item=req.body.newItem;

    items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on post 3000");
});