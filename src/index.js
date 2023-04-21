import * as components from './components/export.js'
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML = `
        <nav-bar></nav-bar>
        <new-post> </new-post>
        
        `
    }
}
customElements.define('app-container', AppContainer)
