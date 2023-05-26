import './components/export'
import { Signup } from './components/export';
import Login from './screens/login/login';
import './screens/profile/profile'
import './screens/dashboard/dashboard'
import './screens/messanges/messages'
import { addObserver, appState, emptyState } from './store';
import { Screens } from './types/navigation';

class AppContainer extends HTMLElement{
    login : Login[]=[];
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    render(){

        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `` 

        const login = this.ownerDocument.createElement('log-in')
        this.shadowRoot?.appendChild(login)

/*         switch (appState.screen){
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement('log-in')
                this.shadowRoot?.appendChild(login)
                break;
                case Screens.SIGNUP:
                    const signup = this.ownerDocument.createElement('sign-up')
                    this.shadowRoot?.appendChild(signup)
                    break;
                    case Screens.DASHBOARD:
                        const dashboard = this.ownerDocument.createElement('app-dashboard')
                        this.shadowRoot?.appendChild(dashboard)
                        break;  
                     case Screens.MESSAGES:
                     const messages = this.ownerDocument.createElement('messages-screen')
                     this.shadowRoot?.appendChild(messages)
                     break;
                     case Screens.PROFILE:
                        const profile = this.ownerDocument.createElement('profile-screen')
                        this.shadowRoot?.appendChild(profile)
                        break; 
            default:
                break;
        } */
    }}

customElements.define('app-container', AppContainer)
