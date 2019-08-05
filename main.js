(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'register',           component: SignupComponent },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    // { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-lg section-hero section-shaped\">\r\n      <!-- Background circles -->\r\n      <div class=\"shape shape-style-1 shape-primary\">\r\n        <span class=\"span-150\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-75\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n        <span class=\"span-50\"></span>\r\n        <span class=\"span-100\"></span>\r\n      </div>\r\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-lg-6 text-center\">\r\n              <img src=\"./assets/img/brand/argon-white.png\" style=\"width: 200px;\" class=\"img-fluid\">\r\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\r\n              <div class=\"btn-wrapper mt-5\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Download Angular</span>\r\n                </a>\r\n                <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\r\n                  <span class=\"btn-inner--text\">\r\n                    <span class=\"text-warning\">Star us</span> on Github</span>\r\n                </a>\r\n              </div>\r\n              <div class=\"mt-5\">\r\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\r\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <app-sections></app-sections>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "./src/app/sections/sections.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- shape Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-3  text-white\">Academic Advising\r\n                <span>Meets Artificial Intelligence</span>\r\n              </h1>\r\n              <p class=\"lead  text-white\">Leveraging software, AI, and analytics to raise graduation rates and student success</p>\r\n              <div class=\"btn-wrapper\">\r\n                <!--\r\n                <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Product</span>\r\n                </a>\r\n                -->\r\n                <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-button-power\"></i></span>\r\n                  <span class=\"btn-inner--text\">Get Demo</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-lg-6 text-center mt-0 pt-0\">\r\n              <img src=\"assets/img/brand/aai-brain-only-white.png\" class=\"img-fluid floating\" style=\"max-width: 65%\">\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"mb-2\">\r\n                    <img src=\"assets/img/brand/aai-icon.png\" class=\"img-fluid d-inline\" style=\"max-width: 20%\">\r\n                    <h6 class=\"text-primary text-uppercase ml-3\" style=\"display:inline;\">For Students</h6>\r\n                  </div>\r\n                  <p class=\"description mt-3\">What took weeks now takes seconds. Create four year plans instantly. Automatically see your progress toward any major at the university. Keep track of progress and build long term relationships. </p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">progress</span> \r\n                    <span class=\"badge badge-pill badge-primary\">4-year-plans</span>\r\n                    <span class=\"badge badge-pill badge-primary\">schedules</span>\r\n                  </div>\r\n                  <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-secondary mt-4\">get more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"mb-2\">\r\n                    <img src=\"assets/img/brand/aai-icon.png\" class=\"img-fluid d-inline\" style=\"max-width: 20%\">\r\n                    <h6 class=\"text-primary text-uppercase ml-3\" style=\"display:inline;\">For Advisors</h6>\r\n                  </div>\r\n                  <p class=\"description mt-3\">Sync your student notes and forms. Use eddie to flag students and set alerts. Quickly segment and communicate with students.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">Synced Notes</span>\r\n                    <span class=\"badge badge-pill badge-primary\">alerts</span>\r\n                    <span class=\"badge badge-pill badge-primary\">segmenting</span>\r\n                  </div>\r\n                  <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-secondary mt-4\">get more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"mb-2\">\r\n                    <img src=\"assets/img/brand/aai-icon.png\" class=\"img-fluid d-inline\" style=\"max-width: 20%\">\r\n                    <h6 class=\"text-primary text-uppercase ml-3\" style=\"display:inline;\">For Administrators</h6>\r\n                  </div>\r\n                  <p class=\"description mt-3\">Build dashboard with eddie. You can access what students are thinking outside of the meeting room. Use eddie to view course and maor demand four years in advance. </p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">Reports</span>\r\n                    <span class=\"badge badge-pill badge-primary\">dashboards</span>\r\n                    <span class=\"badge badge-pill badge-primary\">insight</span>\r\n                  </div>\r\n                  <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-secondary mt-4\">get more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"assets/img/brand/pages.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"pb-5\">\r\n              <img src=\"assets/img/brand/logo_horizontal_color.png\" class=\"img-fluid floating\">\r\n            </div>\r\n            <h3 style=\"font-size:170%\" class=\"text-secondary\">Modern tools for modern students</h3>\r\n            <p>AdvisingAI has tools designed for today's student. We focus on exploration and account for all the roadblocks today's students encounter: 80% of students change their major, 40% double major or add minors, and 40% delay graduation </p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Build four year plans and flow-charts instantly</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Visualize progress towards all majors or minors</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Build optimal semesters and schedules</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n    <section class=\"section section-lg mt-0 pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-5 order-md-1\">\r\n          <img src=\"assets/img/brand/clouds.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-1 order-md-2\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-3\">\r\n          <div class=\"pr-md-5\">\r\n\r\n            <h3 style=\"font-size:170%\" class=\"text-secondary\">Full power of the cloud</h3>\r\n            <p>AdvisingAI requires no cluncky or lengthy Integrations. Our focus is bringing high quality advising to students. That means we run the best and most up to date tech </p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">No clunky IT integration required</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Get started in as little as 1 week</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-bold-right\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Availible anytime, anywhere</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!--\r\n  <section class=\"section bg-gradient-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-primary shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    SVG separator\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  -->\r\n  <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">Academic advising for today's students</h3>\r\n              <p class=\"lead text-white mt-3\">Build your long term degree plan while also exploring all the other opportunities availible at your school</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-lg btn-block btn-white text-primary\">Get Demo</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--\r\n  <section class=\"section section-lg mt-0 pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3 text-primary\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    SVG separator \r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n \r\n  <section class=\"section section-lg pt-lg-0 section-Get Demo-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n   -->\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-6\">\r\n              <a href=\"javascript:void(0)\" class=\"text-light\">\r\n                <small>Forgot password?</small>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <a href=\"javascript:void(0)\" class=\"text-light\">\r\n                <small>Create new account</small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\r\n  <section class=\"section-profile-cover section-shaped my-0\">\r\n    <!-- Circles background -->\r\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-profile shadow mt--300\">\r\n        <div class=\"px-4\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-3 order-lg-2\">\r\n              <div class=\"card-profile-image\">\r\n                <a href=\"javascript:void(0)\">\r\n                  <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\r\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-1\">\r\n              <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                <div>\r\n                  <span class=\"heading\">22</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">10</span>\r\n                  <span class=\"description\">Photos</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">89</span>\r\n                  <span class=\"description\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-5\">\r\n            <h3>Jessica Jones\r\n              <span class=\"font-weight-light\">, 27</span>\r\n            </h3>\r\n            <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\r\n            <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer</div>\r\n            <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\r\n          </div>\r\n          <div class=\"mt-5 py-5 border-top text-center\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-9\">\r\n                <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>\r\n                <a href=\"javascript:void(0)\">Show more</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FsZXJ0cy1zZWN0aW9uL2FsZXJ0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <h3 class=\"mt-lg mb-4\">\r\n    <span>Alerts</span>\r\n  </h3>\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\r\n      <ng-container *ngIf=\"alert.icon\">\r\n        <div class=\"alert-inner--icon\">\r\n            <i class=\"{{alert.icon}}\"></i>\r\n        </div>\r\n      </ng-container>\r\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\r\n    </ngb-alert>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsSectionComponent.prototype, "alerts", void 0);
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts-section',
            template: __webpack_require__(/*! ./alerts-section.component.html */ "./src/app/sections/alerts-section/alerts-section.component.html"),
            styles: [__webpack_require__(/*! ./alerts-section.component.css */ "./src/app/sections/alerts-section/alerts-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FuZ3VsYXItc2VjdGlvbi9hbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Javascript Components</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\r\n       Default\r\n      </button>\r\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\r\n         Notification\r\n      </button>\r\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content bg-gradient-danger\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"py-3 text-center\">\r\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\r\n              <h4 class=\"heading mt-4\">You should read this!</h4>\r\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\r\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\r\n         Form\r\n      </button>\r\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body p-0\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n              <div class=\"card-header bg-white pb-5\">\r\n                <div class=\"text-muted text-center mb-3\">\r\n                  <small>Sign in with</small>\r\n                </div>\r\n                <div class=\"btn-wrapper text-center\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/github.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Github</span>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/google.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Google</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body px-lg-5 py-lg-5\">\r\n                <div class=\"text-center text-muted mb-4\">\r\n                  <small>Or sign in with credentials</small>\r\n                </div>\r\n                <form role=\"form\">\r\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                      <span>Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Datepicker -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\r\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n          </div>\r\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model1\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" autocomplete=\"off\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mt-4 mt-md-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\r\n      <div class=\"input-daterange datepicker row align-items-center\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <!-- Changes select from mama($event) to what it is now-->\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\r\n              <ng-template #t let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\r\n              <ng-template #t1 let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Tooltips and Popovers -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-section',
            template: __webpack_require__(/*! ./angular-section.component.html */ "./src/app/sections/angular-section/angular-section.component.html"),
            styles: [__webpack_require__(/*! ./angular-section.component.css */ "./src/app/sections/angular-section/angular-section.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2J1dHRvbnMtc2VjdGlvbi9idXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-components pb-0\" id=\"section-components\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Basic elements -->\r\n        <h2 class=\"mb-5\">\r\n          <span>Basic Elements</span>\r\n        </h2>\r\n        <!-- Buttons -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\r\n        <!-- Button styles -->\r\n        <div>\r\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n            <span class=\"btn-inner--text\">With icon</span>\r\n          </button>\r\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n          </button>\r\n          <!-- Button wizes -->\r\n          <div class=\"mb-3 mt-5\">\r\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\r\n          </div>\r\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\r\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\r\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\r\n        </div>\r\n        <!-- Button colors -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\r\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\r\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\r\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\r\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\r\n        <!-- Button links -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-section',
            template: __webpack_require__(/*! ./buttons-section.component.html */ "./src/app/sections/buttons-section/buttons-section.component.html"),
            styles: [__webpack_require__(/*! ./buttons-section.component.css */ "./src/app/sections/buttons-section/buttons-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nycy1zZWN0aW9uL2Nycy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!-- Custom controls -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <!-- Checkboxes -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\r\n          <label class=\"custom-control-label\" for=\"customCheck2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck3\">\r\n            <span>Disabled Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck4\">\r\n            <span>Disabled Checked</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Radio buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio3\">\r\n            <span>Disabled unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio4\">\r\n            <span>Disabled checkbox</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Toggle buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\r\n        </div>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n        <span class=\"clearfix\"></span>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\r\n        </div>\r\n        <!-- Simple slider -->\r\n        <div class=\"input-slider-container\">\r\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\r\n        </div>\r\n        <!-- Range slider -->\r\n        <div class=\"mt-5\">\r\n          <!-- Range slider container -->\r\n          <div id=\"input-slider-range\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mt-md\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Menu -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n                        <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-favourite-28\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-notification-70\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crs-section',
            template: __webpack_require__(/*! ./crs-section.component.html */ "./src/app/sections/crs-section/crs-section.component.html"),
            styles: [__webpack_require__(/*! ./crs-section.component.css */ "./src/app/sections/crs-section/crs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2lucHV0cy1zZWN0aW9uL2lucHV0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section pb-0 section-components\">\r\n  <div class=\"container mb-5\">\r\n    <!-- Inputs -->\r\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\r\n    <div class=\"mb-3\">\r\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"py-5 bg-secondary\">\r\n    <div class=\"container\">\r\n      <!-- Inputs (alternative) -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group has-success\">\r\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\r\n          </div>\r\n          <div class=\"form-group has-danger\">\r\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs-section',
            template: __webpack_require__(/*! ./inputs-section.component.html */ "./src/app/sections/inputs-section/inputs-section.component.html"),
            styles: [__webpack_require__(/*! ./inputs-section.component.css */ "./src/app/sections/inputs-section/inputs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/modal/modal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sections/modal/modal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n"

/***/ }),

/***/ "./src/app/sections/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/sections/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL25hdmlnYXRpb24tc2VjdGlvbi9uYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\r\n  <div class=\"container\">\r\n    <!-- Navigation -->\r\n    <h2 class=\"mb-5\">\r\n      <span>Navbars</span>\r\n    </h2>\r\n  </div>\r\n  <!-- Navbar default -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-notification-70\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar primary -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar success -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar danger -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar warning -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-pinterest\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar info -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-section',
            template: __webpack_require__(/*! ./navigation-section.component.html */ "./src/app/sections/navigation-section/navigation-section.component.html"),
            styles: [__webpack_require__(/*! ./navigation-section.component.css */ "./src/app/sections/navigation-section/navigation-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL251Y2xlby1zZWN0aW9uL251Y2xlby1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg section-nucleo-icons pb-250\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Nucleo Icons</h2>\r\n        <p class=\"lead\">\r\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\r\n        </p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blur--hover\">\r\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\r\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n          <!-- Center -->\r\n          <i class=\"icon ni ni-diamond\"></i>\r\n          <!-- Right 1 -->\r\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\r\n          <i class=\"icon icon-sm ni ni-app\"></i>\r\n          <i class=\"icon icon-sm ni ni-atom\"></i>\r\n          <!-- Right 2 -->\r\n          <i class=\"icon ni ni-bag-17\"></i>\r\n          <i class=\"icon ni ni-bell-55\"></i>\r\n          <i class=\"icon ni ni-credit-card\"></i>\r\n          <!-- Left 1 -->\r\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\r\n          <i class=\"icon icon-sm ni ni-building\"></i>\r\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\r\n          <!-- Left 2 -->\r\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\r\n          <i class=\"icon ni ni-camera-compact\"></i>\r\n          <i class=\"icon ni ni-chart-bar-32\"></i>\r\n        </div>\r\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleo-section',
            template: __webpack_require__(/*! ./nucleo-section.component.html */ "./src/app/sections/nucleo-section/nucleo-section.component.html"),
            styles: [__webpack_require__(/*! ./nucleo-section.component.css */ "./src/app/sections/nucleo-section/nucleo-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buttons-section></app-buttons-section>\r\n<app-inputs-section></app-inputs-section>\r\n<app-crs-section></app-crs-section>\r\n<app-navigation-section></app-navigation-section>\r\n<section class=\"section section-components\">\r\n  <app-tabs-section></app-tabs-section>\r\n  <app-alerts-section></app-alerts-section>\r\n  <app-typography-section></app-typography-section>\r\n  <app-angular-section></app-angular-section>\r\n</section>\r\n<section class=\"section section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\r\n      </div>\r\n      <div class=\"col-lg-6 mb-lg-auto\">\r\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n          <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n              </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-nucleo-section></app-nucleo-section>\r\n<section class=\"section section-lg section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row row-grid justify-content-between align-items-center\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"display-3 text-white\">A beautiful Design System\r\n          <span class=\"text-white\">completed with examples</span>\r\n        </h3>\r\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\r\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 mb-lg-auto\">\r\n        <div class=\"transform-perspective-right\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-versions-section></app-versions-section>\r\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "./src/app/sections/buttons-section/buttons-section.component.ts");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "./src/app/sections/inputs-section/inputs-section.component.ts");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "./src/app/sections/crs-section/crs-section.component.ts");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "./src/app/sections/navigation-section/navigation-section.component.ts");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "./src/app/sections/tabs-section/tabs-section.component.ts");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "./src/app/sections/alerts-section/alerts-section.component.ts");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "./src/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "./src/app/sections/angular-section/angular-section.component.ts");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "./src/app/sections/nucleo-section/nucleo-section.component.ts");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "./src/app/sections/versions-section/versions-section.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/sections/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- Tabs with icons -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n      </div>\r\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\r\n      <!-- Menu -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n      </div>\r\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n          <ngb-tab title=\"Home\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Profile\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Messages\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>40%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\r\n      </div>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>60%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\r\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n      </nav>\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\r\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n        </ngb-pagination>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-grid justify-content-between\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\r\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\r\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\r\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\r\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\r\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\r\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-section',
            template: __webpack_require__(/*! ./tabs-section.component.html */ "./src/app/sections/tabs-section/tabs-section.component.html"),
            styles: [__webpack_require__(/*! ./tabs-section.component.css */ "./src/app/sections/tabs-section/tabs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3R5cG9ncmFwaHktc2VjdGlvbi90eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Typography</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h5 class=\"mb-0\">Argon Design System </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h6 class=\"mb-0\">Argon Design System </h6>\r\n    </div>\r\n  </div>\r\n  <!-- Display titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <!-- Specialized titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div>\r\n        <h2 class=\"display-3\">Header with small subtitle </h2>\r\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Paragraphs -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in\r\n          <cite title=\"Source Title\">Source Title</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <!-- Images -->\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Images</span>\r\n  </h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\r\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\r\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\r\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\r\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-section',
            template: __webpack_require__(/*! ./typography-section.component.html */ "./src/app/sections/typography-section/typography-section.component.html"),
            styles: [__webpack_require__(/*! ./typography-section.component.css */ "./src/app/sections/typography-section/typography-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3ZlcnNpb25zLXNlY3Rpb24vdmVyc2lvbnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Do you love this awesome\r\n          <span class=\"text-success\">Design System for Angular?</span>\r\n        </h2>\r\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-versions-section',
            template: __webpack_require__(/*! ./versions-section.component.html */ "./src/app/sections/versions-section/versions-section.component.html"),
            styles: [__webpack_require__(/*! ./versions-section.component.css */ "./src/app/sections/versions-section/versions-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n \r\n <!--\r\n  <div class=\"container container-lg\" *ngIf=\"getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-5 mb-md-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/landing']\" title=\"Landing Page\">\r\n            <img src=\"./assets/img/theme/landing.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-5 mb-lg-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/user-profile']\" title=\"Profile Page\">\r\n            <img src=\"./assets/img/theme/profile.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  -->\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <!--\r\n\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\r\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-dribbble\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div>\r\n      -->\r\n    </div>\r\n    <hr>\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-6\">\r\n        \r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-footer justify-content-end text-white\">\r\n          <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n          <a href=\"https://www.advisingai.com\" class=\"text-white\" target=\"_blank\">AdvisingAI</a>\r\n        </div>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.linkedin.com/company/advisingai/\" class=\"pl-2 text-white\" target=\"_blank\">LinkedIn</a>\r\n          </li>\r\n          <!--\r\n          <li class=\"nav-item\">\r\n            <a href=\"http://blog.creative-tim.com?ref=adsa-footer\" class=\"pl-2 text-white\" target=\"_blank\">Blog</a>\r\n          </li>\r\n          -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\r\n      advising ai\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/home']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <!--\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Components</span>\r\n          </a>\r\n          <div class=\"dropdown-menu-xl dropdown-menu\" >\r\n            <div class=\"dropdown-menu-inner\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-palette\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        \r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Examples</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">Landing</a>\r\n            <a [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">Profile</a>\r\n            <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Login</a>\r\n            <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a>\r\n          </div>\r\n        </li>\r\n        -->\r\n      </ul>\r\n      \r\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n        <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.facebook.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Like us on Facebook\">\r\n            <i class=\"fa fa-facebook-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n          </a>\r\n        </li>\r\n        -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.linkedin.com/company/advisingai/\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\">\r\n            <i class=\"fa fa-linkedin\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">LinkedIn</span>\r\n          </a>\r\n        </li>\r\n        <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://twitter.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Twitter\">\r\n            <i class=\"fa fa-twitter-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Star us on Github\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\r\n          </a>\r\n        </li>\r\n        -->\r\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\r\n          <a href=\"mailto:momin@advisingai.com\" class=\"btn btn-neutral btn-icon\">\r\n            <span class=\"btn-inner--icon\">\r\n              <i class=\"ni ni-button-power mr-2\"></i>\r\n            </span>\r\n            <span class=\"nav-link-inner--text\">Get Demo</span>\r\n          </a>\r\n        </li>   \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign up with</small>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign up with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-muted font-italic\">\r\n                  <small>password strength:\r\n                    <span class=\"text-success font-weight-700\">strong</span>\r\n                  </small>\r\n                </div>\r\n                <div class=\"row my-4\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                        <span>I agree with the\r\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Momin\OneDrive - Southern Methodist University\Documents\AdvisingAI - Confidential\V1\Development\AdvisingAi-Landing-Page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map