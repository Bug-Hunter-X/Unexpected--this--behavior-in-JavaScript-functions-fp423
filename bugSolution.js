function myFunc() {
  console.log(this);
}

// Using bind to explicitly set 'this'
const boundFunc = myFunc.bind({ name: 'Example' });
boundFunc(); // this will be { name: 'Example' }

// Using call to explicitly set 'this'
myFunc.call({ name: 'Example' }); // this will be { name: 'Example' }

// Using apply to explicitly set 'this'
myFunc.apply({ name: 'Example' }); // this will be { name: 'Example' }

// Using an arrow function (lexical 'this')
const arrowFunc = () => {
  console.log(this); // 'this' will inherit from its surrounding scope
};
arrowFunc(); // 'this' will depend on where arrowFunc is called from