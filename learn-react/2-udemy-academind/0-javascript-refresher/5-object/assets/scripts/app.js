// const userName = 'Max';
// const userAge = 34;

const user = {
  name: 'Valdryan Ivandito',
  job: 'Web3 Developer',

  // Create Method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  aboutJob() {
    console.log(`My job is ${this.job}`);
  },
  aboutAge(currentYear, bornYear) {
    const age = currentYear - bornYear;
    const result = `I'm about ${age} years old`;
    return result;
  }
};

console.log(user); // get all data from user object
console.log(user.name); // get name from user object
console.log(user.job); // get job from user object
// console.log(user.age); // get job from user object

user.greet(); // Call method greet()
user.aboutJob(); // Call method aboutjob()

const currentYear = 2023;
const bornYear = 1994;
console.log(user.aboutAge(currentYear, bornYear));