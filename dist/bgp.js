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

/***/ "./src/bgp.js":
/*!********************!*\
  !*** ./src/bgp.js ***!
  \********************/
/***/ (() => {

eval("const listener = (details) => {\n  if (details.url.includes(\"core_calendar_get_calendar_monthly_view\")) {\n    const sesskey = details.url.split(\"=\")[1].split(\"&\")[0];\n    console.log(details.url);\n    setTimeout(() => {\n      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\n        chrome.tabs.sendMessage(\n          tabs[0].id,\n          {\n            url: sesskey,\n            type: \"sesskey\",\n          },\n          (res) => {\n            console.log(res);\n            fetchTimeLine(sesskey, res.cookie);\n          }\n        );\n      });\n    }, 200);\n  }\n};\n\nconst fetchTimeLine = (sesskey, cookie) => {\n  chrome.webRequest.onBeforeRequest.removeListener(listener);\n  fetch(\n    `https://courses.nu.edu.eg/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,\n    {\n      headers: {\n        accept: \"application/json, text/javascript, */*; q=0.01\",\n        \"content-type\": \"application/json\",\n        Cookie: `MoodleSession=${cookie}`,\n        Connection: \"keep-alive\",\n      },\n      referrer: \"https://courses.nu.edu.eg/my/index.php\",\n      referrerPolicy: \"strict-origin-when-cross-origin\",\n      body: '[{\"index\":0,\"methodname\":\"core_calendar_get_calendar_monthly_view\",\"args\":{\"year\":2022,\"month\":3,\"courseid\":1,\"categoryid\":0,\"includenavigation\":true,\"mini\":true}}]',\n      method: \"POST\",\n      mode: \"cors\",\n      credentials: \"include\",\n    }\n  ).then((response) => {\n    response\n      .json()\n      .then((res) => {\n        console.log(res);\n        setTimeout(() => {\n          chrome.webRequest.onBeforeRequest.addListener(listener, {\n            urls: [\"<all_urls>\"],\n          });\n        }, 200);\n        chrome.tabs.query(\n          { active: true, currentWindow: true },\n          function (tabs) {\n            chrome.tabs.sendMessage(tabs[0].id, {\n              timeline: res,\n              type: \"res\",\n            });\n          }\n        );\n      })\n      .catch((error) => console.log(\"Error:\", error));\n  });\n};\n\nchrome.webRequest.onBeforeRequest.addListener(listener, {\n  urls: [\"<all_urls>\"],\n});\n\n\n//# sourceURL=webpack://dedmet/./src/bgp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/bgp.js"]();
/******/ 	
/******/ })()
;