const buttonEnviar = document.getElementById('enviar');
const CaixaMensagem = document.getElementById('texto');
const Chat = document.getElementById('mensagens');

const socket = io();

buttonEnviar.addEventListener('click', ()=> {
    if(CaixaMensagem.value !== ""){
        socket.emit('nova mensagem', CaixaMensagem.value);
        CaixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg)=>{
   const elementoMsg = document.createElement('li');
   elementoMsg.textContent = msg;
   elementoMsg.classList.add('mensagem');
   Chat.appendChild(elementoMsg);
});
