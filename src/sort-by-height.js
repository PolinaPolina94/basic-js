const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let s = arr.filter(h => h > 0).sort((a, b) => a - b);
  return arr.map(p => {
    if (p !== -1) {
        return s.shift();
    }
    return -1;
})
}

module.exports = {
  sortByHeight
};
