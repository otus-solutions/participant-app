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

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center;\" fxLayout=\"column\" fxFlexFill >\n  <mat-toolbar color=\"primary\" *ngIf=\"currentUser\">\n    <mat-toolbar-row fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n      <span id=\"title\">{{ title }}</span>\n      <span fxFlex></span>\n      <div fxFlex=\"\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\n        <button mat-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"user\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"\n                    matBadgePosition=\"before\">account_circle</mat-icon>\n          {{ currentUser.name }}\n        </button>\n        <mat-menu #menu=\"matMenu\" fxLayout=\"column\">\n          <button mat-menu-item class=\"mat-button mat-flat-button\" fxFlex (click)=\"logout()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"menu\">exit_to_app</mat-icon>\n            Sair\n          </button>\n        </mat-menu>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <app-alert></app-alert>\n  <mat-sidenav-container fxFlex=\"100\">\n    <mat-sidenav-content style=\"background-color: #ffffff\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/create-account/create-account.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/create-account/create-account.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-page creation\">\n  <div class=\"content\">\n    <mat-card class=\"mat-elevation-z11\" fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"60\" fxFlex.gt-lg=\"30\" fxFlex=\"90\">\n      <mat-card-title>{{ title }}</mat-card-title>\n      <mat-card-content fxLayout=\"column\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n          <p>\n            <mat-form-field fxFlex>\n              <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\">\n              <mat-hint>A senha deve conter no mínimo 8 caracteres com pelo menos uma letra maiúscula, uma minúscula e um caractere especial</mat-hint>\n              <mat-error *ngIf=\"f.password.hasError('required')\">\n                <span [innerHTML]=\"requiredMessage | sanitizeHtml\"></span>\n              </mat-error>\n              <mat-error *ngIf=\"f.password.hasError('confirm')\">\n                Senhas diferentes\n              </mat-error>\n              <mat-error *ngIf=\"f.password.hasError('pattern')\">\n                A senha deve conter no mínimo 8 caracteres com pelo menos uma letra maiúscula, uma minúscula e um caractere especial\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field fxFlex>\n              <input type=\"password\" matInput placeholder=\"Confirmar senha\" formControlName=\"confirmPassword\">\n              <mat-error *ngIf=\"f.confirmPassword.hasError('required')\">\n                Campo <strong>obrigatório</strong>\n              </mat-error>\n              <mat-error *ngIf=\"f.confirmPassword.hasError('mustMatch')\">\n                Senhas diferentes\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"20px\">\n            <div class=\"button\">\n              <button type=\"submit\" mat-button fxFlexFill mat-raised-button color=\"primary\" [disabled]=\"registerForm.invalid\">Cadastrar</button>\n            </div>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-page\">\n  <div class=\"content\">\n    <mat-card class=\"mat-elevation-z11\">\n      <mat-card-title>{{ title }}</mat-card-title>\n      <mat-card-content fxLayout=\"column\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n          <p>\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n              <mat-error i18n=\"email-login\"\n                         *ngIf=\"f.email.hasError('email') && !f.email.hasError('required')\">\n                Email invalido!\n              </mat-error>\n              <mat-error *ngIf=\"f.email.hasError('required')\">\n                <span [innerHTML]=\"requiredMessage | sanitizeHtml\"></span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field>\n              <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\"\n                     [type]=\"hide ? 'password' : 'text'\">\n              <span mat-icon-button style=\"cursor: pointer\" matSuffix (click)=\"hide = !hide\"\n                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </span>\n              <mat-error *ngIf=\"f.email.hasError('required')\">\n                <span [innerHTML]=\"requiredMessage | sanitizeHtml\"></span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n            <div class=\"button\">\n              <button [disabled]=\"loading\" type=\"submit\" mat-button fxFlexFill class=\"mat-raised-button mat-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Login\n              </button>\n            </div>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/alert/app-alert.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/components/alert/app-alert.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center;\" fxLayout=\"column\" fxFlexFill>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/error-page/error-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./web/app/components/error-page/error-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-drawer-container\" fxFlexFill>\n  <div fxLayout=\"row\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\n    <img src=\"/assets/img/otus-crash.png\" class=\"error-image\">\n  </div>\n  <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutAlign=\"start center\">\n    <h1 class=\"mat-title\">{{errorCode}} {{errorMessage}}</h1>\n    <div class=\"button\">\n      <button (click)=\"goBack()\" mat-button fxFlexFill>Voltar</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./web/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./web/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var components_1 = __webpack_require__(/*! ./components */ "./web/app/components/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./web/app/utils/index.ts");
var create_account_component_1 = __webpack_require__(/*! ./components/account/create-account/create-account.component */ "./web/app/components/account/create-account/create-account.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: components_1.LoginComponent
    },
    {
        path: 'register/:action',
        component: create_account_component_1.CreateAccountComponent
    },
    {
        path: 'dashboard',
        component: components_1.DashboardComponent,
        canActivate: [utils_1.AuthGuard]
    },
    {
        path: '**',
        component: components_1.ErrorPageComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./web/app/app.component.css":
/*!***********************************!*\
  !*** ./web/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWIvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./web/app/app.component.ts":
/*!**********************************!*\
  !*** ./web/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var layout_1 = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var providers_1 = __webpack_require__(/*! ./providers */ "./web/app/providers/index.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService, matIconRegistry, domSanitizer, changeDetectorRef, media) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.title = 'Participant-app';
        this.authenticationService.CurrentUser.subscribe(function (user) {
            _this.currentUser = user;
            if (!user) {
                _this.opened = false;
            }
        });
        // this.matIconRegistry.addSvgIcon(
        //   'participant-app',
        //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/participant-app.svg')
        // );
        this.mobileQuery = media.matchMedia('(max-width: 1024px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout(function () {
            _this.opened = false;
            _this.router.navigate(['/login']);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.opened = !this.mobileQuery.matches && this.authenticationService.currentUserValue !== undefined && this.hasLogged();
    };
    AppComponent.prototype.hasLogged = function () {
        return !!this.authenticationService.currentUserValue;
    };
    AppComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: providers_1.AuthenticationService },
        { type: icon_1.MatIconRegistry },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef },
        { type: layout_1.MediaMatcher }
    ]; };
    __decorate([
        core_1.ViewChild('sidenav', { static: true }),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./web/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            providers_1.AuthenticationService,
            icon_1.MatIconRegistry,
            platform_browser_1.DomSanitizer,
            core_1.ChangeDetectorRef,
            layout_1.MediaMatcher])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./web/app/app.module.ts":
