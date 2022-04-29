/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ejs/EventElement.ejs":
/*!**********************************!*\
  !*** ./src/ejs/EventElement.ejs ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div style="padding-left: 10px;">\r\n  ';
 for(var i=0; i<data.timeline.weeks.length; i++) {;
__p += '\r\n    ';
 for(var l=0; l<data.timeline.weeks[i].days.length; l++) {;
__p += '\r\n      <h5>\r\n        ';
 if(data.timeline.weeks[i].days[l].events.length> 0) { ;
__p += '\r\n          ' +
((__t = ( data.timeline.weeks[i].days[l].viewdaylinktitle?.replace('events','') )) == null ? '' : __t) +
'\r\n            ';
 } ;
__p += '\r\n      </h5>\r\n      ';
 for(var o=0; o<data.timeline.weeks[i].days[l].events.length; o++) {;
__p += '\r\n        <div class=" eventElement mt-2">\r\n          <div style=" display: flex; gap: 1rem">\r\n            <div class="eventIcon">\r\n              <img src="https://courses.nu.edu.eg/theme/image.php/adaptable/assign/1628408864/icon" width="25"\r\n                height="25" style="max-width: fit-content;" />\r\n            </div>\r\n            <div class="eventDetails text-truncate">\r\n              <h5 class="text-truncate" style="margin: 0;"> <a href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'"\r\n                  style="color: #4a4a4a;">\r\n                  <span class="text-truncate">\r\n                    ' +
((__t = ( data.timeline.weeks[i].days[l].events[o].popupname)) == null ? '' : __t) +
'\r\n                  </span>\r\n                </a></h5>\r\n              <q style="margin-bottom: 0.42rem; display: block;" class="text-muted muted text-truncate">\r\n                ' +
((__t = (data.timeline.weeks[i].days[l].events[o].name )) == null ? '' : __t) +
'\r\n              </q>\r\n              <a class="d-block" href="' +
((__t = ( data.timeline.weeks[i].days[l].events[o].url)) == null ? '' : __t) +
'"\r\n                style="padding-left: -.4rem;"> Go to event</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        ';
} ;
__p += '\r\n          ';
} ;
__p += '\r\n            ';
} ;
__p += '\r\n              </p>\r\n</div>';
return __p
}

/***/ }),

