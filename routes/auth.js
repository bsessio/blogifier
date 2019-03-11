var express=require("express");
var router=express.Router();
var db=require("../models");
var user= db.user;
module.exports=function(passport){
    router.post("/signup",function(req,res){
        var username=req.body.username,
            password=req.body.password;
        user.findOne({username:username}).then(function(err,data){
            if (err){res.status(500).send("Error: "+err)}
            else{
                if(data){
                    res.status(500).send("User Name already Exists")
                }
                else{
                    user.create({
                        username:username,
                        password:newuser.hashpassword(password)
                    }).then(function(data){
                        res.json(data)
                    })
                    
                }
            }
    
        })
    })
    return router;
}