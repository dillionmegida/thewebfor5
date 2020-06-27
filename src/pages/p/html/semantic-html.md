---
title: Semantic HTML
category: html
date: 2020-02-01
authorID: 1
pageDescription: >-
  Semantic HTML refers to the design of a website which has logical meaning. This allows the pages to be easily interpreted by screen readers and also aid in easy indexing by web crawlers for SEO.
pageKeywords: "html, what is html, semantic html, html5, semantic tags, section, asides, article, footer, header, main"
cover:
tags: ["html"]
---

## What is Semantics?

According to the dictionary,

> Semantic means relating to meaning in language or logic.

In other words, this refers to something portraying a meaning.

## Semantic HTML

This refers to the design of a website which has logical meaning. More to the presentation view of a website is the meaning. You user may be seeing exactly what you designed but does the browser understand the logic of your webpage?

### Why would the browser need to understand my webpage?

1. For accessibility purposes. One major reason is so that screen readers can interpret your page appropriately. This is especially necessary for users who depend on them.
   2.For improved Search Engine Optimization. Research has shown that properly structured webpages are easily indexed by web crawlers.

## Semantic tags in HTML

These are the tags used to achieve Semantic structures of documents.

Examples of non-semantic tags are `div` and `span`. Both of them have no meaning in a webpage but are just used as parents for elements.

Before the introduction of HTML5, semantic tags included `a` (Anchor tag), `input`, `table`, `form` etc.

HTML5 introduced more semantic tags, some of which includes:

### `section`

This tag reduces the usage of `divs` (which have no meaning). It defines a section in a document which would usually expect a heading. Example;

```html
<section>
  <h2>Heading</h2>
  <p>Paragraph</p>
</section>
```

### `main`

This tag defines elements which make up the main content in a document. Example;

```html
<main>
  <h1>Title of Document</h1>
  <p>
    Paragraph
    <!-- Other contents -->
  </p>
</main>
```

### `nav`

This tag is used for navigation links. Not just any navigation link, but the major links used in a webpage. Example:

```html
<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### `asides`

This tag distinguishes the main content from the side contents. It works just like a sidebar. Example:

```html
<main>
  <h1>Main header</h1>
  <p>Paragraph</p>
</main>
<aside>
  <h3>Relative Resources</h3>
  <p>Some paragraphs</p>
</aside>
```

Find more semantic tags in this [W3Schools Documentation](https://www.w3schools.com/html/html5_semantic_elements.asp).

The similarities between these tags is that they have meaning. Hence, the browser easily understands what the page is about and screen readers can appropriately interpret every section of the page.

## Good Document Structure Practices

More to the use of semantic tags for improving logic are the way the tags are placed in the document. The following are few guidelines to achieve semantic HTML.

1. The `header` element should contain things like introductory statement to the document, the major navigations, and so on. Basically, the beginning of a document.
2. The `footer` element should contain things like copyright, social media links, and so on. Basically, the end of a document.
   3 Use only **one** top-level heading (`h1`) in a page. This heading should be the title of that page.
3. For subsequent headings, use them sequentially as they relative to your respective parent titles. Don't jump from `h2` to `h5`. If `h2` is a sub-title, any other sub-titles under it should be `h3` and so on until you `h6` is reached.

```html
<h1>Semantic HTML</h1>
<h2>Types of Semantic HTML</h2>
<h3>Benefits of Semantic HTML</h3>
```

**WRONG!!**

```html
<h1>Semantic HTML</h1>
<h2>Types of Semantic HTML</h2>
<h2>Benefits of Semantic HTML</h2>
```

**CORRECT!!**

Logically, "benefits" cannot be a sub-title under "types".

There's so much more to learn about semantic HTML. Check out this article for more information - [SEMANTIC HTML](https://internetingishard.com/html-and-css/semantic-html/)

## Wrap Up

`div`s and `span`s aren't entirely useless. I use `div` in places where I want to have a parent over the content to aid easy styling. You have to be conscious of the fact that this tag does not provide a logically meaning.

While trying to design beautiful webpages, you should also care to know if the browser understands what you're doing.

You'd need to ensure that all your users have equal feels of your website. Some depend on screen readers. Don't leave them confused on what your website has to offer.

How about your website been on google's first page of search results? Think about it 🙂
