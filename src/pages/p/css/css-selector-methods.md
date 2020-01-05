---
title: Selector Methods in CSS
category: css
date: 2019-12-29
pageDescription: >-
  There a numerous methods for selecting elements which CSS styles can be applied to. In this article, we'd be looking at some of them.
pageKeywords: 'css, css selector methods, by class, by id'
cover:
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

Five methods we'd be looking at are:
- Parent and children
- By class method
- By id method
- Universal selector
- Attribute Method

### 1. Parent and Children Method
Just as tags are related in HTML, you can target elements.
```css
div p {
  color: pink;
  font-size: 20px;
}
```
The above code doesn't style only `div` elements nor only `p` elements. It applies the declared styles to `p` elements which are children of `div`.
```css
main div p {
  color: brown;
  font-size: 30px;
}
```
As you may have guessed, the above code applies the declared styles to `p` elements which are grandchildren of `main`

### 2. Class method
=Almost all elements in HTML can have a `class` attribute. This allows us to group related elements to the same class. With this class, we can select specific elements to style.
```html
...
  <p class='red'>I am only red</p>
  <p class='big'>I am only big</p>
  <p class='red big'>I am red and big</p>
...
```
The above is the definition on the HTML file. The first two elements has only one class each, but the third as two classes. Let's head over to css.
```css
red {
  color: red;
}
```
The above is **completely wrong!**. Why? Because, when you specify `red`, CSS would think it's a tagname and this doesn't exist. To select classes in CSS, the **dot (.)** prefix is used.
```css
.red {
  color: red;
}
.big {
  font-size: 9000px;
}
```
This means that our first paragraph would be red colored and the default font size, the second would be font size of 9000px but the default color remains. While the last paragraph would be red colored and of font size 9000px.

With this, other paragraphs without these classes are not affected in any way.

### 3. ID method
Similar to the `class` attribute, almost all elements can have this. **But**, unlike class, this does not group elements together. **It uniquely identifies an element**

What this means is that it cannot be used for more than one element on a page and one element cannot have multiple ids.
```html
...
  <p id='red'>I am only red</p>
  <p id='big'>I am only big</p>
  <p id='red big'>I am red and big</p>
...
```
To use it in CSS, the **hash (#)** prefix is used like so;
```css
#red {
  color: red;
}
```
With the above, only the paragraph with the id of red will be styled.

### 4. Universal Selector
This worlds like a **wild card character (*)** used for selecting all elements.
```css
* {
  font-size: 30px;
  text-decoration: underline;
}
```
This selects all elements in the page and applies the style declarations.

### 5. Attribute Method
We can target elements by leveraging on their properties - attributes. For example;
```css
h1[align] {
  color: brown;
}
h1[align=left] {
  color: pink;
}
```
The first declaration targets all `h1` elements with an align attribute irrespective of it's value while the second declaration targets all `h1` elements with a value of 'left' for the align attribute.

### Notes.
- ids are usually used by Javascript to target elements. It is advisable to use only classes for styles as only one id can be used in a document.
- When two values are declared for a property in a selector, the last one has the highest priority. In the code below, all paragraphs would be green;

```css
p {
  color: red;
  color: green;
}
```
- These methods can be mixed with themselves for selecting elements e.g

```css
.container div {
  /* Some styles */
}
.container * {
  /* styles */
}
```
In the first code, the styles declared only affect divs which are children (or grandchildren) of elements with the 'container' class. While in the second, the styles affects all elements in the element with the 'container' class.
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

-----

With these methods, you can correctly specify the elements you want to style. There are more advanced methods for selecting. Kindly check out [CSS Selectors Reference](https://w3schools.com/cssref/css_selectors.asp)