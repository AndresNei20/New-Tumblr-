export default class MyInput extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=``}
        const myInput = this.ownerDocument.createElement('input');
        myInput.innerText = "info del store"
    }
}
customElements.define('app-input', MyInput)