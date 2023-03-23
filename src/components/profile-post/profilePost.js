
class profilePost extends HTMLElement {
   static get observedAttributes(){
    return["profimage","id"]
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
        this.render()
    }

    render(){
       
        this.shadowRoot.innerHTML += `
        <section class="profile">
        <img src="${this.profimage}"></img>
        <p>${this.id}</p>
        </section>
        `

    }
}
customElements.define('new-prof', profilePost)
export default profilePost