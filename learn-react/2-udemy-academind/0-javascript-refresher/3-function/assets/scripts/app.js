function greet() {
  console.log('Hello!');
}

function introduction(myName, myJob) {
  console.log(`My name is ${myName}`);
  console.log(`And my job is ${myJob}`);
}

greet();

const myName = 'Valdryan Ivandito';
const myJob = 'Web3 Developer'
introduction(myName , myJob);

const currentYear = 2023;
const bornYear = 1994;

function aboutAge(currentYear, bornYear) {
  const myAge = currentYear - bornYear;
  const result = `I'm about ${myAge} years old`;
  return result;
}

console.log(aboutAge(currentYear, bornYear));