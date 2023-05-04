import { Actions, AppState, AuthActions, PostActions } from "../types/store";


export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

switch (action) {
    case AuthActions.LOGIN:
        return{
            ...currentState,
            user: payload.user
        }
        case AuthActions.LOGOUT:
            return{
                ...currentState,
                user:{
                    username: "",
                    email: "",
                    password: "",
                    birthday: ""
                }
            }
            case PostActions.ADD_POST:
                return{
                    ...currentState,
                        newPost: [
                            payload,
                            ...currentState.newPost
                        ]
            }
            case PostActions.GET:
                return{
                    ...currentState,
                    postData: payload
                }
            case PostActions.DELETE:
                const postState = [...currentState.postData]
                postState.filter
                return{
                    ...currentState,

                    //we need to know how to delete something idk
                }



        default:
            return currentState;


}
        
}
