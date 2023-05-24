export interface IPost {
    id?: number,
    text: string,
    userId: number
}

export interface IComment {
    id?: number,
    text: string,
    postId: number,
    userId: number
}

export interface IUser {
    id?: number,
    name: string,
    username: string
}