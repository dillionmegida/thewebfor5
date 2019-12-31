---
title: CSS Measurement Units
category: css
date: 12-31-2019
pageDescription: >-
  CSS Measurement units include px, pc, cm, em, rem, % and so much more. Knowing which one to use in order to achieve the result you want becomes of great importance. In this article, we'd look at those units.
pageKeywords: 'css, px, pc, pixels, rem, em, root em, measurement, css units, units, css measurements, percentage, viewport, vw, vh, vmin, vmax, viewport height, viewport width, font, font size, root font-size, px and rem, css measurement units'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577778140/images/thewebfor5/css-measurement_xpbdae.jpg
tags: ["css"]
---
When working with CSS, you'll need to apply measurement units for with sizes, margins, borders and many more. Knowing which to apply for what you're trying to achieve becomes of great importance. 

In this article, we'd look at some of those units and their use cases.

## Units of Measurement in CSS
### Absolute Units
These units are fixed and highly dependent on the output medium. They include;
- `in`: inches - 1 in is equal to 2.45cm
- `cm`:centimeters
- `mm`: millimeters
- `pt`: points - 1/72 inch
- `pc`: picas - equal to 12pt
- `px`: pixel units - equal to 0.75pt
Apart from `px`, other absolute physical units shold be used for print media because they support high-level resolution devices while `px` supports low-level (such as computer screens). Although some computers or phones may have high-level resolution but using other units will result in noticeable difference in website display from device to device. For this reason, other units are usually used for print media and not webpage design.

#### Pixels (px)
This is mostly used when working with measurements. A pixel refers to the samllest form of measurement of an object on a computer screen where which each individual dot making up the object is a pixel. According to Wikipedia;
> A pixel is the smallest controllable element of a picture represented on a screen.

But, a pixel is not actually equal to the pixel on the screen. With the invention of high-density displays on devices, screen resolutions cannot be used to determine the exact width of a page.

Density displays define the ratio between **Screen Resolution** (actual numbers on the device screen) and **CSS Resolution** (used for measurement in CSS).

Hence, pixels are not entirely the same in different devices. However, there is a means by which this unit works the same accross various devices.

### Relative Units
A relative unit is one which dependns on another measurement. In CSS, relative units are - **Font relative units** (which includes `em`, `ch`, `ex` and `rem`), **Percentage relative unit** (`%`) and **Viewport relative unit** (which includes `vw`, `vh`, `vmin` and `vmax`)

#### Font relative units
These units depend on the font sizes of elements.
##### em
This unit depends on the font-size of the current element. For example;
```html
<!-- html file -->
<section>
  <div>
    <p>Hello</p>
  </div>
</section>
```
```css
/* css */
section {
  font-size: 35px;
  margin: 0.5em;
}
section div {
  padding: 1em;
  height: 2em;
  width: 2em;
}
```
For the above style, the paragraph is of 35px font size. This means the margin is 0.5 (half) of 35px. The div also inherits the font-size property from the parent, hence, the padding is 35px, the height and width are 70px (35 * 2).

This unit can be used to ensure uniformity in sizes. All you have to change is the font-size of the section element and every other element adapts to the change.
##### rem
This is similar to `em` but it depends on the font-size of the root element - `html`. If this font-size isn't declared, the browser uses it's default font-size. This is usually **16px**. To declare your own font size say 35px, do this;
```css
html {
  font-size: 35px
}
```
Now you can work with this size by using `rem` in place of `em`. As expected, this ensures uniformity even accross many devices.

##### ex
This is similar to `em` but its size is calculated from the height of the **x** character instead of the width of the **m** character for `em`. The height also depends on the font used and the size.
##### ch
Similar to `ex` but instead measures the width of **0** (zero).
#### Percentage relative unit
##### %
This unit is used to define a size for an element in respect to the immediate parent. For example;
```css
section {
  height: 300px;
}
section div {
  height: 40%:
}
````
The div's height is dependent on the section's height. For now, the div's height would be 300 * (40 / 100) which equals 120px. When the section's height changes, the div changes also.

#### Viewport relative unit
This is similar to the percentage unit, but it uses only one parent, which is the viewport. The viewport refers to the screen (the area which the website is displayed). There are four units here.
##### vw
This refers to **viewport width** which means the width of the screen. For the following style;
```css
section {
  width: 40vw;
}
```
The width of the section would be 40% of the screen width. You should also remember that the width of section will differ in various device width like mobile phones and tablets.
##### vh
As you probably may have guessed, this refers to **viewport height** which means the height of the screen. For example;
```css
section {
  height: 100vh;
}
```
The height of the section would be the exact height of the screen - 100%.
##### vmin
This refers to **viewport mininum** which uses the minimum value between the height and width of the viewport. For a device with viewport of 300px height and 400px width, `vmin` would use 300px as shown in the code below,
```css
section {
  height: 40vmin;
}
```
This means 40% of 300px;
##### vmax
This refers to **viewport maximum**. In contrast to vmin, this uses the maximum value between the height and width of the viewport. For the same device used for vmin above, `vmax` would use 400px as shown below;
```css
section {
  height: 100vmax;
}
```
This means 100% of 400px.