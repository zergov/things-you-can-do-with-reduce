# Things you can do with reduce
Reduce is a high order function and can be found in many programming languages.

In javascript, `reduce` [is a method exposed by the javascript array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). `reduce` is a powerful function that can be used to implement powerful
programming tools involving collections.

This repo exposes only a surface of the things you can build using `reduce`.

## implementing map
`map` takes a function and an array, and return a new array with the function applied to all element of the initial array.
```js
const map = (f, arr) => arr.reduce((acc, v) => [ ...acc, f(v) ], [])

// map(double, [1, 2, 3, 4, 5, 6])
// >> [2, 4, 6, 8, 10, 12]
```

## implementing filter
`filter` takes a predicate function that returns a boolean, and return a new array containing all element that passes the predicate
```js
const filter = (f, arr) => arr.reduce((acc, v) => f(v) ? [...acc, v] : acc, [])

// filter(odd, [1, 2, 3, 4, 5, 6])
// >> [1, 3, 5]
```
## implementing partition
`partition` takes a predicate function, and return a two array. The left one containing the values that match the predicates, and the right one containing the ones that failed.
```js
const partition = (f, arr) => arr.reduce(([left, right], v) => f(v)
    ? [[...left, v], right]
    : [left, [...right, v]]
, [[], []])

// const [left, right] = partition(odd, [1, 2, 3, 4, 5, 6])

// >> left
// >> [1, 3, 5]
// >> right
// >> [2, 4, 6]
```
## implementing zip
`zip` takes 2 arrays and merge elements from both arrays together.
```js
const zip = (a, b) => a.reduce((acc, x, i) => b[i] ? [...acc, [x, b[i]]] : acc, [])

// zip([1, 2, 3], ['a', 'b', 'c'])
// >> [[1, 'a'], [2, 'b'], [3, 'c']]
```
## implementing zipWith
`zipWith`, similar to `zip`, takes 2 arrays, apply a function to the two value merged together, and return an array of the result of the applied function
```js
const zipWith = (a, b, f) => a.reduce((acc, x, i) => b[i] ? [...acc, f(x, b[i])] : acc, [])

// zipWith([1, 2, 3], [100, 200, 300], add)
// >> [101, 202, 303]
```
## implementing pipe
Finally, reduce can be used to build powerful tools.
Pipe for example, is a cool function that pass a value through a list of function, applying each functions to the return value of the previous function in the chain.
```js
const pipe = x => (...fs) => fs.reduce((val, f) => f(val), x)

// pipe("Hello world")(
//   uppercase,
//   reverse,
// )
//
// >> DLROW OLLEH
```
