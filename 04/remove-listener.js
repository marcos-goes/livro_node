var events = require("events");
var emitter = new events.EventEmitter();

function handler(){
   console.log("Listener qualquer...");
}

emitter.on("foo", handler);
//emitter.removeAllListeners();
emitter.removeListener("foo", handler);

emitter.emit("foo");
