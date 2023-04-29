import postData from "./postData";

export type observer = ({render: () => void} & HTMLElement);

export type AppState = {
    user:{
        username: string,
        email: string,
        password: string,
        birthday: string,
    },
       postData : postData []
}

export enum AuthActions{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostActions{
    "ADD_POST" = "ADD_POST",
    "GET" = "GET",
    "DELETE" = "DELETE"
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user"> 
}

export interface LogOutAction{
    action: AuthActions.LOGOUT,
    payload: void
}

export interface AddPostAction{
    action: PostActions.ADD_POST,
    payload: postData // | post (We must to ask about if we use post instead of postData)
}

export interface GetPostAction{
    action: PostActions.GET,
    payload: postData []
}

export interface DeletePostAction{
    action: PostActions.DELETE,
    payload: void //idk if this gonna work...
}

export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostAction | DeletePostAction
