var timeoutId = setTimeout(function(string1, string2){
   console.log(string1 + " " + string2);
}, 2000, "Xurumelas", "doces");

clearTimeout(timeoutId);
