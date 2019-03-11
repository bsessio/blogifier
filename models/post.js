module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    const Post = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.PASSWORD,
            allowNull: false,
        },
        blogPost: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    return Post;
};
