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

    AttributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render()
    }

    render(){
        let btncontent = "";

        imagedata.forEach((imagedata, index)=>{
            btncontent += `
            <button id="btn${index}"><img src="${imagedata.icon}"></button>
           
            `
        })

        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/button-list/btn-list.css';
        this.shadowRoot.appendChild(link)

        this.shadowRoot.innerHTML += `
        <div class="icons-nav">
        ${btncontent}
        </div>
        `

    }
}
customElements.define('btn-list', BtnList)
export default BtnList