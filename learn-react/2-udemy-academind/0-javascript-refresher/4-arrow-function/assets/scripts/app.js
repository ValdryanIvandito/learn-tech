const greet = () => {
  console.log('Hello');
}

const introduction = (myName, myJob) => {
  console.log(`My name is ${myName}`);
  console.log(`And my job is ${myJob}`);
}

const aboutAge = (currentYear, bornYear) => {
  const age = currentYear = bornYear;
  const result = `I'm about ${age} years old`;
  return result;
}

const myName = 'Valdryan Ivandito';
const myJob = 'Web3 Developer';
const currentYear = 2023;
const bornYear = 1994;

greet();
introduction(myName, myJob);
console.log(aboutAge(currentYear, bornYear));