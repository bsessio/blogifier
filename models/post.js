module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    const Post = sequelize.define("user", {
        name: {
            type: STRING,
            allowNull: FALSE,
        },
        location: {
            type: STRING,
            allowNull: FALSE,
        },
////doesn't need password here
        blogPost: {
            type: TEXT,
            allowNull: FALSE,
        },
    })
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    return Post;
};
//define foreign key to point to user model.. what user id posted the model
///user model username: 