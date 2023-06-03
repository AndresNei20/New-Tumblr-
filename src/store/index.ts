import { Screens } from "../types/navigation";
import { Actions, AppState, observer } from "../types/store";
import storage, { PersistanceKeys } from "../utils/storage";
import { navigate, setUserCredentials } from "./actions";
import { reducer } from "./reducer";

/* onAuthStateChanged(auth, (user) => {
  console.log('Entra');
  console.log('user',user)
  if (user) {
    user.email !== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.LOGIN));
  }
}); */

const screenState = {
    screen: Screens.LOGIN
}



export let emptyState: AppState = {
    user:{
        username: "",
        email: "",
        password: "",
        birthday: "",
    },
    postData: [], 
    screen: Screens.LOGIN
}


export let appState = emptyState
/* storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyState,
  });
 */


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