---
title: Rest vs Spread Operator in JavaScript, Simplified
category: javascript
date: 2020-06-14
authorID: 1
pageDescription: >-
    The Rest and Spread operator are two features of JavaScript introduced in ES6 which makes development easier with JavaScript. Learn their differences in this article.
pageKeywords: "rest, spread, rest vs spread"
tags: ["es6"]
cover: 'https://res.cloudinary.com/dillionmegida/image/upload/v1592158803/images/thewebfor5/rest_and_spread_xmwdsn.png'
---

The Rest and Spread operator are two features of JavaScript introduced in [ES6](http://es6-features.org/). They work entirely different but their similar syntax (triple dots `...`) brings some misconceptions when working with them.

In this article, I'll explain what these operators do and where they can be used.

## TLDR;

The `rest` operator, is used to group **remaining** arguments in, usually in functions.

The `spread` operator, on the other hand, is used to split a group of values in JavaScript.

Key takeaway: `rest` groups, `spread` splits.

Now in detail,

## The Rest Operator

This operator is used to get all or remaining arguments in a function as an array. For example:

```js
function printArgs(args) {
    console.log(args)
}
```

No matter the arguments passed to this function when used, only the first argument is considered. To get more arguments, the function declaration may contain something like `args1, args2, args2...`, but for how long? The `args1, args2...` approach is perfect for functions which only care about a definite number of arguments, but for indefinite arguments, `rest` makes things easy.

Although, before `rest`, was `arguments`. Here's an example:

```js
function printArgs(args) {
    console.log(args)
    console.log(arguments)
}
printArgs(1, 2, 3, 4, 5)
// 1
// { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
```

The same program with `rest`:

```js
function printArgs(...args) {
    console.log(args)
}
printArgs(1, 2, 3, 4, 5)
// [1, 2, 3, 4, 5]
```

`rest` is more useful than `arguments` because:

-   it allows you to name the arguments array whatever you like (as we saw above, `args`)
-   it returns an array, while `arguments` is an object, hence, array methods can be performed on `rest`'s result
-   while `arguments` gets **all** the arguments in the function, `rest` can be used to get the **remaining** arguments after some have been selected. Here's what I mean:

```js
function printNumbers(firstNumber, secondNumber, ...remainingNumbers) {
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(remainingNumbers)
}
printNumbers(1, 2, 3, 4, 5)
// 1
// 2
// [3, 4, 5]
```

**NOTE THAT**, the first number can also be gotten with `args[0]` but with `rest`, we can select the values we want right from the arguments declaration.

## Spread Operator

This operator is used to split a group of values. The group could be a string, array, or object.

For strings and arrays, the result of the spread operator is an array because they are iterable based on their index nature. By index nature, I mean:

```js
const str = "javascript"
const arr = ["javascript"]
console.log(str[0])
// j
console.log(arr[0])
// javascript
```

For objects, the result of the spread operator is an object because objects are based on their key-value nature.

### Uses

The `spread` operator can be used in four contexts. They are:

#### Array expressions

Syntax:

```js
const newArray = [...oldArray]
```

For example:

```js
const oldArray = [3, 4, 5]
const newArray1 = [...oldArray]
console.log(newArray1)
// [3,4,5]
const newArray2 = [1, 2, ...oldArray]
console.log(newArray2)
// [1,2,3,4,5]
```

From the above, you'd notice how the values of the `oldArray` were **spread** in the new arrays.

#### String expressions

Syntax:

```js
const strArray = [...string]
```

This is similar to be `string.split`. For example:

```js
const str = "javascript"
const strArray = [...str]
console.log(strArray)
// [ 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't' ]
```

#### Function expressions

Syntax:

```js
const result = fn(...stringOrArray)
```

For example:

```js
function add(a, b) {
    console.log(a + b)
}
const numbers = [5, 6]
add(...numbers);
// 11
```

You'd observe that we didn't place the `numbers` in an array when using it as an argument. What the above does is to spread the values for `add`. It translates to `add(5,6)`.

#### Object expressions

Syntax:

```js
const newObj = { ...oldObj }
```

For example:

```js
const oldObj = {
    lang: 'javascript',
    score: 23
}
const newObj1 ={...oldObj}
console.log(newObj1)
// {lang: 'javascript', score: 23}
const newObj2 = {...oldObj,short: 'JS'}
console.log(newObj2)
// { lang: 'javascript', score: 23, short: 'JS' }
const newObj3 = {...oldObj, score: 40}
console.log(newObj3)
// { lang: 'javascript', score: 40 }
```

For `newObj1`, you can see how the old object properties were spread.

For `newObj2`, you can see how the old object properties were spread, and a new property `short`, was added.

For `newObj3`, you can see how the old object properties were spread, and the property `score` was modified at the same time. **NOTE THAT** if `score:40` was declared before the old object properties were spread, the `score:23` would take priority.

The `spread` operator is considered very useful especially in array and object expressions because it ensures [immutability in JavaScript objects](https://dillionmegida.com/p/mutability-vs-immutability-in-javascript/)

## Wrap up

`rest` and `spread` are two special features that make development easier. They also have cool benefits when using [array and object destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Thanks for reading : )
