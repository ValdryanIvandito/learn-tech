// Equality operators: == VS ===
// Notes: == operators -> comparison include coersion
//        === operators -> comparison without coersion / strict
// Examples: '18' == 18 -> true
//           '18' === 18 -> false

const age = '18';

if(Number(age) === 18) console.log("You just become an adult (using === comparison without coersion but used conversion before comparison process)")
if(age == 18) console.log("You just become an adult (using == comparison with coersion)")

const favoriteNumber = Number(prompt("What's your favorite number? "));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if(favoriteNumber === 777) {
    console.log("Cool! 777 is GODLY number!");
}

else if(favoriteNumber === 0.618) {
    console.log("0.618 is magical fibonacci!");
}

else if(favoriteNumber === 3.14) {
    console.log("3.14 is the great of pi!");
}

else {
    console.log("Number is not 777, or 0.618, or 3.14");
}