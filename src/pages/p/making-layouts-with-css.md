---
title: "Making Layouts With CSS"
date: "22-09-2019"
readTime: "5 mins"
pageDescription: "CSS has the ability to control how elements are displayed in a browser. Layouts of elements in a webpage gives attractive presentation and logic means to that page."
pageKeywords: "css layouts, layouts, layouts in css, css, css stylesheet, css properties, layout property, css display, css position, css float, css box model, css styles."
---

CSS gives beauty to our webpage by giving it styles. There are a lot of libraries out there such as Bootstrap which has already made layouts designed for you, but I'd advise that before going into such libraries, understand how they work. They work with the same CSS rules.


### Table of Contents
* Floats
* Positioning
* Display
* Box-model
* Conclusion

It's a bit of a long read, so why not grab some coffee ☕

Before I dive into the contents, I'd like to state some CSS Tips

**Name your classes properly** - Logic-wise and proper casing, advisably, camelCase<br/>
**Understanding `id` and `class`** - `id` is unique for only an element, and cannot be reused. `class` can be used for several elements.<br/>
**!important** - Once stated with a value for a property directed towards elements, such values cannot be overwritten.<br/>
**Understand measurements** - `px`, `em`, `rem` should be used appropriately to ensure consistency in pages.<br/>
**Browser Compatibility** - Some browsers don't accept certain properties. A solution to fixing this sometimes is to add certain prefixes.

## Floats
```css
.element {
    float: none | right | left;
}
```
This property allows an element to be positioned at the right of the left side of its container. The none simply means, do not float.
Take a look at this code,
```html
<!-- index.html -->
<div class='container'>
    <div>

    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```
```css
/* style.css */
.container {
    width: 400px;
    background-color: lightblue;
    height: 400px;
}
.container div {
    height: 200px;
    width: 200px;
    background-color: blue;
}
.container p {
    font-size: 30px;
}
```
<img width="100%" src='https://res.cloudinary.com/dillionmegida/image/upload/v1567261173/images/code_samples/div_on_paragraph_edit_kqunde.jpg' alt='Example Image'/>
This is the normal result we expect to happen, since the div element is stated before the `p` element. Lets make the `div` float to the right.

```css
/* Add the property of float to the above program */
.container div {
    display: float;
}
```
Our result is,

<img width='100%' src='https://res.cloudinary.com/dillionmegida/image/upload/v1567261218/images/code_samples/div_on_paragraph_qk3bsg.jpg' alt='Example picture' />


#### What do you notice?
The `div` is floated right, and not only that, the text wraps the div. The text occupies the available spaces. This is the basic implementation of float.
Read More on CSS Floats here - [CSS Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

## Positioning 
Some methods applied may be restricted by the parent element while some others allow the element to be independent.
The positioning values for CSS are `static`, `fixed`, `relative` and `absolute`.
The elements are further positioned using `top`, `down`, `left` and `right` properties.
> These properties can only be used when the display property is set.

##### - `position: static`
This is the default positioning of any element. It's positioned depending on the flow of the page. They are not affected by `top`, `bottom`, `left` or `right`.
##### - `position: relative`
This positions an element relative to its default position. When `top` for example is applied, it pushes the element downwards. The space left at the top of the element does not accommodate any other element. Such elements are dependent on the parent element to determine it's position.
##### - `position: absolute`
This property makes an element loose possession of its default position thereby allowing other elements to take up its space. When `top` is applied, it acts relative to the parent element, but it doesn't push any other element. 

##### - `position: fixed`
This value ensures that an element is given a particular position irrespective of where it is placed. The element is independent of the parent element as it can be placed anywhere. Instead, they are positioned relative to the viewport. Therefore, any page scrolling whatsoever doesn't disrupt the position of the element. They also lose possession of the space they occupy by default hence, other elements can occupy their former positions. For example, `position: fixed; top: 0` would take the element to the top of the page. 
> The difference between fixed and absolute is that fixed is positioned relative to the viewport while absolute is positioned relative to the parent element. Similarities remain that they do not affect other elements unlike `relative`, `static`, and `sticky`.
##### - `position: sticky`
This value toggles between relative position and fixed position. Some conditions are declared for the element. The element starts from the relative position, as soon as those conditions are met, the position is changed to fixed. For example, `position: sticky, top: 0`. Here, as soon as the element reaches the top of the browser (maybe after page scrolling), it becomes fixed.
Whatever makes the element to lose its top property of 0, it becomes relative.
## Display
This property as the name implies controls how your elements are displayed. There are many different values for this property but I'd be explaining the major ones. The default display value is either `block` or `inline`. Each of determined in different use cases.
##### - `display: block`
The value `block` allows the element to be displayed on a new line and stretches to the left and right of the maximum space available. We have block-level tags such as `<p>`, `<h1-h6>` and so on, which as you may have noticed, maximizes the available width, hence, other elements are pushed to a new line.
##### - `display: inline`
The value `inline` allows the element to just take up the maximum required width. It doesn't display a new line except there's no available space. Inline elements includes `<a>`, `<span>`, etc.
> With `display: inline`, properties such as `height` & `width` would take no effect because as I mentioned, the elements only take up the maximum required space it takes for them to be displayed. This is only possible in `display: inline-block`.

> **Note:** These are default values. You can override them e.g manually changing the display of `<a>` elements to block or the display of `<p>` elements to inline depending on how you want them to be displayed.

##### - `display: none`
The value `none` when used with the display property on a browser simply tells the browser that while rendering the page, the element should be removed. An alternative to this is a property `visibility` with value `hidden`. The difference between these methods is that `display:none` removes the element from its position thereby allowing other elements to occupy that area, while `visibility:hidden` ensures that no other element occupies that area, but the element remains invisible. 
##### - `display: inline-block`
The value `inline-block` allows the elements to behave like inline elements, but properties like `height` and `width` can be applied to them.
##### - `display: flex`
The value `flex` displays an element as a block-level flex container.
##### - `display: block`
The value `flex` displays an element as a block-level grid container.
These are the major display values. You can find a list of other values [here](https://www.w3schools.com/cssref/pr_class_display.asp) and you can read more on display property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Check out [this W3Schools Resource](https://www.w3schools.com/css/css_positioning.asp) for the position property.
## Box-model
Each element on your page is treated as a box.
The Box model refers to everything that surrounds an element in a box. Such things are `padding`, `margin`, `borders` and the actual content.
For a default element as a box, say `<p class='name'>Dillion`</p> and we have this css;
```css
.name {
    width: 400px;
    padding: 10px;
    margin-left: 30px;
    border: 2px;
}
```
The total width of the box is 400px (width of content) + 10px * 2 (padding-left and padding-right) + 30px (margin-left) + 2px * 2 (border-left and border-right) ======= 454px. Our content is 400px, but the width of the box is 454px.
This is the concept behind `box model` - where our element is treated as a box with extra properties and the content itself.
Read more on box models [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

## Conclusion
With appropriate usage of the above properties for layouts, a beautiful looking webpage would be the outcome.

I hope it was worth the read 😊

I believe you understand the concept of Layouts with CSS now (there's still Flexbox and Grid which I will cover in future articles). Kindly refer to the shared articles above if you don't understand completely.

I also have a Frontend Development Series on Dev.to - [Frontend Development Series - Dillion Megida](https://dev.to/dillionmegida/frontend-development-series-3004)

You could reach out to me on Twitter [@iamdillion](https://twitter.com/iamdillion)

Thank's for reading. Kindly contribute or ask questions in the comment section 🤗