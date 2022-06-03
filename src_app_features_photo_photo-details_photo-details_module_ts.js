"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_photo_photo-details_photo-details_module_ts"],{

/***/ 8043:
/*!*********************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/akita-state/photo-details-store.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsStore": () => (/* binding */ PhotoDetailsStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        photo: null,
        album: null,
        albumLoading: true,
    };
}
let PhotoDetailsStore = class PhotoDetailsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
    setAlbumLoading(val) {
        this.update({
            albumLoading: val,
        });
    }
};
PhotoDetailsStore.ɵfac = function PhotoDetailsStore_Factory(t) { return new (t || PhotoDetailsStore)(); };
PhotoDetailsStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoDetailsStore, factory: PhotoDetailsStore.ɵfac, providedIn: 'root' });
PhotoDetailsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'photo-details' })
], PhotoDetailsStore);



/***/ }),

/***/ 8441:
/*!*********************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/akita-state/photo-details.query.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsQuery": () => (/* binding */ PhotoDetailsQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _photo_details_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-details-store */ 8043);




class PhotoDetailsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
    selectBreadcrumbs() {
        return this.select('photo').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((photo) => {
            if (!photo)
                return null;
            return [
                {
                    link: '',
                    text: 'Dashboard',
                },
                {
                    link: ['/', 'photos'],
                    text: 'Photos',
                },
                {
                    link: null,
                    text: photo.id + '. ' + photo.title,
                },
            ];
        }));
    }
}
PhotoDetailsQuery.ɵfac = function PhotoDetailsQuery_Factory(t) { return new (t || PhotoDetailsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_photo_details_store__WEBPACK_IMPORTED_MODULE_1__.PhotoDetailsStore)); };
PhotoDetailsQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PhotoDetailsQuery, factory: PhotoDetailsQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3400:
/*!***********************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/akita-state/photo-details.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsService": () => (/* binding */ PhotoDetailsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _photo_details_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-details-store */ 8043);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api.service */ 5384);




class PhotoDetailsService {
    constructor(photoDetailsStore, apiService) {
        this.photoDetailsStore = photoDetailsStore;
        this.apiService = apiService;
    }
    getPhoto(photoId) {
        this.photoDetailsStore.setLoading(true);
        this.photoDetailsStore.setAlbumLoading(true);
        this.apiService
            .getSinglePhoto(photoId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((photo) => {
            this.photoDetailsStore.update({
                photo,
            });
            this.photoDetailsStore.setLoading(false);
            return this.apiService.getSingleAlbum(photo.album);
        }))
            .subscribe({
            next: (album) => {
                this.photoDetailsStore.update({
                    album,
                });
                this.photoDetailsStore.setAlbumLoading(false);
            },
            error: () => {
                this.photoDetailsStore.setLoading(false);
                this.photoDetailsStore.setAlbumLoading(false);
            },
        });
    }
}
PhotoDetailsService.ɵfac = function PhotoDetailsService_Factory(t) { return new (t || PhotoDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_photo_details_store__WEBPACK_IMPORTED_MODULE_0__.PhotoDetailsStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
PhotoDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PhotoDetailsService, factory: PhotoDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3330:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/components/photo-details-page/photo-details-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsPageComponent": () => (/* binding */ PhotoDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _akita_state_photo_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../akita-state/photo-details.service */ 3400);
/* harmony import */ var _akita_state_photo_details_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../akita-state/photo-details.query */ 8441);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);
/* harmony import */ var _photo_details_title_photo_details_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photo-details-title/photo-details-title.component */ 4952);









function PhotoDetailsPageComponent_app_breadcrumbs_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumbs", 5);
  }

  if (rf & 2) {
    const breadcrumbs_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", breadcrumbs_r2);
  }
}

function PhotoDetailsPageComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 6);
  }

  if (rf & 2) {
    const photo_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", photo_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", photo_r3.title)("title", photo_r3.title);
  }
}

class PhotoDetailsPageComponent {
  constructor(route, photoDetailsService, photoDetailsQuery) {
    this.route = route;
    this.photoDetailsService = photoDetailsService;
    this.photoDetailsQuery = photoDetailsQuery;
    this.breadcrumbs$ = this.photoDetailsQuery.selectBreadcrumbs();
    this.photo$ = this.photoDetailsQuery.select('photo');
    this.photoLoadInProcess$ = this.photoDetailsQuery.selectLoading();
    this.album$ = this.photoDetailsQuery.select('album');
    this.albumLoadInProcess$ = this.photoDetailsQuery.select('albumLoading');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const photoId = Number(params['id']);
      this.photoDetailsService.getPhoto(photoId);
    });
  }

}

