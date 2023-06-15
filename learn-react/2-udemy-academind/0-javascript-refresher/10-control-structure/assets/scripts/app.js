const password = prompt("Enter Password: ");

if (password === 'hello') {
  console.log('Welcome to page1');
} else if (password === 'HELLO') {
  console.log('Welcome to page2');
} else {
  console.log('Invalid Password!');
}

const hobbies = ['Sports', 'Cooking', 'Reading'];
for (const hobby of hobbies) {
  console.log(hobby);
}