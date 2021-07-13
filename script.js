const sliders = document.querySelectorAll('.slider');
const justifyButtons = document.querySelectorAll('.justify');
const colourChange = document.querySelector('.dot');
const html = document.querySelector('html');

function changeValue(e) {
	if (this.dataset.label === 'size') {
		document.documentElement.style.setProperty(`--font-size`, `${this.value}vw`);
	}

	if (this.dataset.label === 'tracking') {
		document.documentElement.style.setProperty(`--font-tracking`, `${this.value / 10}vw`);
	}

	if (this.dataset.label === 'left') {
		document.documentElement.style.setProperty(`--justify`, `left`);
	}

	if (this.dataset.label === 'center') {
		document.documentElement.style.setProperty(`--justify`, `center`);
	}

	if (this.dataset.label === 'right') {
		document.documentElement.style.setProperty(`--justify`, `right`);
	}
}

sliders.forEach((input) => input.addEventListener('change', changeValue));
sliders.forEach((input) => input.addEventListener('mousemove', changeValue));

justifyButtons.forEach((input) => input.addEventListener('click', changeValue));

colourChange.addEventListener('click', function(e) {
	// if (!document.documentElement.classList.contains('dark')) {
	// 	document.documentElement.classList.add('dark');
	// } else if (document.documentElement.classList.contains('dark')) {
	// 	document.documentElement.classList.remove('dark');
	// }

	document.documentElement.classList.toggle('dark');
});
