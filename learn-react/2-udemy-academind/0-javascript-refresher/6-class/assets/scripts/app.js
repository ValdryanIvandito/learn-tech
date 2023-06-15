class User {
  constructor(name, bornYear, currentYear) {
    this.name = name;
    this.bornYear = bornYear;
    this.currentYear = currentYear;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  aboutAge() {
    const age = this.currentYear - this.bornYear;
    const result = `I'm about ${age} years old`;
    return result;
  }
}

const user = new User('Valdryan Ivandito', 1994, 2023);
console.log(user); // Get all data from user class
user.greet(); // Call greet method from user class
console.log(user.aboutAge()); // Call aboutAge method from user class