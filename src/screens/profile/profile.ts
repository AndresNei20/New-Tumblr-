import '../../components/export'

export default class Profile extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="../src/screens/profile/profile.css">`}
       
        const myInput = this.ownerDocument.createElement('app-input');
        myInput.innerText = "info del store"

        const navBar = this.ownerDocument.createElement('nav-bar')
        this.shadowRoot?.appendChild(navBar)

        const back_div = this.ownerDocument.createElement('div')
        
        this.shadowRoot?.appendChild(back_div)

        const bot_section = this.ownerDocument.createElement('section')
        bot_section.className = "sectionWhite"

        const profilePic = this.ownerDocument.createElement('img')
        profilePic.src = `https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg`
        bot_section.appendChild(profilePic)
        const userName = this.ownerDocument.createElement('h3')
        userName.innerText = "@Paola"
        userName.className = "userName"
        bot_section.appendChild(userName)
        const userDesc = this.ownerDocument.createElement('p')
        userDesc.innerText = "My Name is Paola"
        bot_section.appendChild(userDesc)

        const whiteSection = this.ownerDocument.createElement('section');
        bot_section?.appendChild(whiteSection)

        const subTittle = this.ownerDocument.createElement('h3')
        subTittle.innerText = "Username"
        const inputOne = this.ownerDocument.createElement('input')
        inputOne.placeholder = 'Paola'
        bot_section.appendChild(subTittle)
        bot_section.appendChild(inputOne)
        
        const subTittle2 = this.ownerDocument.createElement('h3')
        subTittle2.innerText = "Email"
        const inputTwo = this.ownerDocument.createElement('input')
        inputTwo.placeholder = 'Paola@gmail.com'
        bot_section.appendChild(subTittle2)
        bot_section.appendChild(inputTwo)
        
        const subTittle3 = this.ownerDocument.createElement('h3')
        subTittle3.innerText = "Password"
        const inputThree = this.ownerDocument.createElement('input')
        inputThree.placeholder = 'Forget my password?'
        bot_section.appendChild(subTittle3)
        bot_section.appendChild(inputThree)

        const subTittle4 = this.ownerDocument.createElement('h3')
        subTittle4.innerText = "Language"
        const inputForth = this.ownerDocument.createElement('input')
        inputForth.placeholder = 'English'
        bot_section.appendChild(subTittle4)
        bot_section.appendChild(inputForth)

        const subTittle5 = this.ownerDocument.createElement('h3')
        subTittle5.innerText = "Blocked Tumblr"
        const inputFifth = this.ownerDocument.createElement('input')
        inputFifth.placeholder = 'None'
        bot_section.appendChild(subTittle5)
        bot_section.appendChild(inputFifth)

        const subTittle6 = this.ownerDocument.createElement('h3')
        subTittle6.innerText = "Allow Notifications"
        const inputSix = this.ownerDocument.createElement('input')
        inputSix.placeholder = 'Yes'
        bot_section.appendChild(subTittle6)
        bot_section.appendChild(inputSix)

        const subTittle7 = this.ownerDocument.createElement('h3')
        subTittle7.innerText = "Private account"
        const inputSeven = this.ownerDocument.createElement('input')
        inputSeven.placeholder = 'No'
        bot_section.appendChild(subTittle7)
        bot_section.appendChild(inputSeven)

        back_div.appendChild(bot_section)

        const saveChangesBtn = this.ownerDocument.createElement('button')
        saveChangesBtn.innerText = "Save" 
        saveChangesBtn.className = "btnSave"
        bot_section.appendChild(saveChangesBtn)
        this.shadowRoot?.appendChild(back_div)

        const signOutBtn = this.ownerDocument.createElement('button');
        signOutBtn.className = "signOutBtn";
        signOutBtn.innerText = "Sign Out";
        signOutBtn.addEventListener('click', () => {
            
        })
        back_div.appendChild(signOutBtn)

        const deleteBtn = this.ownerDocument.createElement('button');
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerText = "Delete Account";
        back_div.appendChild(deleteBtn)



    }
}
customElements.define('profile-screen', Profile)