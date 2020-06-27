---
title: The Difference Between let, const and var in Javascript
category: javascript
date: 2020-02-23
authorID: 1
pageDescription: >-
  var, let and const and different ways of declaring variables in Javascript. The difference between them is that var hoists its variables to the top of its local or global scope while let and const does not hoist variables.
pageKeywords: "var, let, const, hoisting, scope"
tags: ["javascript"]
cover: https://res.cloudinary.com/dillionmegida/image/upload/v1582413049/images/thewebfor5/let_const_var_pvfjmt.png
---

`var`, `let` and `const` generally control hoisting of variables. Another feature of `const` is that contrary to variables which can changed, values declared here are **CONSTANT** - cannot change.

Hosting is a behavior in Javascript whereby variables are moved to the top of their scope. For example:

```js
function print() {
  console.log(name)
  var name = "Javascript"
}
print()
```

The function returns `undefined` even though as at the time `console.log` was called, `name` wasn't known yet. It was supposed to return a reference error, but it didn't.

`name` was hoisted. But the value wasn't.

Let's look at scope a little.

## Scope in Javascript

Scope refers to the environment of a variable. It refers to how accessible a variable is - what parts of the program can access the variable.

In Javascript, there are three types of scope namely:

- Global Scope
- Local Scope
- Block Scope

## Global scope

This the default which defines variables globally. That is, can be referenced anywhere in the program.

```js
var name = "Javascript"
function printName() {
  console.log(name)
}
printName()
// Javascript
```

`name` is global, hence the function can access it.

## Local scope

This is created with functions. Variables declared here can only be accessed within the function it is was created in. Example:

```js
var name = "Javascript"
function printName() {
  console.log(name)
  var number = 18
}
console.log(number)
printName()
```

A `ReferenceError` is thrown because `number` is locally scoped and cannot be accessed outside the function.

## Block Scope

This scope is generally created with `curly brances` ({ }). These braces exists in `functions`, `loops`, `if` statements and so on.

```js
var name = "Javascript"
if (name === "Javascript") {
  var number = 17
}
console.log(number)
// 17
```

We've gotten the hang of scope,

## Now to the keywords

The two main differences between `var`, `let` and `const` is that

1. `var` hoists it's variables to the top of its `local/global scope` while `let` and `const` does not hoists its variables.
2. `var` cannot be used in block scopes. It still hoists it to the top of the `local/global` scope. While, `let` and `const` can be used in block scopes.

Examine the following code:

```js
console.log(name)
var name = "Javascript"
function printName() {
  console.log(number)
  var number = 16
  console.log(age)
  let age = 15
}
printName()
```

If you tried the above, you'll get an error, which is **ReferenceError: Cannot access `age` before initialization**. This is contrary to `undefined` which `var` would have resulted. This is because, `let` does not hoist variables.

This proves the first difference

Examine the next code:

```js
console.log(name)
var name = "Javascript"
function printName() {
  console.log(number)
  var number = 16
  console.log(name2)
  console.log(name3)
  if (number === 16) {
    var name2 = "keyword"
  }
  if (number === 15) {
    var name3 = "letconst"
  }
}
printName()
```

This prints `undefined` for `name2` and `name3` to the console. `name2` and `name3` is declared and hoisted to the top of the local scope even before the `if` statements are executed but the value isn't hoisted along with it.

This proves the first difference.

Examine this code again:

```js
console.log(name)
var name = "Javascript"
function printName() {
  console.log(number)
  var number = 16
  if (number === 16) {
    let name2 = "keyword"
  }
  console.log(name2)
}
printName()
```

This results in a **Reference Error**. `name2` is not defined. This proves the second difference.

`const` works the same way with `let` in terms of scope and hoisting, but does not allow changing the values of its variables.

## Useful Resources

- [The Concept of Scope in Javascript](https://blog.soshace.com/the-concept-of-scope-in-javascript/)
- [Understanding Hoisting in Javascript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
