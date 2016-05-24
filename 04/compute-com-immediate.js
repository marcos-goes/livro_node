var i=0;

function compute(){
   if(i<1000000000) {
      console.log(i);
      i++;
      setImmediate(compute);
   }
}

compute();
console.log("Finalizou...");
