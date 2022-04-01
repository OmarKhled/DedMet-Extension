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
__p += '<div style="padding-left: 10px;">\n  ';
 for(var i=0; i<data.timeline.weeks.length; i++) {;
__p += '\n    ';
 for(var l=0; l<data.timeline.weeks[i].days.length; l++) {;
__p += '\n      <h5>\n        ';
 if(data.timeline.weeks[i].days[l].events.length> 0) { ;
__p += '\n          ' +
((__t = ( data.timeline.weeks[i].days[l].viewdaylinktitle?.replace('events','') )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n      </h5>\n      ';
 for(var o=0; o<data.timeline.weeks[i].days[l].events.length; o++) {;
__p += '\n        <div class=" eventElement mt-2">\n          <div style=" display: flex; gap: 1rem">\n            <div class="eventIcon">\n              <img src="https://courses.nu.edu.eg/theme/image.php/adaptable/assign/1628408864/icon" width="25"\n                height="25" style="max-width: fit-content;" />\n            </div>\n            <div class="eventDetails text-truncate">\n              <h5 class="text-truncate" style="margin: 0;"> <a href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'"\n                  style="color: #4a4a4a;">\n                  <span class="text-truncate">\n                    ' +
((__t = ( data.timeline.weeks[i].days[l].events[o].popupname)) == null ? '' : __t) +
'\n                  </span>\n                </a></h5>\n              <q style="margin-bottom: 0.42rem; display: block;" class="text-muted muted text-truncate">\n                ' +
((__t = (data.timeline.weeks[i].days[l].events[o].name )) == null ? '' : __t) +
'\n              </q>\n              <a class="d-block" href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'"\n                style="padding-left: -.4rem;"> Go to event</a>\n\n            </div>\n          </div>\n        </div>\n        ';
} ;
__p += '\n          ';
} ;
__p += '\n            ';
} ;
__p += '\n              </p>\n</div>';
return __p
}

/***/ }),

/***/ "./src/html/Timeline.ejs":
/*!*******************************!*\
  !*** ./src/html/Timeline.ejs ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
var __t, __p = '';
__p += '<div id="timeline" class="block_html block mb-3" style="position: relative;">\n  <div class="header">\n    <div class="title">\n      <h2 class="d-inline">Timeline Widget</h2>\n    </div>\n  </div>\n  <div class="content" style="position: relative; margin-top: 1.3rem; padding: 0 !important;">\n    <span class="overlay-icon-container" data-region="overlay-icon-container">\n      <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading"\n          aria-label="Loading"></i></span>\n    </span>\n  </div>\n\n</div>';
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
/* harmony export */   "initTimeline": () => (/* binding */ initTimeline),
/* harmony export */   "visualPaint": () => (/* binding */ visualPaint)
/* harmony export */ });
/* harmony import */ var _html_Timeline_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/Timeline.ejs */ "./src/html/Timeline.ejs");
/* harmony import */ var _html_EventElement_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/EventElement.ejs */ "./src/html/EventElement.ejs");
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


var visualPaint = function (timeline) {
    // * Fetching the element before which the timeline will be added
    var container = document.querySelector("#timeline .content");
    // * The function that gets the html content of every event
    var httpGet = function (url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        while (xmlhttp.readyState !== 4) {
            if (xmlhttp.readyState === 4) {
                return xmlhttp.responseText;
            }
        }
        return xmlhttp.responseText;
    };
    // * Feltering the content of the timeline
    var filteredTimeline = __assign(__assign({}, timeline), { weeks: timeline.weeks.map(function (week) {
            return __assign(__assign({}, week), { days: week.days.map(function (day) {
                    return __assign(__assign({}, day), { events: day.events.filter(function (event) {
                            if (day.timestamp + 86400 >= Date.now() / 1000 &&
                                !["attendance", "open", "expectcompletionon"].includes(event.eventtype)) {
                                var eventHtmlRes = httpGet(event.url);
                                var matches = eventHtmlRes.match("completed|submitted|Submitted|Finished|Completed");
                                console.log(matches === null || matches === void 0 ? void 0 : matches.length, event.name);
                                if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                        }) });
                }) });
        }) });
    container
        ? (container.innerHTML = (0,_html_EventElement_ejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
            timeline: filteredTimeline,
        }))
        : "";
};
var initTimeline = function () {
    // * Fetching the element before which the timeline will be added
    var container = document.querySelector("aside#block-region-side-post");
    var calendar = document.querySelector("section.block_calendar_month");
    var timelineElement = document.createElement("div");
    timelineElement.innerHTML = (0,_html_Timeline_ejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    container === null || container === void 0 ? void 0 : container.insertBefore(timelineElement, calendar);
};


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
        (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__.initTimeline)();
    }
    else {
        var res = msg.timeline[0];
        console.log("1");
        console.log(res);
        console.log("2");
        if (!res.error) {
            var timeline = res.data;
            console.log("3");
            (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__.visualPaint)(timeline);
        }
        else {
            console.log("Fetching Error Occured");
        }
    }
    return Promise.resolve("Dummy response to keep the console quiet");
});

})();

/******/ })()
;