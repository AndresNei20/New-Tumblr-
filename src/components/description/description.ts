import BtnAct from "../post/btn-actions/btn-act";
export enum AttributeDesc{
    "description" = "description",
    "createdAt" = "createdAt"
}
class profileDes extends HTMLElement {
    description?: string;
     createdAt?: string;
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
 
     attributeChangedCallback(propName: AttributeDesc, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            default:
             this[propName] = newValue;
                break;
        }

     }
 
     render(){
        if(this.shadowRoot) 
         this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="../src/components/description/description.css">
         <section class="profile">
         <p class="description">${this.description}</p>
         <p>${this.createdAt}</p>
         <p>new post!</p>
         <btn-act id="prueba"></btn-act>
         <btn_fav></btn_fav>
         </section>
         `
         const btn_fav = this.ownerDocument.createElement('button');
         btn_fav.innerText = "Favorite"
 
         this.shadowRoot?.appendChild(btn_fav)
         
     }
    
 }
 customElements.define('new-des', profileDes)
 export default profileDes