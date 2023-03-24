import postdata from "./postdata.js";
import * as components from '../index.js'

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

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render()
    }

    render(){
       
        let newpost = "";

        postdata.forEach((postdata)=>{
            newpost += `
            <new-prof image ="${postdata.pic}" id="${postdata.id}" ></new-prof>
            <img src="${postdata.img}"></img>    
            <new-des description ="${postdata.description}" hashtags="${postdata.hashtags}"></new-des>
           
            `
        })
         this.shadowRoot.innerHTML += `
        <section class="post">
        ${newpost}
        </section>
        `

    }
}
customElements.define('new-post', NewPost)
export default NewPost