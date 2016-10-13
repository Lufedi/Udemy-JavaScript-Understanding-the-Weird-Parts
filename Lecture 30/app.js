
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

//same as
/*
 myCar["make"] = "Ford";
 myCar["model"] = "Mustang";
 myCar["year"] = 1969;
 */


// four variables are created and assigned in a single go,
// separated by commas
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";


myObj.info =  new Object();
myObj.info.name = "pipe";
console.log(myObj["info"]["name"]);
console.log(myObj.info.name);

console.log(myObj);

