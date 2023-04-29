import { postdata } from "../components/post/postdata"
import ApiPostData from "../services/ApiPostData"
import { AuthActions, LogInAction, LogOutAction, PostActions, AddPostAction, GetPostAction } from "../types/store"



export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined  //idk why is undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getPosts = async (): Promise<GetPostAction> => {
    const post = await ApiPostData.get();
    return{
        action:PostActions.GET,
        payload: post
    }
}

export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
    return {
        action: PostActions.ADD_POST,
        payload
    }
}