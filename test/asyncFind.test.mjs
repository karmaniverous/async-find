/* eslint-env mocha */

// npm imports
import { setTimeout } from 'timers/promises';

// mocha imports
import chai from 'chai';
const should = chai.should();

// subject imports
import asyncFind from '../src/asyncFind.mjs';

// async predicates
const halfString = async (s) => {
  await setTimeout(100);
  return s.slice(0, Math.trunc(s.length / 2));
};

const tripleString = async (s) => {
  await setTimeout(100);
  return s + s + s;
};

const errorOnE = async (s) => {
  await setTimeout(100);
  if (s.includes('e')) throw new Error();
  else return s;
};

const returnsUndefined = async (s) => {
  await setTimeout(100);
};

describe('asyncFind', async () => {
  it('input 1 passes all predicates', async () => {
    const [input, output] = await asyncFind(
      ['abc', 'def'],
      [tripleString, halfString, errorOnE]
    );

    input.should.equal('abc');
    output.should.equal('abca');
  });

  it('input 2 passes all predicates', async () => {
    const [input, output] = await asyncFind(
      ['efg', 'abc'],
      [halfString, tripleString, errorOnE]
    );

    input.should.equal('abc');
    output.should.equal('aaa');
  });

  it('every input fails', async () => {
    const [input, output] = await asyncFind(
      ['efg', 'abc'],
      [halfString, tripleString, errorOnE, returnsUndefined]
    );

    should.not.exist(input);
    should.not.exist(output);
  });
});
