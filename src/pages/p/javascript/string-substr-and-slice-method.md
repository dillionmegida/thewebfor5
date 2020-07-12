---
title: substr and slice methods of strings in JavaScript
category: javascript
date: 2020-07-12
authorID: 1
pageDescription: >-
  substr and slice are string methods used to cut substrings out of the strings. In this article, we'll learn about their differences and how to use them.
pageKeywords: "substr, slice, substring, string"
tags: ["string"]
---

`substr` and `slice` are string methods in JavaScript to cut out substrings from the full string. There's also `substring` but it's similar to `slice`. [This answer on StackOverFlow](https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring#answer-2243835) explains the difference between `substring` and `slice`.

Let's look at `substr` and `slice` in detail.

## `slice`

**Note that** this is different from the [`slice` method in arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) but works similarly.

### Syntax for `slice`

```js
string.slice(from, to);
```

`from` is the point (index position) which the cutting starts from in the string and `to` is the point where the cutting stops. **But**, unlike the `from` which the character at that point is included in the returned string, the character at `to` is not included.

### Example for `slice`

```js
const str = 'Hello World';
const subString = str.slice(0, 3);
console.log(subString);
// Hel
```

The first argument (`from`) here is 0, which is, of course, the beginning of the string. At the beginning is 'H'.

The last argument (`to`) is 5, which is the index of the character, 'l'. As explained in the syntax, the returned value is H to the second l but without l - 'Hel'

## `substr`

### Syntax for `substr`

```js
string.substr(from, length-to-cut);
```

Similar to `slice`, `from` is the starting index position to begin cutting but unlike `slice`, `substr`'s second argument is the length of characters to cut (**not the index position to stop**).

### Example for `substr`

```js
const str = 'Hello World';
const subString = str.substr(1, 3);
console.log(subString);
// ell
```

The first argument (`from`) here is 1, which is the index position for the character 'e'.

The second argument (`length-to-cut`) is 3, which means starting from 'e', cut out 3 characters.

If `slice` was used instead, the result would be 'el' - 1 being the starting point ('e') and 3 being the ending point ('o') which is not included in the returned value.

## Wrap up

`slice` (just like [`substring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)) works like `(from, to)` while `substr` works like `(from, length-to-cut)`

These methods can be used to achieve the same thing, but, they have their key differences. I believe with this article, you not only know the uniqueness of these two methods but also how to apply them.

Thanks for reading : )

## Learn More:

- [String.prototype.substr() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
