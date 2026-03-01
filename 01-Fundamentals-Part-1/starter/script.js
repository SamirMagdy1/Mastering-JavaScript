// console.log("Jonas");
// console.log(23);

// let firstName = "Samir";
// console.log(firstName);

/*
let javaScriptisFun = true;
console.log(javaScriptisFun);

console.log(typeof true);
console.log(typeof javaScriptisFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptisFun = "YES!";
console.log(typeof javaScriptisFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1992;
// const jop;

var jop = "programmer";
jop = "teacher";

lastName = "Magdy";
console.log(typeof lastName);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Samir";
const lastName = "Magdy";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
console.log(x);

// comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
// const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////////////
// Coding Challange #1
// const markWeight = 78,
//   johnWeight = 92,
//   markTall = 1.69,
//   johnTall = 1.95;

// const markBmi = markWeight / markTall ** 2;
// const johnBmi = johnWeight / johnTall ** 2;
// const markHigherBMI = markBmi > johnBmi;

// console.log("Mark BMI: " + markBmi);
// console.log("John BMI: " + johnBmi);
// console.log("Is mark's BMI higher than John? " + markHigherBMI);
//////////////////////////////////////////

// String and templates
/*
const firstName = "Samir";
const job = "teacher";
const birthYear = 2001;
const year = 2037;

const samir =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(samir);

const samirNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(samirNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
  multiple \n\
  lines",
);

console.log(`String
    multiple
    lines`);
*/

// Taking Decisions if/else

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, Wait another ${yearsLeft} years `);
// }

// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

///////////////////////////////////////////////
// Code challage #2
// const markWeight = 78,
//   johnWeight = 92,
//   markTall = 1.69,
//   johnTall = 1.95;

// const markBmi = markWeight / markTall ** 2;
// const johnBmi = johnWeight / johnTall ** 2;
// const markHigherBMI = markBmi > johnBmi;

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
// } else {
//   console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`);
// }
///////////////////////////////////////////////////

// Type Conversion and coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("samir"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + "years old");
// console.log("23" - "10" - 3); // 10
// console.log("23" + "10" + 3); // 23103
// console.log("23" * "2"); // 46

// let n = "1" + 1; // concatenation -> 11 in string
// n = n - 1; // coercion -> 11 - 1 = 10 in numbers
// console.log(n); // 10
// console.log(2 + 3 + 4 + "5"); // 95
// console.log("10" - "4" - "3" - 2 + "5"); // 15
////////////////////////////////////////////////////

// falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); //f
// console.log(Boolean(undefined)); //f
// console.log(Boolean("samir")); //t
// console.log(Boolean({})); //t
// console.log(Boolean("")); //f

// const money = 100;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height = 123;
// if (height) {
//   console.log("Yay, Height is defiend");
// } else {
//   console.log("Height is Undefined");
// }
////////////////////////////////////////////////////

// const age = "18";
// if (age === 18) console.log("You just became an adult:D (strict)");

// if (age == 18) console.log("You just became an adult:D (loose)");

// const favNum = Number(prompt("What's your favourite number?"));
// console.log(favNum);
// console.log(typeof favNum);

// if (favNum === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favNum === 7) {
//   console.log("7 is a cool number");
// } else if (favNum === 9) {
//   console.log("9 is a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favNum !== 23) {
//   console.log("why not 23?");
// }

///////////////////////////////////////////////
// Logical Operators
// && And, || Or, ! Not
// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

////////////////////////////////////////////////
// Challenge #3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins are the winners");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas are the winners");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both are Winners");
// } else {
//   console.log("No one Wins the trophy");
// }
/////////////////////////////////////////////////

// Switch Statements

// const day = "friday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Record videos");
//     break;
//   case "friday":
//     console.log("write code examples");
//     break;
//   case "saturdat":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");

//     break;
// }
/////////////////////////////////////////////

// Conditional Operatiors
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like drink ${age >= 18 ? "wine" : "water"}`);
////////////////////////////////////////////////////
// Coding Challage #4

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${total}`,
);
