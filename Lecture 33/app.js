//differene between json an js object



var  obj = {
    fn:"mary",
    ln:true
}

/*
JSON
    {
    "fn":"mary",
    "ln":true
    }
 */
//object to JSON
 var jsonObj = JSON.stringify(obj);
console.log(jsonObj);

//JSON to object

var objFromJson = JSON.parse('{"fn":"mary", "ln":true}');

console.log(objFromJson);

