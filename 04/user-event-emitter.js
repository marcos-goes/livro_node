var events = require("events");
var emitter = new events.EventEmitter();

var username = "marcos";
var password = "senha";

// Listener de eventos ON
emitter.on("userAdded", function(puser, ppass){
   console.log("Usuário adicionado (ON): " + puser);
});

// Listener de eventos ONCE
emitter.once("userAdded", function(puser){
   console.log("Usuário fudido (ONCE): " + puser);
});

// Quantidade de listeners antes de disparar os eventos
console.log("Quantidade de listeners: " + events.EventEmitter.listenerCount(emitter, "userAdded"));

// adiciona o usuário e depois emite o evento
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);

// Quantidade de listeners depois de disparar os eventos
console.log("Quantidade de listeners: " + events.EventEmitter.listenerCount(emitter, "userAdded"));

// Itera sobre todos os listeners e printa na tela.
console.log();
emitter.listeners("userAdded").forEach(function(handler){
   console.log("Corpo do listener: ")
   console.log(handler.toString());
   handler("Xurumelas");
});
