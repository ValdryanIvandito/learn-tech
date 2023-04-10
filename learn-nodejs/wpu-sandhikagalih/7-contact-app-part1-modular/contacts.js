// Import modules
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

const askQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (value) => {
            resolve(value);
        });
    });
};

const saveContact = (name, phoneNumber, email) => {
    const contact = {name, phoneNumber, email};
    const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(dataBuffer);

    contacts.push(contact);
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

    console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
    console.log('Thankyou for submitting the data');
    rl.close();
};

module.exports = {askQuestion, saveContact};