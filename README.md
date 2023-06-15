# Test_Practice
#### Task 1
- Write a function *stringLength(string)* that takes any string as an argument and returns its characters count.
- Now write a test for this function.
- Next, I will expand my function to make it check if the string is at least 1 character long and not longer than 10 characters. I will throw errors if those conditions are not met.
- I will add tests for the new functionality.

#### Task 2
- Write a function *reverseString(string)* function. It should take a string as an argument and return it reversed.
- Write at least one test for this function.

#### Task 3
In this task, I will need to write several tests for each tested function. I could write all of my tests directly at the top level, but it's better to group related tests so their output is more readable. *Jest* has the `describe()` method just for that. I will read about it [here](https://jestjs.io/docs/api#describename-fn) and apply it in my tests for this task:

- Write a simple *calculator* class or object, which will have 4 methods: *add*, *subtract*, *divide*, and *multiply*.
- Write at least 3 tests for each of the calculator methods.
- Group tests for each method using `describe()` method.

#### Task 4 
In this task I'm going to do things differently:
- Start by writing a test for a *capitalize(string)* function. My test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
- I will run my test - it should fail because I don’t have the *capitalize(string)* function implemented yet.
- Now I will make my tests green by implementing the *capitalize(string)* function. I will think about what the minimum amount of code is necessary to pass this test and write it.


### Run Test
```
    npm run test
```