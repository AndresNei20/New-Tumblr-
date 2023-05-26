console.log("aaaa")
const input = document.getElementById('imagen')
const test = document.getElementById("test")
input.addEventListener("change",changeI )

function changeI(){
    console.log("change")
    let file = input.files[0]
    console.log(file)

    dis addPost({ payload: {
        
        url: URL.createObjectURL(file);
    }
    })
    let image = document.createElement('img');
    console.log(URL.createObjectURL(file))
    image.src = URL.createObjectURL(file);
    test.appendChild(image)
}