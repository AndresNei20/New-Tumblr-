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
 
    attributeChangedCallback(propName, oldValue, newValue){
         this[propName] = newValue;
         this.render()
     }
     render(){
        let inputscont = "";

        dataicons.forEach((dataicons,index)=>{
            inputscont += `
           <div id="btn-box>
            <button id="inp${index}"><img class="options" src="${dataicons.icon}"></button>
            <p>${dataicons.tag}</p>
            </div>
            `})

            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/input-bar/input-bar.css">
            <section id="containerbtn">
                <img id="profpic" src="https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780">
              <div id="btn_box">  ${inputscont}</div>
            </section>
            `
        
     }
    } 
customElements.define('input-bar',InputBar);
export default InputBar