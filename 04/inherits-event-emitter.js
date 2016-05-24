var EventEmitter = require("events").EventEmitter;
var util = require("util");

function UserEventEmitter(){
   EventEmitter.call(this);

   this.addUser = function(username, password){
      // Adiciona o usuário e depois emite um evento
      this.emit("UserAdded", username, password);
   };

};

util.inherits(UserEventEmitter, EventEmitter);

var user = new UserEventEmitter();
var username = "marcos";
var password = "senha";

user.on("UserAdded", function(puser, ppass){
   console.log("Usuário cadastrado: " + puser);
});

user.addUser(username, password);
console.log(user instanceof EventEmitter);
