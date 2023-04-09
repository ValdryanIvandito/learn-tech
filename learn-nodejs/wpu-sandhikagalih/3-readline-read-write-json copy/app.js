const validator = require('validator');
const chalk = require('chalk')

console.log(validator.isEmail('valdryan@gmail.com'));
console.log(validator.isEmail('albin.com'));

console.log(validator.isMobilePhone('087732738866', 'id-ID'));
console.log(validator.isMobilePhone('0226748353', 'id-ID'));

console.log(validator.isNumeric('0956335453565'));
console.log(validator.isNumeric('DA3425'));

console.log(chalk.blue('Hello World!'));
console.log(chalk.red.bgGreenBright(`What is your name?`));