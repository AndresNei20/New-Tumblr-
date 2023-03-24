
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
         <section class="profile">
         <p>${this.description}</p>
         <p>${this.hashtags}</p>
         </section>
         `
     }
    
 }
 customElements.define('new-des', profileDes)
 export default profileDes