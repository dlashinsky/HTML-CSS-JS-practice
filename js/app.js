console.log('hello world');

//Numbers
//Integers
console.log(1+2);


//Floats
console.log(2.718);
console.log(0.23 * .023);

//Boolean
// True or False

//Strings
console.log("John");
console.log("Jane");

// Type Inferenecing / Coercsion

//Boolean
// true or false

// Modulus
console.log(12312313 % 2);


// Math.pow
console.log(Math.pow(3, 2));
//math.sqrt
console.log(Math.sqrt(4));

// Gives a random float between 0-1
console.log("Random num 0-10: " + Math.floor (Math.random() * 10));

// Variables
var myNumber = 1;
let myString = "hey all";

// converting a numberr to a string type

var anotherNumber = 1;
var anotherString = myNumber.toString();

console.log(typeof myString);

//parse int turns a string into a number
console.log (parseInt("123"));
console.log(parseFloat("3.14")+ parseFloat("3.14"));

let stringToBeSplit = "123,456";
console.log(stringToBeSplit.split(','));

let alphabet = "abcdef";
console.log(alphabet.indexOf('b'));

let uppercaseAlphabet = alphabet.toUpperCase();
console.log(uppercaseAlphabet);
console.log(uppercaserAlphabet.toLowerCase());

let stringReplace = "old person";
let newString = stringReplace.replace('old','new');
console.log(newString)






