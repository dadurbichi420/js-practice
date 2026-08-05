console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false

console.log(2==1); // false
console.log(2!=1); // true
console.log("------------------------------")

console.log(2=="2"); // true
console.log("02"==2); // true
console.log(2>"1"); // true
console.log("02">1); // true
console.log("------------------------------")

console.log(null>"0");  // false
console.log(null>=0);  // true
console.log(null==0);  // false
console.log("------------------------------")

console.log(undefined>0);  // false
console.log(undefined>=0);  // false
console.log(undefined==0);  // false
console.log("------------------------------")

console.log("2"===2);  // false
console.log("jojo"==="jojo");  // true
console.log("------------------------------")

console.log(null==undefined);  // true
console.log(null===undefined);  // false
console.log("------------------------------")

// === is strict equality operator, it checks both value and type
// == is loose equality operator, it checks only value