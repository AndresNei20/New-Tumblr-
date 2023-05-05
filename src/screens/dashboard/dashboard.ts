import '../../components/export'
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
        this.shadowRoot.innerHTML = ` 
        <nav-bar></nav-bar>
        <new-post> </new-post>  
        `
    }}

customElements.define('app-dashboard', Dashboard)