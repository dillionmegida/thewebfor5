---
title: Call Stack in Javascript
category: javascript
date: 2020-02-22
authorID: 1
pageDescription: >-
  The call stack is a feature in Javascript which allows Javascript to keep track of executing functions in the thread of execution of a source code.
pageKeywords: "call, stack, call stack, thread of execution"
tags: ["javascript"]
---

A stack is a data structure in programming which consists of different elements. More elements are added by **push**ing and existing elements are removed by **pop**ping.

`push` adds an element next to the last element in the stack. `pop` removes the last element in the stack.

## Call Stack

This is a feature in Javascript used to keep track of executing functions.

When a new function is to be executed according to the thread of execution in the source code, it is added to the call stack and **call**ed to be executed. This allows Javascript to keep track of where it stopped in execution. As execution of the function finishes, it is removed from the call stack and the thread continues.

## Example

Say we have the following code:

```js
const myName = {
  fname: "Dillion",
  lname: "Megida",
}
function getFirstName(name) {
  return name.fname
}
function getLastName(name) {
  return name.lname
}
function getCompleteName(getFirstNameFunction, getLastNameFunction) {
  const firstName = getFirstNameFunction(myName)
  const lastName = getLastNameFunction(myName)
  return `${firstName} ${lastName}`
}
const completeName = getCompleteName(getFirstName, getLastName)
console.log(completeName)
```

The following is what happens in the call stack:

- The first function in the call stack is a global function, which could be referred to as the `main` function. This is called before the execution of the source code. `main` is added to the call stack.

  Call Stack - [ `main` ]

- The thread of execution goes on as variables and functions are declared and saved in memory.
- At `const completeName...`, a function is called - `getCompleteName`. This is added to the call stack.

  Call Stack - [ `main`, `completeName` ]

- Inside `getCompleteName`, another function is called - `getFirstNameFunction` which represents the argument, `getFirstName`. `getFirstName` is added to the call stack.

  Call Stack - [ `main`, `completeName`, `getFirstName` ]

- `getFirstName` returns a value (`name.fname` which represents the argument `myName.fname`). After the function returns a value, it is removed from the call stack.

  Call Stack - [ `main`, `completeName` ]

- Another function is called in `getCompleteName` which is `getLastNameFunction` representing the argument `getLastName`. This function is added to the call stack before it is called.

  Call Stack - [ `main`, `completeName`, `getLastName` ]

- `getLastName` returns a value - `name.lname` which represents the argument `myName.lname` and is removed from the call stack.

  Call Stack - [ `main`, `completeName` ]

- `getCompleteName` finally returns a value which is a string interpolation of the two names gotten from the functions. Afterwards, it is removed from the call stack.

  Call Stack - [ `main` ]

- `console.log` is also a function. Before it is called, it is added to the call stack.

  Call Stack - [ `main`, `console.log` ]

- It prints the variable, `completeName` to the console and is immediately removed from the call stack.

  Call Stack - [ `main` ]

- There's nothing to be executed again, hence `main` is removed.

  Call Stack - [ ]

## Wrap Up

From the above example, we observe how Javascript keeps track of where it stopped in a function before proceeding to another function.

If the stack takes up too many functions that it can contain, it results in a **stack overflow** error. An example is recursive function calling itself without an exit point. Example:

```js
function printName(name) {
  printName(name)
}
printName("webfor5")
```

`printName` is continuously added to the stack until it reaches the limit and the error is thrown.

Thanks for reading 😇
