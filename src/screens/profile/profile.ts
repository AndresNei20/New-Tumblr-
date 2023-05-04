
export default class Profile extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=``}
        const myInput = this.ownerDocument.createElement('app-input');
        myInput.innerText = "info del store"
    }
}
customElements.define('profile-screen', Profile)