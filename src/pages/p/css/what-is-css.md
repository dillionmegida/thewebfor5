---
title: What is CSS?
category: css
date: 12-27-2019
pageDescription: >-
  CSS stands for Cascading Stylesheet which is used to define how elements on a page are displayed. Its duty is to add beauty to a website by creating layouts for contents, adding colors, creating animations, etc.
pageKeywords: 'css, what is css, cascading stylesheet, html and css'
cover: >-
  
tags: ["css"]
---
## What is CSS?
CSS stands for Cascading Stylesheets. [HTML](https://thewebfor5.com/what-is-html) defines the contents in web pages while CSS describes how contents are displayed on the browser.

### What is a Stylesheet?
A stylesheet is a collection of style rules declared to have effect on the contents of a web page

### The term 'Cascading'
Stylesheets come from different sources which may have conflicting styles. The work of the cascade is to determine which style takes priority.<br/>
The different sources are:
- **User-agent stylesheets**<br/>
  The user agent is the tool (usually a web browser) which is used in opening a webpage. Every browser has default styles for contents of a webpage which are applied if there are no declarations for such contents. For this reason, browsers display in webpages differently if there is not constant declaration used for the pages.
- **Author stylesheets**<br/>
  This contains style rules declared by the creator of a website. When browsers try to open a website, they search for the styles of the elements from this sheet before defaulting to their own rules.
- **User stylesheets**<br/>
  The user viewing a website can also override the styles in the author or user-agent stylesheet by declaring desired styles for the page. However, this does not affect the website on the server but only on the user's computer.

The cascade filters all rules declared on the different sources for each elements and determines which would take priority.
<br/><br/>
***Putting these terms together,***<br/>
CSS is used to define how elements on a page are displayed. Its duty is to add beauty to a website by creating layouts for contents, adding colors, creating animations, etc which is displayed on different websites.

Different tags have their own properties. For example, text elements like headers and paragraphs have a `font-size` property which can be used to specify their sizes. Obviously this property cannot be used for images.

> Not all tags have the same properties. You'd have to know the properties an element possesses before you can describe the display. If the property declared isn't possessed by the element, CSS will ignore it.

**Note that there is a range of values which can be set for any property.**

## Using CSS in HTML
CSS can be used in HTML in three ways:
* Inline Styling
* Internal styling
* External styling

### Inline Styling
In this method, the style is declared in the same html file. `style` is used as an attribute (property) for tags for describing how the elements are displayed with property and value of the element like this;
```html
<tag style="property: value; anotherProperty: value">
  element
</tag>
<!-- For a paragraph, we could have -->
<p style="color: red; font-size: 35px; text-align: center;">
  I am a paragraph
</p>
```
`px` is a type of measurement. There's also `em`, `rem` and so on. Check out this article for more information - [Point Measurements in CSS]()

### Internal Styling.
In this method, the style is also declared in the same html file but the declarations have their own block created with the `style` tag. The syntax for declaring style blocks is;
```html
<style>
  element {
    property: value;
    anotherProperty: value;
  }

  anotherElement {
    property: value;
    anotherProperty: value;
  }
</style>
```

This block is usually declared in the `<head>` section of a document but it can be declared even in the `<body>`. It targets an `element` and sets a `property` with a desired `value` (from the range of values available for that property). By translating our inline style above to this method, we would have;
```html
<style>
  p {
    color: red;
    font-size: 35px;
    text-align: center;
  }
</style>
```

### External Styling
Unlike the above methods, this involves using the css declarations in another file which is with an extension of **.css**. That file is then referenced by the html document for the styles to take effect. This file would be similar to the internal styling syntax above but without the style tag.

In our .css file, say **style.css**, we could have the internal styling above converted to;
```css
p {
  color: red;
  font-size: 35px;
  text-align: center;
}
```
To reference the css file in the html, the `<link>` tag which contains a void element would be added to the head tag.
```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel='stylesheet' href='path/to/style.css'>
  </head>
  <body>
    ...
  </body>
</html>
```
However, it is good practice to have stylings declared in another file. This aids readability (as there is a seperation between html codes and css co) thereby providing easy in code editing and contributions.
<br/>
## Selector methods
In the above codes, we selected the elements we wanted to style by their tag names. This means that every element on that page with that tag will be affected by the style declarations. On most occassions, this is not our intention. Sometimes, a developer may just want to select some paragraphs or some images to style. This is possible.

There are several methods for selecting elements, but we'd be looking at only 3.
- The cascade method (Parent and children)
- By the class attribute
- By the id attribute

#### Notes.
- ids are usually used by Javascript to target elements. It is advisable to use only classes for styles as only one id can be used in a document.
- When two values are declared for a property in a selector, the last one has the highest priority.
<br/>
e.g
```css
p {
    color: red;
    color: green;
}
```
All paragraphs would be green
- The parent and children method can also be mixed with the class method or id method.
<br/>
e.g
```css
.container div {
  /* Some styles */
}
```
The styles declared here only affect divs which are children (or grandchildren) of elements with the 'container' class.
- You can declare the same style for multiple selectors. The selectors are seperated with commas.
<br/>
e.g
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

---
There's more to CSS which we would be exploring in future articles. Stay tuned!
<br/>

-----
#### A building construction example with HTML, CSS and Javascript
***This illustration for building a house was from Intro to Web Development in Frontend Masters. I also used the in an [Introduction to web development](https://docs.google.com/presentation/d/1FQYRiO8JR1Rgo11PiM5F43KgViuhBsYkftXPRoIAofE/edit#slide=id.g60460f161e_0_36) presentation I made and in other articles on this website***

**HTML** consist of the blocks, wood, roof, basically the contents of the building. Without CSS, the blocks of the building are just placed on themselves as you keep adding.

**CSS** determines the different styles which are applied to the contents to make the building firm and attractive. i.e CSS accurately determines the position and width of each blocks, the color of the roof, the particular way a content should be displayed and so much more.
With HTML and CSS, you already have a building. Javascript may not be necessary.

**Javascript** comes in when you need interaction in your building. What does interaction mean?
When the user opens the door with a key, what should the door do? Open right? Interaction.
The HTML and CSS just defines the structure of the building, but there's no response to action. Javascript enables the actions.

Learn more on HTML in this article - [What is HTML?](/p/html/what-is-html) and Javascript in this article - [What is Javascript?](/p/javascript/what-is-javascript).