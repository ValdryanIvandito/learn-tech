//Input Data
const dolphinScore1 = Number(prompt(`Dolphin scores round-1: `));
const dolphinScore2 = Number(prompt(`Dolphin scores round-2: `));
const dolphinScore3 = Number(prompt(`Dolphin scores round-3: `));

const koalasScore1 = Number(prompt(`Koalas scores round-1: `));
const koalasScore2 = Number(prompt(`Koalas scores round-2: `));
const koalasScore3 = Number(prompt(`Koalas scores round-3: `));

//Arrow Function-0 (Calculate Average Scores)
const calcAverage = (score1, score2, score3) => { 
    scoreAverage = (score1 + score2 + score3) / 3;
    return scoreAverage; 
}

//Function-1 (Check Who Is Winner)
function checkWinner(dolphinScore1, dolphinScore2, dolphinScore3, koalasScore1, koalasScore2, koalasScore3) {
    let dolphinAverageScore = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
    let koalasAverageScore = calcAverage(koalasScore1, koalasScore2, koalasScore3);

    if(dolphinAverageScore >= 2 * koalasAverageScore) {
        console.log(`DolpinScores: ${dolphinAverageScore} VS KoalasScores: ${koalasAverageScore} , Dolphin Team WIN The Trophy!`);
    }

    else if(koalasAverageScore >= 2 * dolphinAverageScore) {
        console.log(`DolpinScores: ${dolphinAverageScore} VS KoalasScores: ${koalasAverageScore} , Koalas Team WIN The Trophy!`);
    }

    else {
        console.log("Both was failed! ");
    }
}

//Execution
checkWinner(dolphinScore1, dolphinScore2, dolphinScore3, koalasScore1, koalasScore2, koalasScore3);