webpackJsonp([2],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EfectosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EfectosService = (function () {
    function EfectosService(afDB) {
        this.afDB = afDB;
        this.efectos = [];
    }
    EfectosService.prototype.getEfectos = function () {
        return this.afDB.list('efectos/');
        //return this.efectos;
    };
    EfectosService.prototype.getEfecto = function (id) {
        return this.afDB.object('efectos/' + id);
        //return this.efectos.filter(function(e, i){ return e.id == id  })[0] || {id:null,title:null,description:null};
    };
    EfectosService.prototype.createEfecto = function (efecto) {
        this.afDB.database.ref('efectos/' + efecto.id).set(efecto);
        //this.efectos.push(efecto);
    };
    EfectosService.prototype.editEfecto = function (efecto) {
        this.afDB.database.ref('efectos/' + efecto.id).set(efecto);
    };
    EfectosService.prototype.deleteEFecto = function (efecto) {
        this.afDB.database.ref('efectos/' + efecto.id).remove();
    };
    EfectosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], EfectosService);
    return EfectosService;
    var _a;
}());

//# sourceMappingURL=efectos.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailEfectoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_efectos_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var DetailEfectoPage = (function () {
    function DetailEfectoPage(navCtrl, navParams, efectosService, cameraPlugin) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.efectosService = efectosService;
        this.cameraPlugin = cameraPlugin;
        this.efecto = { id: null, tipo: null, title: null, descripcion: null, ine: null, image: null };
        this.id = null;
        this.show = true;
        this.image = null;
        this.id = navParams.get('id');
        if (this.id != 0) {
            efectosService.getEfecto(this.id).valueChanges().subscribe(function (efecto) {
                _this.efecto = efecto;
            });
        }
    }
    DetailEfectoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailEfectoPage');
    };
    DetailEfectoPage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, pictures;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.cameraPlugin.DestinationType.DATA_URL,
                            encodingType: this.cameraPlugin.EncodingType.JPEG
                        };
                        return [4 /*yield*/, this.cameraPlugin.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,${result}';
                        pictures = Object(__WEBPACK_IMPORTED_MODULE_0_firebase__["storage"])().ref('pictures');
                        pictures.putString(image, 'data_url');
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailEfectoPage.prototype.addEfecto = function () {
        if (this.id != 0) {
            this.efectosService.editEfecto(this.efecto);
            alert('Datos del efecto editados con exito!');
        }
        else {
            this.efecto.id = Date.now();
            this.efectosService.createEfecto(this.efecto);
            alert('Efecto agregado con exito!');
        }
        this.navCtrl.pop();
    };
    DetailEfectoPage.prototype.deleteEfecto = function () {
        this.show = false;
        this.efectosService.deleteEFecto(this.efecto);
        alert('Efecto eliminado con exito: ');
        this.navCtrl.pop();
    };
    DetailEfectoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail-efecto',template:/*ion-inline-start:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\detail-efecto\detail-efecto.html"*/'<!--\n\n  Generated template for the DetailEfectoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle de Efectos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content *ngIf="show">\n\n  <ion-list>\n\n      <br>\n\n      <br>\n\n      <ion-item>\n\n          <ion-label>Tipo de Armamento</ion-label>\n\n          <ion-select [(ngModel)]="efecto.tipo">\n\n            <ion-option  value="Ametralladora">Ametralladora</ion-option>\n\n            <ion-option  value="Rifle">Rifle</ion-option>\n\n            <ion-option  value="Munición">Munición</ion-option>\n\n            <ion-option  value="Granada">Granada</ion-option>\n\n            <ion-option  value="Vehiculo">Vehiculo</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    <br>\n\n    <ion-item>\n\n      <ion-label >Nombre (INE) del Efecto</ion-label>\n\n      <ion-input type="text" [(ngModel)]="efecto.title"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n\n        <ion-label >NNE</ion-label>\n\n        <ion-input [(ngModel)]="efecto.nne"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n    <ion-item>\n\n      <ion-label >Descripción</ion-label>\n\n      <ion-textarea [(ngModel)]="efecto.description"></ion-textarea>\n\n    </ion-item>\n\n\n\n <br>\n\n     \n\n  </ion-list>\n\n  <button ion-button block (click)="takePhoto()">Agregar una foto</button>\n\n   \n\n  <br><button ion-button block (click)="addEfecto()">Editar Efecto</button>\n\n  <br><button ion-button block (click)="deleteEfecto()" color="danger" *ngIf=show>Eliminar Efecto</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\detail-efecto\detail-efecto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_efectos_service__["a" /* EfectosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_efectos_service__["a" /* EfectosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object])
    ], DetailEfectoPage);
    return DetailEfectoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=detail-efecto.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusquedaPage = (function () {
    function BusquedaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BusquedaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusquedaPage');
    };
    BusquedaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busqueda',template:/*ion-inline-start:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\busqueda\busqueda.html"*/'<!--\n  Generated template for the BusquedaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n\n    <ion-title>Busqueda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h5> Ingrese los campos de la busqueda</h5>\n    <form  #Busqueda="ngForm">\n      \n              <ion-item>\n                  <ion-label>Tipo de Armamento</ion-label>\n                  <ion-select>\n                    <ion-option value="Ametralladora">Ametralladora</ion-option>\n                    <ion-option value="Rifle">Rifle</ion-option>\n                    <ion-option value="Munición">Munición</ion-option>\n                    <ion-option value="Granada">Granada</ion-option>\n                    <ion-option value="Vehiculo">Vehiculo</ion-option>\n                  </ion-select>\n                </ion-item>\n                <br>\n              <ion-item>\n                  <ion-label>Nombre (INE) o NNE </ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n            \n                <br>\n       \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" >Buscar</button>\n          \n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </ion-content>\n      '/*ion-inline-end:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\busqueda\busqueda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BusquedaPage);
    return BusquedaPage;
}());

//# sourceMappingURL=busqueda.js.map

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/busqueda.module": [
		500,
		1
	],
	"../pages/detail-efecto/detail-efecto.module": [
		499,
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
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Ejercito Argentino</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <h5 style="padding-top:10px"> Control de efectos</h5>\n\n  <form  #registerForm="ngForm">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list inset>\n\n          \n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Usuario" name="user"  required></ion-input>\n\n          </ion-item>\n\n          \n\n          <ion-item>\n\n            <ion-input type="password" placeholder="Contraseña" name="password"  required></ion-input>\n\n          </ion-item>\n\n          \n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col class="signup-col">\n\n        <button ion-button class="submit-btn" full type="submit" >Login</button>\n\n        <button ion-button class="register-btn" block clear >Crear nuevo usuario</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_efectos_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_efecto_detail_efecto__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, NavParams, EfectosService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.NavParams = NavParams;
        this.EfectosService = EfectosService;
        this.efectos = [];
        EfectosService.getEfectos().valueChanges().subscribe(function (efectos) {
            console.log(efectos);
            _this.efectos = efectos;
        });
    }
    ListPage.prototype.goToDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_efecto_detail_efecto__["a" /* DetailEfectoPage */], { id: id });
    };
    ListPage.prototype.createEfecto = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_efecto_detail_efecto__["a" /* DetailEfectoPage */], { id: 0 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], ListPage.prototype, "nav", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Listado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ion-list>\n\n        <button ion-item *ngFor="let efecto of efectos" (click)="goToDetail(efecto.id)">\n\n           <!-- <ion-icon name="md-radio-button-off"></ion-icon> !-->\n\n          {{ efecto.title }}\n\n        </button>  \n\n      </ion-list>\n\n      <div padding>\n\n        <button ion-button block (click)="createEfecto()">Crear Efecto</button>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\TomasDamianovich\ControlEfectos\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_efectos_service__["a" /* EfectosService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(329);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_efectos_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_efecto_detail_efecto__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_busqueda_busqueda__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: "AIzaSyDnj2zV9XI7QhxWI-1u7aOuGa-reDvdjzM",
    authDomain: "controlefectos.firebaseapp.com",
    databaseURL: "https://controlefectos.firebaseio.com",
    projectId: "controlefectos",
    storageBucket: "controlefectos.appspot.com",
    messagingSenderId: "734214442093"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_efecto_detail_efecto__["a" /* DetailEfectoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_busqueda_busqueda__["a" /* BusquedaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-efecto/detail-efecto.module#DetailEfectoPageModule', name: 'DetailEfectoPage', segment: 'detail-efecto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/busqueda.module#BusquedaPageModule', name: 'BusquedaPage', segment: 'busqueda', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_efecto_detail_efecto__["a" /* DetailEfectoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_busqueda_busqueda__["a" /* BusquedaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_efectos_service__["a" /* EfectosService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_busqueda_busqueda__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "ios-contact-outline" },
            { title: 'Listado', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: "ios-list-box-outline" },
            { title: 'Busqueda', component: __WEBPACK_IMPORTED_MODULE_6__pages_busqueda_busqueda__["a" /* BusquedaPage */], icon: "ios-search-outline" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\TomasDamianovich\ControlEfectos\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n\n          {{ p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\TomasDamianovich\ControlEfectos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map