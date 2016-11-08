var theta = [0, 0, 0],
	stepSize = 0.0005,
	trainingData = [
		[1, 55, 130, 0],
		[1, 58, 160, 1],
		[1, 62, 148, 0],
		[1, 67, 186, 1]
	],
	numOfIteration = 3;

var iterations = function(theta, stepSize, trainingData) {
	var newTheta = [],
		trainingSize = trainingData.length,
		exp = 2.71828182845904523536028747135266249775724709369995;

	for (var thetaIterator = 0; thetaIterator < 3; thetaIterator++) {
		var submation = 0;
		for (var trainingIterator = 0; trainingIterator < trainingSize; trainingIterator++) {
			var trainingRow = trainingData[trainingIterator];
			var index = theta[0] + theta[1] * trainingRow[1] + theta[2] * trainingRow[2];
			var base = 1 + Math.pow(exp, -1 * index);
			var diff = Math.pow(base, -1) - trainingRow[3];
			submation += diff * trainingRow[thetaIterator];
		}
		newTheta[thetaIterator] = theta[thetaIterator] - stepSize * submation;
	}

	return newTheta;
}

var newTheta = theta;
for (var i = 0; i < numOfIteration; i++) {
	newTheta = iterations(newTheta, stepSize, trainingData);
	console.log(newTheta);
}

