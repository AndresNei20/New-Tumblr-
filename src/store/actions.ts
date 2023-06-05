import { postdata } from "../components/post/postdata"
import ApiPostData from "../services/ApiPostData"
import { AuthActions, LogOutAction, PostActions, AddPostAction, GetPostAction, NavigateAction, NavigationActions, Actions, EditUSerAction, AddFavoriteAction, GetFavoriteAction, SetUserAction, AddUserAction } from "../types/store"
import { Screens } from "../types/navigation"
import { User } from "../types/User"
import firebase from "../utils/firebase"
import { Post } from "../types/Post"
import { appState, dispatch } from "."

export const navigate = (screen: Screens): NavigateAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}

export const AddUser = (user: User): AddUserAction => {
    return {
        action: AuthActions.ADD_USER,
        payload: user
    }
} 

export const LogOut =  ():LogOutAction =>{

    if(appState.userCredentials !==null || ''){
    dispatch(SetUserCredentials(''))    
    sessionStorage.clear()
    dispatch(navigate(Screens.LOGIN))
    location.reload()
}
    return{
        action: AuthActions.LOGOUT,
        payload: undefined,
    }
}

export const Edit =async (user: User): Promise<EditUSerAction> => {
    await firebase.EditUserDB(user);
    return{
        action: AuthActions.EDIT,
        payload: user
    }
}

export const AddPost = async(post: Post): Promise<AddPostAction> => {
    await firebase.AddPostDB(post);

    return{
        action: PostActions.ADD_POST,
        payload: post
    }
}

export const GetPost = async(): Promise<GetPostAction> => {
    const posts = await firebase.GetPostsDB();

    return{
        action: PostActions.GET,
        payload: posts
    }
}

export const AddFavorites = async (post: Post): Promise<AddFavoriteAction> => {
    await firebase.AddFavoriteDB(post)
    return{
        action: PostActions.ADD_FAVORITES,
        payload: post
    }
}

export const GetFavorites = async (): Promise<GetFavoriteAction> => {
    const post = await firebase.GetFavoritesDB();

    return{
        action: PostActions.GET_FAVORITES ,
        payload: post
    }
}



export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
    return {
        action: PostActions.ADD_POST,
        payload
    }
}

export const SetUserCredentials = (user: string): SetUserAction  => {
    return {
        action: AuthActions.SET_USER,
        payload: user,
    }
}