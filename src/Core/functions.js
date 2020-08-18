export const flow = funcs => (...args) =>
    funcs.reduce((prev, fnc) => [fnc(...prev)], args)[0]



/* const add = (a, b) => a + b
const square = n => n * n

 const addSquare = flow([add, square])
 addSquare(1, 2)
// => 9 */

/*------------------------------------------------------------------------*/

export const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  };

/* 
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

// The native sort modifies the array in place. `_.orderBy` and `_.sortBy` do not, so we use `.concat()` to
// copy the array, then sort.
fruits.concat().sort(sortBy("name"));
// => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

 */
/*------------------------------------------------------------------------*/

export const defaultTo = (a, b) => (a == null || Object.is(a, NaN) ? b : a)

/* defaultTo(1, 10)
// => 1

defaultTo('', 10)
// => ''

defaultTo(undefined, 10)
defaultTo(null, 10)
defaultTo(NaN, 10)
// => 10 */

/*------------------------------------------------------------------------*/
const round = (num, precision) => {
    const modifier = 10 ** precision
    return Math.round(num * modifier) / modifier
  }

/*   Math.round(4.006)
// => 4

round(4.006, 2)
// => 4.01

round(4060, -2)
// => 4100 */

/*------------------------------------------------------------------------*/

const over = arr => (...args) => arr.map(func => func(...args))

const func = over([Math.max, Math.min])

func(1, 2, 3, 4)
// => [4, 1]

/*------------------------------------------------------------------------*/
 export const overSome = checks => item => checks.some(check => check(item))

//  export const overSome = checks => item => checks.every(check => check(item))

