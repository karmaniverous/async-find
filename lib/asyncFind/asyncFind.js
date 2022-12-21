/**
 * async predicate function callback
 *
 * @async
 * @callback Predicate
 *
 * @param {*} [value] - value to be tested
 *
 * @returns {*} output
 */

/**
 * Step through a array of input values. Pass each input value through an
 * array of async predicate functions, passing the output of each predicate
 * as the input of the next, until either the predicates are exhausted or one
 * of them returns a falsy result.
 *
 * @async
 * @function asyncFind
 *
 * @param {Array} values - array of values
 * @param {Predicate[]} predicates - array of async predicate functions
 *
 * @returns {Array} An array containing the first input value that survived all
 * predicates, and its final predicate output.
 */
export const asyncFind = async (values, predicates) => {
  if (!Array.isArray(values)) values = [values];
  if (!Array.isArray(predicates)) predicates = [predicates];

  for (let e of values) {
    let f = e;

    for (let p of predicates)
      try {
        f = await p(f);
        if (f) continue;
        else break;
      } catch {
        f = undefined;
        break;
      }

    if (f) return [e, f];
  }

  return [undefined, undefined];
};
