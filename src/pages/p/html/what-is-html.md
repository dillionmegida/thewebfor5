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

These are not all the terms in HTML. We'd explore more in future articles. Stay tuned!