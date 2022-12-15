const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const textPara = document.querySelector('p');

let fontSize = 36;

const sizeUp = () => {
	if (fontSize >= 50) {
		return;
	}
	fontSize += 5;
	textPara.style.fontSize = fontSize + 'px';
};
const sizeDown = () => {
	if (fontSize <= 15) {
		return;
	}
	fontSize -= 5;
	textPara.style.fontSize = fontSize + 'px';
};
const changeColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	textPara.style.color = `rgb(${r},${g},${b})`;
};

sizeUpBtn.addEventListener('click', sizeUp);
sizeDownBtn.addEventListener('click', sizeDown);
colorBtn.addEventListener('click', changeColor);
