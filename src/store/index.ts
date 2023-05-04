import { Actions, AppState, observer } from "../types/store";
import { reducer } from "./reducer";

export let  emptyState: AppState = {
    user:{
        username: "",
        email: "",
        password: "",
        birthday: "",
    },
    postData: [], 
    newPost: [],
}

let observers: observer[] = [];

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(emptyState))
    emptyState = reducer(action, clone);
    observers.forEach(o => o.render())
}
export const addObserver = (ref: observer) => { observers = [...observers, ref]};