//-----------------------------------------------------//
let rep = 1;

while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}
//-----------------------------------------------------//

console.log(`\n`);

//-----------------------------------------------------//
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`You rolled a ${dice}`);

    if (dice === 6) console.log(`Loop is about to end...`);
}