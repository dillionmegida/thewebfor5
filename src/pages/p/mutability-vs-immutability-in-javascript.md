---
title: Mutability vs Immutability in Javascript
date: 11-26-2019
readTime: 2 mins
pageDescription: >-
  Objects in Javascript can be classified as mutable and immutable depending on
  the ability to change over time. The best and usual advice is to always work
  with immutable objects. In this article, you will get to understand what the
  two terms mean.
pageKeywords: >-
  mutability, mutable, immutability, immutable, immutable objects, javascript,
  mutable objects, mutable objects in javascript
tags:
  - javascript
  - objects
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1574789582/images/blogs_cover/mutability-vs-immitability_puajjl.jpg
---
### What is Immutability

Immutability is an attribute which stands for unchangeable. When an object is immutable, it is either unable to change or would never be changed in it's existence.

### What is Mutability

On the other hand, this stands for changeable. Objects possessing this attribute would change at some point.

### TL,DR;

> Try as much as possible to always work with immutable objects when coding.

## How do you know when an object is immutable or mutable?

In javascript, variables can store two major data types - `primitive` and `reference`.

* Primitive data types include `number`, `string`, `symbol`, `boolean`, `undefined` and `null`.
* Reference data types include `object`.

Primitive values are stored directly in the location that the variable accesses.

Reference values are stored in the variable location  which is a pointer to a location in memory where the object is stored.

### Examples
- Immutability
```javascript
let a = 15;
let b = a;
b = b - 1;
console.log(a);
console.log(b);
// Output:
// 15
// 14
```
Variable `a` remains immutable, same as `b`. This is the same for other primitive type of variables.
- Mutability
```javascript
let a = ['first', 'second'];
let b = a;
b.pop();
console.log(a);
console.log(b);
// Output
// ['first'];
// ['first'];
```
You notice that `a` is also affected? That's because it is a mutable object. The same situation goes to objects
```javascript
let c = {
  first: 'javascript',
  second: 'language'
}
let d = c;
d.first = 'react';
console.log(c);
console.log(d);
// Output
// {first: 'react', second: 'language'}
// {first: 'react', second: 'language'}
```
Variable `c` is a reference variable and any other variable which it is assigned to only leaves a reference and not a new location for the variable. The examples above are simple instances but imagine having something like
```javascript
let d = c;
// some  manipulations
let e = c;
// some manipulations
...
```
There would be unexpected results as the initial object which the developer thinks he is working with has been mutated. However, there are solutions to this.

## Making Immutable Objects
Our aim now is to assign a new location to object variables even when they may require values from previous objects.
### Array Solution
#### The `concat()` method
Back to our code above, we can define a new location to the `b` array by using the `concat` method.
```javascript
let a = ['first', 'second'];
let b = a.concat();
b.pop();
console.log(a);
console.log(b);
// Output
// ['first', 'second'];
// ['first'];
```
**Note that** you can add more arrays as parameters to the concat method. This has assigned a new location to `b` while retaining all values in `a`.<br/>
This used to be the usual way of creating new objects from previous ones but ES6 introduced a new method which solves the mutability problem - the `spread` operator. Usage:
```javascript
let a = ['first', 'second'];
let b = [...a, 'third'];
b.pop();
console.log(a);
console.log(b);
// Output
// ['first', 'second'];
// ['first'];
```
`b` simply steals the values in `a` and adds a new value but uses a new location in memory.
### Object Solution
#### `Object.assign()`
```javascript
let c = {
  first: 'javascript',
  second: 'language'
}
let d = Object.assign({}, c);
d.first = 'react';
console.log(c);
console.log(d);
// Output
// {first: 'javascript', second: 'language'}
// {first: 'react', second: 'language'}
```
This method (as used above) creates a new object, but assigns the values of `c` to included in it. With this, we get a new location in memory for `d` contents.
#### Using the `rest` operator
This operator can also be used for objects.
```javascript
let c = {
  first: 'javascript',
  second: 'language'
}
let d = {...c};
d.first = 'react';
console.log(c);
console.log(d);
// Output
// {first: 'javascript', second: 'language'}
// {first: 'react', second: 'language'}
```
Similar to arrays, `d` steals the contents of `c` and is assigned to a new location.

I hope you have gotten to understand the concept of mutability and immutability, the side-effects (positive and negative) and how to control variables created.

Kindly share this article if you loved it. Also, you could reach out to me on twitter - [@iamdillion](https://twitter.com/iamdillion).
