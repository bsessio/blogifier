var localStrategy=require("passport-local").Strategy;
var db=require("./models")
var user=db.User
module.exports=function(passport){
    const serializeUser = function(user, done) {
        const id = (user.id? user.id: user[0].id) //might be differe
        console.log("serializing user:", id)
        //user.save();
        done(null, id);//save the user's id in the cookie. This is how Passport wants you to do this. 
      }
    const deserializeUser = function(savedId, done) {
        console.log("Deserializing user: ", savedId)
        
        user.findOne({ 
            where:{ id: savedId },
            attributes: {
              exclude: ["password"] //user has the password in it, let's filter that out...for...security.......yes, I know we saved the password in db in plaintext...get off my back
            }
        }) 
        .then(function(user) {
            console.log("Got user:", user)
    
            done(null, user);//We have successfully deserialized our user. Call done() with null as the first arg, since no errors.
            //you can now get your user info in req.user
        })
        .catch(function(err){
          //check for errors...
            console.log("Failed to get user:", err)
            done(err, null)
        })
        
    }
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use(new localStrategy(
        function(username,password,cb){
        user.findOne({where:{username:username}})
        .then(function(data){
            console.log("hi")
            if(data){
                console.log(data)
                var valid=user.comparePassword(password,data.password)
                if(valid){
                    cb(null,data)
                }
                else{
                    console.log("not valid")
                    cb(null,false)
                }
            }
            else{
                cb(null,false)
            }
        })
    }))
}
