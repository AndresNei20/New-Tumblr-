import ApiPostData from '../../services/ApiPostData';
import { addObserver, appState, dispatch, emptyState } from '../../store';
import { AddPost, GetPost } from '../../store/actions';
import { Post } from '../../types/Post';
import postData from '../../types/postData';
import { GetPostAction, PostActions } from '../../types/store';
import '../export'

/* console.log (await ApiPostData.get()); */

const postDatas: Post = {
    id: "",
    img: "https://1000logos.net/wp-content/uploads/2017/06/Tumblr-symbol.jpg",
    username: "Tumblr_Official",
    description: "Welcome to our new users",
    createdAt: "",
}
export default class NewPost extends HTMLElement {
    

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    async connectedCallback() {
        if(appState.posts.length === 0) {
            dispatch( await GetPost())
            if(appState.posts.length === 0){
                dispatch(await AddPost(postDatas))
            }
            this.render();
        } else {
            this.render();
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