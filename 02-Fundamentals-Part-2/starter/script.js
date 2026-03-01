// Activate Strict mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive now");

// const interface = 'Audio';
// const private = 23;

/////////////////////////////////////////////////
// Functions
// function logger() {
//   console.log("My name is Samir");
// }

// // Calling / running / Invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
///////////////////////////////////////////////////

// function decleration vs Expression
// function funName(Parametars){
// function body
//}
// funName(Arguments)

// Function Declaration *can be invoked before declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);
///////////////////////////////////////////////////

// Arrow Function
// funName = Params => funBody;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} will retire in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2001, "Samir"));
// console.log(yearsUntilRetirement(1980, "bob"));

/////////////////////////////////////////////////
// Functions calling other Functions
// function cutFruitePieces(fruite) {
//   return fruite * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutFruitePieces(apples);
//   const orangePieces = cutFruitePieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////////////
// Review Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

// return `${firstName} will retire in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//////////////////////////////////////////////
// Challange #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// checkWinner(scoreDolphins, scoreKoalas);

////////////////////////////////////////////////////
// Intro to Arrays

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// // we can mutate values in Arrays Not Primitive type
// friends[2] = "Samir";
// console.log(friends);

// // Can not do this, because it is Still a constant
// // friends = ["Bob", "Alice", "John"];

// // Arrays can have different type of values, arrays too
// const firsName = "Samir";
// const samir = [firsName, "Magdy", 2037 - 2001, "Programmer", friends];
// console.log(samir);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//////////////////////////////////////////////////
// Operations on Arrays

// const friends = ["Micheal", "Steven", "Peter"];
// // to add element on the end of array
// const newLength = friends.push("Samir"); // return the length of the new array
// console.log(friends);
// console.log(newLength);

// // to add element on the begging of array
// friends.unshift("John");
// console.log(friends);

// // to remove last element from array
// const removedElemet = friends.pop(); // return the removed element
// console.log(friends);
// console.log(removedElemet);

// // remove first element in array
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));

// if (friends.includes("peter")) {
//   console.log("You have a friend called Peter");
// }

///////////////////////////////////////////////////
// Challange #2

/* Write your code below. Good luck! 🙂 */

// const calcTip = function (bill) {
//   // let tip;
//   // if (bill >= 50 && bill <= 300) {
//   //   tip = bill * 0.15;
//   // } else {
//   //   tip = bill * 0.2;
//   // }
//   // return tip;
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // console.log(calcTip(100));

// const bills = new Array(125, 555, 44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

////////////////////////////////////////////////////
// Intro to objects

// Array ex
// const samirArray = [
//   "Samir",
//   "Magdy",
//   2037 - 2001,
//   "Student",
//   ["Magdy", "ramiz", "ali"],
// ];

// // Object
// const samir = {
//   firstName: "Samir",
//   lastName: "Magdy",
//   age: 2037 - 2001,
//   friends: ["michael", "Peter", "Steven"],
// };

///////////////////////////////////////////////////
// dot vs bracket notion

// const samir = {
//   firstName: "Samir",
//   lastName: "Magdy",
//   age: 2037 - 2001,
//   friends: ["michael", "Peter", "Steven"],
//   job: "Programmer",
// };
// console.log(samir);

// console.log(samir.lastName);
// console.log(samir["lastName"]);

// // in brackets we can write expressions
// const nameKey = "Name";
// console.log(samir["first" + nameKey]);
// console.log(samir["last" + nameKey]);

// // const interstedIn = prompt(
// //   "What do you want to know about Samir? Choose between firstName, lastName, age, job, and friends",
// // );
// // console.log(interstedIn);
// // console.log(samir.interstedIn); not a propety in samir's object , retrun undefinied

// // if (samir[interstedIn]) {
// //   console.log(samir[interstedIn]);
// // } else {
// //   console.log(
// //     "Wrong request! Choose between firstName, lastName, age, job, and friends",
// //   );
// // }

// // add new property to object
// samir.location = "Egypt";
// samir["twitter"] = "@samirmagdy";
// console.log(samir);

// console.log(
//   `Samir has ${samir.friends.length} friends and his bestfriend is called ${samir.friends[0]}`,
// );

/////////////////////////////////////////////////////
// Object methods

// const samir = {
//   firstName: "Samir",
//   lastName: "Magdy",
//   birthYear: 2001,
//   friends: ["michael", "Peter", "Steven"],
//   job: "Programmer",
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     // new property called age
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   // Challage
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(samir.calcAge());
// // console.log(samir.age);
// // console.log(samir.age);
// // console.log(samir.age);

// console.log(samir.getSummary());

///////////////////////////////////////////////////
// Challage #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})!`,
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})!`,
//   );
// }

////////////////////////////////////////////////////
// Loops "For loop"
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

////////////////////////////////////////////////////
// Looping arrays
// const samirArray = [
//   "Samir",
//   "Magdy",
//   2037 - 2001,
//   "Student",
//   ["Magdy", "ramiz", "ali"],
// ];

// const types = [];

// for (let i = 0; i < samirArray.length; i++) {
//   // Reading from array
//   console.log(samirArray[i], typeof samirArray[i]);

//   // Filling types array
//   //   types[i] = typeof samirArray[i];
//   types.push(typeof samirArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and break
// console.log("--- ONLY String---");
// for (let i = 0; i < samirArray.length; i++) {
//   if (typeof samirArray[i] !== "string") continue;
//   console.log(samirArray[i], typeof samirArray[i]);
// }

// console.log("--- BREAK WITH NUMBER---");
// for (let i = 0; i < samirArray.length; i++) {
//   if (typeof samirArray[i] === "number") break;
//   console.log(samirArray[i], typeof samirArray[i]);
// }

///////////////////////////////////////////////////////
// Looping badkwards
// const samir = [
//   "Samir",
//   "Magdy",
//   2037 - 2001,
//   "Student",
//   ["Magdy", "ramiz", "ali"],
// ];

// for (let i = samir.length - 1; i > -1; i--) {
//   console.log(i, samir[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--- Statring exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

///////////////////////////////////////////////////////
// while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

////////////////////////////////////////////////////////
// # Code challange $

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   // tips[i] = calcTip(bills[i]);
//   tips.push(calcTip(bills[i]));

//   // totals[i] = bills[i] + tips[i];
//   totals.push(tips[i] + bills[i]);

//   console.log(bills[i], tips[i], totals[i]);
// }
