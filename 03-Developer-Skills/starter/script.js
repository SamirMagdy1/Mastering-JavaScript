// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Code Challenge #1
const arr = [17, 21, 23];
let sentenc = "...";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sentenc += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(sentenc);
};
printForecast(arr);
