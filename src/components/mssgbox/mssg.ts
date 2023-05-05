import { addObserver } from "../../store/index";
import "../../components/export"


export enum AttributeMssg{
    "userimage" = "userimage",
    "username" = "username"
}
class MssgBox extends HTMLElement {
    userimage?:string ="";
    username?:string = "";

   static get observedAttributes(){
    return["userimage","username"]
   }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: AttributeMssg, oldValue: string | undefined, newValue: string | undefined){
        if (propName===propName) {
            this[propName] = newValue
                
        }
    }
    
    render(){
     
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mssgbox/mssg.css">
        <section id="profile">
        <img id="img" src="${this.userimage}"></img>
        <p id="this">${this.username}</p>
        </section>
        <section id="message">
        <p> Hello There!</p>
        </section>
        
        `
    }
   
}
customElements.define('message-box', MssgBox)
export default MssgBox