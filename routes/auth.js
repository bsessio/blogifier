var express=require("express");
var router=express.Router();
var db=require("../models");
var user= db.user;
module.exports=function(passport){
    router.post("/signup",function(req,res){
        var username=req.body.username,
            password=req.body.password;
            area=req.body.area;
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
                        console.log(data)
                        res.json(data)
                    })
                    
                }
            }
        })
    });
    router.post("/login",passport.authenticate('local',{
        failureRedirect:"/login",
        successRedirect:"/"
    }),function(req,res){
        res.json(res)
    })
    router.get('/logout',function(req,res){
        req.logout()
        res.send("/")
    })
    return router;
}
