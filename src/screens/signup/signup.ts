

export enum Attributes {
    "username"="username",
    "DOB" = "DOB",
    "password"="password",
    "email" = "email"
    
}

class Signup extends HTMLElement {
    username?:string
    DOB?:number
    password?:string
    email?:any


static get observedAttributes (){
    const attributes : Record <Attributes,null> = {
        username:null,
        DOB:null,
        password:null,
        email:null,

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
        <section id="background">
        <section id="bigsec">
        <link rel="stylesheet" href="../src/screens/signup/signup.css">
        <img src="https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96"></img>
        <section id="datainput">
        <input placeholder="Username"></input>
        <input type="date" placeholder="Date of Birth"></input>
        <input type="password" placeholder="Set Password"></input>
        <input placeholder="your Email / Phone Number"></input>
        <button id="start">Log In</button>
        </section>
        </section>
        </section>
        
        `

        
    }

}

}
customElements.define("sign-up", Signup)
export default Signup;