// some functions to play around
const add = (a, b) => a + b
const double = n => n * 2
const even = n => n % 2 === 0
const odd = n => !even(n)
const uppercase = s => s.toUpperCase()
const reverse = s => s.split('').reverse().join('')

// map :: Take a function and an array, and return a new array with the function applied to all element of the initial array.
const map = (f, arr) => arr.reduce((acc, v) => [ ...acc, f(v) ], [])
// map(double, [1, 2, 3, 4, 5, 6])
// >> [2, 4, 6, 8, 10, 12]

// filter :: Take a predicate function that returns a boolean, and return a new array containing all element that passes the predicate
const filter = (f, arr) => arr.reduce((acc, v) => f(v) ? [...acc, v] : acc, [])
// filter(odd, [1, 2, 3, 4, 5, 6])
// >> [1, 3, 5]

// partition :: (f(a) => Boolean, [a]) -> [[a], [a]]
const partition = (f, arr) => arr.reduce(([left, right], v) => f(v)
    ? [[...left, v], right]
    : [left, [...right, v]]
, [[], []])
// const [left, right] = filter(odd, [1, 2, 3, 4, 5, 6])
// >> left  -> [1, 3, 5]
// >> right -> [2, 4, 6]

// zip :: takes 2 arrays, merge elements from both arrays together.
const zip = (a, b) => a.reduce((acc, x, i) => b[i] ? [...acc, [x, b[i]]] : acc, [])
// zip([1, 2, 3], ['a', 'b', 'c'])
// >> [[1, 'a'], [2, 'b'], [3, 'c']]
const zipWith = (a, b, f) => a.reduce((acc, x, i) => b[i] ? [...acc, f(x, b[i])] : acc, [])
// zipWith([1, 2, 3], [100, 200, 300], add)
// >> [101, 202, 303]

// Finally, reduce can be used to build powerful tools.
// Pipe for example, is a cool function that apply a function to a value, and apply the second function in the pipe
// to the return value of the previous one.
const pipe = x => (...fs) => fs.reduce((val, f) => f(val), x)
// pipe("Hello World")(
//   uppercase,
//   reverse,
// )
//
// >> DLROW OLLEH

module.exports = {
  add,
  double,
  even,
  odd,
  uppercase,
  reverse,

  map,
  filter,
  partition,
  zip,
  zipWith,

  pipe,
}
