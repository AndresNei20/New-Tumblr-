import dataicons from "./dataicons";
export enum AttributeInpBar{
    "dataicons" = "dataicons"
}
class InputBar extends HTMLElement {
    dataicons?:string
    static get observedAttributes(){
     return["dataicons"]
    }
 
     constructor(){
         super();
         this.attachShadow({mode:'open'})
     }
 
     connectedCallback(){
         this.render();
     }
 
    attributeChangedCallback(propName: AttributeInpBar, oldValue: string | undefined, newValue: string |undefined){
         this[propName] = newValue;
         this.render()
     }
     render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `link rel="stylesheet" href="../src/components/input-bar/input-bar.css`
        let inputscont = "";

        dataicons.forEach((dataicons,index: number)=>{
            inputscont += `
           <div id="btn-box>
            <button id="inp${index}"><img class="options" src="${dataicons.icon}"></button>
            <p>${dataicons.tag}</p>
            </div>
            `})
            if(this.shadowRoot)this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/input-bar/input-bar.css">
            <section id="containerbtn">
                <img id="profpic" src="https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780">
              <div id="btn_box">  ${inputscont}</div>
            </section>
            `

            
            const sectionContainer = this.ownerDocument.createElement('section');
            sectionContainer.id = "containerbtn";

            const imgPic = this.ownerDocument.createElement('img');
            imgPic.id = "profpic";
            imgPic.src = "https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780"

            const divBtn = this.ownerDocument.createElement('div');
            divBtn.id = "btn_box";

            const divBox1 = this.ownerDocument.createElement('div');
            divBox1.id = "btn-box";
                const btnText = this.ownerDocument.createElement('button')
                btnText.id = "inp0"
                btnText.addEventListener('click', () => {console.log('it works')})
                const imgText = this.ownerDocument.createElement('img')
                imgText.className = "options"
                imgText.src = "../../../img/font.png" 
                btnText.appendChild(imgText)
            const pText = this.ownerDocument.createElement('p')
            pText.textContent = "Text"

            divBox1.appendChild(btnText)
            divBox1.appendChild(pText)

            const divBox2 = this.ownerDocument.createElement('div');
            divBox2.id = "btn-box";
                const btnPhoto = this.ownerDocument.createElement('button')
                btnPhoto.id = "inp1"
                const imgPhoto = this.ownerDocument.createElement('img')
                imgPhoto.className = "options"
                imgPhoto.src = "../../../img/photo.png" 
                btnPhoto.appendChild(imgPhoto)
            const pPhoto = this.ownerDocument.createElement('p')
            pPhoto.textContent = "Photo"

            divBox2.appendChild(btnPhoto)
            divBox2.appendChild(pPhoto)

            const divBox3 = this.ownerDocument.createElement('div');
            divBox3.id = "btn-box";
                const btnQuote = this.ownerDocument.createElement('button')
                btnQuote.id = "inp2"
                const imgQuote = this.ownerDocument.createElement('img')
                imgQuote.className = "options"
                imgQuote.src = "../../../img/quote.png" 
                btnQuote.appendChild(imgQuote)
            const pQuote = this.ownerDocument.createElement('p')
            pQuote.textContent = "Quote"

            divBox3.appendChild(btnQuote)
            divBox3.appendChild(pQuote)

            const divBox4 = this.ownerDocument.createElement('div');
            divBox4.id = "btn-box";
                const btnAudio = this.ownerDocument.createElement('button')
                btnAudio.id = "inp3"
                const imgAudio = this.ownerDocument.createElement('img')
                imgAudio.className = "options"
                imgAudio.src = "../../../img/audio.png" 
                btnAudio.appendChild(imgAudio)
            const pAudio = this.ownerDocument.createElement('p')
            pAudio.textContent = "Audio"

            divBox4.appendChild(btnAudio)
            divBox4.appendChild(pAudio)

            const divBox5 = this.ownerDocument.createElement('div');
            divBox5.id = "btn-box";
                const btnVideo = this.ownerDocument.createElement('button')
                btnVideo.id = "inp4"
                const imgVideo = this.ownerDocument.createElement('img')
                imgVideo.className = "options"
                imgVideo.src = "../../../img/video.png" 
                btnVideo.appendChild(imgVideo)
            const pVideo = this.ownerDocument.createElement('p')
            pVideo.textContent = "Video"

            divBox5.appendChild(btnVideo)
            divBox5.appendChild(pVideo)

                

                divBtn.appendChild(divBox1)
                divBtn.appendChild(divBox2)
                divBtn.appendChild(divBox3)
                divBtn.appendChild(divBox4)
                divBtn.appendChild(divBox5)

                sectionContainer.appendChild(imgPic)
                sectionContainer.appendChild(divBtn)

                this.shadowRoot?.appendChild(sectionContainer)
        
     }
    } 
customElements.define('input-bar',InputBar);
export default InputBar