---
title: Array.sort in Javascript
category: javascript
date: 2020-04-10
authorID: 1
pageDescription: >-
    The sort method is used on arrays to arrange the values in a specified order which depends on a compare function. If no compare function is specified, the default order is ascending/alphabetic which treats the values to strings.
pageKeywords: "sort, array sort, sort method"
tags: ["array"]
cover: 'https://res.cloudinary.com/dillionmegida/image/upload/v1586542714/images/thewebfor5/array.sort_ymjvlp.png'
---

The `sort` method just as the name implies sorts element in an array in a specificied order (could be ascending which is the **default**, descending, alphabetic or numeric)

## Syntax

```js
array.sort(compareFunction)
```

The `compareFunction` argument is **optional**, though necessary at some point. We'll understood why soon.

## Default operation

By default, `sort` sorts array of strings and numbers as _strings_ in **alphabetical order**. Let's look at this in the following example:

```js
const words = ["hello", "about", "ant"]
const nums = [4443, 22, 554]
console.log(words.sort(), nums.sort())
// Expected output
// [ 'about', 'ant', 'hello' ]
// [ 22, 4443, 554 ]
```

This worked as expected for strings, but not for numbers. What happened is the numbers were also treated as strings of which 2 is less 4 which is also less than 5, hence the array `[4443, 222, 554]` resulted in `[ 22, 4443, 554 ]`. This results in the need for a compare function (the optional argument)

**Note that:** the sort method modifies the original array. This means that `words` would now be `[ 'about', 'ant', 'hello' ]`.

## Compare Function

### Structure

```js
function compareFunction(a, b) {
    if(a is less than b based on some calculations) {
        return -1
    } else {
        return 1
    }
}
```

This function takes in two arguments which would be compared. This comparison is done based on the operation coded for it. If the returned value is negative, the first argument (a) would come before the second argument (b) in the sorted array. And if the returned value is positive, the second value comes first.

If two numbers are the same, they maintain their position but are compared to the other numbers.

For example:

```js
function compareNums(a, b) {
    return a - b
}
const nums = [11, 1000, 554]
nums.sort(compareNums)
console.log(nums)
// Expected output
// [ 11, 554, 1000 ]
```

Now, the result comes as expected. Our function takes the first two numbers (`11, 1000`), our specified operation calculates the difference, and since the result is negative, `11` comes before `1000`. The function is ran again on these remaining values (1000 and 554). The result is positive, hence, `1000` would come after `554` - `[ 11, 554, 1000 ]`

### Descending order

Now we know that the order function is based on the returned value being either positive or negative. To implement a descending order for the above, our function would be:

```js
function compareNums(a, b) {
    return b - a
}
```

For the first two numbers, b - a (`11 - 1000`) returns a positve value, which means `11` would come after `1000`, remaining `11` and `554`. 554 - 11 returns a positive value, hence the final array becomes [1000, 554, 11]

## More examples

Like I stated earlier, the order is based on how the compare function is coded. Let's try to implement a compare function for an array of objects.

In the following example, we want to arrange an array of objects with information of people. The order would be descending based on their age.

```js
const people = [
    {
        name: "Stedy",
        age: 23,
    },
    {
        name: "James",
        age: 89,
    },
    {
        name: "Alice",
        age: 34,
    },
]
```

Above is the array of names. Now the compare function.

```js
function comparePeople(a, b) {
    return b.age - a.age
}
```

This can also be translated as:

```js
function comparePeople(a, b) {
    if (b.age > a.age) {
        return 1
    } else {
        return -1
    }
}
```

Remember that if a positive value is returned, the second argument would be after the first argument in the sorted array.

```js
names.sort(comparePeople)
console.log(names)
// Expected output
// [ { name: 'James', age: 89 },
//   { name: 'Alice', age: 34 },
//   { name: 'Stedy', age: 23 } ]
```

## Wrap up

By default (without a compare function), the sort method treats values in an array as strings produces an ascending or alphabetic sort.

The compare function correctly defines the order which an array should be sorted.

Thanks for reading 👋
