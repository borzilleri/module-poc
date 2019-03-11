import {EventBus} from './shared/bus';

window.addEventListener("load", () => {

	EventBus.register("myEvent", function() {
		alert("handling my event");
	})
	
	var btn = document.querySelector('button.button-a');
	btn.addEventListener('click', function () {
		EventBus.trigger("myEvent");
	});
});
