// Dependency established for our encryption file.
var bcrypt=require("bcrypt-nodejs")
// Export User.
module.exports = function(sequelize, DataTypes) {
  // Establish all elements of the Users table.
  var User=sequelize.define("User",{
    username:{
        type:DataTypes.STRING,
        required:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        required:true,
    },
    area:{
      type:DataTypes.STRING,
    }

    // Encryption for the User in the Users table.
  })
  User.hashPassword=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
  }
  User.comparePassword=function(password,hash){
    return bcrypt.compareSync(password,hash)
  }
    return User;
  };
