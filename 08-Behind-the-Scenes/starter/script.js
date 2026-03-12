'use strict';
/*
=> high level overview of JS
 -> high level language
 -> garbage-collected: remove unused date form memory
 -> interpreted: compiled line by line
 -> multi-Paradigm:
    - procedural
    - oop
    - Funcional programming
 -> Prototype based object-oriented: allow inheritence
 -> first-class functions: can pass and return funcions
 -> Dynamic: implecitly define data type 
 -> single threaded and non blocking event loop
----------------------------------------------------
=> Js engine and Runtime:
 -> JS engine: program that executes java script code
 * every engine has:
    - Call stack: where our code actually executed using execution context
    - Heap: unstructured memory pool stores all objects 
 * Compilation vs. Interpretation:
    compilaton: entire source code is converted into machine code at once
    Source code -> step1 compilation -> portable fie -> step2 execution -> program running
    Interpretation: interpreter runs through the source code and executes it line by line
 * Java scribt uses Just-in-time JIT compilation: entire code is converted into machine code at once, then executed immediatly
 JS Runtime: using engine, web APIs and callback queue with event loop 
-----------------------------------------------------
=> Execution contexts and the call stack
 -> golbal execution context: not inside a function
 *Code inside functions only executed when function called, for each function call a new context is created
 *Execution Context: environment in which a piece of javascript is executed, stores all necessary information for some code to be executed
 -> what's inside execution context?
 *all of them generated during "creation phase", right before execution
   1. variable environment: 
      - let, const, and var declerations
      - funcions
      - arguments object
   2. Scope chain
   3. this keyword
 -> the Call Stack: place where execution context get stacked on top of each other, to keep track of where we are in the execution
 ---------------------------------------------------
=> Scoping and Scope Chain in JS:
 -> Scope: how our program's variables are organized and accessed "where do variables live?" or "where can we access a certain variable, and when not?"
 *lexical scoping: scoping is controlle
 -> scope: space or environment in which a certain variable is decleared
   - global: outside of any function of block
   - function: inside function "function body"
   - block: only applies to let and const variables, functions are also block scoped "only i strict mode"
 * let and const are block-scoped
 * var is function scoped
 -> Scope chain vs. Call stack:
   - Call stack: order in which functions were called
   - Scope chain: order in which functions are written in the code
 */

// Scoping in practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1997 && birthYear <= 2010) {
//       var GenZ = true;

//       // Creating New variable with same name as outer scope's variable
//       const firstName = 'Magdy';

//       // Reassigning outer scope's variable
//       output = 'NEW output';

//       const str = `Oh, and you're a GenZ, ${firstName}`;
//       console.log(str);

//       // Functions are Blocked Scoped, in strict mode
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //  console.log(str); // Not defined, out of block scope
//     console.log(GenZ); // Accessed in all calcAge scope
//     //  add(2, 3); // not accessed, blocked scope
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Samir';
// calcAge(2001);

// can not access here, out of scope
// console.log(age);
// printAge();
//-----------------------------------------------

/*
Variable environments: Hoisting and the tdz
 *execution context [variable env, scope chain, this keyword]
-> Hoisting: making some types of variables accessible/ usable in the code before they are actully declared "variables lifted to the top of their scope"
BUT behind the scenes: before execution, the code is scanned for variable declerations, for each variable, a new property is created in the variable env object
 *TDZ: 'Temporal Dead Zone' the area between the begining of the scope and before declearation

*/
// Hoisting in practice:

// variablew
// console.log(me); // undefined
// console.log(job); // Reference Error cannot access before initialization
// console.log(year); // same as job

// var me = 'samir';
// let job = 'Student';
// const year = 2001;

// // Functions
// console.log(addDecl); // well work
// console.log(addExpr); // also undefined byt we call it here as a function so the error is it is not a funcion
// // console.log(addArrow); // Reference error

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts); // Undefined
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1; // Creating a property in window objedt
// let y = 2;
// const z = 3;
// console.log(x === window.x); // True
// console.log(y === window.y); // False
// console.log(z === window.z); // false
//--------------------------------------------------------

/* 
This keyword: Special variable that is created for every execution context(every function) takes the value of (points to) the owner of the function in which the this keyword is used
=> value: 
 - not static
 - depends on how the function is called
 - assigned when the function is actually called
 - ways like:
  -> method: this = <object that is calling the method>
  -> simple funcion call: this = undefined
  -> arrow funtions: do not get own this, <this is surrounding function (lexical this) >
  -> event listener: this = <dom element that the handler is attached to>
 - thes does NOT point to function itself, and also NOT the its variable environmet
*/
//--------------------------------------------------------

// THIS keyword in practice

// console.log(this); //in global scope, is the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this); // Undefined
};
calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // back to golbal object (lexical)
};
calcAgeArrow(2007);

const samir = {
  year: 2001,
  calcAge: function () {
    console.log(this); // samir object
    console.log(2037 - this.year);
  },
};
samir.calcAge();

const alice = {
  year: 2002,
};

// method borrowing
alice.calcAge = samir.calcAge;
// console.log(alice.calcAge);
alice.calcAge(); // this always the object who's calling the method

const f = samir.calcAge;
f(); // undefined, just like a regualr function
