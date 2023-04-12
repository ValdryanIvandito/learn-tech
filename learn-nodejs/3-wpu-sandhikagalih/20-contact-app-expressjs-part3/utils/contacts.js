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

// load contacts data from contact.json
const loadContacts = () => {
    const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(dataBuffer);
    return contacts;
}

// find contact by name
const findContact = (name) => {
    const contacts = loadContacts();
    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    return contact;
}

// Write & replace contacts.json file with new data
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

// Add new contact data
const addContact = (contact) => {
    const contacts = loadContacts();
    contacts.push(contact);
    saveContacts(contacts);
}

// Check for duplicate name
const checkDuplicate = (name) => {
    const contacts = loadContacts();
    return contacts.find((contact) => contact.name === name);
}

// Delete contact
const deleteContact = (name) => {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter((contact) => contact.name !== name);
    saveContacts(filteredContacts);
}

// Update contacts
const updateContacts = (newContact) => {
    const contacts = loadContacts();
    // delete old contact which is same as old name
    const filteredContacts = contacts.filter((contacts) => contacts.name !== newContact.oldName);
    delete newContact.oldname;
    filteredContacts.push(newContact);
    saveContacts(filteredContacts);
}

module.exports = { loadContacts, findContact, addContact, checkDuplicate, deleteContact, updateContacts }