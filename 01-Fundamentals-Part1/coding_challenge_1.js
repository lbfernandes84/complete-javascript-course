const markMass = 150;
const johnMass = 85;

const markHeigh = 1.95;
const johnHeigh = 1.76;

const markBMI = markMass / markHeigh ** 2;
const johnBMI = johnMass / johnHeigh ** 2;
const markBMIIsHigherThanJohnBMI = markBMI > johnBMI;
console.log("Mark mass:", markMass);
console.log("Jonh mass:", johnMass);
console.log("----------------------");
console.log("Mark height:", markHeigh);
console.log("Jonh height:", johnHeigh);
console.log("----------------------");
console.log("Is Mark's BMI greater than John's BMI:", markBMIIsHigherThanJohnBMI ? "yes" : "no");