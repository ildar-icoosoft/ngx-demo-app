"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_album_album-list_album-list_module_ts"],{

/***/ 5117:
/*!************************************************************************!*\
  !*** ./src/app/features/album/album-list/album-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListRoutingModule": () => (/* binding */ AlbumListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_album_list_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/album-list-page.component */ 9003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_album_list_page_component__WEBPACK_IMPORTED_MODULE_0__.AlbumListPageComponent }];
class AlbumListRoutingModule {
}
AlbumListRoutingModule.ɵfac = function AlbumListRoutingModule_Factory(t) { return new (t || AlbumListRoutingModule)(); };
AlbumListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlbumListRoutingModule });
AlbumListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlbumListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2484:
/*!****************************************************************!*\
  !*** ./src/app/features/album/album-list/album-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListModule": () => (/* binding */ AlbumListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _album_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-list-routing.module */ 5117);
/* harmony import */ var _components_page_album_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/album-list-page.component */ 9003);
/* harmony import */ var _components_list_album_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/album-list.component */ 2330);
/* harmony import */ var _components_filter_album_list_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/album-list-filter.component */ 574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _components_filter_container_album_list_filter_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filter/container/album-list-filter-container.component */ 2068);
/* harmony import */ var _components_list_item_album_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-item/album-list-item.component */ 1174);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngxs-store/album-list.state */ 2127);
/* harmony import */ var _ngxs_store_user_list_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngxs-store/user-list.state */ 414);
/* harmony import */ var _ngxs_store_album_list_photos_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngxs-store/album-list-photos.state */ 9345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);














class AlbumListModule {
}
AlbumListModule.ɵfac = function AlbumListModule_Factory(t) { return new (t || AlbumListModule)(); };
AlbumListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AlbumListModule });
AlbumListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _album_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlbumListRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__.NgxsModule.forFeature([_ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_8__.AlbumListState, _ngxs_store_user_list_state__WEBPACK_IMPORTED_MODULE_9__.UserListState, _ngxs_store_album_list_photos_state__WEBPACK_IMPORTED_MODULE_10__.AlbumListPhotosState]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AlbumListModule, { declarations: [_components_page_album_list_page_component__WEBPACK_IMPORTED_MODULE_1__.AlbumListPageComponent,
        _components_list_album_list_component__WEBPACK_IMPORTED_MODULE_2__.AlbumListComponent,
        _components_filter_album_list_filter_component__WEBPACK_IMPORTED_MODULE_3__.AlbumListFilterComponent,
        _components_filter_container_album_list_filter_container_component__WEBPACK_IMPORTED_MODULE_5__.AlbumListFilterContainerComponent,
        _components_list_item_album_list_item_component__WEBPACK_IMPORTED_MODULE_6__.AlbumListItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _album_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlbumListRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["ɵbc"]] }); })();


/***/ }),

/***/ 574:
/*!********************************************************************************************!*\
  !*** ./src/app/features/album/album-list/components/filter/album-list-filter.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListFilterComponent": () => (/* binding */ AlbumListFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









function AlbumListFilterComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
  }
}

let AlbumListFilterComponent = class AlbumListFilterComponent {
  constructor() {
    this.users = [];
    this.changeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      q: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('0')
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

      if (value.userId !== '0') {
        filter.push({
          field: 'userId',
          value: value.userId
        });
      }

      this.changeFilter.emit(filter);
    });
  }

  trackByUser(index, user) {
    return user.id;
  }

};

AlbumListFilterComponent.ɵfac = function AlbumListFilterComponent_Factory(t) {
  return new (t || AlbumListFilterComponent)();
};

AlbumListFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlbumListFilterComponent,
  selectors: [["app-album-list-filter"]],
  inputs: {
    users: "users"
  },
  outputs: {
    changeFilter: "changeFilter"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "d-flex", 3, "formGroup"], ["formControlName", "q", "placeholder", "Search", 1, "form-control", "me-2"], ["formControlName", "userId", "aria-label", "User filter", 1, "form-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
  template: function AlbumListFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2)(3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlbumListFilterComponent_option_5_Template, 2, 2, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users)("ngForTrackBy", ctx.trackByUser);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1saXN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});
AlbumListFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], AlbumListFilterComponent);


/***/ }),

/***/ 2068:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/album/album-list/components/filter/container/album-list-filter-container.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListFilterContainerComponent": () => (/* binding */ AlbumListFilterContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_user_list_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngxs-store/user-list.state */ 414);
/* harmony import */ var _ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ngxs-store/album-list.state */ 2127);
/* harmony import */ var _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/ngxs-store/actions/album.actions */ 220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _album_list_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../album-list-filter.component */ 574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);









class AlbumListFilterContainerComponent {
  constructor(store) {
    this.store = store;
  }

  changeFilter(filter) {
    const currentListRequest = this.store.selectSnapshot(_ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_2__.AlbumListState).pageRequest;
    this.store.dispatch(new _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.AlbumActions.GetAlbums(Object.assign(Object.assign({}, currentListRequest), {
      page: {
        number: 1,
        size: currentListRequest.page.size
      },
      filter
    })));
  }

}

AlbumListFilterContainerComponent.ɵfac = function AlbumListFilterContainerComponent_Factory(t) {
  return new (t || AlbumListFilterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};

AlbumListFilterContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AlbumListFilterContainerComponent,
  selectors: [["app-album-list-filter-container"]],
  decls: 2,
  vars: 3,
  consts: [[3, "users", "changeFilter"]],
  template: function AlbumListFilterContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-album-list-filter", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeFilter", function AlbumListFilterContainerComponent_Template_app_album_list_filter_changeFilter_0_listener($event) {
        return ctx.changeFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("users", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.users$));
    }
  },
  directives: [_album_list_filter_component__WEBPACK_IMPORTED_MODULE_4__.AlbumListFilterComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1saXN0LWZpbHRlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_user_list_state__WEBPACK_IMPORTED_MODULE_1__.UserListState.items)], AlbumListFilterContainerComponent.prototype, "users$", void 0);

/***/ }),

/***/ 1174:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/album/album-list/components/list-item/album-list-item.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListItemComponent": () => (/* binding */ AlbumListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function (a2) { return ["/", "photo", a2]; };
function AlbumListItemComponent_div_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, photo_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r3.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", photo_r3.title);
} }
const _c1 = function (a2) { return ["/", "user", a2]; };
function AlbumListItemComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.album.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.album.user.name);
} }
const _c2 = function (a2) { return ["/", "album", a2]; };
function AlbumListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlbumListItemComponent_div_0_a_6_Template, 2, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlbumListItemComponent_div_0_div_7_Template, 4, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r0.album.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.album.id, ". ", ctx_r0.album.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photos)("ngForTrackBy", ctx_r0.trackByPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.album.user);
} }
class AlbumListItemComponent {
    constructor() {
        this.photos = [];
    }
    trackByPhoto(index, photo) {
        return photo.id;
    }
}
AlbumListItemComponent.ɵfac = function AlbumListItemComponent_Factory(t) { return new (t || AlbumListItemComponent)(); };
AlbumListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumListItemComponent, selectors: [["app-album-list-item"]], inputs: { album: "album", photos: "photos" }, decls: 1, vars: 1, consts: [["class", "card text-center", 4, "ngIf"], [1, "card", "text-center"], [1, "card-header"], [3, "routerLink"], [1, "card-body"], [1, "album-photos", "d-flex"], [3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "card-footer text-muted", 4, "ngIf"], [3, "src", "alt"], [1, "card-footer", "text-muted"]], template: function AlbumListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlbumListItemComponent_div_0_Template, 8, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".album-photos[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.album-photos[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: calc(25% - 7.5px);\n}\n.album-photos[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjtBQUNFO0VBQ0Usd0JBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtBQUNOIiwiZmlsZSI6ImFsYnVtLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bS1waG90b3Mge1xyXG4gIGdhcDogMTBweDtcclxuXHJcbiAgPiAqIHtcclxuICAgIHdpZHRoOiBjYWxjKDI1JSAtIDEwcHggKiAzIC8gNCk7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 2330:
/*!***********************************************************************************!*\
  !*** ./src/app/features/album/album-list/components/list/album-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListComponent": () => (/* binding */ AlbumListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ 4229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _list_item_album_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-item/album-list-item.component */ 1174);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);








