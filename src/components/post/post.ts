import ApiPostData from '../../services/ApiPostData';
import { addObserver, appState, dispatch, emptyState } from '../../store';
import { GetPost } from '../../store/actions';
import { GetPostAction, PostActions } from '../../types/store';
import '../export'

/* console.log (await ApiPostData.get()); */

export enum AttributeImg{
    "image" = "image"
}
export default class NewPost extends HTMLElement {
    image?: string
   static get observedAttributes(){
    return["image"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    async connectedCallback() {
        if (appState.posts.length === 0){
            dispatch( await GetPost())
            this.render();
        } else{
            this.render();
        }  
    }

    attributeChangedCallback(propName: AttributeImg, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
            this[propName] = newValue;
                break;
        }
        
    }

    async render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/post/post.css">`}
        
        
/*         const section = this.ownerDocument.createElement('section')
        section.className = "post";
        
        const inpBar = this.ownerDocument.createElement('input-bar')

        section.appendChild(inpBar);
        this.shadowRoot?.appendChild(section) */

        console.log("rendered");
       
        let newpost = "";

        
        //Esto se hara como lo que hay en el 17_globalState en el Dashboard
         appState.posts.forEach((p)=>{
             console.log(p);
             newpost += `
             <new-prof image ="${p.username}" id="${p.id}" ></new-prof>
             <img src="${p.img}"></img>    
             <new-des description ="${p.description}" createdAt = "${p.createdAt}" "Pretty boy"></new-des>                                 //revisar como hacer el createdAt
             `                                  

         })
         if(this.shadowRoot)this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/post/post.css">
        <section class="post">
        ${newpost}
        </section>
        `



    }
}
customElements.define('new-post', NewPost)