

class EventBusClass {
	constructor() {
		this.handlers = {};
	}
	register(event, handler) {
		this.handlers[event] = handler;
	}
	trigger(event) {
		if( event in this.handlers ) {
			this.handlers[event]();
		}
		else {
			console.log("handler not found for: "+event);
		}
	}
}

export let EventBus = new EventBusClass();
