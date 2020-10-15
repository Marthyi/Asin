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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





const _c0 = function () { return ["./"]; };
const _c1 = function () { return { exact: true }; };
class AppComponent {
    constructor() {
        this.title = 'AsinApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 11, consts: [["target", "_blank", "href", "https://www.notion.so/Full-stack-Engineering-Home-Project-197b19f9b951460ca0eed359d5acc93d"], [1, "menu"], ["routerLinkActive", "", 3, "routerLink", "routerLinkActiveOptions"], ["rlaAsin", "routerLinkActive"], ["mat-flat-button", ""], ["rlaReviews", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SPECIFICATION PROJET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ASIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "REVIEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-primary", _r0.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "reviews")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-primary", _r1.isActive);
    } }, directives: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUlBLG1CQUFBO0FBRko7QUFESTtFQUNFLGtCQUFBO0FBR04iLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAubWVudXtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgYXtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/asin-master/asin-master.component */ "./src/app/container/asin-master/asin-master.component.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _services_amazon_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/amazon.service */ "./src/app/services/amazon.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _container_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./container/customer-reviews/customer-reviews.component */ "./src/app/container/customer-reviews/customer-reviews.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_amazon_service__WEBPACK_IMPORTED_MODULE_11__["AmazonService"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_13__["Effects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_actions__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_6__["AsinMasterComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"], _container_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_20__["CustomerReviewsComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_6__["AsinMasterComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"], _container_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_20__["CustomerReviewsComponent"]],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_13__["Effects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_actions__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ],
                providers: [_services_amazon_service__WEBPACK_IMPORTED_MODULE_11__["AmazonService"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: paths, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paths", function() { return paths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/asin-master/asin-master.component */ "./src/app/container/asin-master/asin-master.component.ts");
/* harmony import */ var _container_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/customer-reviews/customer-reviews.component */ "./src/app/container/customer-reviews/customer-reviews.component.ts");


class paths {
}
paths.Home = "home";
paths.CustomerReviews = "reviews";
const routes = [
    { path: paths.Home, component: _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_0__["AsinMasterComponent"] },
    { path: paths.CustomerReviews, component: _container_customer_reviews_customer_reviews_component__WEBPACK_IMPORTED_MODULE_1__["CustomerReviewsComponent"] },
    { path: '**', component: _container_asin_master_asin_master_component__WEBPACK_IMPORTED_MODULE_0__["AsinMasterComponent"] },
];


/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class PageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: 20px 20px 20px 20px;\n  padding: 20px;\n  width: calc(100% - (20px * 2));\n  min-height: calc(90% - (20px * 2));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid gray;\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFLQSwyQkFBQTtFQUNBLGFBSFU7RUFJViw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0FBSkoiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAkbWFyZ2luOiAyMHB4O1xyXG4gICAgJHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAkbWFyZ2luICRtYXJnaW4gJG1hcmdpbiAkbWFyZ2luO1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gKCN7JG1hcmdpbn0gKiAyKSkgO1xyXG4gICAgbWluLWhlaWdodDogY2FsYyg5MCUgLSAoI3skbWFyZ2lufSAqIDIpKSA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/container/asin-master/asin-master.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/container/asin-master/asin-master.component.ts ***!
  \****************************************************************/
/*! exports provided: AsinMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsinMasterComponent", function() { return AsinMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models */ "./src/app/core/models.ts");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var src_app_store_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/model */ "./src/app/store/model.ts");
/* harmony import */ var src_app_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/selectors */ "./src/app/store/selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");















function AsinMasterComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsinMasterComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.asin = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsinMasterComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsinMasterComponent_div_12_ng_template_3_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ASIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsinMasterComponent_div_12_ng_template_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://amazon.com/product-reviews/", element_r17.asin, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.asin, " ");
} }
function AsinMasterComponent_div_12_ng_template_3_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRODUCT TITLE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsinMasterComponent_div_12_ng_template_3_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.title, " ");
} }
function AsinMasterComponent_div_12_ng_template_3_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " STATUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { loading: a0 }; };
function AsinMasterComponent_div_12_ng_template_3_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, element_r19.state == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.stateLabel, " ");
} }
function AsinMasterComponent_div_12_ng_template_3_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function AsinMasterComponent_div_12_ng_template_3_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function AsinMasterComponent_div_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsinMasterComponent_div_12_ng_template_3_th_2_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsinMasterComponent_div_12_ng_template_3_td_3_Template, 3, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsinMasterComponent_div_12_ng_template_3_th_5_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsinMasterComponent_div_12_ng_template_3_td_6_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AsinMasterComponent_div_12_ng_template_3_th_8_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AsinMasterComponent_div_12_ng_template_3_td_9_Template, 2, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AsinMasterComponent_div_12_ng_template_3_tr_10_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AsinMasterComponent_div_12_ng_template_3_tr_11_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
} }
function AsinMasterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsinMasterComponent_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsinMasterComponent_div_12_ng_template_3_Template, 12, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.asins$)) == null ? null : tmp_0_0.length) == 0)("ngIfElse", _r7);
} }
function AsinMasterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsinMasterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Echec du chargement. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AsinMasterComponent {
    constructor(store) {
        this.store = store;
        this.asinLabels = src_app_core_models__WEBPACK_IMPORTED_MODULE_2__["EnumLabels"].AsinState;
        this.ASIN_STATE = src_app_core_models__WEBPACK_IMPORTED_MODULE_2__["AsinStateEnum"];
        this.STATE = src_app_store_model__WEBPACK_IMPORTED_MODULE_4__["SimpleRequestState"];
        this.displayedColumns = ['asin', 'title', 'state'];
        this.asin = "B082XY23D5";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.asins$ = store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAsins"]);
        this.asinsState$ = store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAsinsState"]);
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["StateActions"].Main.loading_Asins());
        this.asins$.subscribe((p) => {
            let source = p.map(item => {
                return Object.assign(Object.assign({}, item), { stateLabel: src_app_core_models__WEBPACK_IMPORTED_MODULE_2__["EnumLabels"].AsinState[item.state] });
            });
            this.dataSource.data = source;
            if (p.filter((asin) => asin.state == src_app_core_models__WEBPACK_IMPORTED_MODULE_2__["AsinStateEnum"].Loading).length > 0) {
                setTimeout(() => this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["StateActions"].Main.loading_Asins()), 1000);
            }
        });
    }
    ngOnInit() { }
    addAsin() {
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["StateActions"].Main.add_Asin({
            asin: this.asin,
            state: src_app_core_models__WEBPACK_IMPORTED_MODULE_2__["AsinStateEnum"].Loading,
        }));
        console.log(this.asin);
    }
}
AsinMasterComponent.ɵfac = function AsinMasterComponent_Factory(t) { return new (t || AsinMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
AsinMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsinMasterComponent, selectors: [["app-asin-master"]], decls: 15, vars: 11, consts: [[1, "form"], [1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "asin"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "state"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""]], template: function AsinMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add an ASIN code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsinMasterComponent_Template_input_ngModelChange_4_listener($event) { return ctx.asin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsinMasterComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsinMasterComponent_Template_button_click_6_listener() { return ctx.addAsin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AsinMasterComponent_div_12_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsinMasterComponent_div_13_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AsinMasterComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.asin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.asinsState$) != ctx.STATE.Loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.asinsState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.STATE.Loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.STATE.Loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.STATE.Error);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n@keyframes loading-animation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]   .loading[_ngcontent-%COMP%] {\n  animation: loading-animation 1.5s ease-in-out;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWluZXIvYXNpbi1tYXN0ZXIvYXNpbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFJSTtFQUNJO0lBQ0ksVUFBQTtFQUZWO0VBSU07SUFDSSxhQUFBO0VBRlY7RUFJTTtJQUNJLFVBQUE7RUFGVjtBQUNGO0FBS0k7RUFDSSw2Q0FBQTtFQUNBLG1DQUFBO0FBSFIiLCJmaWxlIjoiYXBwL2NvbnRhaW5lci9hc2luLW1hc3Rlci9hc2luLW1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuLmZvcm17XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGxvYWRpbmctYW5pbWF0aW9uIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBhbmltYXRpb246IGxvYWRpbmctYW5pbWF0aW9uIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsinMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-asin-master",
                templateUrl: "./asin-master.component.html",
                styleUrls: ["./asin-master.component.scss"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/container/customer-reviews/customer-reviews.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/container/customer-reviews/customer-reviews.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReviewsComponent", function() { return CustomerReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors */ "./src/app/store/selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CustomerReviewsComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ASIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerReviewsComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://amazon.com/product-reviews/", element_r12.asin, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.asin, " ");
} }
function CustomerReviewsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerReviewsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r13.date, "yyyy-MM-dd"), " ");
} }
function CustomerReviewsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRODUCT TITLE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerReviewsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.title, " ");
} }
function CustomerReviewsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REVIEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerReviewsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.content, " ");
} }
function CustomerReviewsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RATING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerReviewsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.rating, " ");
} }
function CustomerReviewsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function CustomerReviewsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
class CustomerReviewsComponent {
    constructor(store) {
        this.store = store;
        this.displayedColumns = [
            "asin",
            "date",
            "title",
            "content",
            "rating",
        ];
        this.columnSort = "";
        this.columnDirection = "";
        this.page = 0;
        this.loadPage();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.reviews$ = this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__["selectReviews"]);
        this.reviews$.subscribe((p) => {
            this.dataSource.data = p;
            console.log(p);
        });
    }
    ngOnInit() { }
    loadPage() {
        window.location.href =
            "#/reviews?page=" +
                this.page +
                "&column=" +
                this.columnSort +
                "&direction=" +
                this.columnDirection;
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["StateActions"].Main.loading_Reviews());
    }
    sortData(sort) {
        this.columnSort = sort.active;
        this.columnDirection = sort.direction;
        this.loadPage();
    }
    pageEvent(event) {
        this.page = event.pageIndex;
        this.loadPage();
    }
}
CustomerReviewsComponent.ɵfac = function CustomerReviewsComponent_Factory(t) { return new (t || CustomerReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
CustomerReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerReviewsComponent, selectors: [["app-customer-reviews"]], decls: 19, vars: 5, consts: [["matSort", "", "mat-table", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "asin"], ["class", "col-title", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-title", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "content"], ["matColumnDef", "rating"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "page"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-title"], ["mat-cell", "", 1, "col-title"], ["target", "_blank", 3, "href"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function CustomerReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function CustomerReviewsComponent_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerReviewsComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerReviewsComponent_td_3_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomerReviewsComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerReviewsComponent_td_6_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomerReviewsComponent_th_8_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomerReviewsComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerReviewsComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomerReviewsComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerReviewsComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerReviewsComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomerReviewsComponent_tr_16_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerReviewsComponent_tr_17_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function CustomerReviewsComponent_Template_mat_paginator_page_18_listener($event) { return ctx.pageEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 100000000)("pageSize", 10);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .mat-column-title[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n[_nghost-%COMP%]   .mat-column-asin[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n[_nghost-%COMP%]   .mat-column-date[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWluZXIvY3VzdG9tZXItcmV2aWV3cy9jdXN0b21lci1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQURKIiwiZmlsZSI6ImFwcC9jb250YWluZXIvY3VzdG9tZXItcmV2aWV3cy9jdXN0b21lci1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAubWF0LWNvbHVtbi10aXRsZSB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5tYXQtY29sdW1uLWFzaW4ge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gIH1cblxuICAubWF0LWNvbHVtbi1kYXRlIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-customer-reviews",
                templateUrl: "./customer-reviews.component.html",
                styleUrls: ["./customer-reviews.component.scss"],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/models.ts":
/*!********************************!*\
  !*** ./src/app/core/models.ts ***!
  \********************************/
/*! exports provided: AsinStateEnum, EnumLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsinStateEnum", function() { return AsinStateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLabels", function() { return EnumLabels; });
var AsinStateEnum;
(function (AsinStateEnum) {
    AsinStateEnum[AsinStateEnum["Loading"] = 1] = "Loading";
    AsinStateEnum[AsinStateEnum["Loaded"] = 2] = "Loaded";
    AsinStateEnum[AsinStateEnum["Error"] = 3] = "Error";
})(AsinStateEnum || (AsinStateEnum = {}));
const EnumLabels = {
    AsinState: {
        [AsinStateEnum.Error]: "❌ Erreur de chargement",
        [AsinStateEnum.Loaded]: "✅ succès",
        [AsinStateEnum.Loading]: "🕔 Chargement en cours",
    },
};


/***/ }),

/***/ "./src/app/services/amazon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/amazon.service.ts ***!
  \********************************************/
/*! exports provided: AmazonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmazonService", function() { return AmazonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AmazonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAsins() {
        let response;
        response = this.httpClient.get("/asins");
        return response;
    }
    getReviews() {
        let response;
        response = this.httpClient.get(window.location.hash.substring(2));
        return response;
    }
    postAsin(asin) {
        return this.httpClient.post("/asins", { asinCode: asin });
    }
}
AmazonService.ɵfac = function AmazonService_Factory(t) { return new (t || AmazonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AmazonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AmazonService, factory: AmazonService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmazonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/serviceModels/models.ts":
/*!**************************************************!*\
  !*** ./src/app/services/serviceModels/models.ts ***!
  \**************************************************/
/*! exports provided: ServiceModelMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModelMapper", function() { return ServiceModelMapper; });
const ServiceModelMapper = {
    MapToAsin(serviceModel) {
        return {
            asin: serviceModel.asin,
            title: serviceModel.title,
            state: serviceModel.state,
        };
    },
};


/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: StateActions, applicationStateReducer, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateActions", function() { return StateActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationStateReducer", function() { return applicationStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/store/model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");


const StateActions = {
    Main: {
        add_Asin: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Asins] Add ASIN", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()),
        loading_Asins: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Asins] Load ASINs"),
        loaded_Asins: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Asins] Loaded ASINs", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()),
        loading_Reviews: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Reviews] Load Reviews"),
        loaded_Reviews: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Reviews] Loaded Reviews", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])()),
    },
};
function LoadingReviewsAction(state) {
    return Object.assign({}, state);
}
function LoadedReviewsAction(state, reviewsRequest) {
    return Object.assign(Object.assign({}, state), { reviews: reviewsRequest.reviews });
}
function LoadingAsinsAction(state) {
    return Object.assign({}, state);
}
function LoadedAsinsAction(state, asinsRequest) {
    return Object.assign(Object.assign({}, state), { asinsState: _model__WEBPACK_IMPORTED_MODULE_0__["SimpleRequestState"].Loaded, asins: asinsRequest.asins });
}
function AddAsinCodeAction(state, asin) {
    if (state.asins.find((p) => p.asin == asin.asin)) {
        return Object.assign({}, state);
    }
    return Object.assign(Object.assign({}, state), { asins: [...state.asins, asin] });
}
const applicationStateReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_model__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(StateActions.Main.add_Asin, AddAsinCodeAction), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(StateActions.Main.loading_Asins, LoadingAsinsAction), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(StateActions.Main.loaded_Asins, LoadedAsinsAction), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(StateActions.Main.loading_Reviews, LoadingReviewsAction), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(StateActions.Main.loaded_Reviews, LoadedReviewsAction));
const reducers = {
    main: applicationStateReducer,
};


/***/ }),

/***/ "./src/app/store/effects.ts":
/*!**********************************!*\
  !*** ./src/app/store/effects.ts ***!
  \**********************************/
/*! exports provided: Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return Effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_serviceModels_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/serviceModels/models */ "./src/app/services/serviceModels/models.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _services_amazon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/amazon.service */ "./src/app/services/amazon.service.ts");










class Effects {
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.$loading_Asins = this.onAction(_actions__WEBPACK_IMPORTED_MODULE_6__["StateActions"].Main.loading_Asins).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((p) => this.service.getAsins().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((asins) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions__WEBPACK_IMPORTED_MODULE_6__["StateActions"].Main.loaded_Asins({
            asins: asins.map(_services_serviceModels_models__WEBPACK_IMPORTED_MODULE_5__["ServiceModelMapper"].MapToAsin),
        }))))));
        this.$loading_Reviews = this.onAction(_actions__WEBPACK_IMPORTED_MODULE_6__["StateActions"].Main.loading_Reviews).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((p) => this.service
            .getReviews()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((asins) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions__WEBPACK_IMPORTED_MODULE_6__["StateActions"].Main.loaded_Reviews({ reviews: asins }))))));
        this.$add_Asin = this.onAction(_actions__WEBPACK_IMPORTED_MODULE_6__["StateActions"].Main.add_Asin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((p) => this.service.postAsin(p.asin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((_) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])()
        // StateActions.Main. loaded_Asins(<{asins:AsinServiceModel[]}>{
        //   asins: asins.map(ServiceModelMapper.MapToAsin),
        // })
        ))));
    }
    onAction(action) {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(action));
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_amazon_service__WEBPACK_IMPORTED_MODULE_7__["AmazonService"])); };
Effects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], Effects.prototype, "$loading_Asins", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], Effects.prototype, "$loading_Reviews", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], Effects.prototype, "$add_Asin", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Effects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_amazon_service__WEBPACK_IMPORTED_MODULE_7__["AmazonService"] }]; }, { $loading_Asins: [], $loading_Reviews: [], $add_Asin: [] }); })();


