const express= require("express");
const app=express();
const bodyparser= require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
const User= require("./models/user");

const mongoose= require("mongoose");
const dbURL="mongodb+srv://thapasth:sththapa143@nodetuts.cnfxy.mongodb.net/facebookclone?retryWrites=true&w=majority";
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(result)
{
    console.log("database connected successfully");
    app.listen(3000,function()
{
    console.log("The server has been started at port number 3000")
})
}).catch(function(err)
{
    console.log(err);
})




app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("index")
})
app.get("/landingpage",function(req,res)
{
    res.render("landingpage");
})
app.post("/signup",function(req,res)
{
    const user =new User(req.body);
    user.save().then(function(result){
        res.redirect("/landingpage");
    }).catch(function(err)
    {

    console.log(err);
    })
})

app.post("/login",function(req,res)
{
     const email= req.body.email;
     const password=req.body.password;
     User.findOne({email:email}).then(function(result)
     {
         if(result)
         {
             if(result.password===password)
             {
                 res.render("landingpage");
             }
         }
     }).catch(function(err)
     {
         res.render("404");
     })

  
    
})

app.get("/login",function(req,res)
{
    res.render("landingpage");
})


app.use(function(req,res){
    res.status(404).render("404");
})
