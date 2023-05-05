
export enum AttributeBar{
    "type" = "type"
}
class MssgInputBar extends HTMLElement {
    type?:string
    static get observedAttributes(){
     return["type"]
    }
 
     constructor(){
         super();
         this.attachShadow({mode:'open'})
     }
 
     connectedCallback(){
         this.render();
     }
 
    attributeChangedCallback(propName: AttributeBar, oldValue: string | undefined, newValue: string |undefined){
         this[propName] = newValue;
         this.render()
     }
     render(){
        
            if(this.shadowRoot)this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/message-bar/message-bar.css">
            <section id="containerbtn">
                <button id=button>New</button>
                <button id=button>Starred</button>
                <button id=button>All Messages</button>
            </section>
            `
        
     }
    } 
customElements.define('message-bar',MssgInputBar);
export default MssgInputBar