import dataicons from "./dataicons.js";
class InputBar extends HTMLElement {
    static get observedAttributes(){
     return["dataicons","index"]
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
        let inputscont = "";

        dataicons.forEach((dataicons,index)=>{
            inputscont += `
           <div id="btn_box>
            <button id="inp${index}"><img src="${dataicons.icon}"></button>
            <p>${dataicons.tag}</p>
            </div>
            `})

            this.shadowRoot.innerHTML = `
            <section id="containerbtn">
                <img src="../../../img/font.png">
                ${inputscont}
            </section>
            `
        
     }
    } 
customElements.define('input-bar',InputBar);
export default InputBar