var fs = require("fs");

fs.readFile("food.txt", "utf8", function(error, data){
   if(error){
      throw error;
   }

   console.log(data);
});

console.log("Lendo o arquivo...");

process.on("uncaughtException", function(error){
   console.log("Exception não foi tratada!");
   console.log(error);
});
