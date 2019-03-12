var express=require("express");
var router=express();
var db=require("../models");
var User= db.User;
module.exports=function(passport){
    router.post("/register",function(req,res){
        console.log(req.body)
        var username=req.body.username,
            password=req.body.password;
            area=req.body.area;
        User.findOne({where:{username:username}}).then(function(err,data){
            console.log("hi")
            if (err){res.status(500).send("Error: "+err)}
            else{
                if(data){
                    res.status(500).send("User Name already Exists")
                }
                else{
                    console.log("herro")
                    User.create({
                        username:username,
                        password:User.hashPassword(password),
                        area:area
                    }).then(function(data){
                        console.log(data)
                        res.json(data)
                    })
                    
                }
            }
        })
    });
    router.post("/login", passport.authenticate('local',{
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