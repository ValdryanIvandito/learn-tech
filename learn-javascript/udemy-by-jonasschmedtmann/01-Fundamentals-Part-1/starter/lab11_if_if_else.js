let hasDriversLicense = prompt("Do you have a driving licence? Y(YES) , OtherwiseButton(NO)");
let hasGoodVision = prompt("Is your vision good? Y(YES) , OtherwiseButton(NO)");
let isTired = prompt("Are you tired? ");

if((hasDriversLicense != 'Y' && hasDriversLicense != 'y')) {
    hasDriversLicense = 'N';
}

if((hasGoodVision != 'Y' && hasGoodVision != 'y')) {
    hasGoodVision = 'N';
}

if((isTired != 'Y' && isTired != 'y')) {
    isTired = 'N';
}

if(hasDriversLicense === 'y') {
    hasDriversLicense = 'Y';
}

if(hasGoodVision === 'y') {
    hasGoodVision = 'Y';
}

if(isTired === 'y') {
    isTired = 'Y';
}

console.log(`DrivingLicense = ${hasDriversLicense} , GoodVision = ${hasGoodVision} , isTired = ${isTired}`);

if(hasDriversLicense === 'Y' && hasGoodVision === 'Y' && isTired === 'N') {
    console.log("You are able to drive.");
}

else {
    console.log("Someone else shoud drive.");
}