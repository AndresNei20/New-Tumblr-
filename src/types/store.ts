import postData from "./postData";
import { Screens } from "./navigation";
import { User } from "./User";
import { Post } from "./Post";

export type observer = ({render: () => void} & HTMLElement);

export type AppState = {
    userCredentials: string,
       posts : Post [];
       favorites: Post [];
       screen: Screens; 
    userData: User,
}

export enum NavigationActions{
    "NAVIGATE" = "NAVIGATE"
}

export enum AuthActions{
    "ADD_USER" = "ADD_USER",
    "LOGOUT" = "LOGOUT",
    "EDIT" = "EDIT",
    "SET_USER" = "SET_USER",
}

export interface AddUserAction {
    action: AuthActions.ADD_USER,
    payload: User 
}

export interface LogOutAction{
    action: AuthActions.LOGOUT,
    payload: void
}


export interface EditUSerAction{
    action: AuthActions.EDIT,
    payload: User
}

export interface SetUserAction{
    action: AuthActions.SET_USER,
    payload: string
}

export enum PostActions{
    "ADD_POST" = "ADD_POST",
    "GET" = "GET",
    "DELETE" = "DELETE",
    "ADD_FAVORITES" = "ADD_FAVORITES",
    "GET_FAVORITES" = "GET_FAVORITES"
}

export interface AddPostAction{
    action: PostActions.ADD_POST,
    payload: Post
}

export interface GetPostAction{
    action: PostActions.GET,
    payload: Post[]
}

export interface AddFavoriteAction{
    action: PostActions.ADD_FAVORITES,
    payload: Post
}

export interface GetFavoriteAction{
    action: PostActions.GET_FAVORITES,
    payload: Post[]
}

export interface NavigateAction{
    action:NavigationActions.NAVIGATE ,
    payload: Screens
}



export type Actions = AddUserAction | LogOutAction | AddPostAction | GetPostAction | NavigateAction | AddFavoriteAction | GetFavoriteAction | EditUSerAction | SetUserAction 