/*!*******************************!*\
  !*** ./web/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./web/app/app.component.ts");
var service_worker_1 = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./web/app/app-routing.module.ts");
var components_1 = __webpack_require__(/*! ./components */ "./web/app/components/index.ts");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./web/environments/environment.ts");
var sanitize_html_pipe_1 = __webpack_require__(/*! ./utils/sanitize-html/sanitize-html.pipe */ "./web/app/utils/sanitize-html/sanitize-html.pipe.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var create_account_component_1 = __webpack_require__(/*! ./components/account/create-account/create-account.component */ "./web/app/components/account/create-account/create-account.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                components_1.LoginComponent,
                components_1.AppAlertComponent,
                components_1.DashboardComponent,
                components_1.ErrorPageComponent,
                sanitize_html_pipe_1.SanitizeHtmlPipe,
                create_account_component_1.CreateAccountComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MatNativeDateModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatIconModule,
                flex_layout_1.FlexLayoutModule,
                service_worker_1.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment_1.environment.production }),
                material_1.MatMenuModule,
                material_1.MatSidenavModule,
                router_1.RouterModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                material_1.MatCardModule,
                material_1.MatDatepickerModule,
                material_1.MatRadioModule
            ],
            providers: [
                ngx_cookie_service_1.CookieService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./web/app/components/account/account.scss":
/*!*************************************************!*\
  !*** ./web/app/components/account/account.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".account-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n}\n.account-page .content {\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n.account-page .content .mat-form-field {\n  width: 100%;\n  min-width: 252px;\n}\n.account-page .content mat-card-title,\n.account-page .content mat-card-content {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n}\n.account-page .content .button {\n  display: flex;\n  justify-content: center;\n}\n.account-page:after {\n  content: \"\";\n  background: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 50%;\n  right: 0;\n}\n.account-page:before {\n  content: \"\";\n  background: #3f51b5;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@media screen and (max-width: 360px) {\n  .creation {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fkcmlhbm8vRGVzZW52b2x2aW1lbnRvL290dXMtc29sdXRpb25zL3BhcnRpY2lwYW50LWFwcC9zb3VyY2Uvd2ViL2FwcC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5zY3NzIiwid2ViL2FwcC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR047QURESTs7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDR047QURESTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0dOO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ0o7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoid2ViL2FwcC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmNvbnRlbnQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4td2lkdGg6IDI1MnB4O1xuICAgIH1cbiAgICBtYXQtY2FyZC10aXRsZSxcbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XG4gIC5jcmVhdGlvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cblxuIiwiLmFjY291bnQtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hY2NvdW50LXBhZ2UgLmNvbnRlbnQge1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFjY291bnQtcGFnZSAuY29udGVudCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTJweDtcbn1cbi5hY2NvdW50LXBhZ2UgLmNvbnRlbnQgbWF0LWNhcmQtdGl0bGUsXG4uYWNjb3VudC1wYWdlIC5jb250ZW50IG1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hY2NvdW50LXBhZ2UgLmNvbnRlbnQgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFjY291bnQtcGFnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDUwJTtcbiAgcmlnaHQ6IDA7XG59XG4uYWNjb3VudC1wYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5jcmVhdGlvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./web/app/components/account/create-account/create-account.component.ts":
/*!*******************************************************************************!*\
  !*** ./web/app/components/account/create-account/create-account.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var providers_1 = __webpack_require__(/*! ../../../providers */ "./web/app/providers/index.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./web/environments/environment.ts");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./web/app/utils/index.ts");
