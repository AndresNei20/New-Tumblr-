import { addObserver } from "../../store/index";


export enum AttributePp{
    "image" = "image",
    "uid" = "uid"
}
class profilePost extends HTMLElement {
    image?:string ="";
    uid?:string = "";

   static get observedAttributes(){
    return["image","uid"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: AttributePp, oldValue: string | undefined, newValue: string | undefined){
        if (propName===propName) {
            this[propName] = newValue
                
        }
    }
    
    render(){
        console.log("re");
       
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
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