---
title: Parameters and Arguments
category: javascript
date: 2020-06-23
authorID: 2
pageDescription: >-
  Promises in Javascript are used to handle asynchronous events. It acts as a figure used to represent the value of something in calculation for a result that is initially unknown.
pageKeywords: 'parameters, functions, arguments, methods, variable, default parameters, es6, variable assignment'
tags: ["parameters", "arguments", "javascript"] 
---

## Parameters and Arguments
Parameters and arguments are a source of confusion to some people. They are usually mistaken for each other and used interchangeably because of this confusion. 
It is very easy to get these terms mixed up because they are both used together on functions and methods.

Parameters, simply put, are variable names which are used to hold values which are passed when we call a function or a method.
We pass in parameters when we create functions. They are optional in nature, not every function needs to have a parameter, but they are very helpful.
Parameters just like variable names can be called anything but it's wiser to keep the names meaningful. parameters are usually static in nature, ie
they don't/aren't changed from time to time because they are just variables/placeholders. The names do not really matter, the values it will hold are more important. You can
change the variables if you want, however you would be ignoring what is really important. Parameters are also local scoped. This means that it is
tied to the function in which it is used.

#### Below is an example of parameters:
```javascript
const author = (name, age) =>{
  console.log(`${name} is ${age}`);
}
```
In the example above, name and age are parameters.

## Arguments
Arguments on the other hand are the actual values we want the parameters/variables in the function to hold. Remember, parameters are like variables
and all variables need to have a value. Arguments are used to set the values for these parameters. We pass in arguments to functions when we call
these functions. Arguments are not usually static in nature. The whole idea of parameters and arguments are so we are able to keep
calling our functions with different values.

#### An example of arguments:
```javascript
const author = (name, age) =>{
  console.log(`${name} is almost ${age}`);
}
author('Catheryn', 21)
//outputs Catheryn is almost 21
```
In the example above, Catheryn and 21 are arguments. They are assigned as the value of parameters (name, age) when the function is called.
Now, name = 'Catheryn' and age = 21;

If we change the arguments, the output changes:
```javascript
const author = (name, age) =>{
  console.log(`${name} is almost ${age}`);
}
author('Jane Doe', 30)
//outputs Jane Doe is almost 30
```
### Why don't we just create a variable within the function?
We could create those variables withing the author function but then we would have assign the values immediately after creating the variables.
```javascript
const author = () =>{
  let name = 'Catheryn';
  let age = '21';
}
```
This is all good but what if we wanted to log the name and age of many other authors or calculate how much they earn in a month?
Would we then create separate functions for every author? That would be redundant as we'd just be repeating ourselves. Parameters and arguments
help us avoid this issue and also write cleaner code. With arguments, all we would have to do is just call the function again and again with
different values each time.
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
### Things to note
- Variables not just values can be arguments. Normally, our arguments are usually written in form of values, they can also be written in form of
variables. We can do this when we have variables which we have declared globally to be used inside a function

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
As you can see, the argument above is in form of a variable not a value. This way we can use the globally defined variable inside the function.
But this is unnecessary because since the varibale is global, we can use it inside functions without passing it as arguments.

Therefore, without arguments, we stil get an output 
```javascript
let name = 'Catheryn';
let age = '21';
const author = () =>{
  console.log(`${name} is almost ${age}`);
}
author()
//Catheryn is almost 21
```
- With Es6, we can set a default value for parameters so we don't get the undefined when we don't set an argument for a parameter.
If we set an argument, the default value is overlooked, if we don't the default value comes to play. You can use this in cases where, all the case
scenarios are the same except for a few cases. Example: a group of teenagers are all the same age except for their teachers. In this case,
we would set a default value for the age of the teenagers and add only new values for the teachers
```javascript
const author = (name, age=21) =>{
  console.log(`${name} is almost ${age}`);
}
author('Catheryn');
//outputs catheryn is almost 21
```
Notice how we say age=21, this is how we set default parameters. Even without an argument for the age parameter, we still get an output.
- The number of arguments must match the number of parameters. If there are three parameters, there should also be three arguments. If the 
number of arguments are lesser than the parameters you will get undefined if you try to use that parameter that is missing an argument. In cases like this,
setting the default value is very beneficial.
- Always write your arguments in the order in which your parameters are written. Else, there will be some funny outputs. JavaScript will not
rearrange your arguments for you.
```javascript
const author = (name, age) =>{
  console.log(`${name} is almost ${age}`);
}
author(21, 'Catheryn');
//outputs 21 is almost Catheryn
```
Parameters and Arguments are really easy to use once the concept is perfectly understood.
