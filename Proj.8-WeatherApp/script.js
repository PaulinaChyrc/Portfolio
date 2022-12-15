const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const feels_like = document.querySelector('.feels_like');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&APPID=4a0328a0d09a7083f1007f5eb4652016';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'London';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			// console.log(res.data);
			const temp = res.data.main.temp;
			const feels_like_temp = res.data.main.feels_like;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);
			// console.log(status.id);

			cityName.textContent = res.data.name;
			temperature.textContent = Math.floor(temp) + '°C';
			feels_like.textContent = Math.floor(feels_like_temp) + '°C';
			humidity.textContent = hum + '%';
			weather.textContent = status.main;

			warning.textContent = '';
			input.value = '';

			let weatherIcon = () => {
				if (status.id < 300) {
					photo.setAttribute('src', './img/thunderstorm.png');
				} else if (status.id >= 300 && status.id < 400) {
					photo.setAttribute('src', './img/drizzle.png');
				} else if (status.id >= 500 && status.id < 600) {
					photo.setAttribute('src', './img/rain.png');
				} else if (status.id >= 600 && status.id < 700) {
					photo.setAttribute('src', './img/ice.png');
				} else if (status.id >= 700 && status.id < 800) {
					photo.setAttribute('src', './img/fog.png');
				} else if (status.id === 800) {
					photo.setAttribute('src', './img/sun.png');
				} else if (status.id >= 801 && status.id < 900) {
					photo.setAttribute('src', './img/cloud.png');
				} else {
					photo.setAttribute('src', './img/unknown.png');
				}
			};
			weatherIcon();
		})
		.catch(() => (warning.textContent = 'Incorrect city name'));
};
getWeather();

button.addEventListener('click', getWeather);
input.addEventListener(
	'keypress',
	(pressEnter = (e) => {
		if (e.key === 'Enter') {
			getWeather();
		}
	})
);
