const buttonRef = document.querySelector("button")
const bodyRef = document.querySelector("body")


function alertUser(){
    alert("You clicked the button!")
}

function changeBGPink(){
    // bodyRef.style.backgroundColor = "pink"
    bodyRef.classList.add("pinkBG")
}

function changeText(){

    if (buttonRef.textContent === "Click Me!"){
        buttonRef.textContent = "Clicked!"
    }
    else{
        buttonRef.textContent = "Click Me!"
    }
}

buttonRef.addEventListener("click", alertUser, {once: true})
buttonRef.addEventListener("click", changeBGPink)
buttonRef.addEventListener("click", changeText)

function updateImage(){
    const image = document.querySelector("#shoppingCart")
    image.setAttribute("src","images/shoppingCart.png")
    image.setAttribute("alt", "Image of shopping cart")
    image.setAttribute("height", "75")
    image.setAttribute("width", "75")
}

buttonRef.addEventListener("click", updateImage)
