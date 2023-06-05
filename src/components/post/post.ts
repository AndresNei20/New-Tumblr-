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
    }

   connectedCallback(){
    this.render()
    }

    attributeChangedCallback(propName: AttributeImg, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
            this[propName] = newValue;
                break;
        }
        
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/post/post.css">`}
        
/*         const section = this.ownerDocument.createElement('section')
        section.className = "post";
        
        const inpBar = this.ownerDocument.createElement('input-bar')

        section.appendChild(inpBar);
        this.shadowRoot?.appendChild(section) */

/*         console.log("rendered");
       
        let newpost = "";

        
        //Esto se hara como lo que hay en el 17_globalState en el Dashboard
         action.forEach((postdata: any)=>{
             console.log(postdata);
             newpost += `
             <new-prof image ="${postdata.pic}" id="${postdata.id}" ></new-prof>
             <img src="${postdata.img}"></img>    
             <new-des description ="${postdata.description}" hashtags="${postdata.hashtags}"></new-des>
             `

             for (let i = 0; i < appState.newPost.length; i++) {
                console.log(i);
                newpost += `
                <new-prof image ="${.pic}" id="${i.id}" ></new-prof>
                <img src="${postdata.img}"></img>    
                <new-des description ="${postdata.description}" hashtags="${postdata.hashtags}"></new-des>
                `
             }
         })
         if(this.shadowRoot)this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/post/post.css">
        <section class="post">
        <input-bar></input-bar>
        ${newpost}
        </section>
        `
 */
    }
}
customElements.define('new-post', NewPost)