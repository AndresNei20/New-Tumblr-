import { appState, dispatch } from "../store";
import { AddFavorites } from "../store/actions";

export default class BtnFav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
     connectedCallback() {
        this.render()
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = ``
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = "Favorite"
        btn.addEventListener('click',async () => {
            dispatch(await AddFavorites(appState.posts[i]))
        })
    
}
}
customElements.define("btn-fav", BtnFav)