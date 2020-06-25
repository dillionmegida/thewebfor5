---
title: Parameters and Arguments
category: javascript
date: 2020-06-23
authorID: 2
pageDescription: >-
  Parameters, simply put, are variable names which are used to hold values which are passed when we call a function or a method. We pass in parameters when we create functions. They are optional in nature, not every function needs to have a parameter, but they are very helpful. Arguments on the other hand are the actual values we want the parameters/variables in the function to hold.
pageKeywords: 'parameters, functions, arguments, methods, variable, default parameters, es6, variable assignment'
tags: ["parameters", "arguments", "javascript"] 
---

## Parameters and Arguments
Parameters and arguments are a source of confusion to some developers. They are usually mistaken for each other, as a result,used interchangeably.

It is very easy to get these terms mixed up because they are both used together in functions and methods. Knowing which, is which, may not change the way you use JavaScript but it gives better insights into what you are doing. Let's look at these two terms.

### Parameters

Parameters, simply put, are variable names used to hold values passed into a function or method when it is invoked.

We pass in parameters when we create functions. They are optional in nature, as not every function needs to have a parameter, but they are very helpful especially for function resuablilty.

Parameters just like variable names. They can be named anything but it's best practices to keep the names meaningful as they give meaning to the function. 

Parameters are usually static in nature, ie, they don't/aren't changed from time to time because they are just variables (or placeholders). The names do not really matter, but the values it will hold are more important because that is what would be used in the function. You can change the variables if you want, however you may be ignoring what is really important.

Parameters are also local scoped. This means that it is tied to the function in which it is used and can not be used outside the function.

#### Below is an example of parameters:

```javascript
const author = (name, age) => {
  console.log(`${name} is ${age}`);
}
```

In the example above, `name` and `age` are parameters. Just as you'd notice, they are placeholders for the real values that would be used when the function is called.

## Arguments

Arguments on the other hand are the actual values we want the parameters/variables in the function to hold. Remember, parameters are like variables and all variables need to have a value. Arguments are used to set the values for these parameters. We pass in arguments to functions when we call these functions. Arguments are not usually static in nature. The whole idea of parameters and arguments are so we are able to call our functions with different values.

#### An example of arguments:

```javascript
const author = (name, age) => {
  console.log(`${name} is almost ${age}`);
}
author('Catheryn', 21)
//outputs Catheryn is almost 21
```

In the example above, Catheryn and 21 are arguments. They are assigned to the parameters (name, age) when the function is called.

Hence, name = 'Catheryn' and age = 21;

If we change the arguments, the output changes:

```javascript
const author = (name, age) => {
  console.log(`${name} is almost ${age}`);
}
author('Jane Doe', 30)
//outputs Jane Doe is almost 30
```

### Why don't we just create a variable within the function?

We could create those variables withing the author function but then we would have assign the values immediately after creating the variables.

```javascript
const author = () => {
  let name = 'Catheryn';
  let age = '21';
}
```

This is all good but what if we wanted to log the name and age of many other authors or calculate how much they earn in a month?

Would we then create separate functions for every author? That would be redundant as we'd just be repeating ourselves (against the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Parameters and arguments help us avoid this issue and also write cleaner code. With arguments, all we would have to do is just call the function again and again with different values each time.

```javascript
const author = (name, salary) =>{
  console.log(`${name} earns $${salary} per month`);
  console.log(`and $${salary * 12} per month`)
}
author('Jane Doe', 500);
//Jane Doe earns $500 per month
//and $6000 per month

author('Judy', 800);
//Judy earns $800 per month
//and $9600 per month
```

Also rememeber that functions would have to be descriptive to enable ease of use.

### Things to note

1. Variables can also be arguments. Normally, our arguments are usually written in form of values, they can also be written in form of variables. We can do this when we have variables that are declared globally (or in the scope of the function call) to be used inside a function

#### An example:

```javascript
let name = 'Catheryn';
let age = '21';
const author = () =>{
  console.log(`${name} is almost ${age}`);
}
author(name, age)
//Catheryn is almost 21
```

2. With [Es6](http://es6-features.org/), we can set a default value for parameters so we don't get the undefined when we don't set an argument for a parameter.
If we set an argument, the default value is overlooked and if we don't, the default value comes is used. You can use this in cases where, all the case scenarios are the same except for a few cases. Or cases where only one argument can be used in a future giving room for more arguments.

Example: a group of teenagers are all the same age except for their teachers. In this case, we would set a default value for the age of the teenagers and add only new values for the teachers like so:

```javascript
const author = (name, age=21) =>{
  console.log(`${name} is almost ${age}`);
}
author('Catheryn');
//outputs catheryn is almost 21
```

Notice how we say `age=21`, this is how we set default parameters. Even without an argument for the age parameter, we still get an output.

3. The number of arguments must match the number of parameters. If there are three parameters that are used in the function, there should also be three arguments. If the number of arguments are lesser than the parameters, you'll get undefined if you try to use that parameter that is missing an argument. In cases like this,
setting the default value is very beneficial.

4. Always write your arguments in the order in which your parameters are written. Else, there will be some funny outputs. JavaScript will not rearrange your arguments for you. For example:

```javascript
const author = (name, age) =>{
  console.log(`${name} is almost ${age}`);
}
author(21, 'Catheryn');
//outputs 21 is almost Catheryn
```

## Conclusion

Parameters and Arguments are really easy to use once the concept is perfectly understood. You may have been doing this before, but I believe with this article, you understand what you're doing better.
