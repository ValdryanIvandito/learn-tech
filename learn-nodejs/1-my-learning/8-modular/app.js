// import local module (contacts.js)
const contacts = require('./contacts.js');

const main = async () => {
    const name = await contacts.askQuestion('Enter your name: ');
    const phoneNumber = await contacts.askQuestion('Enter your phone number: ');
    const email = await contacts.askQuestion('Entern your email: ');

    contacts.saveContact(name, phoneNumber, email);
};

main();