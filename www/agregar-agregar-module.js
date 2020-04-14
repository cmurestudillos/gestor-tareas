(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-agregar-module"],{

/***/ "./src/app/models/lista-item.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/lista-item.model.ts ***!
  \********************************************/
/*! exports provided: ListaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaItem", function() { return ListaItem; });
var ListaItem = /** @class */ (function () {
    function ListaItem(descrip) {
        this.descripcion = descrip;
        this.completado = false;
    }
    return ListaItem;
}());



/***/ }),

/***/ "./src/app/pages/agregar/agregar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.module.ts ***!
  \*************************************************/
/*! exports provided: AgregarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function() { return AgregarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");







var routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]
    }
];
var AgregarPageModule = /** @class */ (function () {
    function AgregarPageModule() {
    }
    AgregarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]]
        })
    ], AgregarPageModule);
    return AgregarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ lista.titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n    <ion-list color=\"dark\">\n      <ion-item color=\"dark\">\n        <ion-label position=\"floating\">Nuevo item</ion-label>\n        <ion-input type=\"text\"\n                   [(ngModel)]=\"nombreItem\"\n                   (keyup.enter)=\"agregarItem()\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header color=\"dark\" *ngIf=\"lista.items.length > 0\">\n        <ion-label>Tareas por hacer</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of lista.items; let i = index\"\n                        class=\"animated fadeInDown\">\n\n        <ion-item color=\"dark\">\n          <ion-checkbox slot=\"start\"\n                        color=\"tertiary\"\n                        [(ngModel)]=\"item.completado\"\n                        (ionChange)=\"cambioCheck( item )\"></ion-checkbox>\n          <ion-label>{{ item.descripcion }}</ion-label>\n        </ion-item>\n<!-- Boton Eliminar Tarea -->\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"borrar(i)\" color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.ts ***!
  \***********************************************/
/*! exports provided: AgregarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPage", function() { return AgregarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tareas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tareas.service */ "./src/app/services/tareas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/lista-item.model */ "./src/app/models/lista-item.model.ts");





var AgregarPage = /** @class */ (function () {
    function AgregarPage(tareasService, route) {
        this.tareasService = tareasService;
        this.route = route;
        this.nombreItem = '';
        var listaId = this.route.snapshot.paramMap.get('listaId');
        this.lista = this.tareasService.cargarLista(listaId);
    }
    AgregarPage.prototype.ngOnInit = function () {
    };
    // Añadir elementos a la lista creada
    AgregarPage.prototype.agregarItem = function () {
        if (this.nombreItem.length === 0) {
            return;
        }
        // Creamos el objeto y lo metemos en el Array
        var nuevoItem = new _models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__["ListaItem"](this.nombreItem);
        this.lista.items.push(nuevoItem);
        // Y despues, limpiamos el item y lo guardamos en el Storage
        this.nombreItem = '';
        this.tareasService.guardarStorage();
    };
    // Marcar o Desmarcar el CheckBox
    AgregarPage.prototype.cambioCheck = function (item) {
        var pendientes = this.lista.items
            .filter(function (itemData) { return !itemData.completado; })
            .length;
        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        }
        else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }
        this.tareasService.guardarStorage();
        // console.log(this.tareasService.listas);
    };
    // Borrar elemento de la lista
    AgregarPage.prototype.borrar = function (i) {
        this.lista.items.splice(i, 1);
        this.tareasService.guardarStorage();
    };
    AgregarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agregar',
            template: __webpack_require__(/*! ./agregar.page.html */ "./src/app/pages/agregar/agregar.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tareas_service__WEBPACK_IMPORTED_MODULE_2__["TareasService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AgregarPage);
    return AgregarPage;
}());



/***/ })

}]);
//# sourceMappingURL=agregar-agregar-module.js.map