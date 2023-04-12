// Import modules
const fs = require('fs');

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

// load contact data from contact.json
const loadContact = () => {
    const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(dataBuffer);
    return contacts;
}

// find contact by name
const findContact = (name) => {
    const contacts = loadContact();
    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    return contact;

    // if(!contact) {
    //     console.log(chalk.white.bgRed.bold(`${name} does not exist!`));
    //     return false;
    // }

    // console.log(chalk.cyan.inverse.bold(contact.name));
    // console.log(contact.phoneNumber);

    // if(contact.email) {
    //     console.log(contact.email);
    // }
}

module.exports = {loadContact, findContact}