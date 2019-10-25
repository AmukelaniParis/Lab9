(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/actor2movie/actor2movie.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actor2movie/actor2movie.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n        \n        <label for=\"actor\">Select Actor</label>\n      \n        <select id=\"actor\" class=\"form-control\" [(ngModel)]=\"actorId\">\n          <option *ngFor=\"let item of actorsDB\" value = '{{item._id}}'>{{item.name}}</option>\n        </select>\n    \n        <label for=\"movie\">Select Movie</label>\n        <select id=\"movie\" class=\"form-control\" [(ngModel)]=\"movieId\">\n          <option *ngFor=\"let item of moviesDB\" value='{{item._id}}'>{{item.title}} </option>\n        </select>\n  \n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-dark\" (click)=\"onAddMovie()\">Add Actor </button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addactor/addactor.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addactor/addactor.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"form-group\">\n      <label for=\"actorName\">Full Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"actorName\">Birth Year</label>\n      <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-dark\" (click)=\"onSaveActor()\">Save Actor</button>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addmovie/addmovie.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmovie/addmovie.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n        <label for=\"movieTitle\">Movie Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"movieTitle\" [(ngModel)]=\"mTitle\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"movieTitle\">Year of Release</label>\n        <input type=\"number\" class=\"form-control\" id=\"movieYear\" [(ngModel)]=\"mYear\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-dark\" (click)=\"onSaveMovie()\">Save Movie</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-light\">\n    <ul class=\"navbar-nav\">\n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/listactors\" routerLinkActive=\"active\">List Actors</a>\n    </li>\n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/addactor\" routerLinkActive=\"active\">Add Actor</a>\n    </li>\n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/updateactor\" routerLinkActive=\"active\">Update Actors </a>\n      </li>\n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/deleteactor\" routerLinkActive=\"active\">Delete Actors</a>\n    </li> \n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/addmovie\" routerLinkActive=\"active\">Add Movie</a>\n    </li>\n    \n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/deletemovie\" routerLinkActive=\"active\">Delete Movie</a>\n    </li> \n    \n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/listmovies\" routerLinkActive=\"active\">List Movies</a>\n    </li> \n\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n    <a class=\"nav-link\" routerLink=\"/actortomovie\" routerLinkActive=\"active\">Add Actor to Movie</a>\n    </li> \n\n</ul>\n\n</nav>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deleteactor/deleteactor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deleteactor/deleteactor.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <table class=\"table table-dark\">\n      <tr>\n        <th>Name</th>\n        <th>Birth Year</th>\n        <th>Delete?</th>\n      </tr>\n      <tr *ngFor=\"let item of actorsDB\">\n        <td>{{item.name}}</td>\n        <td>{{item.bYear}}</td>\n        <td><button type=\"submit\" class=\"btn btn-light\" (click)=\"onDeleteActor(item)\">Delete</button></td>\n      </tr>\n    </table>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deletemovie/deletemovie.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deletemovie/deletemovie.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-dark\">\n        <tr>\n          <th>Title</th>\n          <th>Year of Release</th>\n          <th>Delete?</th>\n        </tr>\n        <tr *ngFor=\"let item of moviesDB\">\n          <td>{{item.title}}</td>\n          <td>{{item.year}}</td>\n          <td><button type=\"submit\" class=\"btn btn-light\" (click)=\"onDeleteMovie(item)\">Delete</button></td>\n        </tr>\n      </table>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listactors/listactors.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listactors/listactors.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <table class=\"table table-dark\">\n        <thead class=\"thead-dark\">\n      <tr>\n        <th>Name</th>\n        <th>Birth Year</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of actorsDB\">\n        <td>{{item.name}}</td>\n        <td>{{item.bYear}}</td>\n      </tr>\n    </tbody>\n    </table>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listmovies/listmovies.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listmovies/listmovies.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-dark\">\n        <tr>\n          <th>Movie Title</th>\n          <th>Year</th>\n          <th>Actors</th>\n        </tr>\n        <tr *ngFor=\"let item of moviesDB\">\n          <td>{{item.title}}</td>\n          <td>{{item.year}}</td>\n          <td>\n            <ul>\n              <li *ngFor=\"let actor of item.actors\">{{actor.name}}</li>\n            </ul></td>\n        </tr>\n      </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/updateactor/updateactor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateactor/updateactor.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <table class=\"table table-dark\">\n      <tr>\n        <th>Name</th>\n        <th>Birth Year</th>\n        <th>Select!</th>\n      </tr>\n      <tr *ngFor=\"let item of actorsDB\">\n        <td>{{item.name}}</td>\n        <td>{{item.bYear}}</td>\n        <td><button type=\"submit\" class=\"btn btn-light\" (click)=\"onSelectUpdate(item)\">Update</button></td>\n      </tr>\n    </table>\n    <hr>\n    <div *ngIf=\"actorsDB.length>0\">\n      <div class=\"form-group\">\n        <label for=\"actorName\">Full Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"actorName\">Birth Year</label>\n        <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-dark\" (click)=\"onUpdateActor()\">Update Actor</button>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewnotfound/viewnotfound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewnotfound/viewnotfound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>VIEW NOT FOUND</h1>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/actor2movie/actor2movie.component.css":
/*!*******************************************************!*\
  !*** ./src/app/actor2movie/actor2movie.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdG9yMm1vdmllL2FjdG9yMm1vdmllLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/actor2movie/actor2movie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/actor2movie/actor2movie.component.ts ***!
  \******************************************************/
/*! exports provided: Actor2movieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor2movieComponent", function() { return Actor2movieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Actor2movieComponent = class Actor2movieComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.moviesDB = [];
        this.actorId = '';
        this.movieId = '';
        this.actorsDB = [];
    }
    onGetMovies() {
        this.dbService.getMovies().subscribe((data) => {
            this.moviesDB = data;
        });
    }
    onGetActors() {
        this.dbService.getActors().subscribe((data) => {
            this.actorsDB = data;
        });
    }
    ngOnInit() {
        this.onGetMovies();
        this.onGetActors();
    }
    onAddMovie() {
        const obj = { _id: this.movieId, actors: this.actorId };
        this.dbService.addMovie(obj).subscribe(result => {
            this.router.navigate(['/listmovies']);
        });
    }
};
Actor2movieComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Actor2movieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actor2movie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actor2movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/actor2movie/actor2movie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actor2movie.component.css */ "./src/app/actor2movie/actor2movie.component.css")).default]
    })
], Actor2movieComponent);



