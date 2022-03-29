# [FullStackOpen](https://fullstackopen.com/en/)


## [Exercise Submission System](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)

## ReactJS

ReactJS is a library to make UI. Nothing more!

![ZDM7pgZQ](https://user-images.githubusercontent.com/204423/160538410-7313d36c-bf31-45d4-a909-1c654418f6ac.png)


### Creating ReactJS Project

```

npx create-react-app my-app
cd my-app
npm start
```

By default, the application runs in localhost port 3000 with the address http://localhost:3000.


## Javascript for ReactJS

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

### Arrow Functions

- https://www.youtube.com/watch?v=22fyYvxz-do


