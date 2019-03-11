(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared"],{

/***/ "./shared/bus.js":
/*!***********************!*\
  !*** ./shared/bus.js ***!
  \***********************/
/*! exports provided: EventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBusClass =
/*#__PURE__*/
function () {
  function EventBusClass() {
    _classCallCheck(this, EventBusClass);

    this.handlers = {};
  }

  _createClass(EventBusClass, [{
    key: "register",
    value: function register(event, handler) {
      this.handlers[event] = handler;
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      if (event in this.handlers) {
        this.handlers[event]();
      } else {
        console.log("handler not found for: " + event);
      }
    }
  }]);

  return EventBusClass;
}();

var EventBus = new EventBusClass();

/***/ })

}]);
//# sourceMappingURL=shared.js.map