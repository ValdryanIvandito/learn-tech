// Input Data
const applesQty = prompt(`How many apples: `);
const orangesQty = prompt(`How many oranges: `);

// Function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
    return juice;
}

// Execution
console.log(fruitProcessor(applesQty, orangesQty));