import { Actions, AppState, AuthActions, NavigationActions, PostActions } from "../types/store";


export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case AuthActions.LOGIN:
            currentState.user = payload
            return currentState

        case AuthActions.REGISTER:
            currentState.user = payload
            return currentState

        case AuthActions.LOGOUT:
            return{
                ...currentState, user:{
                    id: "",
                    username: "",
                    birthday: "",
                    email: "",
                    password: "",
                    img: "",
                }
            }

        case AuthActions.EDIT:
            currentState.user = payload
            return currentState

        case PostActions.ADD_POST:
            currentState.posts = [...currentState.posts, payload]
            return currentState

        case PostActions.GET:
            currentState.posts = payload
            return currentState

        case PostActions.ADD_FAVORITES:
            currentState.favorites = [...currentState.favorites, payload]
            return currentState

        case PostActions.GET_FAVORITES: 
            currentState.favorites = payload
            return currentState

        case NavigationActions.NAVIGATE:
            return{
                ...currentState,
                screen: payload
            }

        default:
            return currentState;


}
        
}
