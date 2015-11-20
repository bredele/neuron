# neuron

  > mathematical function conceived as a model for biological neurons.

An artificial neuron receives one or more inputs (representing dendrites signals multipled by their weight) and sums them to produce an output after begin passing them through a none-linear funciton also called activation function.

## usage

```js
var neuron = require('neuron');
var perceptron = neuron(function(sum) {
	return sum > 5 ? true : false;
});
perceptron(1,2,3); //=> true
```

The example above illustrates a perceptron. A perceptron is a neuron where the activation is a step function with a binary output. The output is true if the sum of the inputs are superior to the threshold (here `5`).


In an artificial neuron, the weights express the importance of the respective inputs to the output. By varying them as well as the threshold, we can get different models of decision-making. 




## license

The MIT License (MIT)

Copyright (c) 2015 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

