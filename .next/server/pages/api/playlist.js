"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/playlist";
exports.ids = ["pages/api/playlist"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "./lib/auth.ts?1f12":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"./lib/prisma.ts?90d7\");\n\n\nconst validateRoute = (handler)=>{\n    return async (req, res)=>{\n        const token = req.cookies.TRAX_ACCESS_TOKEN;\n        if (token) {\n            let user;\n            try {\n                const { id  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n                user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        id\n                    }\n                });\n                if (!user) {\n                    throw new Error('Not real user');\n                }\n            } catch (error) {\n                res.status(401);\n                res.json({\n                    error: 'Not Authorizied'\n                });\n                return;\n            }\n            return handler(req, res, user);\n        }\n        res.status(401);\n        res.json({\n            error: 'Not Authorizied'\n        });\n    };\n};\nconst validateToken = (token)=>{\n    const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cz8xZjEyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBRUQ7QUFFdEIsS0FBSyxDQUFDRSxhQUFhLElBQUlDLE9BQU8sR0FBSyxDQUFDO0lBQ3pDLE1BQU0sUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSyxDQUFDO1FBQzNELEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsaUJBQWlCO1FBRTNDLEVBQUUsRUFBRUYsS0FBSyxFQUFFLENBQUM7WUFDVixHQUFHLENBQUNHLElBQUk7WUFFUixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxFQUFFLEVBQUMsQ0FBQyxHQUFHViwwREFBVSxDQUFDTSxLQUFLLEVBQUUsQ0FBTztnQkFDeENHLElBQUksR0FBRyxLQUFLLENBQUNSLCtEQUFzQixDQUFDLENBQUM7b0JBQ25DWSxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0gsRUFBRTtvQkFBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsRUFBRSxHQUFHRCxJQUFJLEVBQUUsQ0FBQztvQkFDVixLQUFLLENBQUMsR0FBRyxDQUFDSyxLQUFLLENBQUMsQ0FBZTtnQkFDakMsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO2dCQUNmVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHO2dCQUNkWCxHQUFHLENBQUNZLElBQUksQ0FBQyxDQUFDO29CQUFDRixLQUFLLEVBQUUsQ0FBaUI7Z0JBQUMsQ0FBQztnQkFDckMsTUFBTTtZQUNSLENBQUM7WUFFRCxNQUFNLENBQUNaLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVJLElBQUk7UUFDL0IsQ0FBQztRQUVESixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHO1FBQ2RYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7WUFBQ0YsS0FBSyxFQUFFLENBQWlCO1FBQUMsQ0FBQztJQUN2QyxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQ0csYUFBYSxJQUFJWixLQUFLLEdBQUssQ0FBQztJQUN2QyxLQUFLLENBQUNHLElBQUksR0FBR1QsMERBQVUsQ0FBQ00sS0FBSyxFQUFFLENBQU87SUFDdEMsTUFBTSxDQUFDRyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuL3ByaXNtYSdcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUm91dGUgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5UUkFYX0FDQ0VTU19UT0tFTlxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBsZXQgdXNlclxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCAnaGVsbG8nKVxuICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCByZWFsIHVzZXInKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSlcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogJ05vdCBBdXRob3JpemllZCcgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCB1c2VyKVxuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoNDAxKVxuICAgIHJlcy5qc29uKHsgZXJyb3I6ICdOb3QgQXV0aG9yaXppZWQnIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgY29uc3QgdXNlciA9IGp3dC52ZXJpZnkodG9rZW4sICdoZWxsbycpXG4gIHJldHVybiB1c2VyXG59Il0sIm5hbWVzIjpbImp3dCIsInByaXNtYSIsInZhbGlkYXRlUm91dGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJjb29raWVzIiwiVFJBWF9BQ0NFU1NfVE9LRU4iLCJ1c2VyIiwiaWQiLCJ2ZXJpZnkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJFcnJvciIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.ts?1f12\n");

/***/ }),

/***/ "./lib/prisma.ts?90d7":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// export default new PrismaClient()\n//https://flaviocopes.com/nextjs-fix-prismaclient-unable-run-browser/\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzPzkwZDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLEVBQW9DO0FBR3BDLEVBQXFFO0FBQ3JFLEdBQUcsQ0FBQ0MsTUFBTTtBQUVWLEVBQUUsRUFSRixLQVF5QyxFQUFFLEVBRTFDLE1BQU0sQ0FBQztJQUNOLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxNQUFNLEVBQUUsQ0FBQztRQUNuQkMsTUFBTSxDQUFDRCxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtJQUNsQyxDQUFDO0lBQ0RDLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNO0FBQ3hCLENBQUM7QUFFRCxpRUFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgUHJpc21hQ2xpZW50KClcblxuXG4vL2h0dHBzOi8vZmxhdmlvY29wZXMuY29tL25leHRqcy1maXgtcHJpc21hY2xpZW50LXVuYWJsZS1ydW4tYnJvd3Nlci9cbmxldCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts?90d7\n");

/***/ }),

/***/ "./pages/api/playlist.ts":
/*!*******************************!*\
  !*** ./pages/api/playlist.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts?90d7\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.ts?1f12\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.validateRoute)(async (req, res, user)=>{\n    const playlists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playlist.findMany({\n        where: {\n            userId: user.id\n        },\n        orderBy: {\n            name: 'asc'\n        }\n    });\n    res.json(playlists);\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGxheWxpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBQ1M7QUFFOUMsaUVBQWVDLHdEQUFhLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN0RCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNMLHFFQUF3QixDQUFDLENBQUM7UUFDaERRLEtBQUssRUFBRSxDQUFDO1lBQ05DLE1BQU0sRUFBRUwsSUFBSSxDQUFDTSxFQUFFO1FBQ2pCLENBQUM7UUFDREMsT0FBTyxFQUFFLENBQUM7WUFDUkMsSUFBSSxFQUFFLENBQUs7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVEVCxHQUFHLENBQUNVLElBQUksQ0FBQ1IsU0FBUztBQUNwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3BhZ2VzL2FwaS9wbGF5bGlzdC50cz8xODhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcbmltcG9ydCB7IHZhbGlkYXRlUm91dGUgfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVSb3V0ZShhc3luYyAocmVxLCByZXMsIHVzZXIpID0+IHtcbiAgY29uc3QgcGxheWxpc3RzID0gYXdhaXQgcHJpc21hLnBsYXlsaXN0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgbmFtZTogJ2FzYycsXG4gICAgfSxcbiAgfSlcblxuICByZXMuanNvbihwbGF5bGlzdHMpXG59KSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJ2YWxpZGF0ZVJvdXRlIiwicmVxIiwicmVzIiwidXNlciIsInBsYXlsaXN0cyIsInBsYXlsaXN0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwib3JkZXJCeSIsIm5hbWUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/playlist.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/playlist.ts"));
module.exports = __webpack_exports__;

})();