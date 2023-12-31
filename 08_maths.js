/*----------------------Numbers----------------*/

// primitive literals are used
const score = 400;
console.log(score);

// here number constructor are use having methods
const balance = new Number(100);
console.log(balance);

console.log(score === balance); // false

console.log(balance.toString().length); // changes to string
console.log(balance.toFixed(2)); // for precision after decimal  gst issue ecommerce

// precision is little bit tricky learn
const otherNumber = 123.8966;
console.log(isNaN(otherNumber)); // functio
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString()); // give , ac to us
console.log(hundreds.toLocaleString("en-In")); //give indian

/*----------------------Maths----------------*/

console.log(Math); // gives object having methods
// some methods,
console.log(Math.abs(-8)); //gives absolute value

console.log(Math.round(8.99)); // simply round

console.log(Math.ceil(5.1)); // right se +1
console.log(Math.floor(5.6)); // left value

console.log(Math.min(4, 5, 6, 7)); //gives minimum of array
console.log(Math.max(4, 5, 6, 7)); //gives max of array

//  very imporatant -------Math.random() ------
// console.log(Math.floor(Math.random()*10)+1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
