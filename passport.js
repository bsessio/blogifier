var localstrategy=require("passport-local").Strategy;
var db=require("./models")
var user=db.User
module.exports=function(passport){
    passport.serializeUser(function(user,cb){
        cb(null,user)
    })
    passport.deserializeUser(function(user,cb){
        cb(null,user)
    })
    passport.use(new localstrategy(function(username,password,cb){
        user.findOne({username:username},function(err,data){
            if(err)throw err;
            if(data){
                console.log(data)
                var valid=data.comparePassword(password,data.password)
                if(valid){
                    cb(null,data)
                }
                else{
                    console.log("not valid")
                    cb(null,false)
                }
            }
        })
    }))
}
