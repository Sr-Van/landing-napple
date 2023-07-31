//checking the side radio icons

const btnAside1 = document.querySelector(".side-btn1")
const btnAside2 = document.querySelector(".side-btn2")
const btnAside3 = document.querySelector(".side-btn3")
const btnDown1 = document.querySelector(".arrow-btn1")
const btnDown2 = document.querySelector(".arrow-btn2")

const btnHeader = document.querySelector(".msg-thanks")

const smartWCont = document.querySelector(".cont2")
const smartWtext = document.querySelector(".txt-img")

smartWCont.addEventListener("mouseover",()=>{
    smartWtext.style.opacity = "1"
    smartWtext.classList.add("blur-anim")

    setTimeout(() => {
        smartWtext.style.opacity = "0"
        smartWtext.classList.remove("blur-anim")
    }, 10000);
})

btnHeader.addEventListener("click", ()=>{
    alert("Thank you for testing, redirecting to my channel. Contact me on e-mail: vanderson.dev1@gmail.com")
})

btnAside1.addEventListener("click", ()=>{
    checkBtn(btnAside1)
    uncheckBtn(btnAside2, btnAside3)
})

btnAside2.addEventListener("click", ()=>{
    checkBtn(btnAside2)
    uncheckBtn(btnAside1, btnAside3)
})

btnAside3.addEventListener("click", ()=>{
    checkBtn(btnAside3)
    uncheckBtn(btnAside1, btnAside2)
})

btnDown1.addEventListener("click", ()=>{
    checkBtn(btnAside2)
    uncheckBtn(btnAside1, btnAside3)
})

btnDown2.addEventListener("click", ()=>{
    checkBtn(btnAside3)
    uncheckBtn(btnAside1, btnAside2)
})

function checkBtn(btn){
    btn.innerHTML = `
        <span                                    class="material-symbols-sharp">
        radio_button_checked
        </span>
    `
}

function uncheckBtn(btn1, btn2){
    let changer = `
            <span                                    class="material-symbols-sharp">
            radio_button_unchecked
            </span>
        ` 
    btn1.innerHTML = changer
    btn2.innerHTML = changer
}





























/* btnAside1.addEventListener("click", ()=>{
    checkBtn(btnAside1)
    uncheckBtn(btnAside2, btnAside3)
})

btnAside2.addEventListener("click", ()=>{
    checkBtn(btnAside2)
    uncheckBtn(btnAside1, btnAside3)
})

btnAside3.addEventListener("click", ()=>{
    checkBtn(btnAside3)
    uncheckBtn(btnAside1, btnAside2)
})

function checkBtn(btn){
    btn.innerHTML = `
        <span                                    class="material-symbols-sharp">
        radio_button_checked
        </span>
    `
}


function uncheckBtn(btn1, btn2){
    let changer = `
            <span                                    class="material-symbols-sharp">
            radio_button_unchecked
            </span>
        `
    btn1.innerHTML = changer
    btn2.innerHTML = changer
}

 */
