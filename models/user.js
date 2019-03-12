var bcrypt=require("bcrypt-nodejs")
module.exports = function(sequelize, DataTypes) {
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

  })
  User.hashPassword=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
  }
  User.comparePassword=function(password,hash){
    return bcrypt.compareSync(password,hash)
  }
  
  User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.Post, {
        onDelete: "cascade"
      });
  };
  
    return User;
  };
