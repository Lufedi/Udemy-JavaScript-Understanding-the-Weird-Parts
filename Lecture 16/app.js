//differene between json an js object


//scope chain example
function a (){
    function b(){
        console.log(myVar);
    }
    b();
}


//who created me?

function a2(){
    function b(){
        console.log(myVar);
    }
    var myVar = 2;
    b();
}



myVar = 1;
a();
a2();


