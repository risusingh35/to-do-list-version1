//jshint esversion:6
const express =require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")

const app=express();


app.use(express.static("public"));
 

const items=["One","Two","Three","Four"];
const workItem=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res){
    const day=date.getDate();
  
    res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){  

    const page=req.body.list;
    
    if (page==="work") {
        
        const item=req.body.newItem;
        workItem.push(item);
        res.redirect("/work");
        
    } else {
       
        const item=req.body.newItem;
        items.push(item);
        res.redirect("/"); 
    }
                
    

    
});   


app.get("/work", function (req,res){
    res.render("list",{listTitle:"work", newListItems:workItem});
});
app.get("/about",function(res,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server started on post 3000");
});