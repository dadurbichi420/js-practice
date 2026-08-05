let score= false
let j=null
let valueInNumber=Number(score)
console.log(typeof score)
console.log(typeof j)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*
"33" -> 33
true -> 1
false -> 0
null -> 0
"33abc" -> NaN
undefined -> NaN
*/

let IsLoggedIn= NaN
let IsLoggedInNumber= Boolean(IsLoggedIn)
console.log(typeof IsLoggedIn)
console.log(typeof IsLoggedInNumber)
console.log(IsLoggedInNumber)

/*
1 -> true
0 -> false
"" -> false
"jojo" -> true
null -> false
undefined -> false
NaN -> false
*/

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"
console.log(1+1+"2") // "22"
console.log("1"+1+2) // "112"
