import './components/export'
import { Signup } from './components/export';
import Login from './screens/login/login';

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
        <nav-bar></nav-bar>
        <new-post> </new-post>  
        `
        const forms = this.ownerDocument.createElement('app-form')
        this.shadowRoot?.appendChild(forms)
        
        const btnPost = this.shadowRoot?.getElementById("btn4");
        if(btnPost){ btnPost.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("hola, funciono")
          });}
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
