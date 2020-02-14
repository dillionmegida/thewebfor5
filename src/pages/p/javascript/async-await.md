---
title: Async/Await in Javascript
category: javascript
date: 2020-02-14
authorID: 1
pageDescription: >-
  Async/Await is syntactic sugar for Promises which makes asynchronous code look synchronous. That is, easily readable and understandable.
pageKeywords: 'javascript, promises, javascript promises, async, await, async/await, asunchronous, promises asynchronous, promise chain, promise chaining, then, catch, rejected, fulfilled, resolved'
tags: ["async", "javascript"]
---

Async/Await method makes working with Promises easy. Added to this is that code is very readable compared to nested `.then()`s.

No prior knowledge of Promises? Read about promises here - [Promises in Javascript](/p/javascript/javascript-promises).

## Syntax

```javascript
async function myFunc() {
    ...
    await...
    ... 
}
```
    
The `async` keyword before the function declaration states that the function should **return a promise.** The `await` keyword inside the function allows us to "wait" for values before performing executions.

**Note that:** `await` can only be used inside an  `async` function.

The `await` keyword pauses the execution of the function until the value is gotten before proceeding to other codes. It transfers the function to the event queue. It doesn't disrupt other codes outside the function.

`async/wait` codes has a synchronous looking structure (sequential execution of codes). Hence, `async` makes asynchronous operations readable by making them look synchronous.

What it does is that if the value would delay, the function is moved to the event queue just like promises, and executed after the execution of other codes.

## Return Value

The return value of the `async` function is either a resolved promise or a rejected promise.

## Example

Examine the following code

```javascript
let ret = new Promise((resolve, reject) => {
    setTimeout(() => resolve("I'm done!"), 3000)
});
async function g() {
    console.log("games");
    let result = await ret;
    console.log(result);
}
function hi() {
    console.log("hi");
}
g();
hi();
console.log(5);
```

The output is

```shell
games
hi
5
I'm done!
```

As you'd observe, `g()` is called first, then `hi()` followed by `console.log(5)`. In `g`, **games** is printed first, but when it comes accross the `await` keyword, the function is put on hold (pushed into the event queue) until the result is gotten. This would take 3secs (**3000ms**), hence, other activities can go on, such as `console.log("hi")` and `console.log(5)`.

After three seconds, the promise returns a resolved value which is "I'm done!". So, the function continues its execution and executes `console.log(result)`.

## Using `then()`s

Remember that `async` functions returns a promise. This means that `.then`s can be attached to them just like in `promises`.

For our example above, we could adjust function `g` to return a promise (without using `await`) which could be a resolved value:

```js
async function g() {
    console.log("games");
    let result = ret;
    console.log(result);
    return result;
}
g()
.then(res => console.log("Then: " + res));
````

And the result would be:

```shell
games
I'm done!
Then: i'm done!
```

But, since you're using `async/await`, you do not need `.then` because `await` already helps us "wait" before performing any action.

## Error Handling

What if the promise is rejected? There are two workarounds to this.

### `try...catch`

It's the same old `try...catch`. For example (from our code above):

```js
...
// previous codes
...
async function g() {
    console.log("games");
    let result = await ret;
    console.log(result);
    return result;
}
try {
    let toBePrinted = g();
    console.log(toBePrinted);
} catch(err => {
    console.log(`Error: ${err}`);s
})
```

The `try...catch` block waits for the `async` function to return a value, then it "tries" to work with that value. If for any reasons there is an error withing the `try` block, execution flow is directed immediately to `catch` block.

### `Promise.catch`

Remember how you could use `.then()`s because the function returns a promise? You could also use `.catch()` and just the same way promises transfers execution to `.catch` if any error is found, the same it is for `async`.

## Which is Better?

Anyone that seems appealing to you!

`async/await` is just syntactic sugar over `promises`. It makes it easier to read just as you observed the `synchronous-looking` nature of `async`.

It's just like:

> Continue execution sequentially, Oh wait, we do not know this value for now, two of you, wait for its value. The three of us, let's move onto other activites. Ok, we're done, where's the other two? What value do you have? Alright, let's continue with that function.

This is exactly what `promises` do, but you could easily realize this in `async`.

The downsides of `async/await` is that unlike `promises`, `await` (which is sort of a replacement for `.then`) cannot be used at top-level. **It must be inside an `async` function**.

```js
let result = await value;
```

**WRONG!!**

```js
let func = async () => {
    let result =  await value;
} 
//or
(async () => {
    let result = await value;
})
```

**RIGHT!!**

Thanks for reading : )