var required = forms_1.Validators.required, email = forms_1.Validators.email, pattern = forms_1.Validators.pattern;
var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(formBuilder, route, router, authenticationService, accountClientService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.accountClientService = accountClientService;
        this.alertService = alertService;
        this.title = 'Cadastrar senha';
        this.loading = false;
        this.submitted = false;
        this.requiredMessage = environment_1.environment.requiredMessage;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.email = this.route.snapshot.paramMap.get('email');
        this.registerForm = this.formBuilder.group({
            password: new forms_1.FormControl('', [required, pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            confirmPassword: new forms_1.FormControl('', [required])
        }, {
            validator: utils_1.MustMatch('password', 'confirmPassword')
        });
    };
    Object.defineProperty(CreateAccountComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.alertService.clear();
        if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            this.f.password.setErrors({ confirm: 'sda' });
            this.f.confirmPassword.setErrors({ confirm: 'sda' });
        }
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.accountClientService.register(this.email, this.registerForm.value.password)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.alertService.success('Senha cadastrada com sucesso', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CreateAccountComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    CreateAccountComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: providers_1.AuthenticationService },
        { type: providers_1.AccountClientService },
        { type: providers_1.AlertService }
    ]; };
    CreateAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-create-account',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/create-account/create-account.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../account.scss */ "./web/app/components/account/account.scss")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            providers_1.AuthenticationService,
            providers_1.AccountClientService,
            providers_1.AlertService])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());
exports.CreateAccountComponent = CreateAccountComponent;


/***/ }),

/***/ "./web/app/components/account/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./web/app/components/account/login/login.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var providers_1 = __webpack_require__(/*! ../../../providers */ "./web/app/providers/index.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./web/environments/environment.ts");
var required = forms_1.Validators.required, email = forms_1.Validators.email;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.title = 'Participant App';
        this.hide = true;
        this.loading = false;
        this.submitted = false;
        this.requiredMessage = environment_1.environment.requiredMessage;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: new forms_1.FormControl('', [required, email]),
            password: new forms_1.FormControl('', [required])
        });
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.alertService.clear();
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: providers_1.AuthenticationService },
        { type: providers_1.AlertService }
    ]; };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/account/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../account.scss */ "./web/app/components/account/account.scss")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            providers_1.AuthenticationService,
            providers_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./web/app/components/alert/app-alert.component.ts":
/*!*********************************************************!*\
  !*** ./web/app/components/alert/app-alert.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var providers_1 = __webpack_require__(/*! ../../providers */ "./web/app/providers/index.ts");
