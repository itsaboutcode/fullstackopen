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

By default, the application runs in localhost port 3000 with the address http://localhost:3000.


## React Component and Props

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

1. Component mames must start with a capital letter. 
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

4. Use `className` attribute instead of `class` for css classes.

```
<Welcome className="" />
```

5. Component must have a root element. It can be a `div` or [Fragment](https://reactjs.org/docs/fragments.html) `<>`


### Stateless Functional Components

### Stateful Components

### JSX



### Render Dynamic Content Inside Component



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


# References

### ReactJS

- [FullStackOpen - The University of Helsinki](https://fullstackopen.com/en/)
- [FullStackOpen Exercise Submission System](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- [Clever Programmer](https://www.youtube.com/c/CleverProgrammer)
- [freeCodeCamp.org](https://www.youtube.com/c/Freecodecamp/search?query=reactjs)
- [Coding Addict](https://www.youtube.com/codingaddict)

### JS

- [Arrow Functions](https://www.youtube.com/watch?v=22fyYvxz-do)
- [Coding Addict | Javascript Fundamentals](https://www.youtube.com/watch?v=2Ji-clqUYnA)
- [SFDCFacts Academy | Modern JS Crash Course | The Ultimate Hands-On JavaScript Tutorial 2021 | Learn JS in 3 hour](https://www.youtube.com/watch?v=dY8li4JnoWQ)
 


