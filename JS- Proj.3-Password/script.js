const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()/?]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'You have a very good password!';
		p.style.color = 'lime';
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = 'You have a good password!';
		p.style.color = 'gold';
	} else {
		p.textContent = 'Your password is not strong!';
		p.style.color = 'red';
	}
};

const checkPassword = () => {
	if (pass.value !== '') {
		showMsg();
	} else {
		p.textContent = 'Provide the password';
		p.style.color = '';
	}
};
pass.addEventListener('keyup', checkPassword);
