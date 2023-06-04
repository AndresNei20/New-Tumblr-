import postData from "./postData";
import { Screens } from "./navigation";
import { User } from "./User";
import { Post } from "./Post";

export type observer = ({render: () => void} & HTMLElement);

export type AppState = {
    user: User,
       posts : Post [];
       favorites: Post [];
       screen: Screens; 
}

export enum NavigationActions{
    "NAVIGATE" = "NAVIGATE"
}

export enum AuthActions{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
    "REGISTER" = "REGISTER",
    "EDIT" = "EDIT",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: User 
}

export interface LogOutAction{
    action: AuthActions.LOGOUT,
    payload: void
}

export interface RegisterAction{
    action: AuthActions.REGISTER,
    payload: User
}

export interface EditUSerAction{
    action: AuthActions.EDIT,
    payload: User
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

export interface DeletePostAction{
    action: PostActions.DELETE,
    payload: void //idk if this gonna work...
}

export interface NavigateAction{
    action:NavigationActions.NAVIGATE ,
    payload: Screens
}

export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostAction | DeletePostAction | NavigateAction | AddFavoriteAction | GetFavoriteAction | RegisterAction | EditUSerAction
