const mass_Mark1 = 78;
const height_Mark1 = 1.69;
const BMI_Mark1 = mass_Mark1 / (height_Mark1 * height_Mark1);

const mass_Mark2 = 95;
const height_Mark2 = 1.88;
const BMI_Mark2 = mass_Mark2 / (height_Mark2 * height_Mark2);

const mass_John1 = 92;
const height_John1 = 1.95;
const BMI_John1 = mass_John1 / (height_John1 * height_John1);

const mass_John2 = 85;
const height_John2 = 1.76;
const BMI_John2 = mass_John2 / (height_John2 * height_John2);

const markHigherBMI1 = BMI_Mark1 > BMI_John1
const markHigherBMI2 = BMI_Mark2 > BMI_John2

console.log("BMI_Mark1 = " + BMI_Mark1 + " , " + "BMI_John1 = " + BMI_John1 + " , " + "Mark's BMI higher than John's -> " + markHigherBMI1);
console.log("BMI_Mark2 = " + BMI_Mark2 + " , " + "BMI_John2 = " + BMI_John2 + " , " + "Mark's BMI higher than John's -> " + markHigherBMI2);