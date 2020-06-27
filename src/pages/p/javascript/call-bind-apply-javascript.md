---
title: call, bind and apply in Javascript
category: javascript
date: 2020-03-28
authorID: 1
pageDescription: >-
  call, bind and  apply are three methods in Javascript used to change the scope of this variable in a function.
pageKeywords: "call, bind, apply, this, call this, apply this"
tags: ["javascript"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1585408872/images/thewebfor5/call_bind_apply_ujjhbs.png"
---

These methods in Javascript are used to scope the keyword `this` in a function. In my [article (Almighty this, demystified)](https://dillionmegida.com/p/this-demystified), I wrote:

> `this` is an inherently (automatically) created variable at the creation of every function.

But it's scope varies depending on how it is been called. Check out the article to learn more about `this`.

For example:

```js
const me = {
  name: "Dillion",
  printName: function () {
    console.log(this.name)
  },
}
me.printName()
```

In the above, `printName()` would work as expected (log 'Dillion') because `this` at that point in time refers to the object (`me`) calling the method.

But look at this example:

```js
const me = {
  name: "Dillion",
  age: 56,
  print: function () {
    function printName() {
      console.log(this.name)
    }
    printName()
    function printAge() {
      console.log(this.age)
    }
    printAge()
  },
}
me.printName()
```

The expected outputs are `undefined` and `undefined`. This is because, the functions `printName` and `printAge` do not use `me` as their `this`. `me` did not directly call them, so their default `this` is `window`. And on `window`, `name` and `age` property do not exist.

`bind`, `apply` and `call` help us scope `this` for situations like this, so that the inner functions of `print` can use the `this` which it uses - `me`. Let's see them in action.

## `call`

### Syntax

```js
function.call(this, arg1, arg2, ...)
```

This method is used set `this` in a function which is afterwards, executed. Example:

```js
const me = {
  name: "Dillion",
  print: function () {
    function printName() {
      console.log(this.name)
    }
    printName.call(this)
  },
}
me.printName()
```

The expected output now is 'Dillion'.

`call` is used on the `printName()` function with an argument of `this`. `printName` and the `this` are on the same level, so what the method does is, "Use this `this` to replace your own automatically generated `this` and immediately, execute yourself". Hence, `printName` has access to `me` and it prints the `name` property.

Another example is;

```js
const me = {
  name: "Dillion",
}
function printName(arg1) {
  console.log(arg1 + " " + this.name)
}
printName()
printName.call(me, "Hello")
```

The expected outputs are `undefined` and 'Hello Dillion'. This is because, `printName()` called without an object uses the global `this` which points to `window` (and doesn't have the `name` property) whie `printName.call(me)` uses `me` to define it's `this`.

The extra argument of `call` as seen above replaces `arg1` parameter in the function.

## `bind`

### Syntax

```js
newFunction = function.bind(this, arg1, arg2, ...)
```

This method is very similar to `call`. The only difference is that while `call` sets this and immediately executes the function, `bind` creates a new function and sets the `this`.

Example:

```js
const me = {
  name: "Dillion",
}
function printName(arg1) {
  console.log(arg1 + " " + this.name)
}
const newPrint = printName.bind(me, "Hello")
newPrint()
```

The expected output is 'Hello Dillion'.

## `apply`

### Syntax

```js
function.apply(this, [arg1, arg2, ...])
```

This is also similar to `call`. The slight difference being that `call` accepts `this` argument and other other arguments seperated with commas while `apply` accepts `this` argument and other arguments seperated with commas but in an array.

Example:

```js
const me = {
  name: "Dillion",
}
function printName(arg1, arg2) {
  console.log(arg1 + " " + this.name + " >> " + arg2)
}
printName.apply(me, ["Hello", "Wow"])
```

The expected output is 'Hello Dillion >> Wow'.

## Wrap up

`bind`, `apply` and `call` simply set the `this` in a function. Whichever method to use depends on your choice, but I hope with this article, you have learnt how each of them works.

Thanks for reading : )
