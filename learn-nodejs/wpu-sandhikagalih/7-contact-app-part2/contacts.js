// Import modules
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// if data directory not exist, then make it
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// if contacts.json file not exist, then make it
const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Save Data Function
const saveContact = (name, phoneNumber, email) => {
    const contact = {name, phoneNumber, email};
    const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(dataBuffer);

    // Duplicate Checking
    const checkDuplicate = contacts.find((contact) => contact.name === name);
    if(checkDuplicate) {
        console.log(chalk.white.bgRed.bold('Name already exist!'));
        return false;
    }

    // Email Checking
    if(email) {
        if(!validator.isEmail(email)) {
            console.log(chalk.white.bgRed.bold('Email format is not valid!'));
            return false;
        }
    }

    // Phone number Checking
    if(!validator.isMobilePhone(phoneNumber, 'id-ID')) {
        console.log(chalk.white.bgRed.bold('Phone number format is not valid!'));
        return false;
    } 

    contacts.push(contact);
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

    console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
    console.log(chalk.white.bgGreen.bold('Thankyou for submitting the data'));
};




module.exports = {saveContact};