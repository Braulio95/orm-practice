import User from '../models/User'
import Comment from '../models/Comment'
import { IUser, IComment } from '../interfaces'
export const createUser = async ({ name, username }: IUser): Promise<User | null> => {
    try {
        const response = await User.create({
            name, username
        })
        return response

    } catch (error) {
        console.error(error)
        return null
    }


}

export const readAllUsers = async (): Promise<User[] | null> => {
    const response = await User.findAll();
    return response
}

export const readUser = async (id: number): Promise<User | null> => {
    const response = await User.findByPk(id);
    return response
}

