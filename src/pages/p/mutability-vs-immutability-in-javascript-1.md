---
title: Mutability vs Immutability in Javascript
date: 26-10-2019
readTime: 3 mins
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
  - mutability
cover: ''
---
### What is Immutability
Immutability is an attribute which stands for unchangeable. When an object is immutable, it is either unable to change or would never be changed in it's existence.
### What is Mutability
On the other hand, this stands for changeable. Objects possessing this attribute would change at some point.

### TL,DR;
> Try as much as possible to always work with immutable objects when coding.

## How do you know when an object is immutable or mutable?

In javascript, variables can store two major data types - `primitive` and `reference`.
- Primitive data types include `number`, `string`, `symbol`, `boolean`, `undefined` and `null`.
- Reference data types include `object`.

Primitive values are stored directly in the location that the variable accesses

Reference values are stored in the variable location  which is a pointer to a location in memory where the object is stored


