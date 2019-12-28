---
title: What is HTML?
category: html
date: 12-26-2019
pageDescription: >-
  HTML stands for HyperText Markup Language which is a standard markup language for building webpages. It defines the contents of web pages.
pageKeywords: 'html, what is html, hypertext markup language, html and css'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577393768/images/thewebfor5/what-is-html_svt0ol.jpg
tags: ["html"]
---
## What is HTML?
HTML stands for HyperText Markup Language. It is the standard markup language for building webpages. Let's break these terms for simplicity.

### What is a Markup Language?
A markup language is a computer language used for defining, processing and presenting text. It has its own syntax (like every language does) used for formatting texts. The code for editing texts are called `tags`. All definitions for how texts are presented are in files which when opened by applications (which can interpret the definitions), the designed presentation is displayed.
### What does the term HyperText mean?
HyperText is a text which contains links to other texts. The other texts can be within the same document of this text or another document (or webpage). For example, when you click on [this link](/), it redirects to the homepage of this site. `this link` is called a hypertext because it references another document. It is called `hyper` because there's more information about the text than what is seen.
<br/><br/>
***Putting these terms together,***<br/>
HTML is a language which defines the contents of web pages. It tells a web browser what contents to display in specified formats. Contents varies from headings to paragraphs, to lists, links, images and so on. These contents may not be styled as that is not the official work of HTML. Content styling is done by a language called CSS. [Check out this article](/p/css/what-is-css) for more information.

**To create a HTML document**, you'll create a file, then save it with an extension of `.html`. When you trying opening any of such files with a browser, the browser will attempt to interpret the definitions made by the language and display it as a web page.

**To edit a HTML document**, you'll need a text editor (such as Sublime Text, Notepad, Notepad++, Visual Studio Code) to open the file which you can begin making your definitions.

"You mean I can create a webpage with Notepad?"<br/>
Yes, you can!

## Terms used in HTML
### Tags
Tags are used to define contents. For headings, HTML provides `h1, h2, ..., h6` tags, for paragraphs, we have `p` tags and so on for many different formats. These tags are placed betweem angle brackets.
### Elements
Contents are referred to as elements which are enclosed between tags. For most elements, the tags need to be closed when opened. For example, a header element is created with `<h1>My header</h1>`. `<h1>` is the opening tag, and `</h1>` is the closing tag. Take note of the slash (`/`) before the tag name. But there is an exception - **void(or empty) elements**.<br/>
These are elements which are empty (though not literally). The tags for these elements do not need closing tags. Examples are `<br>`(for line breaks), `<img>`(for images), e.t.c.

### Attributes
Some HTML tags possess attributes which can be used for advance definition of elements. They are not generally used for styling, but sometimes define how an element is displayed. These attributes are declared before the closing angle bracket of the opening the tag. The syntax for declaring attributes is;
```html
<tag attr1='value' attr2='value'>
  element
</tag>
```
**Note that** not all tags have attributes and not all attributes can be used for all tags. Popular attributes which can be used in almost all tags are `class`, `id`, and so on.

For example, let's look at a header element with the `align` attribute used for positioning the element.
```html
<h1 align='center'>
  My Header
</h1>
```
The element above would be placed at the center of the available width of the container.

### Parent and Children
Take a look at the following code;
```html
<main>
  <div>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </div>
  <h2>Another heading</h2>
</main>
```
Just like a family, these tags are somewhat related.
- `<h1>` and `<p>` are `siblings`, `children` of `<div>` and also `grandchildren` of `<main>`.
- `<div>` is the parent of `<h1>` and `<p>`.
- `<h2>` and `<div>` are children of `<main>`.
- `<main>` is the parent of `<div>` and `<h2>` and also the grandparent of `<h1>` and `<p>`.

This helps us in knowing how to address elements. This address also plays an important role in knowing which elements to style with CSS.

## Structure of a HTML Document
```html
<!DOCTYPE html>
<html lang='en'>
    <head>
        <title>Document Title</title>
    </head>
    <body>
        <h1>A header element</h1>
        <p>A paragraph element</p>
    </body>
</html>

```
The structure is in the following order
### 1. **Definition** - `<!DOCTYPE html>`
**What kind of HTML document is this?**
<br/>
This declaration defines the document. **.html** is enough to define our document as a HTML document, but this definition (stated at the top of the document) tells the browser how to render our HTML contents. This definition is for **HTML5** - the latest version of HTML. In other versions, you'd begin the document with the html tag.
### 2. **The Container** - `<html>`
This is where our HTML page starts from. It is referred to as the root element of the page. Everything between this tag and it's closing tag **</html>** is what the browser will render.
The extra `lang` attribute defines the language of the document - in this case, english (`en`)
### 3. **The Head** - `<head>`
**"Does this do the brain work?"... _something like that_**
<br/>
This part of the program specifies properties and features of our page. The contents here are not displayed on the browser. For example, the **title** of the document is stated here with the `title` tag, the theme color is also stated here and so much more.
### 4. **The Body** - `<body>`
**Well, the user has to see something. Maybe, the body, right?**
<br/>
This part of the program contains what will be displayed in the browser. It consist of the contents which in our case is a header element, a paragraph element.
---
There's more to HTML than the above. We'd explore more in future articles. Stay tuned!
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

Learn more on HTML in this article - [What is CSS?](/p/css/what-is-css) and Javascript in this article - [What is Javascript?](/p/javascript/what-is-javascript).