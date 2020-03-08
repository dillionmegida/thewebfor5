---
title: CSS Animations
category: css
date: 2020-03-08
authorID: 1
pageDescription: >-
  CSS Measurement units include px, pc, cm, em, rem, % and so much more. Knowing which one to use in order to achieve the result you want becomes of great importance. In this article, we'd look at those units.
pageKeywords: 'css, px, pc, pixels, rem, em, root em, measurement, css units, units, css measurements, percentage, viewport, vw, vh, vmin, vmax, viewport height, viewport width, font, font size, root font-size, px and rem, css measurement units'
cover: >-
  https://res.cloudinary.com/dillionmegida/image/upload/v1577778140/images/thewebfor5/css-measurement_xpbdae.jpg
tags: ["css"]
---

CSS animations allows elements on a page to change their styles in specified order. This is different from `transition` which automatically only watches changes and acts on the changes. With animations, you manually set up the animation style of the element. These animations do not require Javascript. It's pure CSS.

## Syntax

CSS animations constitutes two parts: A The CSS style declaration for the animiation and a set of keyframes which specifies different points in time which styles are applied. Example:

```css
element {
    animation-name: spin;
    animation-duration: 2s;
}
@keyframes animation {
    0% {
        transform: rotate(40deg);
    }
    100% {
        transform: rotate(100deg);
    }
}
```

In the above, the animation name `spin` is declared for the element. At the keyframes section, it is specified that at 0% of 2 seconds, the element would rotate by 40deg and at 100% of 2 seconds, the element would rotate by 100deg.

Another easier configuration for the above is:

@keyframes animation {
    from {
        transform: rotate(40deg);
    }
    to {
        transform: rotate(100deg);
    }
}

## Animation properties

There's more to `animation-name` and `animation-duration`. More properties of animation are:

- `animation-delay`: Specifies the time which the elements is placed on the page and the time which the animation begins.
- `animation-iteration-count`: Specifies the number of times which the animation would repeat. `infinite` value means the animation would continue non-stop.
- `animation-direction`: Specifies how the animation should be directed (if the animation is run more than once). i.e At the end, should it start from the beginning, or it should it animate from the last keyframe back to the first keyframe