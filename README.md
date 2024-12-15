# Unexpected 'this' behavior in JavaScript functions

This repository demonstrates a common JavaScript error related to the unexpected behavior of the `this` keyword within functions.  In JavaScript, the value of `this` is determined by how the function is called, not where it's defined. This can lead to subtle bugs if not handled carefully.

## The Problem

The provided `bug.js` file contains a simple function `myFunc`. When called, it logs the value of `this` to the console.  In strict mode, this will be `undefined`; in non-strict mode, it will be the global object (window in browsers).  This might not be the intended behavior, leading to unexpected results.

## The Solution

The `bugSolution.js` file illustrates solutions for explicitly setting the value of `this`.  Methods include using `bind`, `call`, or `apply`.

This example highlights the importance of understanding the context in which functions are executed in JavaScript.