/***/ }),

/***/ "./src/app/store/model.ts":
/*!********************************!*\
  !*** ./src/app/store/model.ts ***!
  \********************************/
/*! exports provided: SimpleRequestState, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRequestState", function() { return SimpleRequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var SimpleRequestState;
(function (SimpleRequestState) {
    SimpleRequestState[SimpleRequestState["Loading"] = 1] = "Loading";
    SimpleRequestState[SimpleRequestState["Loaded"] = 2] = "Loaded";
    SimpleRequestState[SimpleRequestState["Error"] = 3] = "Error";
})(SimpleRequestState || (SimpleRequestState = {}));
const initialState = {
    asins: [],
    asinsState: SimpleRequestState.Loading,
    reviews: []
};


/***/ }),

/***/ "./src/app/store/selectors.ts":
/*!************************************!*\
  !*** ./src/app/store/selectors.ts ***!
  \************************************/
/*! exports provided: selectAsins, selectAsinsState, selectReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAsins", function() { return selectAsins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAsinsState", function() { return selectAsinsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReviews", function() { return selectReviews; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const getMain = (state) => state.main;
const createMainStateSelector = function (selector) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMain, selector);
};
const selectAsins = createMainStateSelector((p) => p.asins);
const selectAsinsState = createMainStateSelector((p) => p.asinsState);
const selectReviews = createMainStateSelector((p) => p.reviews);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GIT\Asin\src\Asin.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map