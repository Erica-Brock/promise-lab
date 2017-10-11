var theCoolness= new Promise(function(fulfill,reject){
    setTimeout(function(){
     fulfill("FULFILLED!");
    },300);
})
theCoolness.then(function(fulfill){
    console.log(fulfill);
})
