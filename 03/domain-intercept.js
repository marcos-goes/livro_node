var fs = require("fs");
var domain = require("domain").create();

fs.readFile("foos.txt", "utf8", domain.intercept(function(data){
   console.log(data);
   domain.dispose();
}));

domain.on("error", function(error){
   console.log("Exception capturada: " + error);
});