/***/ }),

/***/ "./src/app/addactor/addactor.component.css":
/*!*************************************************!*\
  !*** ./src/app/addactor/addactor.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGFjdG9yL2FkZGFjdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/addactor/addactor.component.ts":
/*!************************************************!*\
  !*** ./src/app/addactor/addactor.component.ts ***!
  \************************************************/
/*! exports provided: AddactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddactorComponent", function() { return AddactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddactorComponent = class AddactorComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.fullName = '';
        this.bYear = 0;
        this.actorId = '';
    }
    onSaveActor() {
        const obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.createActor(obj).subscribe(result => {
            this.router.navigate(['/listactors']);
        });
    }
};
AddactorComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addactor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addactor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addactor/addactor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addactor.component.css */ "./src/app/addactor/addactor.component.css")).default]
    })
], AddactorComponent);



/***/ }),

/***/ "./src/app/addmovie/addmovie.component.css":
/*!*************************************************!*\
  !*** ./src/app/addmovie/addmovie.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG1vdmllL2FkZG1vdmllLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/addmovie/addmovie.component.ts":
/*!************************************************!*\
  !*** ./src/app/addmovie/addmovie.component.ts ***!
  \************************************************/
/*! exports provided: AddmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmovieComponent", function() { return AddmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddmovieComponent = class AddmovieComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.mTitle = '';
        this.mYear = 0;
        this.movieId = '';
    }
    onSaveMovie() {
        const obj = { title: this.mTitle, year: this.mYear };
        this.dbService.createMovie(obj).subscribe(result => {
        });
    }
};
AddmovieComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addmovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addmovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addmovie/addmovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addmovie.component.css */ "./src/app/addmovie/addmovie.component.css")).default]
    })
], AddmovieComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'movieAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listactors/listactors.component */ "./src/app/listactors/listactors.component.ts");
/* harmony import */ var _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addactor/addactor.component */ "./src/app/addactor/addactor.component.ts");
/* harmony import */ var _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deleteactor/deleteactor.component */ "./src/app/deleteactor/deleteactor.component.ts");
/* harmony import */ var _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateactor/updateactor.component */ "./src/app/updateactor/updateactor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addmovie/addmovie.component */ "./src/app/addmovie/addmovie.component.ts");
/* harmony import */ var _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./listmovies/listmovies.component */ "./src/app/listmovies/listmovies.component.ts");
/* harmony import */ var _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deletemovie/deletemovie.component */ "./src/app/deletemovie/deletemovie.component.ts");
/* harmony import */ var _actor2movie_actor2movie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actor2movie/actor2movie.component */ "./src/app/actor2movie/actor2movie.component.ts");
/* harmony import */ var _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewnotfound/viewnotfound.component */ "./src/app/viewnotfound/viewnotfound.component.ts");

















