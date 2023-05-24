import { PostRouter } from "./Post.router";
import { UserRouter } from "./User.router";
import { CommentRouter } from "./Comment.router";
import { Router } from "express";

const APIRouter = Router();

APIRouter.use('/post', PostRouter);
APIRouter.use('/user', UserRouter);
APIRouter.use('/comment', CommentRouter);
export default APIRouter; 