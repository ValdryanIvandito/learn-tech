//TERNARY OPERATOR//

//1st Form
const age = prompt("What's your age? ");
const actualYear = prompt("What year is it now? ");
let yearLeft = actualYear - (actualYear - age);
age >= 18 ? console.log(`You may have a driving license 🚙`) : console.log(`You are too young, wait another ${yearLeft} years 😉`);

//2nd Form
const conclusion = age >= 18 ? `You may have a driving license 🚙` : `You are too young, wait another ${yearLeft} years 😉`;
console.log(conclusion);

//3rd Form
console.log(`${age >= 18 ? `You may have a driving license 🚙` : `You are too young, wait another ${yearLeft} years 😉`}`);