const appRoutes = [
    { path: 'listactors', component: _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_7__["ListactorsComponent"] },
    { path: 'addactor', component: _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__["AddactorComponent"] },
    { path: 'updateactor', component: _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_10__["UpdateactorComponent"] },
    { path: 'deleteactor', component: _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_9__["DeleteactorComponent"] },
    { path: 'addmovie', component: _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_12__["AddmovieComponent"] },
    { path: 'listmovies', component: _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_13__["ListmoviesComponent"] },
    { path: 'deletemovie', component: _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_14__["DeletemovieComponent"] },
    // tslint:disable-next-line: no-trailing-whitespace
    { path: 'actortomovie', component: _actor2movie_actor2movie_component__WEBPACK_IMPORTED_MODULE_15__["Actor2movieComponent"] },
    { path: '', redirectTo: '/listactors', pathMatch: 'full' },
    { path: '**', component: _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__["ViewnotfoundComponent"] },
];
let AppModule = 
// tslint:disable-next-line: eofline
class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_7__["ListactorsComponent"],
            _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__["AddactorComponent"],
            _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_10__["UpdateactorComponent"],
            _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_9__["DeleteactorComponent"],
            _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_12__["AddmovieComponent"],
            _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_13__["ListmoviesComponent"],
            _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_14__["DeletemovieComponent"],
            _actor2movie_actor2movie_component__WEBPACK_IMPORTED_MODULE_15__["Actor2movieComponent"],
            _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__["ViewnotfoundComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, {
                useHash: true,
                enableTracing: true
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ],
        providers: [_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
    // tslint:disable-next-line: eofline
], AppModule);



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let DatabaseService = class DatabaseService {
    constructor(http) {
        this.http = http;
    }
    getActors() {
        return this.http.get('/actors');
    }
    getActor(id) {
        const url = '/actors/' + id;
        return this.http.get(url);
    }
    createActor(data) {
        return this.http.post('/actors', data, httpOptions);
    }
    updateActor(id, data) {
        const url = '/actors/' + id;
        return this.http.put(url, data, httpOptions);
    }
    deleteActor(id) {
        const url = '/actors/' + id;
        return this.http.delete(url, httpOptions);
    }
    createMovie(data) {
        return this.http.post('/movies', data, httpOptions);
    }
    getMovies() {
        return this.http.get('/movies');
    }
    deleteMovie(id) {
        const url = '/movies/' + id;
        return this.http.delete(url, httpOptions);
    }
    deleteYear(year) {
        const url = '/movies/remove/' + year;
        return this.http.delete(url, httpOptions);
    }
    addMovie(data) {
        const url = '/movies/' + data._id + '/actors/' + data.actors;
        return this.http.post(url, httpOptions);
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DatabaseService);



/***/ }),

/***/ "./src/app/deleteactor/deleteactor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deleteactor/deleteactor.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWFjdG9yL2RlbGV0ZWFjdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/deleteactor/deleteactor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deleteactor/deleteactor.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteactorComponent", function() { return DeleteactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DeleteactorComponent = class DeleteactorComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.actorsDB = [];
    }
    // Get all Actors
    onGetActors() {
        console.log('From on GetActors');
        return this.dbService.getActors().subscribe((data) => {
            this.actorsDB = data;
        });
    }
    // Delete Actor
    onDeleteActor(item) {
        this.dbService.deleteActor(item._id).subscribe(result => {
            this.onGetActors();
            this.router.navigate(['/listactors']);
        });
    }
    // This callback function will be invoked with the component get initialized by Angular.
    ngOnInit() {
        this.onGetActors();
    }
};
DeleteactorComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeleteactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deleteactor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deleteactor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deleteactor/deleteactor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deleteactor.component.css */ "./src/app/deleteactor/deleteactor.component.css")).default]
    })
], DeleteactorComponent);



/***/ }),

/***/ "./src/app/deletemovie/deletemovie.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deletemovie/deletemovie.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZW1vdmllL2RlbGV0ZW1vdmllLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/deletemovie/deletemovie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deletemovie/deletemovie.component.ts ***!
  \******************************************************/
