# asyncFind

```
/**
 * Step through a array of input values. Pass each input value, through an
 * array of async predicate functions, passing the output of each predicate
 * as the input of the next, until either the predicates are exhausted or one
 * of them returns an error or undefined.
 *
 * @async
 * @function asyncFind
 * @param {Array} arr - An array of values.
 * @param {Array} predicates - An array of async functions.
 * @return {Promise} A Promise resolving to an array containing the first input
 * value that survived all predicates, and its resulting output value.
 */
```
