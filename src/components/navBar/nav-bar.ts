import BtnList from "../button-list/btn-list";
export enum AttributeBtn{
    "button" = "button"
}
class NavBar extends HTMLElement{
    button?:string
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

    connectedChangeCallback(propName: AttributeBtn, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:this[propName] = newValue
                break;
        }
    }

    render(){
        const link = document.createElement('link')
        link.rel = "stylesheet"
        link.href = "../src/components/navBar/nav-bar.css"
        
        this.shadowRoot?.appendChild(link)

        if(this.shadowRoot)this.shadowRoot.innerHTML += `
        <nav id="navBack">
            <img class="logo" src="../img/tumblr-1.png">
            <btn-list></btn-list>
        </nav>
        `
        
    }
}
customElements.define('nav-bar', NavBar)
export default NavBar;