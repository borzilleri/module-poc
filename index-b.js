import {EventBus} from './shared/bus';

window.addEventListener("load", () => {
	var btn = document.querySelector('button.button-b');
	btn.addEventListener('click', function () {
		EventBus.trigger("myEvent");
	});
});
