import './components/export'
import { Signup } from './components/export';
import Login from './screens/login/login';
import './screens/profile/profile'
import './screens/dashboard/dashboard'

class AppContainer extends HTMLElement{
    login : Login[]=[];
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){

        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `` 
        const Dashboard = this.ownerDocument.createElement('app-dashboard')
        this.shadowRoot?.appendChild(Dashboard)


    }}

customElements.define('app-container', AppContainer)
