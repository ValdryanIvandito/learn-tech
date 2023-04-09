const bill1 = Number(prompt("1st Bill Cost($): "));
const bill2 = Number(prompt("2nd Bill Cost($): "));
const bill3 = Number(prompt("3rd Bill Cost($): "));

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [bill1, bill2, bill3];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, totals);