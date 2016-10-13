var a = 1 + '2';
console.log(false < 1);
console.log(a);

console.log("3" == 3);
console.log("3" === 3);

var object1 = {value:"key"}, object2={"value":"key"};
console.log(object1);
console.log(object1 == object2);
console.log(object1 === object2); //false

var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

var  a = 0;
console.log(a || a===0);

//coerce

//return the first true value
var a = 0;
a = a || 'hello';
console.log(a);