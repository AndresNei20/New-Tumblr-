import { addObserver, dispatch } from "../../store";
import { AddPost, navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import imagedata from "./imagedata";
export enum AttributeIcon{
    "icon" = "icon"
}
const formData = {
    id: "",
    img: "",
    username: "",
    description: "",
    createdAt: "",
}
class BtnList extends HTMLElement {
    icon?:string
   static get observedAttributes(){
    return["icon"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    AttributeChangedCallback(propName: AttributeIcon, oldValue:string|undefined, newValue:string | undefined){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=`` }
/*         let btnContent = "";

        imagedata.forEach((imagedata:any, index:number)=>{
            btnContent += `
            <button id="btn${index}"><img src="${imagedata.icon}"></button>    
            `
        }) */
        const btnHome = this.ownerDocument.createElement('button');
        btnHome.id = "btn0"
        btnHome.addEventListener('click', () => {
            dispatch(navigate(Screens.DASHBOARD))
        })
        const imgHome = this.ownerDocument.createElement('img');
        imgHome.src = "../../../img/home-icon-btn.png"
        btnHome.appendChild(imgHome)


        const btnMsm = this.ownerDocument.createElement('button');
        btnMsm.id = "btn1"
        btnMsm.addEventListener('click', () => {
            dispatch(navigate(Screens.MESSAGES))
        })
        const imgMsm = this.ownerDocument.createElement('img');
        imgMsm.src = "../../../img/mail-btn.png"
        btnMsm.appendChild(imgMsm)


        const btnSearch = this.ownerDocument.createElement('button');
        btnSearch.id = "btn2"
        const imgSearch = this.ownerDocument.createElement('img');
        imgSearch.src = "../../../img/search-icon-btn.png"
        btnSearch.appendChild(imgSearch)


        const btnProfile = this.ownerDocument.createElement('button');
        btnProfile.id = "btn3"
        btnProfile.addEventListener('click', () => {
            dispatch(navigate(Screens.PROFILE))
        })
        const imgProfile = this.ownerDocument.createElement('img');
        imgProfile.src = "../../../img/user-btn.png"
        btnProfile.appendChild(imgProfile)


        const btnCreateP = this.ownerDocument.createElement('button');
        btnCreateP.id = "btn4"
        const imgCreateP = this.ownerDocument.createElement('img');
        imgCreateP.src = "../../../img/post.png"
        imgCreateP.addEventListener('click', () => {
            console.log('it works')
            popUp.style.display = 'flex';
            capa.style.display = 'flex';})
        btnCreateP.appendChild(imgCreateP)



        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/button-list/btn-list.css';
        this.shadowRoot?.appendChild(link)

        const iconsNav = this.ownerDocument.createElement('div')
        iconsNav.classList.add("icons-nav");
/*         iconsNav.innerHTML = btnContent; */

        iconsNav.appendChild(btnHome)
        iconsNav.appendChild(btnMsm)
        iconsNav.appendChild(btnSearch)
        iconsNav.appendChild(btnProfile)
        iconsNav.appendChild(btnCreateP)
        this.shadowRoot?.appendChild(iconsNav);

         //Pop Up

         const capa = this.ownerDocument.createElement('section');
         capa.className = "capa";
         this.shadowRoot?.appendChild(capa)

         const popUp = this.ownerDocument.createElement('section');
         popUp.className = 'createPostPopUp'

         const inputImg = this.ownerDocument.createElement('input');
         inputImg.id="inputimg"
         inputImg.type = "file"
         inputImg.placeholder = "Upload File"
         inputImg.addEventListener("change", async () =>{
             const file = inputImg.files?.[0];
             if (file) await firebase.uploadFile(file);
             console.log(file?.name);
             if (file) {
               const img = await firebase.getFile(file.name);
               console.log("img", img);
               const src = String(img)
                formData.img = src 
           }
           });
         popUp.appendChild(inputImg);
         
         const inputDes = this.ownerDocument.createElement('input');
         inputDes.id = "inputext"
         inputDes.type = "text"
         inputDes.placeholder = "Add some description"
         inputDes.addEventListener('change', (e:any) => {
             formData.description = e.target.value
             console.log(formData)
         })
         popUp.appendChild(inputDes);

         const btnClose = this.ownerDocument.createElement('button');
         btnClose.textContent = "Close"
         btnClose.id="submit1"
         btnClose.addEventListener('click',() => {
             popUp.style.display = 'none';
             capa.style.display = 'none';
         }
         
         )
         popUp.appendChild(btnClose)
         const btnPost = this.ownerDocument.createElement('button');
         btnPost.id="submit2"
         btnPost.textContent = "Post"
         btnPost.addEventListener('click', async() => {
             popUp.style.display = 'none';
             capa.style.display = 'none';
             dispatch(await AddPost(formData))
         })
         popUp.appendChild(btnPost)


         this.shadowRoot?.appendChild(popUp)
 
    }
}
customElements.define('btn-list', BtnList)
export default BtnList