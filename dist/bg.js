/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/timelineFetchOptions.ts":
/*!*************************************!*\
  !*** ./src/timelineFetchOptions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (cookie) {
    var date = new Date();
    return {
        headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/json",
            Cookie: "MoodleSession=".concat(cookie),
            Connection: "keep-alive",
        },
        referrer: "https://courses.nu.edu.eg/my/index.php",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "[{\"index\":0,\"methodname\":\"core_calendar_get_calendar_monthly_view\",\"args\":{\"year\":".concat(date.getFullYear(), ",\"month\":").concat(date.getMonth() + 1, ",\"courseid\":1,\"categoryid\":0,\"includenavigation\":true,\"mini\":true}}]"),
        method: "POST",
        mode: "cors",
        credentials: "include",
    };
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
/*!*******************!*\
  !*** ./src/bg.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timelineFetchOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timelineFetchOptions */ "./src/timelineFetchOptions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Listener For Http Requests
var listener = function (_a) {
    var url = _a.url;
    if (url.includes("core_calendar_get_calendar_monthly_view")) {
        // Getting Session Key
        var sessKey_1 = url.split("=")[1].split("&")[0];
        setTimeout(function () {
            // Fetching the current chrome tab
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                // Sending a message to that tab
                chrome.tabs.sendMessage(tabs[0].id, {
                    key: sessKey_1,
                    type: "sesskey",
                }, function (res) {
                    console.log(res);
                    fetchTimelineData(sessKey_1, res.cookie);
                });
            });
        }, 200);
    }
};
var fetchTimelineData = function (sesskey, cookie) { return __awaiter(void 0, void 0, void 0, function () {
    var json, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chrome.webRequest.onBeforeRequest.removeListener(listener);
                return [4 /*yield*/, fetch("https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=".concat(sesskey, "&info=core_calendar_get_calendar_monthly_view"), (0,_timelineFetchOptions__WEBPACK_IMPORTED_MODULE_0__["default"])(cookie))];
            case 1:
                json = _a.sent();
                return [4 /*yield*/, json.json()];
            case 2:
                res = _a.sent();
                console.log(res);
                setTimeout(function () {
                    chrome.webRequest.onBeforeRequest.addListener(listener, {
                        urls: ["<all_urls>"],
                    });
                }, 200);
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        timeline: res,
                        type: "timeline",
                    });
                });
                return [2 /*return*/];
        }
    });
}); };
chrome.webRequest.onBeforeRequest.addListener(listener, {
    urls: ["<all_urls>"],
});

})();

/******/ })()
;