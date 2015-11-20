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

<!-- Let's assume you would like to work from home today. You might make your decision by weighing up three factors (and their respective inputs and weights):

  - Is the weather good? `x1` and `w1`
  - Is the traffic good? `x2` and `w2`
  - Do I wanna stay home with my lover? `x3` and `w3`

We can represent these three factors by the corresponding binary inputs `x1, x2 and x3`. For instance, we'd have `x1 = 1` if the weather is good, and `x1 = 0` if the weather is bad. Similarly, `x2 = 1` if the traffic is good, and `x2 = 0` if not. And similarly again for `x3` if you wanna stay with your partner or not.

You can use artificial neurons (and perceptrons in particular) for this kind of decision making. One way to do it is to choose a weigth `w3 = 6` to stay with your lover, `w2 = 2` and `w1 = 1` for the other conditions. The larger value of `w3` indiciated that your partner matters a lot to you. By choosing a threshold of 5, it doesn't matter if the weather is bad or if you are afaid to get fired. Now by changing the threshold to 3, 
 -->




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