const _c0 = function () { return []; };
function AlbumListComponent_app_album_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-album-list-item", 4);
} if (rf & 2) {
    const album_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("album", album_r2)("photos", ctx_r0.groupedPhotos[album_r2.id] || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function AlbumListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "fa-icon", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faSpinner)("pulse", true);
} }
class AlbumListComponent {
    constructor() {
        this.albums = [];
        this.groupedPhotos = {};
        this.isLastPage = true;
        this.loadInProcess = null;
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSpinner;
    }
    trackByAlbum(index, album) {
        return album.id;
    }
}
AlbumListComponent.ɵfac = function AlbumListComponent_Factory(t) { return new (t || AlbumListComponent)(); };
AlbumListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlbumListComponent, selectors: [["app-album-list"]], inputs: { albums: "albums", groupedPhotos: "groupedPhotos", isLastPage: "isLastPage", loadInProcess: "loadInProcess" }, outputs: { loadMore: "loadMore" }, decls: 4, vars: 6, consts: [[3, "isEmpty", "isLoading"], ["infiniteScroll", "", 1, "album-list", "d-flex", "flex-wrap", 3, "infiniteScrollDisabled", "scrolled"], [3, "album", "photos", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center", 4, "ngIf"], [3, "album", "photos"], [1, "text-center"], ["role", "status", "data-testid", "loading-spinner", 3, "icon", "pulse"], [1, "sr-only"]], template: function AlbumListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-content-loading-status", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function AlbumListComponent_Template_div_scrolled_1_listener() { return ctx.loadMore.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlbumListComponent_app_album_list_item_2_Template, 1, 3, "app-album-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AlbumListComponent_div_3_Template, 4, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isEmpty", !ctx.albums.length)("isLoading", !!ctx.loadInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDisabled", ctx.isLastPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.albums)("ngForTrackBy", ctx.trackByAlbum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!ctx.loadInProcess && ctx.albums.length);
    } }, directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__.ContentLoadingStatusComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _list_item_album_list_item_component__WEBPACK_IMPORTED_MODULE_1__.AlbumListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent], styles: [".album-list[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.album-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: calc(25% - 15px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYWxidW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bS1saXN0IHtcclxuICBnYXA6IDIwcHg7XHJcblxyXG4gID4gKiB7XHJcbiAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4ICogMyAvIDQpO1xyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 9003:
/*!****************************************************************************************!*\
  !*** ./src/app/features/album/album-list/components/page/album-list-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListPageComponent": () => (/* binding */ AlbumListPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ngxs-store/album-list.state */ 2127);
/* harmony import */ var _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs-labs/actions-executing */ 9431);
/* harmony import */ var _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/ngxs-store/actions/album.actions */ 220);
/* harmony import */ var _core_ngxs_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/ngxs-store/actions/user.actions */ 2481);
/* harmony import */ var _ngxs_store_album_list_photos_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngxs-store/album-list-photos.state */ 9345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);
/* harmony import */ var _filter_container_album_list_filter_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/container/album-list-filter-container.component */ 2068);
/* harmony import */ var _list_album_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list/album-list.component */ 2330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);













class AlbumListPageComponent {
  constructor(store) {
    this.store = store;
    this.breadcrumbs = [{
      link: '',
      text: 'Dashboard'
    }, {
      link: null,
      text: 'Albums'
    }];
  }

  ngOnInit() {
    this.store.dispatch(new _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.AlbumActions.GetAlbums({
      page: {
        number: 1,
        size: 28
      }
    }));
    this.store.dispatch(new _core_ngxs_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.GetUsers({}));
  }

