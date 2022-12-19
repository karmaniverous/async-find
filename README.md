# async-find

```js
import asyncFind from '@karmaniverous/async-find`;
```

See [tests](/src/export/asyncFind/asyncFind.test.mjs) for examples of usage!

# API Documentation

<a name="asyncFind"></a>

## asyncFind(arr, predicates) ⇒ <code>Array</code>
Step through a array of input values. Pass each input value through anarray of async predicate functions, passing the output of each predicateas the input of the next, until either the predicates are exhausted or oneof them returns an error or undefined.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the first input value that survived allpredicates, and its resulting output value.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | An array of values. |
| predicates | <code>Array</code> | An array of async functions. |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
