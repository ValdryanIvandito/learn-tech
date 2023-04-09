// Type Conversion
//1. String to Number
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log("The converted String '1991' to Number add by 9, the result will be: ");
console.log(Number(inputYear) + 9);
console.log("\n");

//2. String (non-numeric) to Number
const $name = 'Valdryan'
console.log(Number($name), $name)
console.log("The converted String 'Valdryan' to Number, the result will be NaN it's mean 'Not a Number'");
console.log(`NaN Type of ${typeof NaN}`);
console.log("\n");

//3. Number to String 
const inputAge = 23;
console.log(String(inputAge), inputAge);
console.log("The converted Number 23 to String add by 7, the result will be: ");
console.log(String(inputAge) + 7);
console.log("\n");

//Type Coersion 
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3); //The result will be wrong if using + operation in coersion
console.log(Number("23") + Number("10") + 3); //Must convert first
console.log("23" / "2")

let n = '1' + 1; // 11
n = n - 1;
console.log(n);