var AppAlertComponent = /** @class */ (function () {
    function AppAlertComponent(alertService) {
        this.alertService = alertService;
    }
    AppAlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert()
            .subscribe(function (message) {
            if (message && typeof message === 'object') {
                switch (message && message['type']) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }
            }
            else { }
            _this.message = message;
        });
    };
    AppAlertComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppAlertComponent.ctorParameters = function () { return [
        { type: providers_1.AlertService }
    ]; };
    AppAlertComponent = __decorate([
        core_1.Component({
            selector: 'app-alert',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/alert/app-alert.component.html")).default
        }),
        __metadata("design:paramtypes", [providers_1.AlertService])
    ], AppAlertComponent);
    return AppAlertComponent;
}());
exports.AppAlertComponent = AppAlertComponent;


/***/ }),

/***/ "./web/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./web/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-background {\n  width: 150px;\n  display: flex;\n  opacity: 0.2;\n  bottom: 10px;\n  right: 10px;\n  position: fixed;\n  z-index: -1000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6IndlYi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTEwMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./web/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./web/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, ngZone, route) {
        this.router = router;
        this.ngZone = ngZone;
        this.route = route;
        this.title = 'Otus Randomization';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // window.location.href='https://otus.hmg.ccem.ufrgs.br/otus';
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: core_1.NgZone },
        { type: router_1.ActivatedRoute }
    ]; };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./web/app/components/dashboard/dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.Router, core_1.NgZone, router_1.ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./web/app/components/error-page/error-page.component.css":
/*!****************************************************************!*\
  !*** ./web/app/components/error-page/error-page.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-image {\n  width: 50vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi9hcHAvY29tcG9uZW50cy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ3ZWIvYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaW1hZ2Uge1xuICB3aWR0aDogNTB2aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./web/app/components/error-page/error-page.component.ts":
/*!***************************************************************!*\
  !*** ./web/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams.returnUrl) {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl;
            var queryIndex = this.returnUrl.indexOf('?');
            if (queryIndex > -1) {
                this.returnUrl = this.returnUrl.slice(0, queryIndex);
            }
        }
        else {
            this.returnUrl = '/login';
        }
        this.errorCode = this.route.snapshot.queryParams.errorCode || 404;
        this.errorMessage = this.route.snapshot.queryParams.errorMessage || 'Page not found';
    };
    ErrorPageComponent.prototype.goBack = function () {
        this.router.navigate([this.returnUrl]);
    };
    ErrorPageComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: router_1.Router }
    ]; };
    ErrorPageComponent = __decorate([
        core_1.Component({
            selector: 'app-error-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./web/app/components/error-page/error-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./error-page.component.css */ "./web/app/components/error-page/error-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());
exports.ErrorPageComponent = ErrorPageComponent;


/***/ }),

/***/ "./web/app/components/index.ts":
/*!*************************************!*\
  !*** ./web/app/components/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./account/login/login.component */ "./web/app/components/account/login/login.component.ts"));
__export(__webpack_require__(/*! ./alert/app-alert.component */ "./web/app/components/alert/app-alert.component.ts"));
__export(__webpack_require__(/*! ./error-page/error-page.component */ "./web/app/components/error-page/error-page.component.ts"));
__export(__webpack_require__(/*! ./dashboard/dashboard.component */ "./web/app/components/dashboard/dashboard.component.ts"));


/***/ }),

/***/ "./web/app/model/account/user.ts":
/*!***************************************!*\
  !*** ./web/app/model/account/user.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.fromJSON = function (userJson) {
        this.id = userJson._id;
        this.name = userJson.name;
        this.surname = userJson.surname;
        this.email = userJson.email;
        this.sex = userJson.sex;
        this.birthdate = userJson.birthdate;
        if (userJson.billing) {
            this.billing = userJson.billing;
        }
    };
    User.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            email: this.email,
            sex: this.sex,
            birthdate: this.birthdate
        };
    };
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./web/app/model/index.ts":
/*!********************************!*\
  !*** ./web/app/model/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./account/user */ "./web/app/model/account/user.ts"));


/***/ }),

/***/ "./web/app/providers/account/authentication/authentication.service.ts":
/*!****************************************************************************!*\
  !*** ./web/app/providers/account/authentication/authentication.service.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var model_1 = __webpack_require__(/*! ../../../model */ "./web/app/model/index.ts");
