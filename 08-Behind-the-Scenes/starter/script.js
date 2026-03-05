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

 */
