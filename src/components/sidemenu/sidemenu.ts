import "../../components/export"
import { MssgBox } from "../../components/export";
import { addObserver, dispatch } from "../../store";

export enum SideMenuA {
   "username"="username"
}

class SideMenu extends HTMLElement{
    username?: string
    
    static get observedAttributes (){
        const attributes : Record <SideMenuA,null> = {
            username:null,
            
        }
        return Object.keys(attributes);
    }
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(
        propName:SideMenuA,
        oldValue:string|undefined,
        newValue:string|undefined,
    ){ switch(propName){
        default:
            this[propName]=newValue;
            break;
    }}
   
    render(){

        if(this.shadowRoot)
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/sidemenu/sidemenu.css">
       
        <section id="whole">
        <button id="button">All Messages</button>
        <div id="all">
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>
        </div>
        </section>
        

        `
       
       
        

    }}

customElements.define('side-menu', SideMenu)
export default SideMenu
