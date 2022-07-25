

const sendbutton = document.getElementById('send-btn')
sendbutton.addEventListener('click', message)


function message(){
const chatMessage = document.querySelector('input').value;
const para = document.createElement("p");
para.innerText = chatMessage;
document.body.appendChild(para);
document.querySelector('input').value = ''
}