var account_client_service_1 = __webpack_require__(/*! ../../rest/account-client.service */ "./web/app/providers/rest/account-client.service.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(client, cookieService) {
        this.client = client;
        this.cookieService = cookieService;
        var userJSON = JSON.parse(localStorage.getItem('currentUser'));
        if (userJSON) {
            var user = new model_1.User();
            user.fromJSON(userJSON);
            this.currentUserSubject = new rxjs_1.BehaviorSubject(user);
        }
        else {
            this.currentUserSubject = new rxjs_1.BehaviorSubject(null);
        }
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "CurrentUser", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "authToken", {
        get: function () {
            return this.cookieService.get('authToken');
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.client.login(username, password, function (resultJson) {
            localStorage.setItem('currentUser', JSON.stringify(resultJson.user));
            _this.cookieService.set('authToken', resultJson.token, 1);
            var user = new model_1.User();
            user.fromJSON(resultJson.user);
            _this.currentUserSubject.next(user);
        });
    };
    AuthenticationService.prototype.logout = function (navigateToLogin) {
        var _this = this;
        this.client.logout(function () {
            _this.clearLocalStorage();
            navigateToLogin();
        });
    };
    AuthenticationService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('authToken');
        this.cookieService.deleteAll();
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: account_client_service_1.AccountClientService },
        { type: ngx_cookie_service_1.CookieService }
    ]; };
    AuthenticationService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [account_client_service_1.AccountClientService, ngx_cookie_service_1.CookieService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./web/app/providers/alert.service.ts":
/*!********************************************!*\
  !*** ./web/app/providers/alert.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_1.Subject();
        this.keepAfterRouteChange = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterRouteChange) {
                    _this.keepAfterRouteChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: router_1.Router }
    ]; };
    AlertService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;


/***/ }),

/***/ "./web/app/providers/index.ts":
/*!************************************!*\
  !*** ./web/app/providers/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./alert.service */ "./web/app/providers/alert.service.ts"));
__export(__webpack_require__(/*! ./account/authentication/authentication.service */ "./web/app/providers/account/authentication/authentication.service.ts"));
__export(__webpack_require__(/*! ./rest/account-client.service */ "./web/app/providers/rest/account-client.service.ts"));


/***/ }),

/***/ "./web/app/providers/rest/account-client.service.ts":
/*!**********************************************************!*\
  !*** ./web/app/providers/rest/account-client.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./web/environments/environment.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var AccountClientService = /** @class */ (function () {
    function AccountClientService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        if (this.cookieService.get(environment_1.environment.API_URL)) {
            this.baseUrl = this.cookieService.get(environment_1.environment.API_URL) + '/api';
        }
        else {
            this.baseUrl = environment_1.environment.baseUrl;
        }
    }
    AccountClientService.prototype.login = function (email, password, setCurrentUser) {
        setCurrentUser({ user: { _id: 'teste', name: 'Adriano' } });
        var b = new rxjs_1.BehaviorSubject([{ name: 'Adriano' }]);
        var obs = b.asObservable();
        return obs;
        // return this.http.post<any>(`${this.baseUrl}${environment.loginUrl}`, { email, password })
        //   .pipe(map(result => {
        //     setCurrentUser(result.data);
        //     return result.data;
        //   }));
    };
    AccountClientService.prototype.logout = function (clearLocalStorage) {
        clearLocalStorage();
        var b = new rxjs_1.BehaviorSubject([{ name: 'Adriano' }]);
        var obs = b.asObservable();
        return obs;
        // return this.http.delete<any>(`${this.baseUrl}${environment.logoutUrl}`).subscribe(() => clearLocalStorage());
    };
    AccountClientService.prototype.register = function (email, password) {
        var b = new rxjs_1.BehaviorSubject([{ name: 'Adriano' }]);
        var obs = b.asObservable();
        return obs;
        // return this.http.post<any>(`${this.baseUrl}${environment.createAccountUrl}`, user)
        //   .pipe(map(result => {
        //     return result;
        //   }));
    };
    AccountClientService.prototype.verify = function (email, password) {
        var b = new rxjs_1.BehaviorSubject([{ name: 'Adriano' }]);
        var obs = b.asObservable();
        return obs;
        // return this.http.post<any>(`${this.baseUrl}${environment.createAccountUrl}`, user)
        //   .pipe(map(result => {
        //     return result;
        //   }));
    };
    AccountClientService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: ngx_cookie_service_1.CookieService }
    ]; };
    AccountClientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ngx_cookie_service_1.CookieService])
    ], AccountClientService);
    return AccountClientService;
}());
exports.AccountClientService = AccountClientService;


