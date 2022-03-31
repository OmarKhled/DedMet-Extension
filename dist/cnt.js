/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/html/EventElement.ejs":
/*!***********************************!*\
  !*** ./src/html/EventElement.ejs ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="timeline" class="block_html block mb-3">\n  <div class="header">\n    <div class="title">\n      <h2 class="d-inline">Timeline Widget</h2>\n    </div>\n  </div>\n  <div style="padding-left: 10px; margin-top: 1rem;">\n    ';
 for(var i=0; i<data.timeline.weeks.length; i++) {;
__p += '\n      ';
 for(var l=0; l<data.timeline.weeks[i].days.length; l++) {;
__p += '\n        <h5>\n          ';
 if(data.timeline.weeks[i].days[l].events.length> 0) { ;
__p += '\n            ' +
((__t = ( data.timeline.weeks[i].days[l].viewdaylinktitle?.replace('events','') )) == null ? '' : __t) +
'\n              ';
 } ;
__p += '\n        </h5>\n        ';
 for(var o=0; o<data.timeline.weeks[i].days[l].events.length; o++) {;
__p += '\n          <div class=" eventElement mt-2">\n            <div style=" display: flex; gap: 1rem">\n              <div class="eventIcon">\n                <img src="https://courses.nu.edu.eg/theme/image.php/adaptable/assign/1628408864/icon" width="25"\n                  height="25" style="max-width: fit-content;" />\n              </div>\n              <div class="eventDetails text-truncate">\n                <h5 class="text-truncate" style="margin: 0;"> <a\n                    href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'" style="color: #4a4a4a;">\n                    <span class="text-truncate">\n                      ' +
((__t = ( data.timeline.weeks[i].days[l].events[o].popupname)) == null ? '' : __t) +
'\n                    </span>\n                  </a></h5>\n                <q style="margin-bottom: 0.42rem; display: block;" class="text-muted muted">\n                  ' +
((__t = (data.timeline.weeks[i].days[l].events[o].eventtype.charAt(0).toUpperCase() +
                    data.timeline.weeks[i].days[l].events[o].eventtype.slice(1))) == null ? '' : __t) +
'\n                </q>\n                <a class="d-block" href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'"\n                  style="padding-left: -.4rem;"> Go to event</a>\n\n              </div>\n            </div>\n          </div>\n          ';
} ;
__p += '\n            ';
} ;
__p += '\n              ';
} ;
__p += '\n                </p>\n  </div>';
return __p
}

/***/ }),

/***/ "./src/visualPaint.ts":
/*!****************************!*\
  !*** ./src/visualPaint.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html_EventElement_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/EventElement.ejs */ "./src/html/EventElement.ejs");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (timeline) {
    // * Fetching the element before which the timeline will be added
    var container = document.querySelector("aside#block-region-side-post");
    var calendar = document.querySelector("section.block_calendar_month");
    // * Constructing the container of the timeline
    var filteredTimeline = __assign(__assign({}, timeline), { weeks: timeline.weeks.map(function (week) {
            return __assign(__assign({}, week), { days: week.days.map(function (day) {
                    return __assign(__assign({}, day), { events: day.events.filter(function (event) {
                            if (day.timestamp + 86400 >= Date.now() / 1000 &&
                                !["attendance", "open", "expectcompletionon"].includes(event.eventtype)) {
                                console.log(["attendance", "open", "expectcompletionon"].includes(event.eventtype), event.eventtype);
                                return true;
                            }
                        }) });
                }) });
        }) });
    console.log(filteredTimeline);
    var timelineElement = document.createElement("div");
    timelineElement.innerHTML = (0,_html_EventElement_ejs__WEBPACK_IMPORTED_MODULE_0__["default"])({ timeline: filteredTimeline });
    container === null || container === void 0 ? void 0 : container.insertBefore(timelineElement, calendar);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/cnt.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualPaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualPaint */ "./src/visualPaint.ts");

chrome.runtime.onMessage.addListener(function (msg, s, send) {
    if (msg.type == "sesskey") {
        var cookie = document.cookie.split("=")[1];
        console.log("Session ID: ".concat(msg.key, " & Cookie : ").concat(cookie));
        send({ cookie: cookie });
    }
    else {
        var res = msg.timeline[0];
        console.log(res);
        if (!res.error) {
            var timeline = res.data;
            (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__["default"])(timeline);
        }
        else {
            console.log("Fetching Error Occured");
        }
    }
});

})();

/******/ })()
;