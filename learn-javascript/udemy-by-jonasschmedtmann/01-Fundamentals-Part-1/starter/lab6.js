const firstName = "Valdryan";
const job = "Data Engineer";
const birthYear = 1994;
const actualYear = 2022;

const valdryanA = "I'm " + firstName + " " + (actualYear - birthYear) + " years old and my job is " + job + ".";
const valdryanB = `I'm ${firstName} ${actualYear - birthYear} years old and my job is ${job}.`;

console.log(valdryanA);
console.log(valdryanB);

console.log(`String with\n\
multiple\n\
lines`)