const validator = require('validator');
const chalk = require('chalk')

console.log(validator.isEmail('valdryan@gmail.com'));
console.log(validator.isEmail('albin.com'));

console.log(validator.isMobilePhone('087732738866', 'id-ID'));
console.log(validator.isMobilePhone('0226748353', 'id-ID'));

console.log(validator.isNumeric('0956335453565'));
console.log(validator.isNumeric('DA3425'));

const message = 'Hello World!';
console.log(chalk.blue(message));
console.log(chalk.white.bgBlack(message));
console.log(chalk.italic.blueBright.bgYellowBright(message));