import { postdata } from "../components/post/postdata"
import ApiPostData from "../services/ApiPostData"
import { AuthActions, LogInAction, LogOutAction, PostActions, AddPostAction, GetPostAction, NavigateAction, NavigationActions, Actions, RegisterAction, EditUSerAction, AddFavoriteAction, GetFavoriteAction } from "../types/store"
import { Screens } from "../types/navigation"
import { User } from "../types/User"
import firebase from "../utils/firebase"
import { Post } from "../types/Post"

export const navigate = (screen: Screens): NavigateAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}

export const LogIn = async(user: User): Promise<LogInAction> => {
    await firebase.loginUser(user)
    return{
        action: AuthActions.LOGIN,
        payload: user,
    }
}

export const Register = async (user: User): Promise<RegisterAction> => {
    await firebase.registerUser(user);
    await firebase.AddUserToDB(user);

    return{
        action: AuthActions.REGISTER,
        payload: user
    }
}

export const LogOut = ():LogOutAction => {
    return{
        action: AuthActions.LOGOUT,
        payload: undefined
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

export const setUserCredentials = (user: string) => {
    return {
      action: "SETUSER",
      payload: user,
    };
  };
