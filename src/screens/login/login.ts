import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";


export enum Attributes {
    "username"="username",
    "password"="password"
}

class Login extends HTMLElement {
    username?:string
    password?:string

static get observedAttributes (){
    const attributes : Record <Attributes,null> = {
        username:null,
        password:null,
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
    propName:Attributes,
    oldValue:string|undefined,
    newValue:string|undefined,
){ switch(propName){
    default:
        this[propName]=newValue;
        break;
}
this.render();

}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=`<link rel="stylesheet" href="../src/screens/login/login.css">`
/*         this.shadowRoot.innerHTML+=`
        <link rel="stylesheet" href="../src/screens/login/login.css">
        <section id="background">
            <section id="bigsec">
                 <img src="https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96"></img>
                 <section id="datainput">
                         <input placeholder="Username"></input>
                         <input type="password" placeholder="Password"></input>
                         <button id="start">Log In</button>
                         <button id="other">Sign Up</button>
                 </section>
            </section>
        </section>
        ` */

        const sectionBack = this.ownerDocument.createElement('section')
        sectionBack.id = "background"

        const sectionBig = this.ownerDocument.createElement('section')
        sectionBig.id = "bigsec"

        const logo = this.ownerDocument.createElement('img')
        logo.src = "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96"

        const sectionInp = this.ownerDocument.createElement('section')
        sectionInp.id = "datainput"

        const userInp = this.ownerDocument.createElement('input');
        userInp.placeholder = "Username"

        const userPass = this.ownerDocument.createElement('input');
        userPass.placeholder = "Password"
        userPass.type = "password"

        const btnLog = this.ownerDocument.createElement('button');
        btnLog.id = "start"
        btnLog.innerText = "Log In"
        btnLog.addEventListener('click', () => {
            dispatch(navigate(Screens.DASHBOARD))
        })

        const btnSign = this.ownerDocument.createElement('button');
        btnSign.id = "other"
        btnSign.innerText = "Sign up"

        sectionInp.appendChild(userInp)
        sectionInp.appendChild(userPass)
        sectionInp.appendChild(btnLog)
        sectionInp.appendChild(btnSign)

        sectionBig.appendChild(logo)
        sectionBig.appendChild(sectionInp)

        sectionBack.appendChild(sectionBig)

        this.shadowRoot.appendChild(sectionBack)








        const logBtn = this.ownerDocument.getElementById('start');
        logBtn?.addEventListener('click', ()=>{
            console.log('hola, funciona')
        })
        //.addEventlistener(() => {
       //     dispatch(changeScreen("login"))
       //s })

        
    }

}

}
customElements.define("log-in", Login)
export default Login;