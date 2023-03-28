import datalikes from "./datalikes";
class LikeNote extends HTMLElement {
    likes = "";
    static get observedAttributes(){
    return["likes"]
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
        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.href = '../src/components/like-note/like-note.css';
        this.shadowRoot.appendChild(link)

        this.shadowRoot.innerHTML += `
        <div class="like-box">
        <p>${datalikes.likes}</p>
        </div>
        `

    }
}
customElements.define('like-note', LikeNote)
export default LikeNote