  loadMore() {
    const currentPageRequest = this.store.selectSnapshot(_ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_1__.AlbumListState).pageRequest;
    this.store.dispatch(new _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.AlbumActions.GetAlbums(Object.assign(Object.assign({}, currentPageRequest), {
      page: {
        number: currentPageRequest.page.number + 1,
        size: currentPageRequest.page.size
      }
    })));
  }

}

AlbumListPageComponent.ɵfac = function AlbumListPageComponent_Factory(t) {
  return new (t || AlbumListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};

AlbumListPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AlbumListPageComponent,
  selectors: [["app-album-list-page"]],
  decls: 10,
  vars: 13,
  consts: [[1, "container", "pt-3"], [3, "items"], [1, "d-block", "mb-2"], [3, "albums", "groupedPhotos", "isLastPage", "loadInProcess", "loadMore"]],
  template: function AlbumListPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Albums");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-album-list-filter-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-album-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("loadMore", function AlbumListPageComponent_Template_app_album_list_loadMore_5_listener() {
        return ctx.loadMore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.breadcrumbs);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("albums", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ctx.albums$))("groupedPhotos", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 7, ctx.groupedPhotos$))("isLastPage", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 9, ctx.isLastPage$))("loadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 11, ctx.loadInProcess$));
    }
  },
  directives: [_shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _filter_container_album_list_filter_container_component__WEBPACK_IMPORTED_MODULE_6__.AlbumListFilterContainerComponent, _list_album_list_component__WEBPACK_IMPORTED_MODULE_7__.AlbumListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_1__.AlbumListState.items)], AlbumListPageComponent.prototype, "albums$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_album_list_state__WEBPACK_IMPORTED_MODULE_1__.AlbumListState.isLastPage)], AlbumListPageComponent.prototype, "isLastPage$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((0,_ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_11__.actionsExecuting)([_core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__.AlbumActions.GetAlbums]))], AlbumListPageComponent.prototype, "loadInProcess$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_album_list_photos_state__WEBPACK_IMPORTED_MODULE_4__.AlbumListPhotosState.groupedPhotos)], AlbumListPageComponent.prototype, "groupedPhotos$", void 0);

/***/ }),

/***/ 9345:
/*!*********************************************************************************!*\
  !*** ./src/app/features/album/album-list/ngxs-store/album-list-photos.state.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListPhotosState": () => (/* binding */ AlbumListPhotosState),
/* harmony export */   "albumListPhotosCount": () => (/* binding */ albumListPhotosCount)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _core_ngxs_store_actions_photo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ngxs-store/actions/photo.actions */ 620);
/* harmony import */ var _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngxs-store/state/entities.state */ 6696);
/* harmony import */ var _core_normalizr_schemas_photo_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/photo-schema */ 6462);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
var AlbumListPhotosState_1;







const albumListPhotosCount = 4;
let AlbumListPhotosState = AlbumListPhotosState_1 = class AlbumListPhotosState {
    getPhotos(ctx, action) {
        const photos = action.pageResult.items;
        const newState = photos.reduce((state, photo) => {
            if (!state[photo.album]) {
                state[photo.album] = [];
            }
            if (state[photo.album].length < albumListPhotosCount) {
                state[photo.album].push(photo.id);
            }
            return state;
        }, {});
        ctx.setState(Object.assign(Object.assign({}, ctx.getState()), newState));
    }
    static groupedPhotos(state, entities) {
        const res = {};
        for (let albumId in state) {
            res[albumId] = (0,normalizr__WEBPACK_IMPORTED_MODULE_4__.denormalize)(state[albumId], [_core_normalizr_schemas_photo_schema__WEBPACK_IMPORTED_MODULE_3__.photoSchema], entities).filter((item) => !!item);
        }
        return res;
    }
};
AlbumListPhotosState.ɵfac = function AlbumListPhotosState_Factory(t) { return new (t || AlbumListPhotosState)(); };
AlbumListPhotosState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AlbumListPhotosState, factory: AlbumListPhotosState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_core_ngxs_store_actions_photo_actions__WEBPACK_IMPORTED_MODULE_1__.PhotoActions.GetPhotosSuccess)
], AlbumListPhotosState.prototype, "getPhotos", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)([AlbumListPhotosState_1, _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__.EntitiesState])
], AlbumListPhotosState, "groupedPhotos", null);
AlbumListPhotosState = AlbumListPhotosState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'albumPhotosList',
        defaults: {},
    })
], AlbumListPhotosState);



