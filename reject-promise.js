var p= new Promise(function(fulfill,reject){
 setTimeout(function(){
    reject (new Error("REJECTED!"))
 },300)
})
p.then(null,function(reject){
    onReject(reject);
})
function onReject(error){
    console.log(error.message);
}