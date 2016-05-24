function isNegative(n, cb){
   if(n<0){
      return process.nextTick(function(){
         cb(true);
      });
   }
   return process.nextTick(function(){
      cb(false);
   });

}

isNegative(4, console.log);
isNegative(-2544, console.log);
