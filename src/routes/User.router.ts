import { Router, Request, Response } from 'express'
import { createUser, readUser, readAllUsers } from '../repositories/User.repo'
import { IUser } from '../interfaces';

export const UserRouter = Router();

UserRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { name, username } = req.body as IUser;
        const newUser = await createUser({
            name, username
        })
        return res.send(newUser);

    } catch (error) {
        console.error(error)
    }

})
UserRouter.get('/', async (req: Request, res: Response) => {
    const foundAllUser = await readAllUsers();
    if (!foundAllUser) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundAllUser.map((User: IUser): IUser => { return User }));
})

UserRouter.get('/:userId', async (req: Request, res: Response) => {
    const params = req.params;
    const foundUser = await readUser(Number(params.userId))
    if (!foundUser) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundUser.toJSON());

})