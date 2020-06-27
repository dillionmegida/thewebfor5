---
title: DocumentFragment and The DOM
category: html
date: 2020-06-27
authorID: 1
pageDescription: >-
  DocumentFragment improves DOM performance by creating fragments of elements not part of the DOM and without a parent element to be attached to the DOM later.
pageKeywords: "dom, fragment, documentfragment, document, reflow"
tags: ["html", "dom"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1593280975/images/thewebfor5/DocumentFragment_njrssv.png"
---

[The DOM](/p/javascript/the-dom) is a logical representation of an HTML document, which the browser uses to determine how a page is displayed. The DOM also provides APIs which JavaScript uses to modify pages displayed (adding styles, adding elements, and so on).

As easy as modifications are to implement, they come with a cost when overused. Performance!

In this article, we'll learn the cost of performance during DOM manipulation and how `DocumentFragment` improves it.

## DOM Reflow

[According to MDN](https://developer.mozilla.org/en-US/docs/Glossary/Reflow),

> Reflow happens when a browser must process and draw part or all of a webpage again, such as after an update on an interactive site.

Here's how browsers generally work:

1. send an HTTP Request (requesting for the contents of a path) to a server
2. receive the response
3. use the response to paint the page

The browser uses the response to calculate the position of elements in the document fetched and places them appropriately on the page. Positions are determined with the size of the element, the margin, padding, and many other features.

What happens when an element is modified (maybe deleted, given a margin, etc)? The browser processes the web page again (a reflow occurs) and calculates the new positions for elements.

## Performance Cost of DOM Manipulation

Reflows are hardly noticeable when few (or minor) modifications occur, but this doesn't nullify their existence. Multiple reflows kill the performance of a page.

Let's look at an example of DOM manipulation that may affect performance:

```html
<body>
  <h1>List of stuffs</h1>
  <ul id="list-container"></ul>
  ...
  <script>
    const items = ['Item 1', 'Item 2',...]
    const container = document.getElementById('list-container')
    items.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item
        container.appendChild(li)
    });
  </script>
</body>
```

Result:

```html
<body>
  <h1>List of stuffs</h1>
  <ul id="list-container">
    <li>Item 1</li>
    <li>Item 2</li>
    ...
  </ul>
</body>
```

Looping is one common method of filling the DOM with items. Above, is an example.

For our program above, we target the element with `list-container` as id. Next, we loop through the items in the `items` array to add elements to the page. Here's what happens on every loop:

- an `li` element is created (has nothing to do with the DOM yet)
- a text is inserted into the `li` element (has nothing to do with the DOM in this case)
- the `li` element is appended to the container
- a reflow occurs, for the position of the new element to be calculated

The more the reflows, the more the performance is affected.

## A different method for DOM Manipulation (not `DocumentFragment`)

For the program above, there's another solution that can improve performance. We could have it like this:

```html
<body>
  <h1>List of stuffs</h1>
  <div id="list-container"></div>
  ...
  <script>
    const items = ['Item 1', 'Item 2',...]
    const container = document.getElementById('list-container')
    // highlight-start
    const ul = document.createElement('ul')
    // highlight-end
    items.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item
        // highlight-start
        ul.appendChild(li)
        // highlight-end
    });
    // highlight-start
    container.appendChild(ul)
    // highlight-end
  </script>
</body>
```

Result:

```html
<body>
  <h1>List of stuffs</h1>
  <div id="list-container">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      ...
    </ul>
  </div>
</body>
```

This way, the list is completed before it is appended to the div container. Hence, only one reflow is required.

### The caveat with this new method

In this new method, you'd notice we had to create a parent element that would contain the new elements so we could append that parent element once.

For our case above, it's perfect to have `li`s nested in `ul`. But not every element may be perfect for this position. This may result in unnecessary `divs` to act as a parent element.

## Now, `DocumentFragment`

The two problems we've discovered so far are:

- many reflows
- unnecessary parent element

While the method above solves problem 1, we need to also consider problem 2. This is where `DocumentFragment` comes in.

`DocumentFragment` is a document object that acts as temporary storage for elements. It's just like a smaller [`Document`]() object where elements can be structured. It is different from the normal `Document` in the sense that it is not connected to the main `Document` (which is the document tree the browser uses). Hence, modifications to the `DocumentFragment` does not cause reflow or affect anything in the main document.

It's perfect for cases where you'd want to interact with the DOM a couple of times, and also cases where you do not need an extra layer (a parent component). Let's use this method to improve the first program in this article:

```html
<body>
  <h1>List of stuffs</h1>
  <ul id="list-container"></ul>
  ...
  <script>
    const items = ['Item 1', 'Item 2',...]
    const container = document.getElementById('list-container')
    // highlight-start
    const fragment = new DocumentFragment();
    // highlight-end
    items.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item
        // highlight-start
        fragment.appendChild(li)
        // highlight-end
    });
    // highlight-start
    container.appendChild(fragment)
    // highlight-end
  </script>
</body>
```

Result:

```html
<body>
  <h1>List of stuffs</h1>
  <ul id="list-container">
    <li>Item 1</li>
    <li>Item 2</li>
    ...
  </ul>
</body>
```

With this, there's no parent element and only one reflow occurs.

### One more thing about `DocumentFragment`

`DocumentFragment` is a temporary storage as I stated earlier. When the contents of the fragment created are attached to the DOM, the fragment is emptied, releasing the memory of data. Awesome huh?

## Wrap Up

As developers, we're very concerned about performance when creating applications. Fortunately, this feature exists to ensure improved performance when building web applications.

Thanks for reading : )
