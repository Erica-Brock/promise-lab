var p= new Promise(function(fulfill){
    fulfill("PROMISE VALUE");

})
p.then(function(fulfill){
    console.log(fulfill);
})
console.log("MAIN PROGRAM");