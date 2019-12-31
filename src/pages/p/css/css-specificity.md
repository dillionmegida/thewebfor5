---
title: CSS Specificity
category: css
date: 12-31-2019
pageDescription: >-
  CSS Specificity is a set of rules used by CSS in browsers to determine which style declaration (among other declarations) would be applied to an element. As expected, the higher the specificity of a selector method, the more prioritized it is.
pageKeywords: 'css, css specificity, selector specificity, specificity, css selector specificity, !important'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577711058/images/thewebfor5/css-specificity_jtb1ub.jpg
tags: ["css"]
---
You may have set some style declarations in CSS but didn't get the desired result. After so many trials, you opt-in for the usage of almighty `!important`. It works but this isn't the best solution.

The eror is often due to conflicting declarations of which only one would be used. To determine which one would be used so as to get exactly what you want, you'd need to understand the specificity of selector methods.

## CSS Specificity
This is a set of rules used by CSS in browsers to determine which style declaration (among other declarations) would be applied to an element. As expected, the higher the specificity of a selector method, the more prioritized it is.

## Benefits
- It helps you specify which style would be applied.
- It reduces the complexity of your codes.
- It makes it easier to edit styles.

## Specificity in action
Examine the following codes;
```html
<!-- html file -->
<p class='red' id='#blue'>Paragraph</p>
```
```css
/* css file */
p {
  color: pink;
}
.red {
  color: red;
}
#blue {
  color: blue;
}
p.red {
  color: orange;
}
.red#blue {
  color: green;
}
```
I'd give you three seconds to guess the color of the paragraph element.

3, 2, 1...okay. You probably got it.

The paragraph would be of orange color. **How?** Let's learn how to calculate specificity.

## Calculating CSS Specificity
* You need to know the value of selectors.
* Inline styles takes priority over declarations in external stylesheets or internal style declarations (between `<style>` tag).
* `!important` takes priority over every other declarations including inline style.

### Value of Selectors
Let our template values be - **{a, b, c, d}**. Specificity increases from d to a.
#### - Inline Styling
If the element has only inline style (`style` as attribute) and no other declations, a is our values above becomes 1 while others are 0 - **{1, 0, 0, 0}**
#### - ID Method
If the element has an `id` attribute which we want to use to style it and there are no other methods used, b becomes 1 while others are 0 - **{0, 1, 0, 0}**
#### - Class, Pseudo Class and Attribute Method
If the element has any of these with no other methods used, c is increased by 1 and others, 0 - **{0, 0, 1, 0}**.
#### - Tag names
If method used is a tag name and there are no other methods used, d becomes 1 while others, 0 - **{0, 0, 0, 1}**

You can imagine `!important` as a `1` that preceeds the selectors (i.e **{1, a, b, c, d}**) for any property which it is applied to.

However, we could apply these methods mixed together. Their values are increased by 1.

## Example
Let's look at an example and try to determine which style declaration takes priority.
```html
<!-- html -->
<div id='div'>
  <p>Paragraph 1</p>
  <p style='color: purple'>Paragraph 2</p>
</div>
```
```css
/* css */
div#div p {
  color: red;
}
div p {
  color: green;
  font-size: 50px;
}
```
- *For the first declaration*, we have our values to be **{1, 1, 0, 2}** which means 1 for inline style (on the second paragraph), 1 for one `id`, 0 representing no attributes, classes or pseudo-classes and 2 for 2 tag names.
- *For the second declaration*, we have our values to be **{1, 0, 0, 2}** which implies 1 for inline style (on the second paragraph) and 2 for 2 tag names.

- This means that the second paragraph remains purple.
- The color of the first paragraph is red.
- The font-size remains 50px because there is nothing to override it.

We've predicted our display. You can try it now!

It worked right?...of course it would, I already tried it : )

## Conclusion
I believe you've seen why the knowledge of CSS specificity is important. Most times, there is no error in your CSS code. All semi-colons are appropriately placed. But, a more specific selector method is used that's why yours is ignored.