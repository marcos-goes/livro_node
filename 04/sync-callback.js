function add(x, y, cb){
   cb(x + y);
}
add(2, 3, console.log);
console.log("A soma é: ");
