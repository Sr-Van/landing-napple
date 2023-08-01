//checking the side radio icons

const btnAside1 = document.querySelector(".side-btn1")
const btnAside2 = document.querySelector(".side-btn2")
const btnAside3 = document.querySelector(".side-btn3")
const btnDown1 = document.querySelector(".arrow-btn1")
const btnDown2 = document.querySelector(".arrow-btn2")

//declaring header const
const btnHeader = document.querySelector(".msg-thanks")
const buyIcon = document.querySelector(".buy-span")
const buyText = document.querySelector(".buy-text")

//declaring first section const
const firstTitle = document.querySelector(".first-title")
const chamadaTitle = document.querySelector(".chamada")

//declaring second section const
const cont1 = document.querySelector(".cont1")
const cont2 = document.querySelector(".cont2")
const cont3 = document.querySelector(".cont3")
const smartWCont = document.querySelector(".cont2")
const smartWtext = document.querySelector(".txt-img")
const airpoCont = document.querySelector(".cont3")
const airpotext = document.querySelector(".txt-airpod")

//declaring third section const
const thirdSecImg = document.querySelector(".cont-sec-3")
const thirdSecHeader = document.querySelector(".header-sec-3")
const thirdSecFooter = document.querySelector(".footer-sec-3")

//hover effect on the second section two cards
smartWCont.addEventListener("mouseover", ()=>{
    hoverTextCont(smartWtext)
})

airpoCont.addEventListener("mouseover", ()=>{
    hoverTextCont(airpotext)
})

btnHeader.addEventListener("click", ()=>{
    buyAnim(buyIcon, btnHeader, buyText)
})

//buttons with event listener to when clicked, call some functions with some props

btnAside1.addEventListener("click", ()=>{
    checkBtn(btnAside1)
    uncheckBtn(btnAside2, btnAside3)
    sideTextAnim(firstTitle, 1.5)
    sideTextAnim(chamadaTitle, 2)
})

btnAside2.addEventListener("click", ()=>{
    checkBtn(btnAside2)
    uncheckBtn(btnAside1, btnAside3)
    sideTextAnim(cont1, 1)
    sideTextAnim(cont2, 2)
    sideTextAnim(cont3, 2)
})

btnAside3.addEventListener("click", ()=>{
    checkBtn(btnAside3)
    uncheckBtn(btnAside1, btnAside2)
    sideTextAnim(thirdSecImg, 3)
    upToDownTextAnim(thirdSecHeader)
    sideTextAnim(thirdSecFooter, 1.5)
})

btnDown1.addEventListener("click", ()=>{
    checkBtn(btnAside2)
    uncheckBtn(btnAside1, btnAside3)
})

btnDown2.addEventListener("click", ()=>{
    checkBtn(btnAside3)
    uncheckBtn(btnAside1, btnAside2)
})

//functions to check and uncheck the buttons from my side navigator

function checkBtn(btn){
    btn.innerHTML = `
        <span class="material-symbols-sharp">
        radio_button_checked
        </span>
    `
}

function uncheckBtn(btn1, btn2){
    let changer = `
            <span class="material-symbols-sharp">
            radio_button_unchecked
            </span>
        ` 
    btn1.innerHTML = changer
    btn2.innerHTML = changer
}

//function to hover the box with the card i want to show the text with the blur animation
function hoverTextCont(box){
    box.style.opacity = "1"
    box.classList.add("blur-anim")

    setTimeout(() => {
        box.style.opacity = "0"
        box.classList.remove("blur-anim")
    }, 10000);
}

//functions to anim and be called the animation for each click, with timeout 3,5sec preventing spam
function sideTextAnim(box, timing){
    box.style.animation = `sidetext ${timing}s ease-out`
    setTimeout(() => {
        box.style.animation = "none"
    }, 3500);
}

function upToDownTextAnim(box){
    box.style.animation = "upToDownAnim 1s ease-out"
    setTimeout(() => {
        box.style.animation = "none"
    }, 4500);
}

function buyAnim(icon, button, text){
    button.style.animation = "bgColor 2.3s ease-in"
    text.textContent = "Redirecting..."
    setTimeout(() => {
        text.textContent = "Thank you!"
        button.classList.add("bg-buy-anim")
        icon.innerHTML = "done"
        setTimeout(() => {
            text.textContent = "Buy your Dreams!"
            button.classList.remove("bg-buy-anim")
            icon.style.transform = "translateX(0px)"
            icon.innerHTML = "shopping_bag"
        }, 2000)
        icon.style.transform = "translateX(150px)"
    }, 2000);
}















