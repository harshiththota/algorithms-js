/* eslint-env mocha */
const BubbleSort = require('../../../src').Algorithms.Sorting.BubbleSort;
const assert = require('assert');

describe('BubbleSort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new BubbleSort();
    assert.equal(inst.size, 0);
  });

  it('should sort the array', () => {
    const inst = new BubbleSort([2, 1, 3, 4]);
    assert.equal(inst.size, 4);

    assert.deepEqual(inst.unsortedList, [2, 1, 3, 4]);
    assert.deepEqual(inst.sortedList, [1, 2, 3, 4]);
    assert.equal(inst.toString(), '1, 2, 3, 4');
  });
});
