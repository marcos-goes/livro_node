var domain = require("domain");
var d1 = domain.create();
var d2 = domain.create();

d1.run(function(){
   d2.add(setTimeout(function(){
      throw new Error("Erro de teste");
   }, 1));
});

d2.on("error", function(error){
   console.log("Capturado por d2: " + error);
});

d1.on("error", function(error){
   console.log("Capturado por d1: " + error);
});
