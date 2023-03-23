import imagedata from "./imagedata.js";
class BtnList extends HTMLElement {
   static get observedAttributes(){
    return["icon"]
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
        let btncontent = "";

        imagedata.forEach((imagedata)=>{
            btncontent += `
            <button><img src="${imagedata.icon}"></button>
           
            `
        })

        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/button-list/btn-list.css';
        this.shadowRoot.appendChild(link)
/* 
        const imgPost = document.createElement('img');
        imgPost.setAttribute("src","../../../img/post.png")


        const span = document.createElement('span');
        const a = document.createElement('a')
        a.appendChild(imgPost)

        span.appendChild(btncontent)
        span.appendChild(a) */

        this.shadowRoot.innerHTML += `
        <span class="icons-nav">
        ${btncontent}
        <a href=""><img src = '../../../img/post.png'></a>
        </span>
        `

    }
}
customElements.define('btn-list', BtnList)
export default BtnList