import BtnList from "../button-list/btn-list.js";
class NavBar extends HTMLElement{
    static get observedAttributes(){
        return ["button"]
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    connectedChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        const link = document.createElement('link')
        link.rel = "stylesheet"
        link.href = "../src/components/navBar/nav-bar.css"
        
        this.shadowRoot.appendChild(link)

        this.shadowRoot.innerHTML += `
        <nav id="navBack">
            <img class="logo" src="../../../img/tumblr-1.png">
            <input type="search" placeholder="search someone">
            <btn-list></btn-list>
        </nav>
        `
        
    }
}
customElements.define('nav-bar', NavBar)
export default NavBar;