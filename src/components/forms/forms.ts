import { dispatch } from "../../store";
import { addNewPost } from "../../store/actions";
import { Post } from "../../types/Post";
import postData from "../../types/postData";

/* const customPost: Post = {
    imgPost:"",
    pic:"https://instagram.fpei2-1.fna.fbcdn.net/v/t51.2885-19/291509149_438415681217081_8296261908460936663_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpei2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=EfTsnVVGe04AX8ZsLvm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCcQLSW6wE4xZCJpY23U6KJeAWxl-viDS4d_CRydAPHsg&oe=64598B92&_nc_sid=8fd12b",
    id: "user",
    description: "",
    hashtags: "",

} */

export enum AttributeForms{
    "image"="image",
    "description"="description",
    "hashtags"="hashtags"
}

export default class Forms extends HTMLElement {
    image?:string;
    description?:string;
    hashtags?:string;

    static get observedAttributes(){
     return["image","description","hashtags"]
    }
 
     constructor(){
         super();
         this.attachShadow({mode:'open'})
     }
 
     connectedCallback(){
         this.render();
     }
 
     attributeChangedCallback(propName: AttributeForms, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
             this[propName] = newValue;
                break;
        }

     }
 
     sentValuesImg(e: any){
        console.log("change")
        customPost.img = e.target.value
     }
     sentValueDes(e:any){
        customPost.description = e.target.value;
     }
     sentValueHash(e:any){
        customPost.hashtags = e.target.value
     }

     submitForm(){
        dispatch(
            addNewPost({payload: customPost})
        )
     }

     render(){
        if(this.shadowRoot) 
         this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="../src/components/forms/forms.css">`
   /*        `
         <link rel="stylesheet" href="../src/components/description/description.css">
         <form class="app-form">
         <input type="file"></input>
         <input>${this.description}</input>
         <input>${this.hashtags}</input>
        
         <button>Add</button>
         </form>
         ` */

         const form = this.ownerDocument.createElement('form');
         form.className = "app-form";

         const input1 = this.ownerDocument.createElement('input');
         input1.type = "file"
         input1.addEventListener('change', this.sentValuesImg )
         input1.placeholder = "Put your image"
         form.appendChild(input1)
         
         const input2 = this.ownerDocument.createElement('input')
         input2.placeholder = "description here" 
         input2.addEventListener('change', this.sentValueDes )
         form.appendChild(input2)

         const input3 = this.ownerDocument.createElement('input')
         input3.addEventListener('change', this.sentValueHash )
         input3.placeholder = "hashtags here"
         form.appendChild(input3)

         const btnSave = this.ownerDocument.createElement('button')
         btnSave.innerText = "Add"
         btnSave.addEventListener('click', this.submitForm) 
         form.appendChild(btnSave)

         const popUp = this.ownerDocument.createElement('figure')
         popUp.className = "popUp"
         this.shadowRoot?.appendChild(form)
     }
    
 }
 customElements.define('app-form', Forms)
