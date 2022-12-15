const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const conv = document.querySelector('#converter');
const resultPara = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
		resultPara.textContent = '';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
		resultPara.textContent = '';
	}
};

const celToFar = () => {
	let cel = (conv.value * 9) / 5 + 32;
	resultPara.textContent = `${conv.value}°F to ${cel.toFixed(1)}°C`;
	conv.value = '';
};

const farToCel = () => {
	let far = ((conv.value - 32) * 5) / 9;
	resultPara.textContent = `${conv.value}°C to ${far.toFixed(1)}°F`;
	conv.value = '';
};

const convert = () => {
	if (conv.value !== '') {
		if (one.textContent === '°C') {
			farToCel();
		} else {
			celToFar();
		}
	} else {
		resultPara.textContent = 'You need to add a number';
	}
};

const reset = () => {
	conv.value = '';
	resultPara.textContent = '';
};

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
