var results = [];

setTimeout(function(){
   console.log("Tarefa 1.");
   results[0] = 1;
}, 3000);

setTimeout(function(){
   console.log("Tarefa 2.");
   results[1] = 2;
}, 2000);

setTimeout(function(){
   console.log("Tarefa 3.");
   results[2] = 3;
}, 1000);

console.log("Resultado: " + results);
