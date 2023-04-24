import * as components from './components/export'
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=``}
/*         this.shadowRoot.innerHTML = `
        <nav-bar></nav-bar>
        <new-post> </new-post>  
        ` */
        const navBar = this.ownerDocument.createElement('nav-bar')
        this.shadowRoot?.appendChild(navBar)
        const newPost = this.ownerDocument.createElement('new-post')
        this.shadowRoot?.appendChild(newPost)

    }
}
customElements.define('app-container', AppContainer)
