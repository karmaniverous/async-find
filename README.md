# async-find

See
[tests](https://github.com/karmaniverous/async-find/blob/main/lib/asyncFind/asyncFind.test.js)
for examples of usage!

# API Documentation

```js
import { asyncFind } from '@karmaniverous/async-find`;
```

## Constants

<dl>
<dt><a href="#PACKAGE_INFO">PACKAGE_INFO</a> : <code><a href="#PackageInfo">PackageInfo</a></code></dt>
<dd></dd>
</dl>

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
<dt><a href="#PackageInfo">PackageInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="PACKAGE_INFO"></a>

## PACKAGE\_INFO : [<code>PackageInfo</code>](#PackageInfo)
**Kind**: global constant  
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

<a name="PackageInfo"></a>

## PackageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | package version |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
