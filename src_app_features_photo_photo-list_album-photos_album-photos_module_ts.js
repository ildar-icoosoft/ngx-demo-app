"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_photo_photo-list_album-photos_album-photos_module_ts"],{

/***/ 4867:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/akita-state/current-album.query.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentAlbumQuery": () => (/* binding */ CurrentAlbumQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _current_album_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-album.store */ 8281);




class CurrentAlbumQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
    selectBreadcrumbs() {
        return this.select('album').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((album) => {
            if (!album)
                return null;
            return [
                {
                    link: '',
                    text: 'Dashboard',
                },
                {
                    link: ['/', 'albums'],
                    text: 'Albums',
                },
                {
                    link: null,
                    text: album.id + '. ' + album.title,
                },
            ];
        }));
    }
}
CurrentAlbumQuery.ɵfac = function CurrentAlbumQuery_Factory(t) { return new (t || CurrentAlbumQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_current_album_store__WEBPACK_IMPORTED_MODULE_1__.CurrentAlbumStore)); };
CurrentAlbumQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrentAlbumQuery, factory: CurrentAlbumQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8845:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/akita-state/current-album.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentAlbumService": () => (/* binding */ CurrentAlbumService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _current_album_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-album.store */ 8281);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/api.service */ 5384);




class CurrentAlbumService {
    constructor(currentAlbumStore, apiService) {
        this.currentAlbumStore = currentAlbumStore;
        this.apiService = apiService;
    }
    getAlbum(albumId) {
        this.currentAlbumStore.setLoading(true);
        this.currentAlbumStore.setUserLoading(true);
        this.apiService
            .getSingleAlbum(albumId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((album) => {
            this.currentAlbumStore.update({
                album,
            });
            this.currentAlbumStore.setLoading(false);
            return this.apiService.getUser(album.user);
        }))
            .subscribe({
            next: (user) => {
                this.currentAlbumStore.update({
                    user,
                });
                this.currentAlbumStore.setUserLoading(false);
            },
            error: () => {
                this.currentAlbumStore.setLoading(false);
                this.currentAlbumStore.setUserLoading(false);
            },
        });
    }
}
CurrentAlbumService.ɵfac = function CurrentAlbumService_Factory(t) { return new (t || CurrentAlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_current_album_store__WEBPACK_IMPORTED_MODULE_0__.CurrentAlbumStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
CurrentAlbumService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrentAlbumService, factory: CurrentAlbumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8281:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/akita-state/current-album.store.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentAlbumStore": () => (/* binding */ CurrentAlbumStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        album: null,
        user: null,
        userLoading: true,
    };
}
let CurrentAlbumStore = class CurrentAlbumStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
    setUserLoading(val) {
        this.update({
            userLoading: val,
        });
    }
};
CurrentAlbumStore.ɵfac = function CurrentAlbumStore_Factory(t) { return new (t || CurrentAlbumStore)(); };
CurrentAlbumStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentAlbumStore, factory: CurrentAlbumStore.ɵfac, providedIn: 'root' });
CurrentAlbumStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'current-album' })
], CurrentAlbumStore);



/***/ }),

