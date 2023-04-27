import ApiOtherIcon from "../../../services/ApiOtherIcon";
console.log('STIVEN ES EL MEJOR PROFESOR DEL MUNDO')
console.log(await ApiOtherIcon.get())

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
/* 
 */ //Aca se hizo un cambio del MOCK

/*         const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/post/btn-actions/btn-act.css';
        this.shadowRoot.appendChild(link)
         */
        if(this.shadowRoot)this.shadowRoot.innerHTML = ``
/*         <link rel="stylesheet" href="../src/components/post/btn-actions/btn-act.css">
        <div class="icons-act">
        ${btnIcons}
        </div>
        ` */

    }
}
customElements.define('btn-act', BtnAct)
export default BtnAct