/***/ }),

/***/ "./web/app/utils/index.ts":
/*!********************************!*\
  !*** ./web/app/utils/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./interceptor/auth.guard */ "./web/app/utils/interceptor/auth.guard.ts"));
__export(__webpack_require__(/*! ./must-match/must-math */ "./web/app/utils/must-match/must-math.ts"));
__export(__webpack_require__(/*! ./interceptor/error.interceptor */ "./web/app/utils/interceptor/error.interceptor.ts"));
__export(__webpack_require__(/*! ./interceptor/jwt.interceptor */ "./web/app/utils/interceptor/jwt.interceptor.ts"));


/***/ }),

/***/ "./web/app/utils/interceptor/auth.guard.ts":
/*!*************************************************!*\
  !*** ./web/app/utils/interceptor/auth.guard.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var providers_1 = __webpack_require__(/*! ../../providers */ "./web/app/providers/index.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: providers_1.AuthenticationService }
    ]; };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            providers_1.AuthenticationService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./web/app/utils/interceptor/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./web/app/utils/interceptor/error.interceptor.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var providers_1 = __webpack_require__(/*! ../../providers */ "./web/app/providers/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.catchError(function (err) {
            var navigationExtras = {};
            var navigateTo;
            if (err.status === 401) {
                _this.authenticationService.clearLocalStorage();
                navigateTo = ['/login'];
                _this.router.navigate(['/']);
            }
            else if (err.status === 500) {
                navigateTo = ['/**'];
                navigationExtras = {
                    queryParams: {
                        returnUrl: _this.router.routerState.snapshot.url,
                        errorCode: 500,
                        errorMessage: err.error.data.message
                    }
                };
            }
            if (navigateTo) {
                _this.router.navigate(navigateTo, navigationExtras);
            }
            var error = (err.error.data && err.error.data.message) || err.statusText;
            return rxjs_1.throwError(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: providers_1.AuthenticationService },
        { type: router_1.Router }
    ]; };
    ErrorInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [providers_1.AuthenticationService,
            router_1.Router])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;


/***/ }),

/***/ "./web/app/utils/interceptor/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./web/app/utils/interceptor/jwt.interceptor.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./web/environments/environment.ts");
var providers_1 = __webpack_require__(/*! ../../providers */ "./web/app/providers/index.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService, cookieService) {
        this.authenticationService = authenticationService;
        this.cookieService = cookieService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var authToken = this.authenticationService.authToken;
        var baseURL = this.cookieService.get(environment_1.environment.API_URL) ? this.cookieService.get(environment_1.environment.API_URL) + '/api' : environment_1.environment.baseUrl;
        if (authToken && request.url.match(baseURL)) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + authToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: providers_1.AuthenticationService },
        { type: ngx_cookie_service_1.CookieService }
    ]; };
    JwtInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [providers_1.AuthenticationService, ngx_cookie_service_1.CookieService])
    ], JwtInterceptor);
    return JwtInterceptor;
}());
exports.JwtInterceptor = JwtInterceptor;


/***/ }),

/***/ "./web/app/utils/must-match/must-math.ts":
/*!***********************************************!*\
  !*** ./web/app/utils/must-match/must-math.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}
exports.MustMatch = MustMatch;


/***/ }),

/***/ "./web/app/utils/sanitize-html/sanitize-html.pipe.ts":
/*!***********************************************************!*\
  !*** ./web/app/utils/sanitize-html/sanitize-html.pipe.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer }
    ]; };
    SanitizeHtmlPipe = __decorate([
        core_1.Pipe({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());
exports.SanitizeHtmlPipe = SanitizeHtmlPipe;


/***/ }),

/***/ "./web/environments/environment.ts":
/*!*****************************************!*\
  !*** ./web/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    API_URL: 'RANDOMIZATION_API',
    baseUrl: 'http://localhost:3000/api',
    loginUrl: '/login',
    logoutUrl: '/logout',
    requiredMessage: 'Este campo é <strong>obrigatório</strong>'
};


/***/ }),

/***/ "./web/main.ts":
/*!*********************!*\
  !*** ./web/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./web/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./web/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./web/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adriano/Desenvolvimento/otus-solutions/participant-app/source/web/main.ts */"./web/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map