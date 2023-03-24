import othericon from "./othericon";
class BtnAct extends HTMLElement {
   static get observedAttributes(){
    return["icon", "index"]
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
        let btnicons = "";

        othericon.forEach((othericon, index)=>{
            btnicons += `
            <button id="btn${index}"><img src="${othericon.icon}"></button>
            `
        })

        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/post/btn-actions/btn-act.css';
        this.shadowRoot.appendChild(link)
        
        this.shadowRoot.innerHTML = `
        <div class="icons-act">
        ${btnicons}
        </div>
        `

    }
}
customElements.define('btn-act', BtnAct)
export default BtnAct