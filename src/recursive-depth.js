const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1, depthCal = 1
    for (let i = 0, len = arr.length; i < len; i++) {
      const element = arr[i];
      if(Array.isArray(element)){
        count = 1
        count += this.calculateDepth(element)
      }
      depthCal = Math.max(depthCal, count)
    }
    return depthCal;
  }
}

module.exports = {
  DepthCalculator
};
