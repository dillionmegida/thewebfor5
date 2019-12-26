---
title: Library vs Framework
category: general
date: 12-20-2019
pageDescription: >-
  A library is a collection of modules for ease in development while a framework is a standard foundation from which programs and applications are built.
pageKeywords: 'library, framework, fundamentals'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577323116/images/thewebfor5/library-framework_fzafjj.jpg
tags: ["framework", "library"]
---
## Table of Contents
- What is a library?
- What is a framework?
- Similarities
- Differences

## What is a library?
A library in programming can be likened to a mechanic's workshop. You have the spanner, set of tyres, set of windscreens and so on. The workshop is a collection of tools that vehicles for upgrade or repair purposes.

In programming, a library is a collection of functions or objects or modules (generally called) which can improve programs or applications.

For example, in javascript, we have a popular library called jQuery which aids effecient selection of DOM elements. You can choose to use **jQuery** throughout your application or in few places. It only makes things easy for you not **dictate** for you.

You could also create your own library. Let's create a small javascript library.
```javascript
function greetHuman(name, timeOfDay) {
  return 'Good ' + timeOfDay + ', ' + name;
}
```
Our small library is a function which returns a greeting with the `name` of the subject and `timeOfDay` argument passed to it. You can choose to write the string out manually or use the library.

## What is a framework?
A framework refers to a foundation of which different programs can be built on. It can also be referred to as an already built program in a standard form from which other programs can be developed.

It has pre-defined ways of building programs. Without the defined ways, programs cannot be developed efficiently. It's sometimes impossible to create such programs without their own ways.

For example, Dominos. They have their own way of making products. If you want to work with them, they **dictate** the rules on how products are made. They are like a framework for building products.

Another example is a popular javascript framework known as **VueJS** which has a pre-defined way of building web applications.

*With the definitions above, let's compare.*

## Similarities
- Frameworks and Libraries can be used together in developing applications.
- They are both codes written by someone else to aid ease in development.

## Differences
- You are in charge of your applications work when using libraries compared to frameworks. You use libraries when you want to but frameworks most times instruct you on what to use and when to use it.
- Many libraries can be used in one program but not many frameworks can be used at once. Moreover, using two frameworks is rare. Personally, I've never heard of it.
- A framework can be a collection of libraries can a library can never be a collection of frameworks.
- Frameworks are usually large in size since they are a standard for building applications but libraries can be of small or big sizes.