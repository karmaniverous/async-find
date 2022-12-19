# async-find

Step through a array of input values. Pass each input value through an array of
async predicate functions, passing the output of each predicate as the input of
the next, until either the predicates are exhausted or one of them returns an
error or undefined.

See [tests](/src/export/asyncFind/asyncFind.test.mjs) for examples of usage!
