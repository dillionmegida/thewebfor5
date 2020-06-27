---
title: The DOM
category: javascript
date: 2019-12-30
authorID: 1
pageDescription: >-
  DOM is an acronym for Document Object Model which refers to a logical representation of a document (HTML or XML) and it's contents on the web. The representation is a tree structure showing the document in the browser from the root to all branches.
pageKeywords: "dom, the dom, document.getElementById(), document.createElement(), dom manipulation, dom api, api, html dom, html dom api"
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577711058/images/thewebfor5/html-dom_mfmu1h.jpg
tags: ["dom", "javascript"]
---

## Introduction to the DOM

### What is the DOM?

DOM is an acronym for **Document Object Model** which refers to a logical representation of a document (HTML or XML) and it's contents on the web. The representation is a tree structure showing the document in the browser from the root to all branches.

The DOM represents the document as nodes and objects. Each node in the tree is an object representing a part of the document.

For example, this HTML document;

```html
<html>
  <head>
    <title>Title of document</title>
  </head>
  <body>
    <h1 style='color: red'>
      Header
    </h1>
    <a href='https://link.com'>
      Link
    </a>
  </body
</html>
```

The DOM for this would be;
<img src='https://res.cloudinary.com/dillionmegida/image/upload/v1577711317/images/thewebfor5/dom_has2x5.jpg' width='100%' alt='The Document Objet Model for the above html document' />

All element, properties and events on HTML elements are organized into objects by the DOM.

The DOM provides an API (Application Program Interface) called the **DOM API** which is used by programs and scripts like javascript to dynamically access and manipulate the document.

Manipulations include

- adding elements to HTML elements in a page.
- remove elements from a page
- modify elements in a page
  - change attribues
  - change style of elements
- among others.

## How to Access the DOM

Different browsers have different implementations of the DOM but are somewhat similar. When javascript is used in a page, it is automatically granted access to the DOM API. It also granted access to the window object which is not entirely related to the document. An example is the alert() method.

```html
<head>
  ...
</head>
<body>
  ...
  <script>
    window.alert("Welcome to my page")
  </script>
</body>
```

In this case, when the page is fetched, we get an alert box (the style of the alert box is dependent on the browser) showing the text - "Welcome to my page.".

### Let's perfom some DOM manipulations.

The API provides us with different methods which we can use to manipulate the DOM. We'll look at few of those.

#### 1. document.getElementById()

This method allows us to select an element from the DOM with the id attribute. The argument passed to the method is the id of the element. For example;

```html
<body>
  <h1 id="header">Header</h1>
  <script>
    let elem = document.getElementById("header")
    elem.align = "right"
    elem.style.color = "pink"
  </script>
</body>
```

The script is placed after the elements to ensure that all elements have loaded. You won't be able to manipulate an incomplete DOM right?

We then get our header element. We then manipulate the `align` attribute by assigning a value of right. The `style` attribute is also manipulated. Remember the the value of the style attribute comes in form of an object, i.e

```html
<tag style="property: value; property2: value">
  element
</tag>
```

With this, we are also able to manipulate the color property of the element with CSS.

#### 2. createElement(), createTextNode(), appendChild()

The first method allows us to create a new element by its tag name, the second allows us to create text (remember the text label in the DOM above?) while the third allows us to append an element to a previous element. Let's see this in practice by creating a new link.

```html
<body>
  <h1>A new element</h1>
  <script>
    let newElement = document.createElement("a")
    let newElementText = document.createTextNode("Google")
    newElement.appendChild(newElementText)
    newElement.href = "https://google.com"
    newElement.style.fontSize = "30px"
    document.body.appendChild(newElement)
  </script>
</body>
```

After creating the element, we appending a text ('Google') to it, set the href, specify the font size and then append it to the body.

**fontSize**? You expected font-size right? Well, the **Kebab-Case** naming convention which uses hyphens to seperate words (this-is-an-example) cannot be used for identifiers in javascript. So styles in CSS with the dashes are replaced with the **camelCase** naming convention (every word begins with a capital letter except the first word).

The API methods are numerous. We'd be looking at more of them in future articles of the javascript category. Stay tuned!

For more information on DOM, check out this documentations on MDN;

- [Document Object Model(DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
