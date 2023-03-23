import postdata from "./postdata.js";

class NewPost extends HTMLElement {
   static get observedAttributes(){
    return["image"]
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
       
        let newpost = "";

        postdata.forEach((postdata)=>{
            newpost += `
            <img src="${postdata.img}"></img>
           
            `
        })
         this.shadowRoot.innerHTML += `
        <section class="photo">
        ${newpost}
        </section>
        `

    }
}
customElements.define('new-post', NewPost)
export default NewPost