const htpp = require('http');
const express = require('express');
const aplicacao = express();

const servidorHTTP = htpp.createServer(aplicacao);
const io = require('socket.io')(servidorHTTP);

io.addListener('connection', (socket)=>{
    console.log('conectou');
    socket.addListener('nova mensagem', (msg)=>{
       io.emit('nova mensagem', msg);

    })
})


aplicacao.use(express.static('public'));


servidorHTTP.listen(1000);
