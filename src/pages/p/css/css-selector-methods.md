---
title: Selector Methods in CSS
category: css
date: 12-27-2019
pageDescription: >-
  There a numerous methods for selecting elements which CSS styles can be applied to. In this article, we'd be looking at some of them.
pageKeywords: 'css, css selector methods, by class, by id'
cover: >-
  
tags: ["css"]
---
```css
p {
  color: red;
  font-size: 90px;
}
```
In the above code, all `p` tags are selected will be affected by the style declarations. On most occassions, this is not our intention. Sometimes, a developer may just want to select some paragraphs or some images to style. In this article, we'd look at some methods to succintly select elements.

## Methods for selecting elements with CSS

Three --- methods we'd be looking at are:
- Parent and children
- By the class attribute
- By the id attribute

### Parent and Children Method
Just as tags are related in HTML, you can target elements.
```css
div p {
  color: pink;
  font-size: pink;
}
```
The above code doesn't style `div` elements nor `p` elements. It applies the declared styles to `p` elements which are children of `div`.

#### Notes.
- ids are usually used by Javascript to target elements. It is advisable to use only classes for styles as only one id can be used in a document.
- When two values are declared for a property in a selector, the last one has the highest priority. e.g

```css
p {
  color: red;
  color: green;
}
```
All paragraphs would be green
- The parent and children method can also be mixed with the class method or id method. e.g

```css
.container div {
  /* Some styles */
}
```
The styles declared here only affect divs which are children (or grandchildren) of elements with the 'container' class.
- You can declare the same style for multiple selectors. The selectors are seperated with commas. e.g

```css
.container p, footer p {
    font-size: 50px;
    color: purple;
}
.container p {
    text-decoration: none;
}
.footer p {
    border: solid;
}
```
What this style does, is that it defines the same values of font-size and color for the two selectors. Then, it individually defines the text-decoration of the first selector and the border of the second selector.