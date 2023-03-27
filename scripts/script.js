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
