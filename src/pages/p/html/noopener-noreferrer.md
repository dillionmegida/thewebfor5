---
title: noopener noreferrer - What do these mean and how does it improve web security?
category: html
date: 2020-08-09
authorID: 1
pageDescription: >-
  noopener and noreferrer are two values for the rel attribute in anchor tags that ensures the new page has no information or access to the previous page
pageKeywords: "target blank, blank, anchor tags, noreferrer, noreferrer"
tags: ["html"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1596978787/images/thewebfor5/noopener_noreferrer_qtu4ua.png"
---

You've probably heard that `target='_blank'` brings a security risk in web applications (React yells about this a lot), and the solution for this is that links should have a `rel` attribute (which describes the relationship between two documents) that has a value of `noopener noreferrer`. What does this even mean?

In this simplified article, we'll learn the importance of this technique for improving web application security.

## `target='_blank'`

This attribute and value tells a link to open it's referenced page in a new tab or a new window when clicked. Other values are [`_self`, `_parent` and `_top`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). `_self` is the default.

For example:

```html
<a href='https://google.com'>
  Google
</a>
<a href='https://facebook.com' target='_blank'>
  Facebook
</a>
```

The Google link would open Google's homepage on the same tab this link was clicked but the Facebook link would open Facebook's homepage on a new tab.

But it doesn't stop at just opening in a new tab. Let's find out more.

## `window.open()`

An alternative way to open a webpage in a new context (tab or window) is with the `window.open()` method. It accepts three arguments, but we are only concerned with the first for our illustration: `URL`. Learn more about this method in the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

```js
window.open('https://facebook.com')
```

Facebook's homepage is opened in a new tab just like the URL in the `href` attribute above.

## `window.opener`

This property of the `window` object influences the importance of `noopener`.

`window.open()` relates with `window.opener`. Such that we can have:

```js
const newWindow = window.open('index.html')
```

`newWindow.opener` would return the window object of the current window (which referred to the new tab webpage).

[`window.opener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) returns the `window` object of the page that navigated to the current page in a new context.

And the security question comes in: you mean the new page has access to the old page?

Yes, it does! The `window` object contains a lot of information about a webpage (including the `document` - `window.document`), hence, it can manipulate the webpage in various ways. Attackers could use this to manipulate users with malicious URLs.

**With `noopener`, `window.opener` would return null. Problem solved!** But `noreferrer` does something extra.

When a new page is opened from a previous page, the new page receives information (like traffic) about the previous page. This increases Referral traffic (as seen in [Google Analytics](https://analytics.google.com/analytics/web/)).

With `noreferrer`, the new page would not know what page referred to the new page. This of course would affect SEO.

Therefore, new tab links should be created as follows to avoid security attacks:

```html
<a href='https://google.com' rel='noreferrer noopener'>
  Google
</a>
```

## Conclusion

Your next question might be: "Why aren't browsers doing something about this already?"

And the answer is, yes they are. For example, in the latest versions of Chrome, executing the code `window.opener` on a page opened from a previous page would return a cross-origin error. Which means, the new page is now treated as another page running in another process.

However, until all browsers adopt a similar solution, `noopener noreferrer` is the best solution for reducing the risk of cross-origin attacks.

🎉
