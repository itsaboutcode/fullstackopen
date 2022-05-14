- [ReactJS](#reactjs)
  - [What's ReactJS](#whats-reactjs)
  - [Creating ReactJS Project](#creating-reactjs-project)
        - [Run the App in Developement Mode](#run-the-app-in-developement-mode)
        - [Building app for production](#building-app-for-production)
  - [React Component and Props](#react-component-and-props)
    - [What's React Component](#whats-react-component)
    - [Creating React Functional Component](#creating-react-functional-component)
    - [React Component Rules](#react-component-rules)
    - [Stateless Functional Components](#stateless-functional-components)
    - [Stateful Components](#stateful-components)
    - [JSX](#jsx)
    - [Render Dynamic Content Inside Component](#render-dynamic-content-inside-component)
    - [Event Handling](#event-handling)
          - [HTML Example](#html-example)
          - [React Example](#react-example)
    - [Forms](#forms)
  - [React Hooks](#react-hooks)
    - [Rules of Hooks](#rules-of-hooks)
- [Javascript for ReactJS](#javascript-for-reactjs)
    - [Arrow Function](#arrow-function)
    - [Destructuring Assignment](#destructuring-assignment)
      - [Array Destructuring](#array-destructuring)
      - [Examples](#examples)
        - [Basic variable assignment](#basic-variable-assignment)
        - [Assignment separate from declaration](#assignment-separate-from-declaration)
        - [Default values](#default-values)
        - [Swapping variables](#swapping-variables)
        - [Parsing an array returned from a function OR Parsing an array to a function.](#parsing-an-array-returned-from-a-function-or-parsing-an-array-to-a-function)
        - [Ignoring some returned values](#ignoring-some-returned-values)
        - [Assigning the rest of an array to a variable](#assigning-the-rest-of-an-array-to-a-variable)
        - [Unpacking values from a regular expression match](#unpacking-values-from-a-regular-expression-match)
      - [Object Destructuring](#object-destructuring)
        - [Basic assignment](#basic-assignment)
        - [Assignment separate from declaration](#assignment-separate-from-declaration-1)
        - [Assigning to new variable names](#assigning-to-new-variable-names)
        - [Default values](#default-values-1)
        - [Assigning to new variable names and providing default values](#assigning-to-new-variable-names-and-providing-default-values)
        - [Unpacking properties from objects passed as a function parameter](#unpacking-properties-from-objects-passed-as-a-function-parameter)
        - [Setting a function parameter's default value](#setting-a-function-parameters-default-value)
        - [Nested object and array destructuring](#nested-object-and-array-destructuring)
        - [Computed object property names and destructuring](#computed-object-property-names-and-destructuring)
        - [Rest in Object Destructuring](#rest-in-object-destructuring)
        - [Invalid JavaScript identifier as a property name](#invalid-javascript-identifier-as-a-property-name)
        - [Combined Array and Object Destructuring](#combined-array-and-object-destructuring)
        - [The prototype chain is looked up when the object is deconstructed](#the-prototype-chain-is-looked-up-when-the-object-is-deconstructed)
    - [Spread Operator Syntax (...)](#spread-operator-syntax-)
    - [Classes](#classes)
      - [Class Declarations Syntax](#class-declarations-syntax)
      - [Class Expressions Syntax](#class-expressions-syntax)
    - [ES/JS Modules](#esjs-modules)
      - [Exporting Module Feature](#exporting-module-feature)
      - [Importing Module Feature](#importing-module-feature)
      - [Renaming imports and exports](#renaming-imports-and-exports)
        - [Export Example](#export-example)
        - [Import Example](#import-example)
      - [Creating a module object](#creating-a-module-object)
    - [Exporting Classes From a Module](#exporting-classes-from-a-module)
        - [Class Export Syntax](#class-export-syntax)
        - [Class import and usage syntax](#class-import-and-usage-syntax)
- [References](#references)
    - [ReactJS](#reactjs-1)
    - [JS](#js)

# [ReactJS](https://reactjs.org/)

## What's ReactJS

ReactJS is a library to make UI. Nothing more!

![ZDM7pgZQ](https://user-images.githubusercontent.com/204423/160538410-7313d36c-bf31-45d4-a909-1c654418f6ac.png)


## Creating ReactJS Project

```bash
npx create-react-app my-app
cd my-app
npm start
```

##### Run the App in Developement Mode

```js
npm start
```

- Runs the app in the development mode.
- By default, the application runs in localhost port 3000 with the address http://localhost:3000.

##### Building app for production

```js
npm run build
```
- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.


## [React Component and Props](https://reactjs.org/docs/components-and-props.html)

### What's React Component

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
- Components are like JavaScript functions.
- They accept arbitrary inputs (called **props**) and return React elements describing what should appear on the screen.

### Creating React Functional Component

- We call such components **function components** because they are literally JavaScript functions.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Arrow Function Component Syntax**

```js
const Welcome = props => <h1>Hello, {props.name}</h1>
```

**[ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) Class Syntax**

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### React Component Rules

1. Component name must start with a capital letter. 
> React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component

2. Always close the tag for React components e.g;

```
<Welcome>OR</Welcome>
<Welcome /> 

```

3. Use `camelCase` for HTML attributes.

```
<Welcome onClick="" />
```

4. Use `className` attribute instead of `class` attribute for CSS class selector.

```
<Welcome className="" />
```

5. Component must have a root element. It can be a `div` or [Fragment](https://reactjs.org/docs/fragments.html) `<>`


### Stateless Functional Components

### Stateful Components

### JSX



### Render Dynamic Content Inside Component

### [Event Handling](https://reactjs.org/docs/handling-events.html)

Event handling of **React Elements** is the same as DOM elements with following syntax differences.

1. React events are named using **camelCase**, rather than lowercase.
2. With JSX, you pass a function as the **event handler**, rather than a string.

###### HTML Example

```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

###### React Example


```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Other differences are

- An event handler is supposed to be **either a function** or a **function reference**.

```
<button onClick={activateLasers}>
  Activate Lasers
</button>

<button onClick={() => { console.log('Hello World') }}>
  Activate Lasers
</button>

```

- You cannot return false to prevent default behavior in React. You must call `preventDefault` explicitly.


### [Forms](https://reactjs.org/docs/forms.html)

## [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Before learning about hooks, make sure you understand the concept of [Destructing Assignment Syntax](#destructuring-assignment)

- Hooks are a new addition in React **16.8**.
- They let you use state and other React features without writing a class.
- Hooks are functions that let you **hook into** React **state** and **lifecycle** features from function components.
- React provides a few built-in Hooks like **useState**. 
- You can also create your own Hooks to reuse stateful behavior between different components.


### [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

**Hooks are _JavaScript functions_**, but they impose two additional rules

- **Only call** Hooks at the **top level**. **Don’t call** Hooks inside **loops**, **conditions**, or **nested functions**.
- **Only call** Hooks from **_React function components_** or custom hooks. **Don’t call** Hooks from **regular JavaScript functions**.


```js
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  // Conditiona Example: this does not work!
  if ( age > 10 ) {
    const [foobar, setFoobar] = useState(null)
  }

  // Loop Example: Not good
  for ( let i = 0; i < age; i++ ) {
    const [rightWay, setRightWay] = useState(false)
  }

  // Nested Function: this is also illegal
  const notGood = () => {
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```



# Javascript for ReactJS

### Arrow Function

- It has a shorter syntax than the standard function.

- It does not bind their own `this`.

- Arrow functions are best suited for non-method functions.

**Example Syntax**

```
(param1, param2) => { statements }
```

If the function has only one param, you can emit the `()` around the paramters and if it has only one statment in the method, you can emit `{}` in method body. And when you don't put `{}` brances, it will return that expression result.

```
param => statment
(param) => {return statmenet }

// Above 2 functions are equal.
```

If there is no parameter required for a function, `()` is required.

```
() => statmenet
() => { expressions }
() => { return expression }
```

**Example Methods**

```
const multiply = (x*y) => { return x*y }
const multiply = (x*y) =>  return x*y 
```

### [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

The destructuring assignment syntax is a JavaScript expression that makes it possible to **unpack values** from **arrays**, or **properties from objects**, into **distinct variables**.

#### [Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring)

- Imagine you have an array and you would like to assign each item from an array to local variables.

- The destructuring assignment uses similar syntax, but on the **left-hand side of the assignment** to define what values to unpack from the sourced variable.
  
- In the destructuring assignment, each index on the **left-hand side** correspond to respective index in an array on **right-hand side** of assignment.

```js
const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];

```

<img width="742" alt="Old vs New Way of Array Destructuring" src="https://user-images.githubusercontent.com/204423/161268094-b33f5e47-9383-4792-935b-b122b81f3b30.png">

<img width="599" alt="Which variable will contain which value?" src="https://user-images.githubusercontent.com/204423/161268273-419e524a-8e2b-4dd4-b884-e9245aa2792f.png">

#### Examples

##### Basic variable assignment

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

##### Assignment separate from declaration

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

If an array has `N` elements and the number of variables specified on the **left-hand side of the assignment is greater than N**, only the first N variables are assigned values.

```js
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined

```

##### Default values

A variable can be assigned a default, in the case that the value unpacked from the array might be `undefined`.

```js
let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

```

##### Swapping variables

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

##### Parsing an array returned from a function OR Parsing an array to a function. 

Destructuring can make working with an array return from a function or passsing to a function more concise.

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

```js
function f([a,b]) {
  console.log(a); // 1
  console.log(b); // 2
}
f([1,2]);
```

##### Ignoring some returned values

You can ignore return values that you're not interested in.

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

```

You can also ignore all returned values.

```js
[,,] = f();
```

##### Assigning the rest of an array to a variable

When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

##### Unpacking values from a regular expression match


#### [Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)

##### Basic assignment

```
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true

```

##### Assignment separate from declaration

```
let a, b;

({a, b} = {a: 1, b: 2});

```

> The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.


##### Assigning to new variable names

```
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

```

`const {p: foo} = o` takes from the object `o` the property named `p` and assigns it to a local variable named `foo`.

##### Default values

A variable can be assigned a default, in the case that the value unpacked from the object is `undefined`.

```
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

##### Assigning to new variable names and providing default values

##### Unpacking properties from objects passed as a function parameter

##### Setting a function parameter's default value

##### Nested object and array destructuring

##### Computed object property names and destructuring

##### Rest in Object Destructuring

##### Invalid JavaScript identifier as a property name

##### Combined Array and Object Destructuring

##### The prototype chain is looked up when the object is deconstructed

### [Spread Operator Syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

The JavaScript spread operator `(...)` allows us to quickly `copy all or part` of an existing `array or object` into another array or object.

```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// Output = [1,2,3,4,5,6]

```

The spread operator is often used in combination with `destructuring`.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

// one = 1
// two = 2
// rest = 3,4,5,6
```

We can use the spread operator with objects too. Below is an example of how we can combine 2 objects.

```js
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// Output object will be like this

{
  brand: 'Ford',
  model: 'Mustang',
  color: 'yellow',
  type: 'car',
  year: 2021, 
}

```

### Classes

#### Class Declarations Syntax

- To declare a class, you use the `class` keyword with the name of the class.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

```

#### Class Expressions Syntax

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"

```



### [ES/JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- In programming, you try to break down your problems into small chunks and spread them over multiple files so that you can share them across projects and within projects.
  
- In js, when you create a file, it's called a `module.`
  
- To use functions, classes, variables, and constants in other files, you need to know how to export them so that other modules can import them and use them.


#### Exporting Module Feature

- You can export functions, var, let, const, and classes.
  
- You put the `export` keyword before the functions, var, let, const and classes.
  
- You can't use export inside a function.
  
-  A more convenient way of exporting all the items you want to export is to use a **single export statement** at the **end of your module file**, followed by a comma-separated list of the features you want to export wrapped in curly braces

```js
export const name = 'square'; // Constant

export function draw() {} // Function

export { name, draw, reportArea, reportPerimeter }; // more convenient syntax at the end of file

```

- Above method of exporting is called **named exports.**
  
- We have another method of exporting, called **default export** and below is the example syntax. Note the **lack of curly braces**.
  
- **Only one default export** allowed per module.

```js
export default randomSquare;
export default function(ctx) { }

```


#### Importing Module Feature

- Once you've exported some features out of your module, you need to import them where you wanted to use them.
  
- You cannot change the variable that was imported, but you can still modify properties similar to `const`.

- To import, you use the `import` statement, followed by a `comma-separated list` of the features you want to import wrapped in `curly braces`, followed by the keyword `from`, followed by the `path to the module file`.

```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

```

- Importing **default export** modules syntax.

- Note the **lack of curly braces**. This is because there is **only one default export** allowed per module.

```js
import randomSquare from './modules/square.js';
import {default as randomSquare} from './modules/square.js';   // expanded version of above line
```

#### Renaming imports and exports

- Inside your import and export statement's curly braces, you can use the keyword `as` along with a new feature name, to change the identifying name you will use for a feature inside the top-level module.

- You need this feature because it's possible that more than 1 module exported with the same name.

- Since you can't change the module of the third party, it's generally a good idea not to change the name of your own modules too and change names on the import side.
##### Export Example

```js
// inside module.js
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// inside main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';

```

##### Import Example

```js
// inside module.js
export { function1, function2 };

// inside main.js
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';

```

#### Creating a module object

- So far, when we import from a module, we import individual items from a module and use them e.g;

```js
import { name, draw, reportArea, reportPerimeter } from './canvas.js';

name();

```
- Instead of importing all of them individually, you can import all of them in an `object` and then use feature of a module as functions or variables of a given object.

```js
import * as Canvas from './canvas.js';
Canvas.name()
```

### Exporting Classes From a Module

##### Class Export Syntax

```js

class Square {
  constructor(ctx, listId, length, x, y, color) { }

  draw() { }
  
}

export { Square };

```

##### Class import and usage syntax

```js
import { Square } from './square.js';

let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();

```


# References

### ReactJS

- [FullStackOpen - The University of Helsinki](https://fullstackopen.com/en/)
- [FullStackOpen Exercise Submission System](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- [Clever Programmer](https://www.youtube.com/c/CleverProgrammer)
- [freeCodeCamp.org](https://www.youtube.com/c/Freecodecamp/search?query=reactjs)
- [Coding Addict](https://www.youtube.com/codingaddict)
- [w3schools | Reactjs](https://www.w3schools.com/react/default.asp)

### JS

- [freeCodeCamp.org | Arrow Functions](https://www.youtube.com/watch?v=22fyYvxz-do)
- [Fireship | JS Destructuring in 100 Seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY)
- [Coding Addict | Javascript Fundamentals](https://www.youtube.com/watch?v=2Ji-clqUYnA)
- [SFDCFacts Academy | Modern JS Crash Course | The Ultimate Hands-On JavaScript Tutorial 2021 | Learn JS in 3 hour](https://www.youtube.com/watch?v=dY8li4JnoWQ)
- [Exploring ES6 | Book](https://exploringjs.com/es6.html)
- [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


