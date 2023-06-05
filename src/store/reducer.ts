import { Actions, AppState, AuthActions, NavigationActions, PostActions } from "../types/store";


export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case AuthActions.ADD_USER:
            currentState.userData = payload
            return currentState

        case AuthActions.LOGOUT:
            return{
                ...currentState, userCredentials: "",
            }

        case AuthActions.EDIT:
            currentState.userData = payload
            return currentState

        case AuthActions.SET_USER:
            currentState.userCredentials = payload
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
