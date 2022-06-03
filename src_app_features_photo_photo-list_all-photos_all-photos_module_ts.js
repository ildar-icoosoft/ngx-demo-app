"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_photo_photo-list_all-photos_all-photos_module_ts"],{

/***/ 6553:
/*!**********************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/akita-state/photo-list-albums.query.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoListAlbumsQuery": () => (/* binding */ PhotoListAlbumsQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _photo_list_albums_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-list-albums.store */ 236);



class PhotoListAlbumsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.QueryEntity {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
PhotoListAlbumsQuery.ɵfac = function PhotoListAlbumsQuery_Factory(t) { return new (t || PhotoListAlbumsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_photo_list_albums_store__WEBPACK_IMPORTED_MODULE_1__.PhotoListAlbumsStore)); };
PhotoListAlbumsQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PhotoListAlbumsQuery, factory: PhotoListAlbumsQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8952:
/*!***********************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/all-photos/all-photos-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPhotosRoutingModule": () => (/* binding */ AllPhotosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_all_photos_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/all-photos-page.component */ 2062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_all_photos_page_component__WEBPACK_IMPORTED_MODULE_0__.AllPhotosPageComponent }];
class AllPhotosRoutingModule {
}
AllPhotosRoutingModule.ɵfac = function AllPhotosRoutingModule_Factory(t) { return new (t || AllPhotosRoutingModule)(); };
AllPhotosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AllPhotosRoutingModule });
AllPhotosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllPhotosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3282:
/*!***************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/all-photos/all-photos.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPhotosModule": () => (/* binding */ AllPhotosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _all_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-photos-routing.module */ 8952);
/* harmony import */ var _components_page_all_photos_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/all-photos-page.component */ 2062);
/* harmony import */ var _components_filter_container_all_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter/container/all-photos-filter-container.component */ 2727);
/* harmony import */ var _components_filter_all_photos_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/all-photos-filter.component */ 2924);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class AllPhotosModule {
}
AllPhotosModule.ɵfac = function AllPhotosModule_Factory(t) { return new (t || AllPhotosModule)(); };
AllPhotosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AllPhotosModule });
AllPhotosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _all_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllPhotosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AllPhotosModule, { declarations: [_components_page_all_photos_page_component__WEBPACK_IMPORTED_MODULE_1__.AllPhotosPageComponent,
        _components_filter_container_all_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_2__.AllPhotosFilterContainerComponent,
        _components_filter_all_photos_filter_component__WEBPACK_IMPORTED_MODULE_3__.AllPhotosFilterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _all_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllPhotosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 2924:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/all-photos/components/filter/all-photos-filter.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPhotosFilterComponent": () => (/* binding */ AllPhotosFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









function AllPhotosFilterComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const album_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", album_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.title);
  }
}

let AllPhotosFilterComponent = class AllPhotosFilterComponent {
  constructor() {
    this.albums = [];
    this.changeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      q: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      albumId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('0')
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

      if (value.albumId !== '0') {
        filter.push({
          field: 'albumId',
          value: value.albumId
        });
      }

      this.changeFilter.emit(filter);
    });
  }

  trackByAlbum(index, album) {
    return album.id;
  }

};

AllPhotosFilterComponent.ɵfac = function AllPhotosFilterComponent_Factory(t) {
  return new (t || AllPhotosFilterComponent)();
};

AllPhotosFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AllPhotosFilterComponent,
  selectors: [["app-all-photos-filter"]],
  inputs: {
    albums: "albums"
  },
  outputs: {
    changeFilter: "changeFilter"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "d-flex", 3, "formGroup"], ["formControlName", "q", "placeholder", "Search", 1, "form-control", "me-2"], ["formControlName", "albumId", "aria-label", "Album filter", 1, "form-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
  template: function AllPhotosFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2)(3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Album");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllPhotosFilterComponent_option_5_Template, 2, 2, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albums)("ngForTrackBy", ctx.trackByAlbum);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcGhvdG9zLWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});
AllPhotosFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], AllPhotosFilterComponent);


/***/ }),

/***/ 2727:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/all-photos/components/filter/container/all-photos-filter-container.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPhotosFilterContainerComponent": () => (/* binding */ AllPhotosFilterContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _akita_state_photo_list_albums_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../akita-state/photo-list-albums.query */ 6553);
/* harmony import */ var _akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../akita-state/photo-list.service */ 8490);
/* harmony import */ var _all_photos_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-photos-filter.component */ 2924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





