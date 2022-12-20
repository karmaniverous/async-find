/**
 * Step through a array of input values. Pass each input value through an
 * array of async predicate functions, passing the output of each predicate
 * as the input of the next, until either the predicates are exhausted or one
 * of them returns an error or undefined.
 *
 * @async
 * @function asyncFind
 *
 * @param {Array} arr - An array of values.
 * @param {Array} predicates - An array of async functions.
 * @returns {Array} An array containing the first input value that survived all
 * predicates, and its resulting output value.
 */
export const asyncFind = async (arr, predicates) => {
  if (!Array.isArray(arr)) arr = [arr];
  if (!Array.isArray(predicates)) predicates = [predicates];

  for (let e of arr) {
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
