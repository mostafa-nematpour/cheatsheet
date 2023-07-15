# Basic JavaScript Cheat Sheet

## Comments

- In-line comment: `// This is an in-line comment.`
- Multi-line comment: `/* This is a multi-line comment */`

## Data Types

JavaScript different data types are:
- `undefined`
- `null`
- `boolean`
- `string`
- `symbol`
- `bigint`
- `number`
- `object`

## Variables

- Declare a variable: `var ourName;`
- Store a value in a variable with the assignment operator (`=`).
- Use `let` to declare a variable that can only be declared once with the same name.

## String Manipulation

- String length: `stringVar.length`
- Get character at index `n`: `stringVar[n]`

## Arrays

- Declare an array: `const sandwich = ["peanut butter", "jelly", "bread"];`
- Nested arrays: `const teams = [["Bulls", 23], ["White Sox", 45]];`
- Access array data with indexes: `console.log(array[0]);`
- Modify array data with indexes: `ourArray[0] = 15;`
- Append data to the end of an array: `arr1.push(4);`
- Remove the last element of an array: `const oneDown = threeArr.pop();`
- Remove the first element of an array: `const removedFromOurArray = ourArray.shift();`
- Add elements to the beginning of an array: `ourArray.unshift("Happy");`

## Functions

- Declare a function: `function functionName() {}`
- Variables declared within a function have local scope.
- Local variables take precedence over global variables with the same name.

## Conditional Logic

- `if` statement: `if (condition) {}`
- Strict equality operator (`===`) checks value and type.
- `switch` statement for selecting from multiple options.

## JavaScript Objects

- Get property values: `const prop1val = myObj["prop1"];` or `const prop2val = myObj.prop2;`
- Update object properties: `myObject.prop1 = "new data";`
- Add new properties to an object: `ourDog.bark = "bow-wow";`
- Delete properties from an object: `delete ourDog.bark;`
- Test object properties: `myObj.hasOwnProperty("top");`

## Math and Numbers

- `Math.random()` generates random numbers.
- `Math.floor()` rounds a value down to the nearest whole number.
- `parseInt(string, radix)` parses a string and returns an integer.

## Ternary Operator

- Syntax: `a ? b : c`
- `a` is the condition.
- `b` is the code to run when the condition is true.
- `c` is the code to run when the condition is false.

## ES6 Features

- `Object.freeze()` to prevent data mutation.
- Arrow functions: `const myFunc = () => "value";`
- Spread operator: `...arr`
- Destructuring assignment: `const { name, age } = user;` or `const [a, b,,, c] = [1, 2, 3, 4, 5, 6];`
- Template literals for creating strings: ``Hello, my name is ${person.name}! I am ${person.age} years old.``
- Object property shorthand: `const { x, y } = getMousePosition();`
- Returning objects from arrow functions: `const getMousePosition = (x, y) => ({ x, y });`

