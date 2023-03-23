
class profilePost extends HTMLElement {
   static get observedAttributes(){
    return["image","id"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render()
    }

    render(){
       
        this.shadowRoot.innerHTML = `
        <section class="profile">
        <img src="${this.image}"></img>
        <p>${this.id}</p>
        </section>
        `
    }
   
}
customElements.define('new-prof', profilePost)
export default profilePost