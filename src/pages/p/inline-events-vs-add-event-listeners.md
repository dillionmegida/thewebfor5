---
title: "Inline Event Handlers vs addEventListener()"
date: "09-17-2019"
readTime: "3 mins"
pageDescription: "Events in Javascript aids in iteraction for webpages and the users. Events include clicks, double clicks, and so on for which functions can be specified. Such functions are invoked when the event occurs."
pageKeywords: "javascript, javascript events, inline events, addeventlistener, click event, onclick event, functions, javascript functions."
tags: ["javascript"]
---

Have you ever been curious when going over articles, video tutorials or books and come across things like;
```html
<!-- Code 1 -->

<button onclick="btnClick()">Click Me</button>

<script>
  function btnClick() {
    console.log('Button Clicked');
  }
</script>
```
,
```html
<!-- Code 2 -->

<button id="myBtn">Click Me</button>

<script>
  var btn = document.getElementById('myBtn');
  btn.onclick = btnClick;
  function btnClick() {
    console.log('Button Clicked');
  }
</script>
```
and
```html
<!-- Code 3 -->

<button id='myBtn'>Click Me</button>

<script>
  function btnClick() {
    console.log('Button Clicked');
  }
  
  var btn = document.getElementById('myBtn');
  btn.addEventListener('click', btnClick, false);
</script>
```
## ?

Well, I'm usually curious. So I dug in deep to discover why one was preferred over the other. In this article, I'd be sharing what I learned.
> Note: I'd be referencing `Code 1`, `Code 2` and `Code 3` from our codes above.

### Table of Contents
- Inline Events
- addEventListener()
- Differences between Inline Events and addEventListeners

## - Inline Events
`Code 1` is an example of an inline event. Here the event is specified with a function as an attribute to the HTML tag and the function used is specified in the javascript area (which could be in the script tag or an external javascript file).

```html
<button onclick="btnClick()">Click Me</button>
```

Here, once the button is clicked, the `btnClick()` function is invoked. As specified in the javascript area of `Code 1`, 'Button Clicked' is logged to the console.

Imagine we had;
```html
<button onclick="function1()" onfocus="function2()" ondblclick="function3">
  Click Me
</button>
```

This could turn out difficult to read - more to the fact that it's just a button 😟.

The solution to reducing the events in your tag or to completely remove events in your tag (for easy readability - which I highly recommend) is what we have in `Code 2`. All you have to do is give your element an identity (which could be most preferably, `id`, or class).
> You do not necessarily have to give your element an identity. The aim is just to find a means to easily locate your target element.

For example, by `id`, you could add as many events as possible such as:
```html
<button id="myBtn">Click Me</button>

<script>
  var btn = document.querySelector('#myBtn');
  btn.onclick = function1;
  btn.ondblclick = function2;
  //and so on...
</script>
```

Another advantage of this inline javascript method over the inline HTML event is that inline HTML requires the event to be global. The scope of the function cannot be controlled there unlike the inline javascript where scope (or even closures) can be controlled.

## - addEventListener()
As seen in `Code 3`;

```html
<script>
  function btnClick() {
    console.log('Button Clicked');
  }
  
  var btn = document.getElementById('myBtn');
  btn.addEventListener('click', btnClick, false);
</script>
```

The `addEventListener()` method as used above specifies a function that will be invoked when the given event is delivered to (or listened on) the element.
`Code 3` creates an event listener for the btn variable, so that when a click event is heard, `btnClick()` function is activated which logs 'Button Clicked' to the console. Pretty much what our other methods do, right? 😕

## - Difference
> As we may know already, `Code 1` and `Code 2` do the same thing.

### 1. Inline events can be overwritten
An inline event with a function can be overwritten whereas, many functions can be attached to one event using `addEventListener()` For example;

```html
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>

<script>
  function function1() {
    console.log('Function1');
  }
  function function2() {
    console.log('Function2');
  }
  function function3() {
    console.log('Function3');
  }
  function function4() {
    console.log('Function4');
  }

  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  
  btn1.onclick = function1;
  btn1.onclick = function2;
 
  btn2.addEventListener('click', function3, false);
  btn2.addEventListener('click', function4, false);
  
</script>
```

When button 1 and button 2 is clicked, we have these results at console;

```shell
Function2
Function3
Function4
```
What do you notice?
The first function has been overwritten by the second function.

### 2. useCapture
The value `false` (which could be replaced with true) is a boolean for useCaptures. This controls how the event could be propagated. Propagation events could be bubbling or capturing. Propagation here refers to how the event is transmitted to the ancestor or children elements such that these elements inherit the events.
[Read more about event propagations here](https://www.quirksmode.org/js/events_order.html#link4)

These are the major differences.

Therefore, to ensure easy readability of HTML tags, it's advisable to use the javascript environment for any event handling.
Also, if more than one function or expression would be applied to an event, use addEventListeners, else, inline events.

Learn more about addEventListeners and the benefits they provide in this article - [addEventListener()
](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Even if you weren't curious (like myself), I do hope you have been able to learn a thing or two from this 😃

Kindly contribute or ask questions in the comment section.

Love this article? You could:
