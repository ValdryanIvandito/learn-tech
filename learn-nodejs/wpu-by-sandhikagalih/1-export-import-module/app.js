// Import local module
const localModule = require('./localModule');

// localModule.printname (function) output
console.log(localModule.printName('Shandika Galih'));

// localModule.fibonacciRatio (variable) output
console.log(`My favorite number is ${localModule.fibonacciRatio}`);

// localModule.student (object) output
console.log(localModule.student.printStudent());

// localModule.Person (class) output
const person = new localModule.Person('Yuna Mapple', 21)
person.printPerson(); 