import * as components from './components/index.js'
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
     /*    const figure = document.createElement('figure');
        this.shadowRoot.appendChild(figure); */
        this.shadowRoot.innerHTML = `<nav-bar></nav-bar>
        
        <new-post> </new-post>
        
        `
    }
}
customElements.define('app-container', AppContainer)
