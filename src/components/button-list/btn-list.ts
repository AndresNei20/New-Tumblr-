import imagedata from "./imagedata";
export enum AttributeIcon{
    "icon" = "icon"
}

class BtnList extends HTMLElement {
    icon?:string
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

    AttributeChangedCallback(propName: AttributeIcon, oldValue:string|undefined, newValue:string | undefined){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=`` }
        let btnContent = "";

        imagedata.forEach((imagedata:any, index:number)=>{
            btnContent += `
            <button id="btn${index}"><img src="${imagedata.icon}"></button>    
            `
        })

        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/button-list/btn-list.css';
        this.shadowRoot?.appendChild(link)

        const iconsNav = this.ownerDocument.createElement('div')
        iconsNav.classList.add("icons-nav");
        iconsNav.innerHTML = btnContent;
        this.shadowRoot?.appendChild(iconsNav);

/*         this.shadowRoot.innerHTML += `
        <div class="icons-nav">
        ${btncontent}
        </div>
        ` */

    }
}
customElements.define('btn-list', BtnList)
export default BtnList