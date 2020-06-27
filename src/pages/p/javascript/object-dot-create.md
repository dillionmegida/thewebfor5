---
title: Object.create() in Javascript
category: javascript
date: 2020-03-21
authorID: 1
pageDescription: >-
  Object.create() is a method in Javascript used for creating new objects while using a former object as the new object's prototype.
pageKeywords: "javascript, object.create, prototypes"
tags: ["javascript"]
---

`Object.create()` is a javascript method (function on an object) that creates a new object while using a former object as the new object's prototype.

## What are prototypes?

Prototypes are also objects. For an object (A) to be a protoype of object (B), it means that B has access to some properties of A. Look at it like, B was built on top of A. An example is the global `Object`, which is a prototype of all objects created. For example:

```js
let obj = {
  name: "Object",
  number: 3,
  print: function () {
    return "A method, yeah"
  },
}
console.log(obj.name, obj.number, object.print())
// Expected output
// Object
// 3
// A method, yeah
```

As we can see in the object above, there are only two properties and one method.

But, the following would also work:

```js
console.log(
    obj.hasOwnProperty('name');
    obj.hasOwnProperty('type');
)
// Expected output
// true
// false
```

Where does `hasOwnProperty` method come from?

Well, from the global `Object` which is a prototype of `obj`. To check this out, try this:

```js
console.log(obj)
```

In the console, you'll find the properties and method logged, but with one faded (hidden) property - `__proto__`. When you view more about the property, you'll find the constructor `Object` which has the `hasOwnProperty` method. That's basically what prototypes are.

## `Object.create()` in action

### Syntax

`Object.create()` is a method which takes an argument of the object which would be the prototype of the new object.

```js
const newObj = Object.create(existingObj)
```

`null` can also be passed as an argument which means the new object would not have any prototype.

```js
const newObj = Object.create(null)
```

### Return value

The return value of this method is an empty object. Yes, the object is literally empty, but it contains hidden properties which contains the contents of the prototype.

### Example

```js
const obj = {
  name: "Javascript",
  print: function () {
    return "Prototype"
  },
}
const newObj = Object.create(obj)
console.log(newObj)
console.log(newObj.name)
// Expected output
// {}
// Javascript
```

As you can see, when `newObj` is logged, an empty object is gotten, but `newObj.name` outputs the `name` property of it's object prototype. Let's check the properties of `newObj`

```js
console.log(newObj)
```

When you check the output in the console, you'll see an empty object, with the same `__proto__` property which contains all the properties and methods of `obj`. You'll also find another `__proto__`. As you may have thought, the second `__proto__` references the global `Object` prototype. Remember I said that all objects are creaed from the `Object` prototype. So even if `obj` was used as prototype for another object, it also has it's own existing prototype.

## Wrap up

There's a lot in how prototypes work but this article was created to explain the `Object.create` method.

One benefit of this prototype feature is how Javascript implements classes. Check out this article for more information - [How Javascript Implements Blass-based Object Oriented Programming](https://www.freecodecamp.org/news/how-javascript-implements-oop/)

For more understanding of Object.create, check out the [MDN documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

Thanks for reading 💛
