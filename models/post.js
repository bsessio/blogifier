module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    const Post = sequelize.define("Post", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blogPost: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
    })
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    // Post.associate = function(models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Post.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    return Post;
};
//define foreign key to point to user model.. what user id posted the model
///user model username: 