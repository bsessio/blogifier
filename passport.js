var localstrategy=require("passport-local").Strategy;
var db=require("./models")
var user=model.User
module.exports=function(passport){
    passport.serialize(function(user,cb){
        cb(null,user)
    })
    passport.deserialize(function(user,cb){
        cb(null,user)
    })
    passport.use(new localstrategy(function(username,password,cb){
        console.log(username,password)
    }))
}