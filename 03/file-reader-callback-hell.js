var fs = require("fs");
var fileName = "foo.txt";
//var fileName = ".";

fs.exists(fileName, function(exists){
   if(exists){
      fs.stat(fileName, function(error, stats){
         if(error){
            throw error;
         }

         if(stats.isFile()) {
            fs.readFile(fileName, "utf8", function(error, data){
               if(error){
                  throw error;
               }

               console.log(data);
            });
         }
      });
   }
});
console.log("Lendo o arquivo. Simulação de Callback-Hell");
