var adOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var randomPromo = adOptions[Math.floor(Math.random() * adOptions.length)];
$(document).ready(function() {
	console.log(randomPromo);
	if (randomPromo === 'a') {
		$('.internal-promo-url').attr('href', 'http://moonweather.me');
		$('.internal-promo-img').attr('src', '/img/assets/moonweather-android-sidebar.png');
		$('.internal-promo-img').attr('alt', 'MoonWeather: Moon phase tracker and weather forecast app');
	}
	if (randomPromo === 'b') {
		$('.internal-promo-url').attr('href', 'http://writeapp.me');
		$('.internal-promo-img').attr('src', '/img/assets/writeapp-sidebar.png');
		$('.internal-promo-img').attr('alt', 'Write.app: Free private online notebooks');
	}
	if (randomPromo === 'c') {
		$('.internal-promo-url').attr('href', 'http://fractionless.info');
		$('.internal-promo-img').attr('src', '/img/assets/fractionless-sidebar.png');
		$('.internal-promo-img').attr('alt', 'Fraction.less: The front-end web framework you don\t have to fight against');
	}
	if (randomPromo === 'd') {
		$('.internal-promo-url').attr('href', 'http://moonweather.me');
		$('.internal-promo-img').attr('src', '/img/assets/moonweather-ios-sidebar.png');
		$('.internal-promo-img').attr('alt', 'MoonWeather: Moon phase tracker and weather forecast app');
	}
	if (randomPromo === 'e') {
		$('.internal-promo-url').attr('href', 'http://moonweather.me');
		$('.internal-promo-img').attr('src', '/img/assets/moonweather-sidebar1.png');
		$('.internal-promo-img').attr('alt', 'MoonWeather: Moon phase tracker and weather forecast app');
	}
	if (randomPromo === 'f') {
		$('.internal-promo-url').attr('href', 'http://moonweather.me');
		$('.internal-promo-img').attr('src', '/img/assets/moonweather-sidebar2.png');
		$('.internal-promo-img').attr('alt', 'MoonWeather: Moon phase tracker and weather forecast app');
	}
	if (randomPromo === 'g') {
		$('.internal-promo-url').attr('href', 'http://moonweather.me');
		$('.internal-promo-img').attr('src', '/img/assets/moonweather-sidebar3.png');
		$('.internal-promo-img').attr('alt', 'MoonWeather: Moon phase tracker and weather forecast app');
	}
});