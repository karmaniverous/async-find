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

## Collaborators

### `release-it` Configuration

This project includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations in your local repo:

1. Create a copy of `.env.development.local.template` and name it
   `.env.development.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.development.local`.

You can now build build project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```
