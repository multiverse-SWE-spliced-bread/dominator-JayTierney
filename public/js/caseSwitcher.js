let para = document.getElementById('patrick')
let txt = para.innerText

const qButton = document.getElementById('quiet-btn')
const lButton = document.getElementById('loud-btn')
const sButton = document.getElementById('sarc-btn')

qButton.addEventListener('click', lowerCase)

function lowerCase(e){
    para.innerText = txt.toLowerCase()
}

lButton.addEventListener('click', upperCase)

function upperCase(u){
    para.innerText = txt.toUpperCase()
}
sButton.addEventListener('click', sarcCase)

function sarcCase(s){
    para.innerText = txt.split("").map((c,i) => i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()).join("")
}