/***/ }),

/***/ 2127:
/*!**************************************************************************!*\
  !*** ./src/app/features/album/album-list/ngxs-store/album-list.state.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumListState": () => (/* binding */ AlbumListState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _core_normalizr_schemas_album_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/album-schema */ 3349);
/* harmony import */ var _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngxs-store/state/entities.state */ 6696);
/* harmony import */ var _core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/ngxs-store/actions/album.actions */ 220);
/* harmony import */ var _core_ngxs_store_actions_photo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/ngxs-store/actions/photo.actions */ 620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
var AlbumListState_1;








let AlbumListState = AlbumListState_1 = class AlbumListState {
    getAlbums(ctx, action) {
        var _a;
        const pageResult = action.data.result;
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, pageResult), { items: ((_a = pageResult.pageRequest.page) === null || _a === void 0 ? void 0 : _a.number) === 1
                ? pageResult.items
                : [...state.items, ...pageResult.items] }));
        // идея в том, что нужно запрашивать только фотки для полученных альбомов. Нам нужно только 4 фотки каждого альбома,
        // но АПИ не позволяет нам задавать лимит для количества фоток для каждого альбома.
        ctx.dispatch(new _core_ngxs_store_actions_photo_actions__WEBPACK_IMPORTED_MODULE_4__.PhotoActions.GetPhotos({
            filter: pageResult.items.map((albumId) => ({ field: 'albumId', value: '' + albumId })),
        }));
    }
    static items(state, entities) {
        return (0,normalizr__WEBPACK_IMPORTED_MODULE_5__.denormalize)(state.items, [_core_normalizr_schemas_album_schema__WEBPACK_IMPORTED_MODULE_1__.albumSchema], entities).filter((item) => !!item);
    }
    static isLastPage(state) {
        return state.totalCount === state.items.length;
    }
};
AlbumListState.ɵfac = function AlbumListState_Factory(t) { return new (t || AlbumListState)(); };
AlbumListState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AlbumListState, factory: AlbumListState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_core_ngxs_store_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.AlbumActions.GetAlbumsSuccess)
], AlbumListState.prototype, "getAlbums", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)([AlbumListState_1, _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__.EntitiesState])
], AlbumListState, "items", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AlbumListState, "isLastPage", null);
AlbumListState = AlbumListState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'albumList',
        defaults: {
            pageRequest: {},
            totalCount: 0,
            items: [],
        },
    })
], AlbumListState);



/***/ }),

/***/ 414:
/*!*************************************************************************!*\
  !*** ./src/app/features/album/album-list/ngxs-store/user-list.state.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListState": () => (/* binding */ UserListState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _core_normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/user-schema */ 151);
/* harmony import */ var _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngxs-store/state/entities.state */ 6696);
/* harmony import */ var _core_ngxs_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/ngxs-store/actions/user.actions */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
var UserListState_1;







let UserListState = UserListState_1 = class UserListState {
    getUsers(ctx, action) {
        const pageResult = action.data.result;
        ctx.setState(pageResult.items);
    }
    static items(state, entities) {
        return (0,normalizr__WEBPACK_IMPORTED_MODULE_4__.denormalize)(state, [_core_normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_1__.userSchema], entities).filter((item) => !!item);
    }
};
UserListState.ɵfac = function UserListState_Factory(t) { return new (t || UserListState)(); };
UserListState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserListState, factory: UserListState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_core_ngxs_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__.UserActions.GetUsersSuccess)
], UserListState.prototype, "getUsers", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)([UserListState_1, _core_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_2__.EntitiesState])
], UserListState, "items", null);
UserListState = UserListState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'userList',
        defaults: [],
    })
], UserListState);



/***/ })

}]);
//# sourceMappingURL=src_app_features_album_album-list_album-list_module_ts.js.map