import datalikes from "./datalikes";
export enum AttributeLikes{
    "likes" = "likes"
}
class LikeNote extends HTMLElement {
    likes?:any
    static get observedAttributes(){
    return["likes"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: AttributeLikes, oldValue: string | undefined, newValue: string | undefined){
       switch (propName) {
        default:this[propName] = newValue;
            break;
       }


    }

    render(){
        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/like-note/like-note.css';
        this.shadowRoot?.appendChild(link)

        if(this.shadowRoot)this.shadowRoot.innerHTML += `
        <div class="like-box">
        <p>15</p>
        </div>
        `

    }
}
customElements.define('like-note', LikeNote)
export default LikeNote