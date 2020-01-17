---
title: Promises in Javascript
category: javascript
date: 2020-01-17
authorID: 1
pageDescription: >-
  Promises in Javascript are used to handle asynchronous events. It acts as a figure used to represent the value of something in calculation for a result that is initially unknown.
pageKeywords: 'javascript, promises, javascript promises, async, await, async/await, asunchronous, promises asynchronous, promise chain, promise chaining, then, catch, rejected, fulfilled, resolved'
tags: ["async", "javascript"] 
---

## What are promises?
Promises are used to handle asynchronous events in Javascript.

According to the dictionary,
> A promise is an assurance that one will do something or that something will happen.

Emphasis on **"something will"**.

According to Wikipedia,
> A promise acts as a proxy for a result that is initially  unknown, usually because the computation of its value is not yet complete.

According to the dictionary,
> A proxy referes to a figure used to represent the value of something in a calculation.

There are times when programming whereby some data would not be gotten immediately. Javascript uses promises to handle such occasions.

## A real life scenario
Let's say your dad *promised* you a bicycle if you come out with the best grades in school. There are a lot of things that can happen here.

1. When the required grades are gotten, you'd wait for him to fulfil his promise by getting you the bicycle.
  - When trying to get to the bicycle, if funds are enough, he brings the bicycle back home with a truck. Hence, the promise has been **resolved**.
  - If funds don't happen to be enough, he'd come back home empty meaning that the promise has been **rejected**.
2. If the expected grades are not met, the promise would also be **rejected**.

As you can examine this, you'd notice the assurance of you getting the bicycle is not determined immediately. Some processes or delays have to occur but there's a **something will** happen.

## Back to Javascript
You may be trying to fetch data from an external source of which you cannot be sure of an immediate response. Instead of putting the remaining code execution (which does not use the data) on hold while waiting for this data, you can use promises. When the promise is fulfilled, you can perform your desired operations on those data. This is referred to as asynchronous operation - occuring at the same time.

Before promises, callback functions were used but they weren't easily manageable. Promises was a great option for handling asynchronous operations, even multiple ones and they provide better error handling than callbacks.

## How to Use Javascript Promise
### States of a promise
A promise has four states:
1. **fulfilled**: an action relating to the promise succeeded (which is you getting the expected grade, funds been enough and your bicycle brought to you.)
2. **rejected**: an action relating to the promise failed because of an error (which is either you not getting the expected grades and funds been limited).
3. **pending**: awaiting decision. Here, it hasn't been fulfilled or rejected. This is point where either you're waiting for your grades or waiting for your dad to come back from the bicycle company.
4. **settled**: decision (either fulfilled or rejected) has been made.

A *pending* promise is *settled* by either been *fulfilled* with a value or *rejected* with a reason (error).

### Syntax
A promise is created with the Promise constructor.
```javascript
let promise = new Promise(function(resolve, reject) {
  // do something with promise
})
```
The arrow function syntax is;
```javascript
let promise = new Promise((resolve, reject) => {
  // do something with promise
}) 
```
- The argument passed to the constructor is an anonymous function call reffered to as a callback function which takes two arguments - **resolve** and **reject**.
- If the promise goes on well, *resolve* is called. Else, *reject* is called.

### For our bicycle example,
```javascript
let grades = 50;
let funds = 80;

let minGrade = 40;
let minFund = 70;

let promise = new Promise((resolve, reject) => {
    if(grades > minGrade) {
      if(funds > minFund) {
        resolve("Hurray, you got yourself a bicycle!");
      } else {
        reject("Sorry, no funds!");
      }
    } else {
      reject("You didn't even beat the grades!");
    }
})
```
In the promise, we assume that we already know the grades (50) and the available funds (80), the expected grade is 40 and the expected funds is 70.

### How do we make use of the promise?
As seen in the above examples, we now know how to create promises. Most people are consumers of already-created promises. Moreover, modern functions return a promise which can be consumed.

To make use of the promise, we use the **then()** and **catch()** method.

What the former does is that your dad makes a promise of getting you a bicycle, *then* what happens? Will he get it or he won't due to some reasons? If he does, *then* you're happy and you hug him. If he doesn't, *then* you're either angry at him for not having enough funds or you're angry at yourself for not meeting the requirements.

In other words, `then` handles *resolve* and *reject* while `catch` handles only **reject**.

**then** takes two functions as an argument which is the resolve and reject functions.

**catch** takes only one function which is the reject function. To make use of the promise above, we have:

```javascript
promise
.then(function(success) {
  console.log(success)
}, function(failed) {
  console.log(failed);
})
console.log("Some codes...")
```
Here, we use the *then()* method to handle both cases. Alternatively (and more preferably), we can use catch like so;
```javascript
promise
.then(function(success) {
  console.log(success)
})
.catch(function(failed){
  console.log(failed);
})
console.log("Some codes...")
```
**catch** is a shorthand for `.then(null, rejectFunction)`. It is easier and more readable than passing two functions to resolve.

The **success** and **failed** argument can be named something else. They represent the values gotten from the promise. That is `resolve(value)` and `reject(value)`. In usual practice, an **error** argument is passed to `catch`. That is, `catch(function(error) {})`

When the code is ran, we get **"Some codes"** printed to the console first. This shows that the program doesn't wait for the promise to be *settled* before continuing program execution.

Then, **Hurray, you got yourself a bicycle!** is printed to the console, because it is the value passed to the resolve function when the grades and funds are enough.

If we change the grades to 30 which is less than 40 the expected grade, **You didn't even beat the grades!** is printed to console, because it is the value passed to the reject function when the grades is below minimum required.

Also, if we change the funds to 30 (leaving the grade as 50), **Sorry, no funds!** is printed to the console, because it is the below the required fund.

## Promise Chain
If the `then` method returns a promise as a value, it also needs to be settled.

For example, after your dad gets you the bicycle, he needs your mum's approval before it can be given to you. If your mum agrees, you get the bicycle (*fulfilled* again) else you don't get it (*rejected*).

To achieve this, you can attach another `then` method to handle the promise like so;
```javascript
promise.
then(...)
.then(...)
.catch(function(error) {})
```
After the first `then` method, the second one is called. It continues like that until the last one or until the one in which an error occurs thereby calling the `catch` method (which is called only once).

## Wrap Up
The bicycle example was used to illustrate what a promise does.

One real application of promise is for handling asynchronous http requests. Here, we are trying to fetch data from a different source.

By using if statements for the data, the rest of the program (which do not need the data) would have to wait for the statement to be executed.

By using promises, the execution continues and simultaneously, the data is still expected to be used. Whether the data comes or not, the program continues execution.