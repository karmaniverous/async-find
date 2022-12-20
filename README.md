# async-find

See [tests](/src/export/asyncFind/asyncFind.test.mjs) for examples of usage!

# API Documentation

```js
import { asyncFind } from '@karmaniverous/async-find`;
```

## Functions

<dl>
<dt><a href="#asyncFind">asyncFind(values, predicates)</a> ⇒ <code>Array</code></dt>
<dd><p>Step through a array of input values. Pass each input value through an
array of async predicate functions, passing the output of each predicate
as the input of the next, until either the predicates are exhausted or one
of them returns a falsy result.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Predicate">Predicate</a> ⇒ <code>*</code></dt>
<dd><p>async predicate function callback</p>
</dd>
</dl>

<a name="asyncFind"></a>

## asyncFind(values, predicates) ⇒ <code>Array</code>
Step through a array of input values. Pass each input value through anarray of async predicate functions, passing the output of each predicateas the input of the next, until either the predicates are exhausted or oneof them returns a falsy result.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the first input value that survived allpredicates, and its final predicate output.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array</code> | array of values |
| predicates | [<code>Array.&lt;Predicate&gt;</code>](#Predicate) | array of async predicate functions |

<a name="Predicate"></a>

## Predicate ⇒ <code>\*</code>
async predicate function callback

**Kind**: global typedef  
**Returns**: <code>\*</code> - output  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>\*</code> | value to be tested |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
