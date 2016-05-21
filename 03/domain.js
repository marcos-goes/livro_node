var fs = require("fs");
var domain = require("domanin").create();

domain.run(function(){
   fs.readFile("", "utf8", function(error, data){
      if(error){
         throw error;
      }
      console.log(data);
      domain.dispose();
   });
});

domain.on("error", function(error){
   console.log("Exception capturada: " + error);
})
