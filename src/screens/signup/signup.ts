import { dispatch } from "../../store"
import { AddUser, navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import firebase from "../../utils/firebase"

const signUpForm = {
    uid: "",
    username: "",
    birthday: "",
    password: "",
    email: "",
    img: "",
}

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
    if(this.shadowRoot)this.shadowRoot.innerHTML = ``;
    /* {this.shadowRoot.innerHTML=``
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
    } */
 /*    <link rel="stylesheet" href="../src/screens/signup/signup.css"> */

    const css = this.ownerDocument.createElement('link')
    css.rel = "stylesheet";
    css.href = "../src/screens/signup/signup.css"

    const sectionBack = this.ownerDocument.createElement('section')
    sectionBack.id = "background";
    const sectionBig = this.ownerDocument.createElement('section')
    sectionBig.id = "bigsec";
    const dataInput = this.ownerDocument.createElement('section')
    dataInput.id = "datainput";

    const imgLogo = this.ownerDocument.createElement('img');
    imgLogo.src = "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96"
    imgLogo.id = "logoimg"
    
    sectionBig.appendChild(imgLogo)
    imgLogo.addEventListener('click', () => {
        dispatch(navigate(Screens.LOGIN))
    })

    const userInp = this.ownerDocument.createElement('input')
    userInp.placeholder = "Username"
    userInp.addEventListener('change', (e:any) => {
        console.log(e.target.value)
        signUpForm.username = e.target.value
    })
    
    const birthInp = this.ownerDocument.createElement('input')
    birthInp.placeholder = "Date of Birth"
    birthInp.type = "date"
    birthInp.addEventListener('change', (e:any) => {
        console.log(e.target.value)
        signUpForm.birthday = e.target.value
    })
    
    const passInp = this.ownerDocument.createElement('input')
    passInp.placeholder = "Set Password"
    passInp.type = "password"
    passInp.addEventListener('change', (e:any) => {
        console.log(e.target.value)
        signUpForm.password = e.target.value
    })
    
    const emailInp = this.ownerDocument.createElement('input')
    emailInp.placeholder = "Your email"
    emailInp.addEventListener('change', (e:any) => {
        console.log(e.target.value)
        signUpForm.email = e.target.value
    })
    
    const logBtn = this.ownerDocument.createElement('button')
    logBtn.textContent = "Log In"
    logBtn.id = "start"
    logBtn.addEventListener('click', async() => {
        const user = await firebase.registerUser(signUpForm)
        dispatch(AddUser(signUpForm))
        console.log(user);
        if(user){
            dispatch(navigate(Screens.DASHBOARD))
            sessionStorage.clear()
            location.reload()
        }
    } )
    

    this.shadowRoot?.appendChild(css);
    dataInput.appendChild(userInp);
    dataInput.appendChild(birthInp);
    dataInput.appendChild(emailInp);
    dataInput.appendChild(passInp);
    dataInput.appendChild(logBtn);
    


    sectionBig.appendChild(dataInput);
    sectionBack.appendChild(sectionBig);


    this.shadowRoot?.appendChild(sectionBack);

}

}
customElements.define("sign-up", Signup)
export default Signup;