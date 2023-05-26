import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize, ForeignKey } from 'sequelize';
import User from './User'

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>>{
    declare id: CreationOptional<number>;
    declare text: string;
    declare userId: ForeignKey<User['id']>;
}

export const setupPost = (sequelize: Sequelize) => {
    Post.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: DataTypes.STRING,
    }, {
        modelName: 'Post',
        sequelize
    })




}



export default Post;