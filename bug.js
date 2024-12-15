function myFunc() {
  console.log(this);
}

myFunc(); // this will be undefined in strict mode, and the global object in non-strict mode