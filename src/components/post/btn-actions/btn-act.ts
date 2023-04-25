import othericon from "./othericon";

export enum AttributeBtnAct{
    "icon" = "icon",
}
class BtnAct extends HTMLElement {
    icon?: string
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

    AttributeChangedCallback(propName: AttributeBtnAct, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    render(){
        let btnIcons = "";

        othericon.forEach((othericon, index: number)=>{
            btnIcons += `
            <button id="btn${index}"><img src="${othericon.icon}"></button>
            `
        })

/*         const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/post/btn-actions/btn-act.css';
        this.shadowRoot.appendChild(link)
         */
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/post/btn-actions/btn-act.css">
        <div class="icons-act">
        ${btnIcons}
        </div>
        `

    }
}
customElements.define('btn-act', BtnAct)
export default BtnAct