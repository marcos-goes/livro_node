var intervalId = setInterval(function(string1, string2){
   console.log(string1 + " " + string2);
}, 2000, "Xurumelas", "doces");

//clearInterval(intervalId);
intervalId.unref();
intervalId.ref();
