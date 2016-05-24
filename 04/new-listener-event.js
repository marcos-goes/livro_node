var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("newListener", function(eventName, listener){
   console.log("Adicionado listener: " + listener.toString());
   console.log("..........ao evento: " + eventName);
});

emitter.on("foo", function(){});
