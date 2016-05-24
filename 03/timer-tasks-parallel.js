var async = require("async");

async.parallel({
   um: function(callback){
      setTimeout(function(){
         console.log("Tarefa 1.");
         callback(null, 1);
      }, 3000);
   },

   dois: function(callback){
      setTimeout(function(){
         console.log("Tarefa 2.");
         callback(null, 2);
      }, 2000);
   },

   tres: function(callback){
      setTimeout(function(){
         console.log("Tarefa 3.");
         callback(null, 3);
      }, 1000);
   },

   quatro: function(callback){
      setTimeout(function(){
         console.log("Tarefa 4.");
         callback(null, "Jumenticio");
      }, 500);
   }

}, function(error, results){
      if(error){
         console.log(error.toString());
      } else{
         console.log("Resultados: " + results);
      }

});