class AllPhotosFilterContainerComponent {
  constructor(albumsQuery, photosService) {
    this.albumsQuery = albumsQuery;
    this.photosService = photosService;
    this.albums$ = this.albumsQuery.selectAll();
  }

  changeFilter(filter) {
    this.photosService.updateFilter(filter);
  }

}

AllPhotosFilterContainerComponent.ɵfac = function AllPhotosFilterContainerComponent_Factory(t) {
  return new (t || AllPhotosFilterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_akita_state_photo_list_albums_query__WEBPACK_IMPORTED_MODULE_0__.PhotoListAlbumsQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_1__.PhotoListService));
};

AllPhotosFilterContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AllPhotosFilterContainerComponent,
  selectors: [["app-all-photos-filter-container"]],
  decls: 2,
  vars: 3,
  consts: [[3, "albums", "changeFilter"]],
  template: function AllPhotosFilterContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-all-photos-filter", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeFilter", function AllPhotosFilterContainerComponent_Template_app_all_photos_filter_changeFilter_0_listener($event) {
        return ctx.changeFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("albums", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.albums$));
    }
  },
  directives: [_all_photos_filter_component__WEBPACK_IMPORTED_MODULE_2__.AllPhotosFilterComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcGhvdG9zLWZpbHRlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 2062:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/all-photos/components/page/all-photos-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPhotosPageComponent": () => (/* binding */ AllPhotosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../akita-state/photo-list.service */ 8490);
/* harmony import */ var _akita_state_photo_list_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../akita-state/photo-list.query */ 445);
/* harmony import */ var _akita_state_photo_list_albums_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../akita-state/photo-list-albums.query */ 6553);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);
/* harmony import */ var _filter_container_all_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter/container/all-photos-filter-container.component */ 2727);
/* harmony import */ var _shared_photo_list_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/photo-list/list/photo-list.component */ 854);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








class AllPhotosPageComponent {
  constructor(photosService, photosQuery, albumsQuery) {
    this.photosService = photosService;
    this.photosQuery = photosQuery;
    this.albumsQuery = albumsQuery;
    this.breadcrumbs = [{
      link: '',
      text: 'Dashboard'
    }, {
      link: null,
      text: 'Photos'
    }];
    this.photos$ = this.photosQuery.selectAll();
    this.albumsHashMap$ = this.albumsQuery.selectAll({
      asObject: true
    });
    this.isLastPage$ = this.photosQuery.isLastPage();
    this.loadInProcess$ = this.photosQuery.selectLoading();
  }

  ngOnInit() {
    this.photosService.getPhotos({
      page: {
        number: 1,
        size: 36
      }
    });
    this.photosService.getAlbums({});
  }

  loadMore() {
    this.photosService.getNextPhotos();
  }

}

AllPhotosPageComponent.ɵfac = function AllPhotosPageComponent_Factory(t) {
  return new (t || AllPhotosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_akita_state_photo_list_service__WEBPACK_IMPORTED_MODULE_0__.PhotoListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_akita_state_photo_list_query__WEBPACK_IMPORTED_MODULE_1__.PhotoListQuery), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_akita_state_photo_list_albums_query__WEBPACK_IMPORTED_MODULE_2__.PhotoListAlbumsQuery));
};

AllPhotosPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AllPhotosPageComponent,
  selectors: [["app-all-photos-page"]],
  decls: 10,
  vars: 13,
  consts: [[1, "container", "pt-3"], [3, "items"], [1, "d-block", "mb-2"], [3, "photos", "albums", "isLastPage", "loadInProcess", "loadMore"]],
  template: function AllPhotosPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-all-photos-filter-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-photo-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("loadMore", function AllPhotosPageComponent_Template_app_photo_list_loadMore_5_listener() {
        return ctx.loadMore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.breadcrumbs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("photos", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 5, ctx.photos$))("albums", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, ctx.albumsHashMap$))("isLastPage", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 9, ctx.isLastPage$))("loadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 11, ctx.loadInProcess$));
    }
  },
  directives: [_shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _filter_container_all_photos_filter_container_component__WEBPACK_IMPORTED_MODULE_4__.AllPhotosFilterContainerComponent, _shared_photo_list_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__.PhotoListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcGhvdG9zLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_features_photo_photo-list_all-photos_all-photos_module_ts.js.map