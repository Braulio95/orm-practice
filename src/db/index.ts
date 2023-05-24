import { Sequelize } from "sequelize";
import Post, { setupPost } from '../models/Post';
import User, { setupUser } from '../models/User';
import Comment, { setupComment } from "../models/Comment";
let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
    sequelize = new Sequelize(url);
    setupPost(sequelize);
    setupUser(sequelize);
    setupComment(sequelize);
    Comment.belongsTo(Post, {
        foreignKey: 'postId'
    });
    Comment.belongsTo(User, {
        foreignKey: 'userId'
    });
    Post.belongsTo(User, {
        foreignKey: 'userId'
    });

    Post.hasMany(Comment, {
        foreignKey: 'postId'
    });
    User.hasMany(Post, {
        foreignKey: 'userId'
    });
    User.hasMany(Comment, {
        foreignKey: 'userId'
    });


    return sequelize
}