/***/ "./src/ejs/Timeline.ejs":
/*!******************************!*\
  !*** ./src/ejs/Timeline.ejs ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
var __t, __p = '';
__p += '<div id="timeline" class="block_html block mb-3" style="position: relative;">\r\n  <div class="header">\r\n    <div class="title">\r\n      <h2 class="d-inline" style="display: flex; align-items: center;">\r\n        <svg alt="logo" width="100" style="display: inline; margin-top: 0.3rem;" xmlns="http://www.w3.org/2000/svg"\r\n          id="Layer_1" data-name="Layer 1" viewBox="0 0 890.04 189.77">\r\n          <defs>\r\n            <style>\r\n              .cls-1 {\r\n                fill: #184c7f;\r\n              }\r\n\r\n              .cls-2 {\r\n                fill: #71bfff;\r\n              }\r\n\r\n              .cls-3 {\r\n                fill: #3198ff;\r\n              }\r\n            </style>\r\n          </defs>\r\n          <path class="cls-1"\r\n            d="M78.08,19.62q36.19,0,55.47,20.09t19.27,57q0,36.92-19.27,57T78.08,173.78H12.68V19.62Zm-4,123.8q19.62,0,28.61-11.8t9-34.92q0-23.13-9-34.92T74.11,50H52.85v93.43Z" />\r\n          <path class="cls-1"\r\n            d="M234.57,176.12q-19.4,0-33.52-7.24a51.69,51.69,0,0,1-21.84-20.79q-7.71-13.54-7.71-32.7t7.71-32.7A52,52,0,0,1,200.82,61.9q13.89-7.24,31.88-7.24,18.45,0,31.42,7.12A48.36,48.36,0,0,1,283.85,81.4q6.78,12.5,6.77,28.61c0,2.81-.07,5.61-.23,8.41a67.57,67.57,0,0,1-.7,7H197.2V104.18h75l-18.92,7.24q0-14-5-21.49T232.7,82.45A22.37,22.37,0,0,0,220,86q-5.25,3.5-7.94,11t-2.69,19.16q0,11.44,3,18.57T221,144.93a27.16,27.16,0,0,0,13.55,3.16c5.91,0,10.63-1.17,14.13-3.51a21,21,0,0,0,7.83-9.81l31.76,10.51A36.92,36.92,0,0,1,277,162.22a54.16,54.16,0,0,1-19.15,10.39A76.64,76.64,0,0,1,234.57,176.12Z" />\r\n          <path class="cls-1"\r\n            d="M355.79,176.12q-14.48,0-25.34-7.13t-16.82-20.67q-6-13.55-5.95-32.47,0-19.62,6.19-33.16T331.15,61.9a45.72,45.72,0,0,1,25.58-7.24q15.87,0,25.57,9.69T394.8,89l-3.74,4.91V7.48h39.71v166.3h-35.5l-2.57-39.71,4.67,3.51a46.35,46.35,0,0,1-7.12,20.32,40.54,40.54,0,0,1-14.49,13.43A41,41,0,0,1,355.79,176.12Zm13.78-29.2a18.61,18.61,0,0,0,11.57-3.62q4.78-3.62,7.35-10.86a53.56,53.56,0,0,0,2.57-17.75A50,50,0,0,0,388.61,98a22.06,22.06,0,0,0-7.24-10.51,18.64,18.64,0,0,0-11.56-3.62q-10.29,0-16.24,7.59t-5.95,24q0,16.35,5.84,23.94T369.57,146.92Z" />\r\n          <path class="cls-1"\r\n            d="M707.07,176.12q-19.4,0-33.52-7.24a51.69,51.69,0,0,1-21.84-20.79Q644,134.55,644,115.39t7.71-32.7A52,52,0,0,1,673.32,61.9q13.89-7.24,31.88-7.24,18.45,0,31.41,7.12A48.39,48.39,0,0,1,756.35,81.4q6.76,12.5,6.77,28.61c0,2.81-.07,5.61-.23,8.41a67.57,67.57,0,0,1-.7,7H669.7V104.18h75l-18.92,7.24q0-14-5-21.49T705.2,82.45A22.37,22.37,0,0,0,692.47,86q-5.26,3.5-7.94,11t-2.69,19.16q0,11.44,3,18.57t8.64,10.27a27.16,27.16,0,0,0,13.55,3.16q8.86,0,14.13-3.51a20.87,20.87,0,0,0,7.82-9.81l31.77,10.51a36.92,36.92,0,0,1-11.33,16.94,54.16,54.16,0,0,1-19.15,10.39A76.64,76.64,0,0,1,707.07,176.12Z" />\r\n          <path class="cls-1"\r\n            d="M867.53,57V85.26h-94.6V57Zm-34.8-37.14V132.2q0,8.42,4.09,12t11.33,3.62a32.42,32.42,0,0,0,9.69-1.28,22.84,22.84,0,0,0,7.36-3.86l4.2,24.53a44.21,44.21,0,0,1-14.71,6.54,71.24,71.24,0,0,1-18.22,2.34q-13.32,0-23-3.74a30.09,30.09,0,0,1-15-11.91q-5.25-8.17-5.49-21.73V30.83Z" />\r\n          <path class="cls-1"\r\n            d="M536.6,82.94,465.94,9.16a5.1,5.1,0,0,0-8.78,3.53V166.61a5.1,5.1,0,0,0,8.78,3.52L536.6,96.35A9.69,9.69,0,0,0,536.6,82.94Z" />\r\n          <path class="cls-1"\r\n            d="M536.76,96.35l70.65,73.78a5.1,5.1,0,0,0,8.78-3.52V12.69a5.1,5.1,0,0,0-8.78-3.53L536.76,82.94A9.69,9.69,0,0,0,536.76,96.35Z" />\r\n          <path class="cls-2"\r\n            d="M551.55,92.12l46.13,48.16a4.15,4.15,0,0,0,7.14-2.86V41.88A4.15,4.15,0,0,0,597.68,39L551.55,87.18A3.58,3.58,0,0,0,551.55,92.12Z" />\r\n          <path class="cls-3"\r\n            d="M521.76,87,476.3,39.52a4.42,4.42,0,0,0-7.62,3.06v94.14a4.42,4.42,0,0,0,7.62,3.06l45.46-47.47A3.83,3.83,0,0,0,521.76,87Z" />\r\n        </svg>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class="content" id="dedmet" style="position: relative; margin-top: 1.3rem; padding: 0 !important;">\r\n    <span class="overlay-icon-container" id="timeline-spinner" data-region="overlay-icon-container">\r\n      <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading"\r\n          aria-label="Loading"></i></span>\r\n    </span>\r\n  </div>\r\n\r\n</div>';
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
/* harmony import */ var _ejs_Timeline_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ejs/Timeline.ejs */ "./src/ejs/Timeline.ejs");
/* harmony import */ var _ejs_EventElement_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ejs/EventElement.ejs */ "./src/ejs/EventElement.ejs");
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
    var _a;
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
    (_a = document.getElementById("timeline-spinner")) === null || _a === void 0 ? void 0 : _a.remove();
    container
        ? (container.innerHTML += (0,_ejs_EventElement_ejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
            timeline: filteredTimeline,
        }))
        : "";
};
var initTimeline = function (invalid) {
    var _a, _b;
    // * Adding the container in case no aside elements exists
    if (!document.querySelector("aside#block-region-side-post")) {
        var aside = document.createElement("aside");
        aside.setAttribute("id", "block-region-side-post");
        aside.setAttribute("class", "col-3 d-print-none block-region");
        (_a = document.querySelector("#region-main")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", "col-9");
        (_b = document.querySelector("#page-content")) === null || _b === void 0 ? void 0 : _b.appendChild(aside);
    }
    // * Fetching the element before which the timeline will be added
    var container = document.querySelector("aside#block-region-side-post");
    console.log("container", container);
    var calendar = document.querySelector("section.block_calendar_month");
    var timelineElement = document.createElement("div");
    timelineElement.innerHTML = (0,_ejs_Timeline_ejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    container === null || container === void 0 ? void 0 : container.insertBefore(timelineElement, calendar
        ? calendar
        : document.querySelector("aside#block-region-side-post a:first-child"));
    if (invalid) {
        document.getElementById("dedmet").innerHTML =
            "Invalid or expired License Key";
    }
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

chrome.runtime.sendMessage({ msg: window.location.pathname }, function (res) {
    return true;
});
chrome.runtime.onMessage.addListener(function (msg, s, send) {
    if (msg.type == "sesskey") {
        var cookie = document.cookie.split("=")[1];
        console.log("Session ID: ".concat(msg.key, " & Cookie : ").concat(cookie));
        send({ cookie: cookie });
        setTimeout(function () {
            (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__.initTimeline)();
        }, 300);
    }
    else if (msg.type == "invalidLicense") {
        console.log("invalidLicense");
        setTimeout(function () {
            (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__.initTimeline)(true);
        }, 300);
    }
    else {
        var res_1 = msg.timeline;
        res_1.forEach(function (month) {
            console.log(res_1);
            if (!month.error) {
                var timeline = month.data;
                (0,_visualPaint__WEBPACK_IMPORTED_MODULE_0__.visualPaint)(timeline);
            }
            else {
                console.log("Fetching Error Occured");
            }
        });
    }
    return true;
});

})();

/******/ })()
;