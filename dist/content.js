/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ (() => {

eval("chrome.runtime.onMessage.addListener((msg, sen, send) => {\n  if (msg.type == \"sesskey\") {\n    const cookie = document.cookie.split(\"=\")[1];\n    console.log(msg.url);\n    console.log(`Session ID: ${msg.url} & Cookie : ${cookie}`);\n    send({ cookie });\n  } else {\n    const timeline = msg.timeline;\n    console.log(timeline[0]);\n    timeline[0].data.weeks.forEach((week) => {\n      week.days.forEach((day) => {\n        day.events.forEach((event) => {\n          console.log(event.popupname, event.formattedtime);\n        });\n      });\n    });\n  }\n\n  return true;\n});\nconsole.log(document.cookie);\n\n\n//# sourceURL=webpack://dedmet/./src/content.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content.js"]();
/******/ 	
/******/ })()
;