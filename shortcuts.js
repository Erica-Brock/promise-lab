var p= Promise.reject(new Error("THIS SUCKS!"));
p.catch(function(reject){
    console.log(error.message);
})