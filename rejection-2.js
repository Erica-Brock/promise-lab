var p= new Promise(function(fulfill,reject){
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));
})
function onReject(error){
    console.log(error.message);
}
p.then(function(fulfill){
    console.log(fulfill);
    onReject(error);
},function(reject){
    console.log(reject);
    onReject(error);
})
