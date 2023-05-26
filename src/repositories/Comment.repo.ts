import Comment from '../models/Comment'
import { IComment } from '../interfaces'
import Post from '../models/Post'
export const createComment = async ({ text, userId, postId }: IComment): Promise<Comment | null> => {

    try {
        if (userId & postId) {
            const response = await Comment.create({
                text, userId, postId
            })
            return response
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }



}

export const readComment = async (id: number): Promise<Comment | null> => {
    const response = await Comment.findByPk(id);
    return response
}

export const readCommentByPost = async (): Promise<any> => {
    const Comments = await Comment.findAll({
        include: [
            {
                model: Post,
                as: 'post',
            }
        ]
    });
    return Comments;

}