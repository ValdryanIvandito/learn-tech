// Example how to use this contact app: 
// node app add --name="John" --phoneNumber="087723423542" --email="john@gmail.com" 

const yargs = require('yargs');
const { saveContact, listContact, detailContact, deleteContact } = require('./contacts');

// Add contact
yargs.command({
    command: 'add',
    describe: 'Add new contact',
    builder: {
        name: {
            describe: 'Full name',
            demandOption: true,
            type: 'string',
        },
        phoneNumber: {
            describe: 'Phone number',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            phoneNumber: argv.phoneNumber,
            email: argv.email,
        };
        saveContact(argv.name, argv.phoneNumber, argv.email);
    },
}).demandCommand();

// Show all list contact
yargs.command({
    command: 'list',
    describe: 'Show all contact list',
    handler() {
       listContact();
    },
});

// Show detail contact by name
yargs.command({
    command: 'detail',
    describe: 'Show detail contact by name',
    builder: {
        name: {
            describe: 'Full name',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
       detailContact(argv.name);
    },
});

// Delete contact by name
yargs.command({
    command: 'delete',
    describe: 'Delete contact by name',
    builder: {
        name: {
            describe: 'Full name',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
       deleteContact(argv.name);
    },
});

yargs.parse();