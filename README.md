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

`npm start`
- Runs the app in the development mode.
- By default, the application runs in localhost port 3000 with the address http://localhost:3000.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## [React Component and Props](https://reactjs.org/docs/components-and-props.html)

### What's React Component

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
- Components are like JavaScript functions.
- They accept arbitrary inputs (called “**props**”) and return React elements describing what should appear on the screen.

### Creating React Component

- We call such components **“function components”** because they are literally JavaScript functions.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Arrow Function Component Syntax**

```js
const Welcome = props => <h1>Hello, {props.name}</h1>
```

**[ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) class Syntax**

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

3. Use `camelCase` for html attributes.

```
<Welcome onClick="" />
```

4. Use `className` attribute instead of `class` attribute for css classes.

```
<Welcome className="" />
```

5. Component must have a root element. It can be a `div` or [Fragment](https://reactjs.org/docs/fragments.html) `<>`


### Stateless Functional Components

### Stateful Components

### JSX



### Render Dynamic Content Inside Component

### [Event Handling](https://reactjs.org/docs/handling-events.html)

Event handling of **React Elements** is same as DOM elements with following syntax differences.

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

- You cannot return false to prevent default behavior in React. You must call preventDefault explicitly.


### [Forms](https://reactjs.org/docs/forms.html)

## [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Before learning about hooks, make sure you understand the concept of [Destructing Assignment Syntax](#destructuring-assignment)

- Hooks are a new addition in React **16.8**.
- They let you use state and other React features without writing a class.
- Hooks are functions that let you **“hook into”** React **state** and **lifecycle** features from function components.

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

- It has a shorter syntax than standard function.
- It does not bind their own `this`.
- Arrow functions are best suited for non-method function.

**Example Syntax**

```
(param1, param2) => { statements }
```

If function have only one param, you can emit the `()` around the paramters and if it has only one statment in the method, you can emit `{}` in method body. And when you don't put `{}` brances, it will return that expression result.

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

- The destructuring assignment uses similar syntax, but on the **left-hand side of the assignment** to define what values to unpack from the sourced variable
- In destructuring assignment, each index on the **left-hand side** correspond to respective index in an array on **right-hand side** of assignment.

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

If an array have `N` elements and number of variables specified on the **left-hand side of the assignment is greater than N**, only the first N variables are assigned values.

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

### [Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

# References

### ReactJS

- [FullStackOpen - The University of Helsinki](https://fullstackopen.com/en/)
- [FullStackOpen Exercise Submission System](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- [Clever Programmer](https://www.youtube.com/c/CleverProgrammer)
- [freeCodeCamp.org](https://www.youtube.com/c/Freecodecamp/search?query=reactjs)
- [Coding Addict](https://www.youtube.com/codingaddict)

### JS

- [freeCodeCamp.org | Arrow Functions](https://www.youtube.com/watch?v=22fyYvxz-do)
- [Fireship | JS Destructuring in 100 Seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY)
- [Coding Addict | Javascript Fundamentals](https://www.youtube.com/watch?v=2Ji-clqUYnA)
- [SFDCFacts Academy | Modern JS Crash Course | The Ultimate Hands-On JavaScript Tutorial 2021 | Learn JS in 3 hour](https://www.youtube.com/watch?v=dY8li4JnoWQ)
- [Exploring ES6 | Book](https://exploringjs.com/es6.html)
 


