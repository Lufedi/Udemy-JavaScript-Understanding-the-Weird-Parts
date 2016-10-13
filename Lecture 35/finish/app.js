greet();

function greet() {
    console.log('hi');   
}

//only the variable is hoisted
//anonymous is a var that point to the function object
var anonymousGreet = function() {
    console.log('hi');   
}


anonymousGreet();

function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});


