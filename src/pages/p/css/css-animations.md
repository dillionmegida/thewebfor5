---
title: CSS Animations
category: css
date: 2020-03-08
authorID: 1
pageDescription: >-
  CSS animations allows elements on a page to change their styles in specified order and duration. It constitutes two parts which are the animation declaration and keyframes which controls specific points in time with specified styles.
pageKeywords: 'css, animations, transition, animation, css animations'
cover: >-
    https://res.cloudinary.com/dillionmegida/image/upload/v1583726680/images/thewebfor5/pankaj-patel-SXihyA4oEJs-unsplash_bghm1v.jpg
tags: ["css"]
---

CSS animations allows elements on a page to change their styles in specified order and duration. This is different from `transition` which watches changes and automatically acts on the changes. With animations, you manually set up the animation style of the element. These animations do not require Javascript. It's pure CSS.

## Syntax

CSS animations constitutes two parts: The CSS style declaration for the animiation and a set of keyframes which specifies different points in time which styles are applied. Example:

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

```css
@keyframes animation {
    from {
        transform: rotate(40deg);
    }
    to {
        transform: rotate(100deg);
    }
}
```

`from` is the same thing as 0% and `to` refers to 100%. For 2 seconds, CSS would determine the rotation at every point in time before 100%.

To manually calculate this, we have 100deg - 40deg = 60deg being the difference in degrees. 60/100 = 0.6 been the degree per percentage. So at 0% of 2 seconds, the element has a rotation degree of 40, at 1%, the rotation degree becomes 40.6 and so on until 100%.

Time points between 0% and 100% can also be specified with different styles. An example is:

```css
@keyframes animation {
    from {
        transform: rotate(40deg);
    }
    45% {
        transform: rotate(80deg);
    }
    to {
        transform: rotate(100deg);
    }
}
```

CSS does the calculations for us to determine how fast the animation should be from 0% to 45% and from 45% to 100%.

## Animation sub-properties

There's more to `animation-name` and `animation-duration` which are the required properties. More sub-properties of animation which are optional are:

- `animation-delay`: Specifies the time which the elements is placed on the page and the time which the animation begins. e.g 200ms
- `animation-iteration-count`: Specifies the number of times which the animation would repeat.
  - `1,2,3` to `n` value states the number of animation iterations.
  - `infinite` value means the animation would continue non-stop.
- `animation-direction`: Specifies how the animation should be directed (if the animation is run more than once). i.e At the end, should it start from the beginning, or it should it animate from the last keyframe back to the first keyframe.
  - `reverse` value means the animation would go from 100% to 0% always.
  - `alternate` value means the animation would go from 0% to 100% and from 100% to 0%,
- `animation-timing-function`: Specifies how an animation is timed. This creates animation curves and can be used for smooth animations.
  - `linear` value means the normal animation as specified in the keyframes.
  - `ease` value means the animation executes in ease mode. Not fast mode.
  - `ease-in` value means the animation begins in ease mode, more of like a slow entry before a fast execution.
  - `ease-in-out` value means the animation begins in ease mode, executes fast, then ends in ease mode. More of like, slow entry, slow exit.
- `animation-fill-mode`: Specifies the values that the animation applies before and after it is activated.
  - `backwards` value means that the element will possess the style declared in the first keyframe before the animation begins. You can practilize this by setting an `animation-delay` to be greater than 0 seconds.
  - `forwards` value means the element will possess the style declared in the last keyframe after the animation ends.
  - `both` value means `backwards` and `forwards` apply.
- `animation-play-state`: This is used in pausing or playing an animation sequence.
  - `running` which is the default value specifies that the animation is running.
  - `pause` value means the animation would be paused.

### Shorthand `animation` style declareation

CSS has an easier way of specifying animation style.

Instead of specifying all sub-properties, you can use a short-hand property called `animation`. An example is:

```css
element {
    animation: spin 2s infinite alternate 3s backwards;
}
```

In the above, we can see that:

- **spin**: `animation-name`
- **2s**: `animation duration`
- **infinite**: `animation-iteration-count`
- **alternate**: `animation-direction`
- **3s**: `animation-delay`
- **backwards**: `animation-fill-mode`

are all stated as values for the `animation` property.

#### Order of specifying `animation`

There is no formal way of specifying the values in the `animation` property. The value must begin with the `animation-name` then all other sub-properties can follow.

Almost all sub-properties have different values thereby making it easy for CSS to determine which value is for which property.

However, `animation-delay` and `animation-duration` have the same values - time (in seconds and milliseconds). For this reason, the rule is that `animation-duration` must come before `animation-delay`.

## Use of multiple animations

Multiple animations can be specified for elements. An example is:

```css
element {
    animation-name: spin, moveRight;
    animation-delay: 2s;
    animation-duration: 3s 5s;
    animation-iteration-count: infinite 4;
}
@keyframes spin {
    from {
        transform: rotate(40deg);
    }
    to {
        transform: rotate(100deg);
    }
}
@keyframes moveRight {
    from {
        margin-left: 20px;
    }
    to {
        margin-left: 100px;
    }
}
```

The above specifies two animations for the element which are `spin` and `moveRight`. It has a single value in `animation-delay` of 2s. This applies to both animations. It has two values for `animation-duration` which are 3s and 5s. 3s is used for `spin` and 5s is used for `moveRight`. The last sub-property declared is `animation-iteration-count` which has two values: infinite for `spin` and 4 for `moveRight`.

The shorthand representation of the above is:

```css
element {
    animation: spin 3s 2s infinite, moveRight 5s 2s 4;
}
```

Thanks for reading 💛