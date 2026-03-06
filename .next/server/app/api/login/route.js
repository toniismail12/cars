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
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pusri_ts_TONI_CODEX_raja_mobil_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.ts */ \"(rsc)/./app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"/Users/pusri-ts/TONI/CODEX/raja-mobil/app/api/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pusri_ts_TONI_CODEX_raja_mobil_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnB1c3JpLXRzJTJGVE9OSSUyRkNPREVYJTJGcmFqYS1tb2JpbCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZwdXNyaS10cyUyRlRPTkklMkZDT0RFWCUyRnJhamEtbW9iaWwmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphLW1vYmlsLXByb3RvdHlwZS8/MTdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcHVzcmktdHMvVE9OSS9DT0RFWC9yYWphLW1vYmlsL2FwcC9hcGkvbG9naW4vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3B1c3JpLXRzL1RPTkkvQ09ERVgvcmFqYS1tb2JpbC9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/login/route.ts":
/*!********************************!*\
  !*** ./app/api/login/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function POST(req) {\n    const { email, password } = await req.json();\n    if (!email || !password) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Email dan password wajib diisi\"\n        }, {\n            status: 400\n        });\n    }\n    const valid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.validateCredentials)(email, password);\n    if (!valid) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Email atau password salah\"\n        }, {\n            status: 401\n        });\n    }\n    (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.setSession)(email);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNrQjtBQUV0RCxlQUFlRyxLQUFLQyxHQUFZO0lBQ3JDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBSSxNQUFNRixJQUFJRyxJQUFJO0lBSzNDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVO1FBQ3ZCLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFpQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN0RjtJQUVBLE1BQU1DLFFBQVEsTUFBTVIsOERBQW1CQSxDQUFDRyxPQUFPQztJQUMvQyxJQUFJLENBQUNJLE9BQU87UUFDVixPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDakY7SUFFQVIscURBQVVBLENBQUNJO0lBQ1gsT0FBT0wscURBQVlBLENBQUNPLElBQUksQ0FBQztRQUFFSSxTQUFTO0lBQUs7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphLW1vYmlsLXByb3RvdHlwZS8uL2FwcC9hcGkvbG9naW4vcm91dGUudHM/NjAxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHNldFNlc3Npb24sIHZhbGlkYXRlQ3JlZGVudGlhbHMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IChhd2FpdCByZXEuanNvbigpKSBhcyB7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG5cbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFbWFpbCBkYW4gcGFzc3dvcmQgd2FqaWIgZGlpc2lcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgY29uc3QgdmFsaWQgPSBhd2FpdCB2YWxpZGF0ZUNyZWRlbnRpYWxzKGVtYWlsLCBwYXNzd29yZCk7XG4gIGlmICghdmFsaWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFbWFpbCBhdGF1IHBhc3N3b3JkIHNhbGFoXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIHNldFNlc3Npb24oZW1haWwpO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNldFNlc3Npb24iLCJ2YWxpZGF0ZUNyZWRlbnRpYWxzIiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ2YWxpZCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSession: () => (/* binding */ clearSession),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   isAuthed: () => (/* binding */ isAuthed),\n/* harmony export */   setSession: () => (/* binding */ setSession),\n/* harmony export */   validateCredentials: () => (/* binding */ validateCredentials)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst COOKIE_NAME = \"admin_session\";\nconst SECRET = process.env.ADMIN_SECRET || \"dev_secret_change_me\";\nconst ADMIN_FILE = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"data\", \"admin.json\");\nfunction sign(data) {\n    return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac(\"sha256\", SECRET).update(data).digest(\"hex\");\n}\nfunction encode(session) {\n    const payload = Buffer.from(JSON.stringify(session)).toString(\"base64url\");\n    const signature = sign(payload);\n    return `${payload}.${signature}`;\n}\nfunction decode(token) {\n    const [payload, signature] = token.split(\".\");\n    if (!payload || !signature) return null;\n    const expected = sign(payload);\n    if (!crypto__WEBPACK_IMPORTED_MODULE_0___default().timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {\n        return null;\n    }\n    try {\n        return JSON.parse(Buffer.from(payload, \"base64url\").toString(\"utf-8\"));\n    } catch  {\n        return null;\n    }\n}\nasync function validateCredentials(email, password) {\n    const raw = await fs__WEBPACK_IMPORTED_MODULE_2__.promises.readFile(ADMIN_FILE, \"utf-8\");\n    const admin = JSON.parse(raw);\n    return admin.email === email && admin.password === password;\n}\nfunction setSession(email) {\n    const token = encode({\n        email,\n        issuedAt: Date.now()\n    });\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(COOKIE_NAME, token, {\n        httpOnly: true,\n        sameSite: \"lax\",\n        path: \"/\",\n        secure: false\n    });\n}\nfunction clearSession() {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(COOKIE_NAME, \"\", {\n        path: \"/\",\n        maxAge: 0\n    });\n}\nfunction getSession() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(COOKIE_NAME)?.value;\n    if (!token) return null;\n    return decode(token);\n}\nfunction isAuthed() {\n    return Boolean(getSession());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNIO0FBQ1o7QUFFeEIsTUFBTUssY0FBYztBQUNwQixNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksSUFBSTtBQUMzQyxNQUFNQyxhQUFhTixnREFBUyxDQUFDRyxRQUFRSyxHQUFHLElBQUksUUFBUTtBQU9wRCxTQUFTQyxLQUFLQyxJQUFZO0lBQ3hCLE9BQU9kLHdEQUFpQixDQUFDLFVBQVVNLFFBQVFVLE1BQU0sQ0FBQ0YsTUFBTUcsTUFBTSxDQUFDO0FBQ2pFO0FBRUEsU0FBU0MsT0FBT0MsT0FBcUI7SUFDbkMsTUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUNMLFVBQVVNLFFBQVEsQ0FBQztJQUM5RCxNQUFNQyxZQUFZYixLQUFLTztJQUN2QixPQUFPLENBQUMsRUFBRUEsUUFBUSxDQUFDLEVBQUVNLFVBQVUsQ0FBQztBQUNsQztBQUVBLFNBQVNDLE9BQU9DLEtBQWE7SUFDM0IsTUFBTSxDQUFDUixTQUFTTSxVQUFVLEdBQUdFLE1BQU1DLEtBQUssQ0FBQztJQUN6QyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sV0FBVyxPQUFPO0lBQ25DLE1BQU1JLFdBQVdqQixLQUFLTztJQUN0QixJQUFJLENBQUNwQiw2REFBc0IsQ0FBQ3FCLE9BQU9DLElBQUksQ0FBQ0ksWUFBWUwsT0FBT0MsSUFBSSxDQUFDUSxZQUFZO1FBQzFFLE9BQU87SUFDVDtJQUNBLElBQUk7UUFDRixPQUFPUCxLQUFLUyxLQUFLLENBQUNYLE9BQU9DLElBQUksQ0FBQ0YsU0FBUyxhQUFhSyxRQUFRLENBQUM7SUFDL0QsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlUSxvQkFBb0JDLEtBQWEsRUFBRUMsUUFBZ0I7SUFDdkUsTUFBTUMsTUFBTSxNQUFNakMsd0NBQUVBLENBQUNrQyxRQUFRLENBQUMzQixZQUFZO0lBQzFDLE1BQU00QixRQUFRZixLQUFLUyxLQUFLLENBQUNJO0lBQ3pCLE9BQU9FLE1BQU1KLEtBQUssS0FBS0EsU0FBU0ksTUFBTUgsUUFBUSxLQUFLQTtBQUNyRDtBQUVPLFNBQVNJLFdBQVdMLEtBQWE7SUFDdEMsTUFBTU4sUUFBUVYsT0FBTztRQUFFZ0I7UUFBT00sVUFBVUMsS0FBS0MsR0FBRztJQUFHO0lBQ25EekMscURBQU9BLEdBQUcwQyxHQUFHLENBQUN0QyxhQUFhdUIsT0FBTztRQUNoQ2dCLFVBQVU7UUFDVkMsVUFBVTtRQUNWekMsTUFBTTtRQUNOMEMsUUFBUTtJQUNWO0FBQ0Y7QUFFTyxTQUFTQztJQUNkOUMscURBQU9BLEdBQUcwQyxHQUFHLENBQUN0QyxhQUFhLElBQUk7UUFBRUQsTUFBTTtRQUFLNEMsUUFBUTtJQUFFO0FBQ3hEO0FBRU8sU0FBU0M7SUFDZCxNQUFNckIsUUFBUTNCLHFEQUFPQSxHQUFHaUQsR0FBRyxDQUFDN0MsY0FBYzhDO0lBQzFDLElBQUksQ0FBQ3ZCLE9BQU8sT0FBTztJQUNuQixPQUFPRCxPQUFPQztBQUNoQjtBQUVPLFNBQVN3QjtJQUNkLE9BQU9DLFFBQVFKO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFqYS1tb2JpbC1wcm90b3R5cGUvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBDT09LSUVfTkFNRSA9IFwiYWRtaW5fc2Vzc2lvblwiO1xuY29uc3QgU0VDUkVUID0gcHJvY2Vzcy5lbnYuQURNSU5fU0VDUkVUIHx8IFwiZGV2X3NlY3JldF9jaGFuZ2VfbWVcIjtcbmNvbnN0IEFETUlOX0ZJTEUgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiYWRtaW4uanNvblwiKTtcblxuZXhwb3J0IHR5cGUgQWRtaW5TZXNzaW9uID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBpc3N1ZWRBdDogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gc2lnbihkYXRhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIbWFjKFwic2hhMjU2XCIsIFNFQ1JFVCkudXBkYXRlKGRhdGEpLmRpZ2VzdChcImhleFwiKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlKHNlc3Npb246IEFkbWluU2Vzc2lvbikge1xuICBjb25zdCBwYXlsb2FkID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpLnRvU3RyaW5nKFwiYmFzZTY0dXJsXCIpO1xuICBjb25zdCBzaWduYXR1cmUgPSBzaWduKHBheWxvYWQpO1xuICByZXR1cm4gYCR7cGF5bG9hZH0uJHtzaWduYXR1cmV9YDtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHRva2VuOiBzdHJpbmcpOiBBZG1pblNlc3Npb24gfCBudWxsIHtcbiAgY29uc3QgW3BheWxvYWQsIHNpZ25hdHVyZV0gPSB0b2tlbi5zcGxpdChcIi5cIik7XG4gIGlmICghcGF5bG9hZCB8fCAhc2lnbmF0dXJlKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZXhwZWN0ZWQgPSBzaWduKHBheWxvYWQpO1xuICBpZiAoIWNyeXB0by50aW1pbmdTYWZlRXF1YWwoQnVmZmVyLmZyb20oc2lnbmF0dXJlKSwgQnVmZmVyLmZyb20oZXhwZWN0ZWQpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20ocGF5bG9hZCwgXCJiYXNlNjR1cmxcIikudG9TdHJpbmcoXCJ1dGYtOFwiKSkgYXMgQWRtaW5TZXNzaW9uO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVDcmVkZW50aWFscyhlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJhdyA9IGF3YWl0IGZzLnJlYWRGaWxlKEFETUlOX0ZJTEUsIFwidXRmLThcIik7XG4gIGNvbnN0IGFkbWluID0gSlNPTi5wYXJzZShyYXcpIGFzIHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9O1xuICByZXR1cm4gYWRtaW4uZW1haWwgPT09IGVtYWlsICYmIGFkbWluLnBhc3N3b3JkID09PSBwYXNzd29yZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb24oZW1haWw6IHN0cmluZykge1xuICBjb25zdCB0b2tlbiA9IGVuY29kZSh7IGVtYWlsLCBpc3N1ZWRBdDogRGF0ZS5ub3coKSB9KTtcbiAgY29va2llcygpLnNldChDT09LSUVfTkFNRSwgdG9rZW4sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBzZWN1cmU6IGZhbHNlXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZXNzaW9uKCkge1xuICBjb29raWVzKCkuc2V0KENPT0tJRV9OQU1FLCBcIlwiLCB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uKCk6IEFkbWluU2Vzc2lvbiB8IG51bGwge1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoQ09PS0lFX05BTUUpPy52YWx1ZTtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBkZWNvZGUodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBdXRoZWQoKSB7XG4gIHJldHVybiBCb29sZWFuKGdldFNlc3Npb24oKSk7XG59XG4iXSwibmFtZXMiOlsiY3J5cHRvIiwiY29va2llcyIsInByb21pc2VzIiwiZnMiLCJwYXRoIiwiQ09PS0lFX05BTUUiLCJTRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fU0VDUkVUIiwiQURNSU5fRklMRSIsImpvaW4iLCJjd2QiLCJzaWduIiwiZGF0YSIsImNyZWF0ZUhtYWMiLCJ1cGRhdGUiLCJkaWdlc3QiLCJlbmNvZGUiLCJzZXNzaW9uIiwicGF5bG9hZCIsIkJ1ZmZlciIsImZyb20iLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciLCJzaWduYXR1cmUiLCJkZWNvZGUiLCJ0b2tlbiIsInNwbGl0IiwiZXhwZWN0ZWQiLCJ0aW1pbmdTYWZlRXF1YWwiLCJwYXJzZSIsInZhbGlkYXRlQ3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwicmF3IiwicmVhZEZpbGUiLCJhZG1pbiIsInNldFNlc3Npb24iLCJpc3N1ZWRBdCIsIkRhdGUiLCJub3ciLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwic2VjdXJlIiwiY2xlYXJTZXNzaW9uIiwibWF4QWdlIiwiZ2V0U2Vzc2lvbiIsImdldCIsInZhbHVlIiwiaXNBdXRoZWQiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpusri-ts%2FTONI%2FCODEX%2Fraja-mobil&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();