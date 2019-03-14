module.exports = function (sequelize, DataTypes) {
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
    return Post;
};