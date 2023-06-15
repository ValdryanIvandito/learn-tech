const hobbies = ['Sports', 'Cooking', 'Reading'];
console.log(hobbies[0]); // Get index zero data from hobbies array

hobbies.push('Traveling'); // Add Traveling to hobbies array
console.log(hobbies); // Get all data from hobbies array
console.log(`Array length is ${hobbies.length}`); // Check array length

// How to find Cooking index 
// const index = hobbies.findIndex((item) => {
//   return item === 'Cooking';
// });
const index = hobbies.findIndex((item) => item === 'Cooking');
console.log(`Cooking index is ${index}`);

// Transform all data add some ! in hobbies array
const editedHobbies = hobbies.map((item) => item + '!');
console.log(editedHobbies); // Get all data from edited hobbies array

// Transform all data to object in hobbies array
const editedHobbies2 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies2); // Get all data from edited hobbies array
