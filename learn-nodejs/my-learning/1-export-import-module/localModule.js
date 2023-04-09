// Function
const printName = (name) => {
    return `Hello, my name is ${name}`;
} 

// Variable
const fibonacciRatio = 0.618;

// Object
const student = {
    name: 'Cindy Pevita',
    age: 18,
    printStudent() {
        return `Hello I'am a student, my name is ${this.name} and my age is ${this.age} years old`
    }
}

// Class
class Person {
    constructor() {
        this.name = 'Yuna Mapple';
        this.age = 21;
    }

    printPerson() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// module.exports.printName = printName;
// module.exports.fibonacciRatio = fibonacciRatio;
// module.exports.student = student;
// module.exports.Person = Person;

module.exports = {printName, fibonacciRatio, student, Person};