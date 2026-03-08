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
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2010) {
      var GenZ = true;

      // Creating New variable with same name as outer scope's variable
      const firstName = 'Magdy';

      // Reassigning outer scope's variable
      output = 'NEW output';

      const str = `Oh, and you're a GenZ, ${firstName}`;
      console.log(str);

      // Functions are Blocked Scoped, in strict mode
      function add(a, b) {
        return a + b;
      }
    }
    //  console.log(str); // Not defined, out of block scope
    console.log(GenZ); // Accessed in all calcAge scope
    //  add(2, 3); // not accessed, blocked scope
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Samir';
calcAge(2001);

// can not access here, out of scope
// console.log(age);
// printAge();
