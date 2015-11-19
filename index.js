
/**
 * Artificial neuron.
 *
 * The artificial neuron receives one or more inputs (representing dendrites)
 * and sums them to produce an output after begin passed through a nonp-linear
 * funciton also called actication function.
 *
 * Examples:
 *
 *  var perceptron = neuron(function(sum) {
 *	  return sum > 5 ? true : false;
 *  });
 *  perceptron(1,2,3); // => true
 *
 * @param {Function} cb
 * @return {Function}
 * @api public
 */

module.exports = function(cb) {
	return function() {
		var sum = 0;
		for(var l = arguments.length; l--;) {
			sum += arguments[l];
		}
		return cb(sum);
	};
};