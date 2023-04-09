const bill = Number(prompt(`Bill price: `));

console.log(`${(bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip(15%) was ${bill * 0.15}, and the total value ${bill + (bill * 0.15)}` 
: `The bill was ${bill}, the tip(20%) was ${bill * 0.2}, and the total value ${bill + (bill * 0.2)}`}`);