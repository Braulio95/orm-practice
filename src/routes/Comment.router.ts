import { Router, Request, Response } from 'express'
import { createComment, readComment } from '../repositories/Comment.repo'
import { IComment } from '../interfaces';

export const CommentRouter = Router();

CommentRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { text, userId, postId } = req.body as IComment;
        const newComment = await createComment({
            text, userId, postId
        })
        return res.send(newComment);

    } catch (error) {
        console.error(error)
    }

})

CommentRouter.get('/:commentId', async (req: Request, res: Response) => {
    const params = req.params;
    const foundComment = await readComment(Number(params.commentId))
    if (!foundComment) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundComment.toJSON());

})
