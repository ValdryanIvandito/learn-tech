const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let x = 0; x < bills.length; x++) {
    let tip = calcTip (bills[x]);
    let total = tip + bills[x];
    tips.push(tip);
    totals.push(total);
}

function totalAVG (arr) {
    let sum = 0;

    for (let y = 0; y < arr.length; y++) {
        sum = sum + arr[y];
    }

    return sum / arr.length;
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(totalAVG(tips));
console.log(totalAVG(totals));