import "../../components/export"
import { MssgBox } from "../../components/export";
import { addObserver, dispatch } from "../../store";

export enum MessangerScreenApp {
    "username" = "username"
}

class MessangerScreen extends HTMLElement {
    username?: string

    static get observedAttributes() {
        const attributes: Record<MessangerScreenApp, null> = {
            username: null,

        }
        return Object.keys(attributes);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: MessangerScreenApp,
        oldValue: string | undefined,
        newValue: string | undefined,
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    render() {

        if (this.shadowRoot)
            this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/screens/messanges/messages.css">
       
        <section id="whole">
            <nav-bar></nav-bar>
            <section id="row">
                <div id="conversation">
                <message-bar></message-bar>
                    <message-box id="box" username="Andres087" userimage="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"></message-box>
                    <message-box id="box" username="P@oLA21" userimage="https://www.shutterstock.com/image-vector/we-have-winner-vector-banner-600w-616060073.jpg"></message-box>
                    <message-box id="box" username="User404" userimage="https://www.shutterstock.com/image-illustration/shorthaired-blonde-girl-scared-face-600w-2267707401.jpg"></message-box>
                </div>
                <side-menu id="sidemenu"></side-menu>
            </section>
        </section>
        

        `




    }
}

customElements.define('messanges-screen', MessangerScreen)
export default MessangerScreen
