

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
        this.shadowRoot.innerHTML=``
        this.shadowRoot.innerHTML+=`
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
        
        `
        //.addEventlistener(() => {
       //     dispatch(changeScreen("login"))
       //s })

        
    }

}

}
customElements.define("log-in", Login)
export default Login;