/***/ 9451:
/*!***************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/album-photos-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosRoutingModule": () => (/* binding */ AlbumPhotosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_album_photos_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/album-photos-page.component */ 3331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_album_photos_page_component__WEBPACK_IMPORTED_MODULE_0__.AlbumPhotosPageComponent }];
class AlbumPhotosRoutingModule {
}
AlbumPhotosRoutingModule.ɵfac = function AlbumPhotosRoutingModule_Factory(t) { return new (t || AlbumPhotosRoutingModule)(); };
AlbumPhotosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlbumPhotosRoutingModule });
AlbumPhotosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlbumPhotosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7097:
/*!*******************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/album-photos.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosModule": () => (/* binding */ AlbumPhotosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _album_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-photos-routing.module */ 9451);
/* harmony import */ var _components_page_album_photos_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/album-photos-page.component */ 3331);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 4466);
/* harmony import */ var _components_filter_album_photos_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/album-photos-filter.component */ 9478);
/* harmony import */ var _components_filter_container_album_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter/container/album-photos-filter-container.component */ 2642);
/* harmony import */ var _components_title_album_photos_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/title/album-photos-title.component */ 8479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class AlbumPhotosModule {
}
AlbumPhotosModule.ɵfac = function AlbumPhotosModule_Factory(t) { return new (t || AlbumPhotosModule)(); };
AlbumPhotosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AlbumPhotosModule });
AlbumPhotosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _album_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlbumPhotosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AlbumPhotosModule, { declarations: [_components_page_album_photos_page_component__WEBPACK_IMPORTED_MODULE_1__.AlbumPhotosPageComponent,
        _components_filter_album_photos_filter_component__WEBPACK_IMPORTED_MODULE_3__.AlbumPhotosFilterComponent,
        _components_filter_container_album_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_4__.AlbumPhotosFilterContainerComponent,
        _components_title_album_photos_title_component__WEBPACK_IMPORTED_MODULE_5__.AlbumPhotosTitleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _album_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlbumPhotosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 9478:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/components/filter/album-photos-filter.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosFilterComponent": () => (/* binding */ AlbumPhotosFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);







let AlbumPhotosFilterComponent = class AlbumPhotosFilterComponent {
  constructor() {
    this.changeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      q: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
  }

  ngOnInit() {
    this.group.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(1000, rxjs__WEBPACK_IMPORTED_MODULE_3__.asyncScheduler, {
      trailing: true
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(value => {
      const filter = [];

      if (value.q) {
        filter.push({
          field: 'q',
          value: value.q
        });
      }

      this.changeFilter.emit(filter);
    });
  }

  trackByAlbum(index, album) {
    return album.id;
  }

};

AlbumPhotosFilterComponent.ɵfac = function AlbumPhotosFilterComponent_Factory(t) {
  return new (t || AlbumPhotosFilterComponent)();
};

AlbumPhotosFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlbumPhotosFilterComponent,
  selectors: [["app-album-photos-filter"]],
  outputs: {
    changeFilter: "changeFilter"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", 3, "formGroup"], ["formControlName", "q", "placeholder", "Search", 1, "form-control", "me-2"]],
  template: function AlbumPhotosFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1waG90b3MtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"],
  changeDetection: 0
});
AlbumPhotosFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], AlbumPhotosFilterComponent);


/***/ }),

/***/ 2642:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/components/filter/container/album-photos-filter-container.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosFilterContainerComponent": () => (/* binding */ AlbumPhotosFilterContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _akita_state_current_album_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../akita-state/current-album.query */ 4867);
/* harmony import */ var _akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../akita-state/photo-list.service */ 8490);
/* harmony import */ var _album_photos_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../album-photos-filter.component */ 9478);




class AlbumPhotosFilterContainerComponent {
    constructor(albumQuery, photosService) {
        this.albumQuery = albumQuery;
        this.photosService = photosService;
    }
    changeFilter(filter) {
        const state = this.albumQuery.getValue();
        const album = state.album;
        this.photosService.updateFilter([
            ...filter,
            {
                field: 'albumId',
                value: String(album.id),
            },
        ]);
    }
}
AlbumPhotosFilterContainerComponent.ɵfac = function AlbumPhotosFilterContainerComponent_Factory(t) { return new (t || AlbumPhotosFilterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_akita_state_current_album_query__WEBPACK_IMPORTED_MODULE_0__.CurrentAlbumQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_1__.PhotoListService)); };
AlbumPhotosFilterContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AlbumPhotosFilterContainerComponent, selectors: [["app-album-photos-filter-container"]], decls: 1, vars: 0, consts: [[3, "changeFilter"]], template: function AlbumPhotosFilterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-album-photos-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeFilter", function AlbumPhotosFilterContainerComponent_Template_app_album_photos_filter_changeFilter_0_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_album_photos_filter_component__WEBPACK_IMPORTED_MODULE_2__.AlbumPhotosFilterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1waG90b3MtZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 3331:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/components/page/album-photos-page.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosPageComponent": () => (/* binding */ AlbumPhotosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../akita-state/photo-list.service */ 8490);
/* harmony import */ var _akita_state_photo_list_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../akita-state/photo-list.query */ 445);
/* harmony import */ var _akita_state_current_album_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../akita-state/current-album.query */ 4867);
/* harmony import */ var _akita_state_current_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../akita-state/current-album.service */ 8845);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);
/* harmony import */ var _title_album_photos_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title/album-photos-title.component */ 8479);
/* harmony import */ var _filter_container_album_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/container/album-photos-filter-container.component */ 2642);
/* harmony import */ var _shared_photo_list_list_photo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/photo-list/list/photo-list.component */ 854);












function AlbumPhotosPageComponent_app_breadcrumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-breadcrumbs", 5);
  }

  if (rf & 2) {
    const breadcrumbs_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", breadcrumbs_r1);
  }
}
/**
 * Фотографии одного альбома
 */


