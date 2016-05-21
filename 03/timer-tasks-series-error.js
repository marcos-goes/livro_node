var async = require("async");

async.series([
   function(callback){
      setTimeout(function(){
         console.log("Tarefa 1.");
         callback(null, 1);
      }, 3000);
   },

   function(callback){
      setTimeout(function(){
         console.log("Tarefa 2.");
         callback(new Error("Problema na Tarefa 2."), 2);
      }, 2000);
   },

   function(callback){
      setTimeout(function(){
         console.log("Tarefa 3.");
         callback(null, 3);
      }, 1000);
   },

   function(callback){
      setTimeout(function(){
         console.log("Tarefa 4.");
         callback(null, "Jumenticio");
      }, 1000);
   }

], function(error, results){
      if(error){
         console.log(error.toString());
      } else{
         console.log("Resultados: " + results);   
      }

});
