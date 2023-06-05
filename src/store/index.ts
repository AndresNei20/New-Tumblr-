import { Screens } from "../types/navigation";
import { Actions, AppState, observer } from "../types/store";
import { auth } from "../utils/firebase";
import storage, { PersistanceKeys } from "../utils/storage";
import { SetUserCredentials, navigate } from "./actions";
import { reducer } from "./reducer";
import {onAuthStateChanged} from 'firebase/auth'

onAuthStateChanged(auth, async(user:any) => {
  console.log(user)
  if (user) {
    appState.userCredentials !== null ? dispatch(SetUserCredentials(user)): '';
/*     if (!appState.userData) {
      appState.userData = {
        uid:"",
        username: "",
        birthday: "",
        email: "",
        password: "",
        img: ""
      };
    }   */
    appState.userData.uid = user.uid
    appState.userData.email = String(user.email)
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.LOGIN));
  }
});

const screenState = {
    screen: Screens.LOGIN
}



export let emptyState: AppState = {
    userData:{
        username: "",
        email: "",
        password: "",
        birthday: "",
        uid: "",
        img: ""
    },
    posts: [], 
    favorites: [],
    screen: Screens.LOGIN,
    userCredentials: "",

}


export let appState = storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});


let observers: observer[] = [];

const persistStore = (state: AppState) =>
  storage.set({ key: PersistanceKeys.STORE, value: state });

  const notifyObservers = () => observers.forEach((o) => o.render());

  export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;

    persistStore(newState);
    notifyObservers();
};
export const addObserver = (ref: observer) => {
    observers = [...observers, ref];
  };