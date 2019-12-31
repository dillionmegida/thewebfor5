---
title: What is Javascript?
category: javascript
date: 12-30-2019
pageDescription: >-
  Javascript is a scripting language which is dynamic in nature. It is popularly known for it's usage on the web. With this language, interactions and functionalities are added to webpages.
pageKeywords: 'javascript, what is javascript, introduction to javascript, fundamentals, javascript fundamentals, expressions and statements, variables, javascript variables, js'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577711179/images/thewebfor5/what-is-javascript_qtul4x.jpg
tags: ["javascript"]
---
## What is Javascript?
Javascript is a [scripting language](/p/general/what-are-scripting-languages) which is dynamic in nature. It is popularly known for it's usage on the web. With this language, interactions and functionalities are added to webpages. These include interacting with users (e.g processing user inputs), creating dynamic webpages and also manipulating the contents on a web page. These are just a few.

It is often confused to be related with JAVA but they are two different langauges. JAVA is a compiled langauge and Javascript is a script language. Check out the referenced article above ([scripting langauges](/p/general/what-are-scripting-languages))

However, I've read from books that the name Javascript replaced LiveScript (the former name) because of the popularity which JAVA was gaining.

## Benefits of Javascript
- It's quite easy to learn
- It applies functionalities to web pages.
- It can be used to validate data sent to server thereby reducing server validation.
- It is versatile.
- It is easy to debug (correct erros) and test. Most of the time, it provides succint error messages so you know which area to correct.
- It can be used on every browser that supports it. This creates room for same functionalities applied to various webpages in different websites.
- and so much more.

## Usage
Javascript is generally used on web pages but that is not all. It is also used in some backend operations like creating servers. For start, we'll be looking at javascript on the frontend. If you find frontend and backend confusing, check out this article - [Frontend and Backend Development](/p/general/frontend-and-backend-development).

To use javascript on webpages, the script has to be called in HTML. When the HTML document is requested, the script also works with it.

### Using Javascript in HTML
There are three methods;
* Inline method
* Internal Script
* External Script

Examing the following HTML document
```html
<!-- html -->
<head>
  <!-- -->
  <!-- script 1 -->
  <script src='/path/to/script.js'></script>
  <!-- -->
</head>
<body>
  <!-- -->
  <!-- script 2 -->
  <button onclick="javascript codes">
    Hi Javascript
  </button>
  <!-- -->
  <!-- script 3 -->
  <script>
    // javascript codes
  </script>
  <!-- -->
  <!-- script 4 -->
  <script src='/path/to/script.js'></script>
</body>
```
In **script 2**, javascript codes is used inline with the tag. This usage is usually done with `event` attributes like `onclick` as seen above. More on event attributes in future articles but the event used above is triggered when the button is **clicked**.

In **script 3**, javascript codes are placed between the opening and closing `script` tags.

In **script 1 & 4**, the javascript codes are referenced in the current HTML file. The attribute used is `src` - **source**. Notice the extension **.js**? That is what javascript files are saved with.

You may have also noticed that the **script tags** are placed below the button in the body. This isn't compulsory but it's good practice. This ensures that the HTML contents has loaded completely before the script codes are interpreted. In most script codes, you may want to manipulate the contents in one way or the other, so you'd have to ensure that everything has loaded.

As for the script in the head tag, it is best practice to only use that method for scripts which do not have a business with the contents. This way, even if the script is loaded before the contents, everything will be interpreted successfully.

## Terms in Javascript
### Comments
Just has every other language (HTML and CSS as you've probably seen), javascript has a syntax for writing comments. Comments help you locate certain areas of your codes easily. You have a 10-line code and feel its unnecessary to put any comments, but what if you like up to 500 lines of code or more. Comments can help you remember what elements you're styling or the purpose of your styles in some part of the CSS codes. They are ignored by the browser.

The syntax for javascript comments is;
```
// single-line comments
/*
  multi-line comments
*/
```
### Variables
Variables are like containers used for saving values. With variables, you wouldn't have to repeat a value for several cases where you need them. To declare a variable, the `var` keyword is used like so;
```js
var ourNumber = 8;
```
Wherever you need 8, you can use `ourNumber`. Also, whenever you need to change the 8 to another number, instead of going through all the places where 8 has been used, you simply change the values of the variable.

There are other keywords which can be used as containers - `let` and `const`.<br/>
`let` is similar to var while `const` is used for declaring variables that won't change. For example;
```js
var name = "web";
name = "website";
const age = 17;
age = 19;
```
The re-assignment of another value to 'name' would not produce any eror but assigning 19 to age, will.

The major difference between `var`, `let` and `const` is how they handle scoping. We'll look at that in a future article
### Expressions and Statements
Think of statement as trying to do something while expressions to be you expressing yourself.

"I want to go the market" - expression<br/>
(Buying things in the market) - statement

#### Expressions
An expression is any code that can be evaluated to a value. With this, they can be used anywhere javascript expects a value especially as function arguements. Examples;
```js
// js file
1;
1 + 1;
"I am not java";
truth = "I am javascript";
```
The last line refers to an assignment expression. If you've surprised there is no `var` declaration at the beginning, don't worry. We'll look at it in the next section.
#### Statement
This refers to an instruction which performs actions. e.g declaring variables, `loop` statements, `if` statements.
```js
// js file
var truth = "I am javascript"
if(truth === "I am java") {
  alert("That's a lie");
} else {
  alert("I thought as much");
}
```
The first line is a statement which declares a variable. It also uses the assignment expression to do that. It is referred to as **Expression Statements**

The second line is an `if` statement which executes some codes when a condition is met.

**Note that:** the whitespaces are ignored. **semi-colons (;)** represent the end of a statement or expression. The whitespaces are only used for readability purposes.

-----
There's a lot mroe to cover in javascript (like functions, loops and so much more) of which we would be looking at in future articles. Stay tuned!

You can check out how javascript gains access to HTML contents in this article - [The DOM](/p/javascript/the-dom)
