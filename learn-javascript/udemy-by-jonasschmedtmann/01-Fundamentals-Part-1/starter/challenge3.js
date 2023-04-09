const score1Dolphin = Number(prompt("Dolphin team score round-1: "));
const score2Dolphin = Number(prompt("Dolphin team score round-2: "));
const score3Dolphin = Number(prompt("Dolphin team score round-3: "));
let averageDolphin = (score1Dolphin + score2Dolphin + score3Dolphin) / 3;

const score1Koalas = Number(prompt("Koalas team score round-1: "));
const score2Koalas = Number(prompt("Koalas team score round-2: "));
const score3Koalas = Number(prompt("Koalas team score round-3: "));
let averageKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

if((averageDolphin && averageKoalas) >= 100)
{
    if(averageDolphin > averageKoalas) {
        console.log(`Dolphin Team: ${averageDolphin} , Koalas Score: ${averageKoalas}`);
        console.log("Dolphin Team WIN The Trophy!");
    }

    else if(averageKoalas > averageDolphin) {
        console.log(`Dolphin Team: ${averageDolphin} , Koalas Score: ${averageKoalas}`);
        console.log("Koalas Team WIN The Trophy!");
    }

    else {
        console.log(`Dolphin Team: ${averageDolphin} , Koalas Score: ${averageKoalas}`);
        console.log("Both WIN The Trophy!");
    }
}

else {
    console.log(`Dolphin Team: ${averageDolphin} , Koalas Score: ${averageKoalas}`);
    console.log("No one WINs The Trophy! 😣");
}