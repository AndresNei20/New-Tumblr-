
class profilePost extends HTMLElement {

    image = ""
    id = ""
    
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
        console.log("re");
       
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/profile-post/profilePost.css">
        <section class="profile">
        <img src="${this.image}"></img>
        <p>${this.id}</p>
        </section>
        `
    }
   
}
customElements.define('new-prof', profilePost)
export default profilePost