PhotoDetailsPageComponent.ɵfac = function PhotoDetailsPageComponent_Factory(t) {
  return new (t || PhotoDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_akita_state_photo_details_service__WEBPACK_IMPORTED_MODULE_0__.PhotoDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_akita_state_photo_details_query__WEBPACK_IMPORTED_MODULE_1__.PhotoDetailsQuery));
};

PhotoDetailsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PhotoDetailsPageComponent,
  selectors: [["app-photo-details-page"]],
  decls: 11,
  vars: 18,
  consts: [[1, "container", "pt-3"], [3, "isEmpty", "isLoading"], [3, "items", 4, "ngIf"], [3, "photo", "album"], [3, "src", "alt", "title", 4, "ngIf"], [3, "items"], [3, "src", "alt", "title"]],
  template: function PhotoDetailsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-content-loading-status", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PhotoDetailsPageComponent_app_breadcrumbs_4_Template, 1, 1, "app-breadcrumbs", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-photo-details-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PhotoDetailsPageComponent_img_9_Template, 1, 3, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isEmpty", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx.photo$) === null)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, ctx.photoLoadInProcess$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, ctx.breadcrumbs$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("photo", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 12, ctx.photo$))("album", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, ctx.album$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, ctx.photo$));
    }
  },
  directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_2__.ContentLoadingStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _photo_details_title_photo_details_title_component__WEBPACK_IMPORTED_MODULE_4__.PhotoDetailsTitleComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4952:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/components/photo-details-title/photo-details-title.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsTitleComponent": () => (/* binding */ PhotoDetailsTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



function PhotoDetailsTitleComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.photo.title, "\n");
} }
const _c0 = function (a2) { return ["/", "album", a2]; };
function PhotoDetailsTitleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Album ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.album.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.album.title);
} }
class PhotoDetailsTitleComponent {
    constructor() {
        this.photo = null;
        this.album = null;
    }
}
PhotoDetailsTitleComponent.ɵfac = function PhotoDetailsTitleComponent_Factory(t) { return new (t || PhotoDetailsTitleComponent)(); };
PhotoDetailsTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoDetailsTitleComponent, selectors: [["app-photo-details-title"]], inputs: { photo: "photo", album: "album" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [3, "routerLink"]], template: function PhotoDetailsTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoDetailsTitleComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoDetailsTitleComponent_div_1_Template, 4, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1kZXRhaWxzLXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 3800:
/*!******************************************************************************!*\
  !*** ./src/app/features/photo/photo-details/photo-details-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsRoutingModule": () => (/* binding */ PhotoDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_photo_details_page_photo_details_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/photo-details-page/photo-details-page.component */ 3330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_photo_details_page_photo_details_page_component__WEBPACK_IMPORTED_MODULE_0__.PhotoDetailsPageComponent }];
class PhotoDetailsRoutingModule {
}
PhotoDetailsRoutingModule.ɵfac = function PhotoDetailsRoutingModule_Factory(t) { return new (t || PhotoDetailsRoutingModule)(); };
PhotoDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PhotoDetailsRoutingModule });
PhotoDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhotoDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5770:
/*!**********************************************************************!*\
  !*** ./src/app/features/photo/photo-details/photo-details.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailsModule": () => (/* binding */ PhotoDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _photo_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-details-routing.module */ 3800);
/* harmony import */ var _components_photo_details_page_photo_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photo-details-page/photo-details-page.component */ 3330);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _components_photo_details_title_photo_details_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/photo-details-title/photo-details-title.component */ 4952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class PhotoDetailsModule {
}
PhotoDetailsModule.ɵfac = function PhotoDetailsModule_Factory(t) { return new (t || PhotoDetailsModule)(); };
PhotoDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PhotoDetailsModule });
PhotoDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _photo_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PhotoDetailsModule, { declarations: [_components_photo_details_page_photo_details_page_component__WEBPACK_IMPORTED_MODULE_1__.PhotoDetailsPageComponent, _components_photo_details_title_photo_details_title_component__WEBPACK_IMPORTED_MODULE_3__.PhotoDetailsTitleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _photo_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_photo_photo-details_photo-details_module_ts.js.map