/*! exports provided: DeletemovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletemovieComponent", function() { return DeletemovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DeletemovieComponent = class DeletemovieComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.moviesDB = [];
    }
    onGetMovies() {
        console.log('From on GetActors');
        return this.dbService.getMovies().subscribe((data) => {
            this.moviesDB = data;
        });
    }
    // Delete Actor
    onDeleteMovie(item) {
        this.dbService.deleteMovie(item._id).subscribe(result => {
            this.onGetMovies();
            this.router.navigate(['/listmovies']);
        });
    }
    // This callback function will be invoked with the component get initialized by Angular.
    ngOnInit() {
        this.onGetMovies();
    }
};
DeletemovieComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeletemovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deletemovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deletemovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deletemovie/deletemovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deletemovie.component.css */ "./src/app/deletemovie/deletemovie.component.css")).default]
    })
], DeletemovieComponent);



/***/ }),

/***/ "./src/app/listactors/listactors.component.css":
/*!*****************************************************!*\
  !*** ./src/app/listactors/listactors.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhY3RvcnMvbGlzdGFjdG9ycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/listactors/listactors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/listactors/listactors.component.ts ***!
  \****************************************************/
/*! exports provided: ListactorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListactorsComponent", function() { return ListactorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



let ListactorsComponent = class ListactorsComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.actorsDB = [];
    }
    ngOnInit() {
        console.log('Hi From ListActors ngIOnit');
        this.dbService.getActors().subscribe((data) => {
            this.actorsDB = data;
        });
    }
};
ListactorsComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ListactorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listactors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listactors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listactors/listactors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listactors.component.css */ "./src/app/listactors/listactors.component.css")).default]
    })
], ListactorsComponent);



/***/ }),

/***/ "./src/app/listmovies/listmovies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/listmovies/listmovies.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Rtb3ZpZXMvbGlzdG1vdmllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/listmovies/listmovies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/listmovies/listmovies.component.ts ***!
  \****************************************************/
/*! exports provided: ListmoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListmoviesComponent", function() { return ListmoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



let ListmoviesComponent = class ListmoviesComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.moviesDB = [];
    }
    ngOnInit() {
        console.log('Hi From ListMovies ngIOnit');
        this.dbService.getMovies().subscribe((data) => {
            this.moviesDB = data;
        });
    }
};
ListmoviesComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ListmoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listmovies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listmovies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listmovies/listmovies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listmovies.component.css */ "./src/app/listmovies/listmovies.component.css")).default]
    })
], ListmoviesComponent);



/***/ }),

/***/ "./src/app/updateactor/updateactor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/updateactor/updateactor.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWFjdG9yL3VwZGF0ZWFjdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/updateactor/updateactor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/updateactor/updateactor.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateactorComponent", function() { return UpdateactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UpdateactorComponent = class UpdateactorComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.fullName = '';
        this.bYear = 0;
        this.actorId = '';
        this.actorsDB = [];
    }
    // Get all Actors
    onGetActors() {
        console.log('From on GetActors');
        return this.dbService.getActors().subscribe((data) => {
            this.actorsDB = data;
        });
    }
    // Update an Actor
    onSelectUpdate(item) {
        this.fullName = item.name;
        this.bYear = item.bYear;
        this.actorId = item._id;
    }
    onUpdateActor() {
        const obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.updateActor(this.actorId, obj).subscribe(result => {
            this.onGetActors();
            this.router.navigate(['/listactors']);
        });
    }
    ngOnInit() {
        this.onGetActors();
    }
};
UpdateactorComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UpdateactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updateactor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./updateactor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/updateactor/updateactor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./updateactor.component.css */ "./src/app/updateactor/updateactor.component.css")).default]
    })
], UpdateactorComponent);



/***/ }),

/***/ "./src/app/viewnotfound/viewnotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewnotfound/viewnotfound.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdub3Rmb3VuZC92aWV3bm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/viewnotfound/viewnotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewnotfound/viewnotfound.component.ts ***!
  \********************************************************/
/*! exports provided: ViewnotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewnotfoundComponent", function() { return ViewnotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewnotfoundComponent = class ViewnotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewnotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewnotfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewnotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewnotfound/viewnotfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewnotfound.component.css */ "./src/app/viewnotfound/viewnotfound.component.css")).default]
    })
], ViewnotfoundComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tokel\OneDrive\Desktop\eBusiness_Lab\Week11\movieAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map