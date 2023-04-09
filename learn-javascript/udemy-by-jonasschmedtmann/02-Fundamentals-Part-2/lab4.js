//Input Data
const name_ = prompt("What's your name: ");
const birthYear = prompt("Birth Year: ");
const actualYear = prompt("Actual Year: ");
const retirementAgeTarget = prompt("Retired Age Target: ");

//Function
function calcAge(actualYear, birthYear) {
    age = actualYear - birthYear;
    return age;
}

const yearUntilRetirement = function(name_, birthYear, actualYear, retirementAgeTarget) {
    const age = calcAge(actualYear, birthYear);
    const retirementAge = retirementAgeTarget - age;

    if(retirementAge > 0) {
        console.log(`${name_} ${age} years old, retires in ${retirementAge} years`);
        return retirementAge;
    }

    else {
        console.log(`${name_} has already retired`);
        return -1;
    }
}

//Execution
console.log(yearUntilRetirement(name_, birthYear, actualYear, retirementAgeTarget));