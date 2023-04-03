const buttonRef = document.querySelector("button")
// const bodyRef = document.querySelector("body")


// function alertUser(){
//     alert("You clicked the button!")
// }

// function changeBGPink(){
//     // bodyRef.style.backgroundColor = "pink"
//     bodyRef.classList.add("pinkBG")
// }

// function changeText(){

//     if (buttonRef.textContent === "Click Me!"){
//         buttonRef.textContent = "Clicked!"
//     }
//     else{
//         buttonRef.textContent = "Click Me!"
//     }
// }

// buttonRef.addEventListener("click", alertUser, {once: true})
// buttonRef.addEventListener("click", changeBGPink)
// buttonRef.addEventListener("click", changeText)

// function updateImage(event){
//     const image = document.querySelector("#shoppingCart")
//     image.setAttribute("src","images/shoppingCart.png")
//     image.setAttribute("alt", "Image of shopping cart")
//     image.setAttribute("height", "75")
//     image.setAttribute("width", "75")
// }

// buttonRef.addEventListener("click", updateImage)

const buttonContainerRef = document.querySelector(".button-container")
function bgChange(event){
    if (event.target.tagName === "BUTTON"){ //Make it only change background colour for button
        event.target.classList.add("greenBG")
    }

}

function textColorChange(event){
    let colorValue = event.target.textContent
    event.target.style.color = colorValue
}

buttonContainerRef.addEventListener("mouseover",bgChange)
buttonContainerRef.addEventListener("click",textColorChange)

function addNewButtonAndPara(){
    let newButton = document.createElement("button")
    let newPara = document.createElement("p")

    newButton.innerText = "Purple"
    newPara.innerText = "some text"

    document.body.appendChild(newButton)
    document.body.appendChild(newPara)

    newButton.addEventListener("mouseover", bgChange)
    newButton.addEventListener("click", textColorChange)

}

buttonRef.addEventListener("click", addNewButtonAndPara)

