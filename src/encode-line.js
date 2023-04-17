const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let response = '';
  let count = 1;

  for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
          count += 1;
      } else {
        response += count === 1 ? str[i - 1] : (count + str[i - 1]);
          count = 1;
      }
      if (i === str.length - 1) {
        response += count === 1 ? str[i] : (count + str[i]);
      }
  }
  return response;
}

module.exports = {
  encodeLine
};
