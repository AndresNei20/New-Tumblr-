import './components/export'
import { Signup } from './components/export';
import Login from './screens/login/login';
import './screens/profile/profile'

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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/app-container.css">`/* `
        <nav-bar></nav-bar>
        <new-post> </new-post>  
        ` */
        const profile = this.ownerDocument.createElement('profile-screen')
        this.shadowRoot?.appendChild(profile)


/*         const navBar = this.ownerDocument.createElement('nav-bar')
        this.shadowRoot?.appendChild(navBar)
        const newPost = this.ownerDocument.createElement('new-post')
        this.shadowRoot?.appendChild(newPost) */

        // if(this.shadowRoot){
        //     this.shadowRoot.innerHTML=``
        //     const Login = this.ownerDocument.createElement("log-in")as Login;
        //     this.shadowRoot?.appendChild(Login);}

        

    }}

customElements.define('app-container', AppContainer)
