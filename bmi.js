/* BMI Calculation JS Code
Simply call this file with your HTML document like: <script src="bmi.js"></script> */

var markHeight, markMass, johnHeight, johnMass, markBmi, johnBmi, markBmiGreater, johnBmiGreater;

markHeight = 1.8;
markMass = 62;
markBmi = markMass / (markHeight * markHeight);
console.log("Mark's BMI = " + markBmi);

johnHeight = 1.7;
johnMass = 58;
johnBmi = johnMass / (johnHeight * johnHeight);
console.log("John's BMI = " + johnBmi);

markBmiGreater = markBmi > johnBmi;
johnBmiGreater = johnBmi > markBmi;

console.log("Is Mark's BMI greater then John's BMI? " + markBmiGreater);
console.log("Is John's BMI greater than Mark's BMI? " + johnBmiGreater);