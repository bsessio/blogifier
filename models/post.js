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
        password: {
            type: PASSWORD,
            allowNull: FALSE,
        },

        blogPost: {
            type: TEXT,
            allowNull: FALSE,
        },
    })
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    return Post;
};
