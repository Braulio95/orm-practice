import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from 'sequelize';
import User from './User'

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>>{
    declare id: CreationOptional<number>;
    declare text: string;
    //declare userId: number;
}

export const setupPost = (sequelize: Sequelize) => {
    Post.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: DataTypes.STRING,
        // userId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: User,
        //         key: 'id'
        //     }

        //}
    }, {
        modelName: 'Post',
        sequelize
    })




}



export default Post;