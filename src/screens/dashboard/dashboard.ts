import '../../components/export'
import { appState } from '../../store';
import firebase from '../../utils/firebase';
import dashboardStyle from './dashboard.css'

const credentials = {
    uid:"" ,
    username:"" ,
    birthday: "",
    email:"" ,
    password: "",
    img: "",
}

export default class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

     connectedCallback(){
        this.render();
    }

    render(){

        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/screens/dashboard/dashboard.css">`

        const css = this.ownerDocument.createElement('link');
        css.innerHTML = dashboardStyle;
        this.shadowRoot?.appendChild(css)

        const navBar = this.ownerDocument.createElement('nav-bar');
        const inpBar = this.ownerDocument.createElement('input-bar');
        const newPost = this.ownerDocument.createElement('new-post');

        const container = this.ownerDocument.createElement('body');
        container.id = "dashBody"

        container.appendChild(navBar)
        container.appendChild(inpBar)
        container.appendChild(newPost)

        this.shadowRoot?.appendChild(container)

    }}

customElements.define('app-dashboard', Dashboard)