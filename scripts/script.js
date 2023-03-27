const buttonRef = document.querySelector("button")
console.log(buttonRef)

function alertUser(){
    alert("You clicked the button!")
}

buttonRef.addEventListener("click", alertUser, {once: true})
