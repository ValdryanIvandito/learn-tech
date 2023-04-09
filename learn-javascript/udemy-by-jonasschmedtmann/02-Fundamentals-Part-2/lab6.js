const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements
const newLength = friends.push('Jay'); //add new data to the last index
console.log(friends);
console.log(newLength);

friends.unshift('John'); //add new data to the first index
console.log(friends);

// Remove Elements
friends.pop(); //Remove Last Index
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //Remove First Index
console.log(friends);

// Check Element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

const searchFriend = prompt("What's your friend's name? ");
if(friends.includes(searchFriend)) {
    console.log(`You have a friend called ${searchFriend}`);
}

else {
    console.log(`You haven't a friend called ${searchFriend}`);
}