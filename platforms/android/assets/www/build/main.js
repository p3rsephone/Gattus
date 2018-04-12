webpackJsonp([2],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QrResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrResultPage = /** @class */ (function () {
    function QrResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contents = navParams.get('contents');
    }
    QrResultPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        Promise.resolve(this.contents).then(JSON.parse).then(function (res) {
            _this.json = res;
        });
    };
    QrResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-result',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/qr-result/qr-result.html"*/'<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title>Resultado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="json[0].maior21 !== undefined">\n    <ion-card-header>Maior de 21 anos?</ion-card-header>\n    <ion-card-content *ngIf="json[0].maior21" class="positivo">\n      SIM\n    </ion-card-content>\n    <ion-card-content *ngIf="!json[0].maior21" class="negativo">\n      NÃO\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="json[0].maior18 !== undefined">\n    <ion-card-header>Maior de 18 anos?</ion-card-header>\n    <ion-card-content *ngIf="json[0].maior18" class="positivo">\n      SIM\n    </ion-card-content>\n    <ion-card-content *ngIf="!json[0].maior18" class="negativo">\n      NÃO\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/qr-result/qr-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], QrResultPage);
    return QrResultPage;
}());

//# sourceMappingURL=qr-result.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lock_screen_lock_screen__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = navParams.get('storage');
        console.log("Settings");
        this.storage.get('password_encrypt').then(function (pwd) {
            _this.pincode = String(pwd);
        });
        this.restoreSettings();
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.restoreSettings = function () {
    };
    SettingsPage.prototype.reset = function () {
        this.storage.clear();
        this.navCtrl.parent.select(0);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__lock_screen_lock_screen__["a" /* LockScreenPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button color="danger" block outline>Reset</button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tab1Params = {
            pincode: this.navParams.get('pincode')
        };
        this.tab2Params = {
            pincode: this.navParams.get('pincode'),
            storage: this.navParams.get('storage')
        };
    }
    TabsPage.prototype.ionViewDidLoad = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/tabs/tabs.html"*/'<ion-tabs color="favorite">\n\n  <ion-tab [root]="tab1Root" [rootParams]="tab1Params" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="tab2Params" tabTitle="Settings" tabIcon="construct"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/lock-screen/lock-screen.module": [
		317,
		1
	],
	"../pages/qr-result/qr-result.module": [
		318,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qr_result_qr_result__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, alertCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.pincode = navParams.get('pincode');
    }
    HomePage.prototype.popup = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: "Conteúdo não é uma carta.",
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.data = barcodeData.text;
            _this.openItem(barcodeData.text);
        }, function (err) {
            _this.popup();
        });
    };
    HomePage.prototype.openItem = function (text) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__qr_result_qr_result__["a" /* QrResultPage */], {
            contents: text
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Home\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="pin-container">\n    <button ion-button large icon-start (click)="scan()">\n        <ion-icon name="camera"></ion-icon>\n        Scan QR\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_qr_result_qr_result__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lock_screen_lock_screen__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_pincode_input__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_fingerprint_aio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_qr_result_qr_result__["a" /* QrResultPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic2_pincode_input__["b" /* PincodeInputModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/lock-screen/lock-screen.module#LockScreenPageModule', name: 'LockScreenPage', segment: 'lock-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-result/qr-result.module#QrResultPageModule', name: 'QrResultPage', segment: 'qr-result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_qr_result_qr_result__["a" /* QrResultPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__["a" /* LockScreenPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LockScreenPage = /** @class */ (function () {
    function LockScreenPage(navCtrl, navParams, pincodeCtrl, storage, alertCtrl, faio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.faio = faio;
    }
    LockScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Try to get password stored
        this.storage.get('password_encrypt').then(function (pdw) {
            if (pdw) {
                console.log("Encrypted passwordk: " + pdw);
            }
            else {
                _this.presentAlert('PIN', "Para começar a usar a aplicação precisa de configurar um PIN de 6 digitos.", true);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage.prototype.openPinCode = function (register) {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Insira um PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: register,
            enableBackdropDismiss: !register //Se estiver a registar tem que configurar
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            // If user enter a password and the fase if confirm
            // do a login
            if (status === 'done' && !register) {
                _this.login(code);
            }
            else if (status === 'done' && register) {
                _this.code = code;
                // Confirm if pincodes match
                _this.confirmCode();
            }
        });
    };
    LockScreenPage.prototype.confirmCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Confirme o seu PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: true,
            enableBackdropDismiss: false
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                if (_this.code == code) {
                    // if match send a message and do a registration of pin code
                    _this.presentAlert("PIN configurado!", "Pode mudar o PIN mais tarde nas Definições.", false);
                    _this.register(code);
                }
                else {
                    _this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.", false);
                    _this.openPinCode(true);
                }
            }
        });
    };
    LockScreenPage.prototype.startTouchID = function () {
        var _this = this;
        this.faio.show({
            clientId: 'FingerPrintLockScreen',
            clientSecret: 'lasd08aah@981',
            disableBackup: true,
            localizedFallbackTitle: 'Insira o Pin',
            localizedReason: 'Autentique-se' //Only for iOS
        })
            .then(function (result) {
            // If the TouchID is correct
            _this.storage.get('password_encrypt').then(function (pwd) {
                var stored_pincode = String(pwd);
                console.log("Stored password: " + stored_pincode);
                // Go to home page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
                    pincode: stored_pincode,
                    storage: _this.storage
                });
            });
        });
    };
    LockScreenPage.prototype.presentAlert = function (title, message, register) {
        var _this = this;
        var botoes;
        if (register) {
            botoes = [
                {
                    text: 'OK',
                    handler: function () {
                        _this.openPinCode(true);
                    }
                }
            ];
        }
        else {
            botoes = ["OK"];
        }
        var alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            title: title,
            subTitle: message,
            buttons: botoes
        });
        alert.present();
    };
    //Encryption
    LockScreenPage.prototype.register = function (pincode) {
        var hash = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        this.storage.set('password_encrypt', hash);
        this.storage.set('settings', "");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
            pincode: hash,
            storage: this.storage
        });
    };
    LockScreenPage.prototype.login = function (pincode) {
        var _this = this;
        // store passwords 
        var entered_pincode = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        // get password stored on local storage
        this.storage.get('password_encrypt').then(function (pwd) {
            var stored_pincode = String(pwd);
            console.log("Stored password: " + stored_pincode);
            // if match go to home page
            if (entered_pincode == stored_pincode) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], {
                    pincode: entered_pincode,
                    storage: _this.storage
                });
            }
            else {
                _this.presentAlert("Erro", "PIN errado", false);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-lock-screen',template:/*ion-inline-start:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/lock-screen/lock-screen.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Policia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!--<h4 text-center>Insira o seu PIN</h4> -->\n  <div class="pin-container">\n    <button ion-button icon-only full (click)="openPinCode(false)" style="background-color:rgb(55, 130, 214);">\n      <ion-icon name="lock"></ion-icon>\n    </button>\n    <button ion-button icon-only full (click)="startTouchID()" style="background-color: rgb(55, 130, 214);">\n      <ion-icon name="finger-print"></ion-icon>\n    </button>\n  </div>  \n</ion-content>'/*ion-inline-end:"/Volumes/MacintoshHD/tdosilva/Projects/Ionic/blank/src/pages/lock-screen/lock-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__["a" /* PincodeController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], LockScreenPage);
    return LockScreenPage;
}());

//# sourceMappingURL=lock-screen.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map