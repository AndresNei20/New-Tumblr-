import ApiPostData from '../../services/ApiPostData';
import { addObserver, dispatch, emptyState } from '../../store';
import { getPosts } from '../../store/actions';
import { PostActions } from '../../types/store';
import * as components from '../export'

console.log (await ApiPostData.get());

export enum AttributeImg{
    "image" = "image"
}
class NewPost extends HTMLElement {
    image?: string
   static get observedAttributes(){
    return["image"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

   async connectedCallback(){
    const action = await getPosts()
        dispatch(action);
    }

    attributeChangedCallback(propName: AttributeImg, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
            this[propName] = newValue;
                break;
        }
        
    }

    render(){
        console.log("rendered");
       
        let newpost = "";

        
        //Esto se hara como lo que hay en el 17_globalState en el Dashboard
         emptyState.postData.forEach((postdata: any)=>{
             console.log(postdata);
             newpost += `
             <new-prof image ="${postdata.pic}" id="${postdata.id}" ></new-prof>
             <img src="${postdata.img}"></img>    
             <new-des description ="${postdata.description}" hashtags="${postdata.hashtags}"></new-des>
           
             `
         })
         if(this.shadowRoot)this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/post/post.css">
        <section class="post">
        <input-bar></input-bar>
        ${newpost}
        </section>
        `

    }
}
customElements.define('new-post', NewPost)
export default NewPost