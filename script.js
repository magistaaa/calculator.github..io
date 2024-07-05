let result = document.getElementById('result');

function append(value) {
	result.value += value;
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (e) {
		result.value = 'Error';
	}
}

function clearResult() {
	result.value = '';
}