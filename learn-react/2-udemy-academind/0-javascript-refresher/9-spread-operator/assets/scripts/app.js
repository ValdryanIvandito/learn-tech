// Merge arrays using spread operator
const hobbies = ['Sports', 'Cooking'];
const newHobbies = ['Reading'];
const mergeHobbies = [...hobbies, ...newHobbies];
console.log(mergeHobbies);

// Implemented spread operator in object
const user = {
  name: 'Valdryan Ivandito',
  age: 29
};
console.log(user);

const extendedUser = {
  isAdmin: true,
  ...user
};
console.log(extendedUser);