class AlbumPhotosPageComponent {
  constructor(photosService, photosQuery, currentAlbumQuery, currentAlbumService, route) {
    this.photosService = photosService;
    this.photosQuery = photosQuery;
    this.currentAlbumQuery = currentAlbumQuery;
    this.currentAlbumService = currentAlbumService;
    this.route = route;
    this.breadcrumbs$ = this.currentAlbumQuery.selectBreadcrumbs();
    this.album$ = this.currentAlbumQuery.select('album');
    this.albumLoadInProcess$ = this.currentAlbumQuery.selectLoading();
    this.albumAuthor$ = this.currentAlbumQuery.select('user');
    this.albumAuthorLoadInProcess$ = this.currentAlbumQuery.select('userLoading');
    this.photos$ = this.photosQuery.selectAll();
    this.isLastPage$ = this.photosQuery.isLastPage();
    this.photosLoadInProcess$ = this.photosQuery.selectLoading();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = params['id'];
      this.photosService.getPhotos({
        page: {
          number: 1,
          size: 36
        },
        filter: [{
          field: 'albumId',
          value: albumId
        }]
      });
      this.currentAlbumService.getAlbum(Number(albumId));
    });
  }

  loadMore() {
    this.photosService.getNextPhotos();
  }

}

AlbumPhotosPageComponent.ɵfac = function AlbumPhotosPageComponent_Factory(t) {
  return new (t || AlbumPhotosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_0__.PhotoListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_akita_state_photo_list_query__WEBPACK_IMPORTED_MODULE_1__.PhotoListQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_akita_state_current_album_query__WEBPACK_IMPORTED_MODULE_2__.CurrentAlbumQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_akita_state_current_album_service__WEBPACK_IMPORTED_MODULE_3__.CurrentAlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};

AlbumPhotosPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AlbumPhotosPageComponent,
  selectors: [["app-album-photos-page"]],
  decls: 13,
  vars: 25,
  consts: [[1, "container", "pt-3"], [3, "items", 4, "ngIf"], [3, "album", "albumLoadInProcess", "albumAuthor", "albumAuthorLoadInProcess"], [1, "d-block", "mb-2"], [3, "photos", "isLastPage", "loadInProcess", "showAlbumLink", "loadMore"], [3, "items"]],
  template: function AlbumPhotosPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AlbumPhotosPageComponent_app_breadcrumbs_1_Template, 1, 1, "app-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-album-photos-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-album-photos-filter-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-photo-list", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("loadMore", function AlbumPhotosPageComponent_Template_app_photo_list_loadMore_9_listener() {
        return ctx.loadMore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 9, ctx.breadcrumbs$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("album", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 11, ctx.album$))("albumLoadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 13, ctx.albumLoadInProcess$))("albumAuthor", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 15, ctx.albumAuthor$))("albumAuthorLoadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 17, ctx.albumAuthorLoadInProcess$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("photos", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 19, ctx.photos$))("isLastPage", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 21, ctx.isLastPage$))("loadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 23, ctx.photosLoadInProcess$))("showAlbumLink", false);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _title_album_photos_title_component__WEBPACK_IMPORTED_MODULE_5__.AlbumPhotosTitleComponent, _filter_container_album_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_6__.AlbumPhotosFilterContainerComponent, _shared_photo_list_list_photo_list_component__WEBPACK_IMPORTED_MODULE_7__.PhotoListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1waG90b3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 8479:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/album-photos/components/title/album-photos-title.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPhotosTitleComponent": () => (/* binding */ AlbumPhotosTitleComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);





function AlbumPhotosTitleComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.album.title, "\n");
} }
const _c0 = function (a2) { return ["/", "user", a2]; };
function AlbumPhotosTitleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.albumAuthor.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.albumAuthor.name);
} }
function AlbumPhotosTitleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "fa-icon", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faSpinner)("pulse", true);
} }
class AlbumPhotosTitleComponent {
    constructor() {
        this.album = null;
        this.albumLoadInProcess = true;
        this.albumAuthor = null;
        this.albumAuthorLoadInProcess = true;
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSpinner;
    }
}
AlbumPhotosTitleComponent.ɵfac = function AlbumPhotosTitleComponent_Factory(t) { return new (t || AlbumPhotosTitleComponent)(); };
AlbumPhotosTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumPhotosTitleComponent, selectors: [["app-album-photos-title"]], inputs: { album: "album", albumLoadInProcess: "albumLoadInProcess", albumAuthor: "albumAuthor", albumAuthorLoadInProcess: "albumAuthorLoadInProcess" }, decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [3, "routerLink"], ["role", "status", "data-testid", "loading-spinner", 3, "icon", "pulse"], [1, "sr-only"]], template: function AlbumPhotosTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlbumPhotosTitleComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumPhotosTitleComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlbumPhotosTitleComponent_div_2_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album && !ctx.albumLoadInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.albumAuthor && !ctx.albumAuthorLoadInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.albumLoadInProcess || ctx.albumAuthorLoadInProcess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1waG90b3MtdGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=src_app_features_photo_photo-list_album-photos_album-photos_module_ts.js.map