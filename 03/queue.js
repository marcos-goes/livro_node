var async = require("async");
var threshold = 10;

var queue = async.queue(function(task, callback){
   console.log("QUEUE: " + queue.length());
   if(queue.length() > threshold)
      queue.concurrency = 8;
   console.log(task);
   callback(null);
}, 4);

var i=0;

setInterval(function(){
   queue.push({
      id: i
   }, function(error){
      console.log("Tarefa finalizada: " + i);
      i++;
   });
}, 300);
