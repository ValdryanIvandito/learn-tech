const name_ = prompt("What's your name? ");
const birthYear = prompt("Birth Year: ");
const actualYear = prompt("Actual Year: ");
const retirementAgeTarget = prompt("Retired Age Target: ");

// Function Declaration
function calcAge1(birthYear, actualYear) {
    let age = actualYear - birthYear;
    return age;
}

// Function Expression 
const calcAge2 = function(birthYear, actualYear) {
    let age = actualYear - birthYear;
    return age;
}

// Arrow Function
const calcAge3 = (birthYear) => actualYear - birthYear;

const yearsUntilRetirement = (name_, birthYear, retirementAgeTarget) => {
    const retirementAge = retirementAgeTarget - (actualYear - birthYear);
    return(`${name_} retires in ${retirementAge} years`);
}

// Execution
const age1 = calcAge1(birthYear, actualYear);
const age2 = calcAge2(birthYear, actualYear);
const age3 = calcAge3(birthYear, actualYear);
const retirement = yearsUntilRetirement(name_, birthYear, retirementAgeTarget);

console.log(`Function Declaration Result: ${age1}`);
console.log(`Function Expression Result: ${age2}`);
console.log(`Arrow Function Result: ${age3}`);
console.log(retirement);