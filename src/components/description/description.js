import BtnAct from "../post/btn-actions/btn-act.js";
class profileDes extends HTMLElement {
    static get observedAttributes(){
     return["description","hashtags"]
    }
 
     constructor(){
         super();
         this.attachShadow({mode:'open'})
     }
 
     connectedCallback(){
         this.render();
     }
 
     attributeChangedCallback(propName, oldValue, newValue){
         this[propName] = newValue;
         this.render()
     }
 
     render(){
        
         this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="../src/components/description/description.css">
         <section class="profile">
         <p>${this.description}</p>
         <p>${this.hashtags}</p>
         <btn-act id="prueba"></btn-act>
         </section>
         `
     }
    
 }
 customElements.define('new-des', profileDes)
 export default profileDes