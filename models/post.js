// Export all of Post
module.exports = function (sequelize, DataTypes) {
    // Define all elements of the Posts table.
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