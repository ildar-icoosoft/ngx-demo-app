"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_post_post-list_post-list_module_ts"],{

/***/ 4599:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/post/post-list/components/filter/container/post-list-filter-container.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListFilterContainerComponent": () => (/* binding */ PostListFilterContainerComponent)
/* harmony export */ });
/* harmony import */ var C_demo_projects_ngx_demo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngrx-store/post-list.selectors */ 7799);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/ngrx-store/actions/post.actions */ 3318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _post_list_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-list-filter.component */ 32);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);









class PostListFilterContainerComponent {
  constructor(store) {
    this.store = store;
    this.users$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUserList));
  }

  changeFilter(filter) {
    var _this = this;

    return (0,C_demo_projects_ngx_demo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentListRequest = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPostListRequest)));

      _this.store.dispatch(new _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__.GetPosts(Object.assign(Object.assign({}, currentListRequest), {
        page: {
          number: 1,
          size: currentListRequest.page.size
        },
        filter
      })));
    })();
  }

}

PostListFilterContainerComponent.ɵfac = function PostListFilterContainerComponent_Factory(t) {
  return new (t || PostListFilterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};

PostListFilterContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PostListFilterContainerComponent,
  selectors: [["app-post-list-filter-container"]],
  decls: 2,
  vars: 3,
  consts: [[3, "users", "changeFilter"]],
  template: function PostListFilterContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-post-list-filter", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeFilter", function PostListFilterContainerComponent_Template_app_post_list_filter_changeFilter_0_listener($event) {
        return ctx.changeFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("users", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.users$));
    }
  },
  directives: [_post_list_filter_component__WEBPACK_IMPORTED_MODULE_3__.PostListFilterComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 32:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/post/post-list/components/filter/post-list-filter.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListFilterComponent": () => (/* binding */ PostListFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









function PostListFilterComponent_option_5_Template(rf, ctx) {
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

let PostListFilterComponent = class PostListFilterComponent {
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

PostListFilterComponent.ɵfac = function PostListFilterComponent_Factory(t) {
  return new (t || PostListFilterComponent)();
};

PostListFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PostListFilterComponent,
  selectors: [["app-post-list-filter"]],
  inputs: {
    users: "users"
  },
  outputs: {
    changeFilter: "changeFilter"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "d-flex", 3, "formGroup"], ["formControlName", "q", "placeholder", "Search", 1, "form-control", "me-2"], ["formControlName", "userId", "aria-label", "User filter", 1, "form-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
  template: function PostListFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2)(3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostListFilterComponent_option_5_Template, 2, 2, "option", 4);
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
  styles: [".search-input[_ngcontent-%COMP%], .user-filter[_ngcontent-%COMP%] {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQUNGIiwiZmlsZSI6InBvc3QtbGlzdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWlucHV0LFxyXG4udXNlci1maWx0ZXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4iXX0= */"],
  changeDetection: 0
});
PostListFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], PostListFilterComponent);


/***/ }),

/***/ 4235:
/*!*************************************************************************************!*\
  !*** ./src/app/features/post/post-list/components/page/post-list-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListPageComponent": () => (/* binding */ PostListPageComponent)
/* harmony export */ });
/* harmony import */ var C_demo_projects_ngx_demo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/ngrx-store/actions/post.actions */ 3318);
/* harmony import */ var _ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ngrx-store/post-list.selectors */ 7799);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/ngrx-store/actions/user.actions */ 5071);
/* harmony import */ var _core_ngrx_store_selectors_current_actions_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/ngrx-store/selectors/current-actions.selectors */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);
/* harmony import */ var _filter_container_post_list_filter_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/container/post-list-filter-container.component */ 4599);
/* harmony import */ var _table_post_list_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../table/post-list-table.component */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);














class PostListPageComponent {
  constructor(store) {
    this.store = store;
    this.breadcrumbs = [{
      link: '',
      text: 'Dashboard'
    }, {
      link: null,
      text: 'Posts'
    }];
    this.totalCount$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPostListTotalCount));
    this.items$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPostListItems));
    this.currentListRequest$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_ngrx_store_post_list_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPostListRequest));
    this.loadInProcess$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)((0,_core_ngrx_store_selectors_current_actions_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsActionInProcess)(_core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GET_POSTS)));
  }

  ngOnInit() {
    this.store.dispatch(new _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetPosts({
      page: {
        number: 1,
        size: 5
      },
      sort: {
        field: 'id',
        direction: 'asc'
      }
    }));
    this.store.dispatch(new _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__.GetUsers());
  }

  onPageChange(pageNumber) {
    var _this = this;

    return (0,C_demo_projects_ngx_demo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const currentListRequest = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this.currentListRequest$);

      _this.store.dispatch(new _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetPosts(Object.assign(Object.assign({}, currentListRequest), {
        page: {
          number: pageNumber,
          size: ((_a = currentListRequest.page) === null || _a === void 0 ? void 0 : _a.size) || 0
        }
      })));
    })();
  }

  onSort(sort) {
    var _this2 = this;

    return (0,C_demo_projects_ngx_demo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentListRequest = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this2.currentListRequest$);

      _this2.store.dispatch(new _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetPosts(Object.assign(Object.assign({}, currentListRequest), {
        sort
      })));
    })();
  }

}

PostListPageComponent.ɵfac = function PostListPageComponent_Factory(t) {
  return new (t || PostListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
};

PostListPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: PostListPageComponent,
  selectors: [["app-post-list-page"]],
  decls: 10,
  vars: 13,
  consts: [[1, "container", "pt-3"], [3, "items"], [1, "d-block", "mb-2"], [3, "loadInProcess", "items", "totalCount", "listRequest", "sort", "pageChange"]],
  template: function PostListPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-post-list-filter-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-post-list-table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function PostListPageComponent_Template_app_post_list_table_sort_5_listener($event) {
        return ctx.onSort($event);
      })("pageChange", function PostListPageComponent_Template_app_post_list_table_pageChange_5_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.breadcrumbs);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loadInProcess", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, ctx.loadInProcess$))("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 7, ctx.items$))("totalCount", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, ctx.totalCount$))("listRequest", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 11, ctx.currentListRequest$));
    }
  },
  directives: [_shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _filter_container_post_list_filter_container_component__WEBPACK_IMPORTED_MODULE_6__.PostListFilterContainerComponent, _table_post_list_table_component__WEBPACK_IMPORTED_MODULE_7__.PostListTableComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 7516:
/*!***************************************************************************************!*\
  !*** ./src/app/features/post/post-list/components/table/post-list-table.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListTableComponent": () => (/* binding */ PostListTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);








function PostListTableComponent_ng_container_1_th_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", (ctx_r6.listRequest.sort == null ? null : ctx_r6.listRequest.sort.direction) === "asc" ? ctx_r6.faSortUp : ctx_r6.faSortDown)("fixedWidth", true);
} }
function PostListTableComponent_ng_container_1_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostListTableComponent_ng_container_1_th_4_Template_th_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const col_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.sortBy(col_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostListTableComponent_ng_container_1_th_4_ng_container_2_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.listRequest.sort == null ? null : ctx_r1.listRequest.sort.field) === col_r5.id);
} }
const _c0 = function (a2) { return ["/", "user", a2]; };
function PostListTableComponent_ng_container_1_tr_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r9.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.user.name);
} }
const _c1 = function (a2) { return ["/", "post", a2]; };
function PostListTableComponent_ng_container_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostListTableComponent_ng_container_1_tr_6_ng_container_4_Template, 3, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, item_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.body);
} }
function PostListTableComponent_ng_container_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Prev");
} }
function PostListTableComponent_ng_container_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Next");
} }
function PostListTableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 2)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostListTableComponent_ng_container_1_th_4_Template, 3, 2, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PostListTableComponent_ng_container_1_tr_6_Template, 10, 7, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngb-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function PostListTableComponent_ng_container_1_Template_ngb_pagination_pageChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.pageChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PostListTableComponent_ng_container_1_ng_template_8_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PostListTableComponent_ng_container_1_ng_template_9_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", (ctx_r0.listRequest.page == null ? null : ctx_r0.listRequest.page.number) || 1)("pageSize", (ctx_r0.listRequest.page == null ? null : ctx_r0.listRequest.page.size) || 0)("collectionSize", ctx_r0.totalCount);
} }
class PostListTableComponent {
    constructor() {
        this.faSortUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSortUp;
        this.faSortDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSortDown;
        this.columns = [
            {
                id: 'id',
                title: 'ID',
            },
            {
                id: 'userId',
                title: 'User',
            },
            {
                id: 'title',
                title: 'Title',
            },
            {
                id: 'body',
                title: 'Content',
            },
        ];
        this.items = [];
        this.listRequest = {};
        this.loadInProcess = true;
        this.totalCount = 0;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    sortBy(colId) {
        var _a;
        if (((_a = this.listRequest.sort) === null || _a === void 0 ? void 0 : _a.field) === colId) {
            this.sort.emit({
                field: this.listRequest.sort.field,
                direction: this.listRequest.sort.direction === 'asc' ? 'desc' : 'asc',
            });
        }
        else {
            this.sort.emit({
                field: colId,
                direction: 'asc',
            });
        }
    }
}
PostListTableComponent.ɵfac = function PostListTableComponent_Factory(t) { return new (t || PostListTableComponent)(); };
PostListTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostListTableComponent, selectors: [["app-post-list-table"]], inputs: { items: "items", listRequest: "listRequest", loadInProcess: "loadInProcess", totalCount: "totalCount" }, outputs: { sort: "sort", pageChange: "pageChange" }, decls: 2, vars: 3, consts: [[3, "isEmpty", "isLoading"], [4, "ngIf"], [1, "table", "table-bordered"], ["scope", "col", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "page", "pageSize", "collectionSize", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["scope", "col", 3, "click"], [3, "icon", "fixedWidth"], ["scope", "row", 1, "fw-normal"], [3, "routerLink"]], template: function PostListTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-content-loading-status", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostListTableComponent_ng_container_1_Template, 10, 5, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEmpty", !ctx.items.length)("isLoading", ctx.loadInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.length);
    } }, directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__.ContentLoadingStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationNext], styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJwb3N0LWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGgge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 5663:
/*!*************************************************************************!*\
  !*** ./src/app/features/post/post-list/ngrx-store/post-list.reducer.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postListFeatureKey": () => (/* binding */ postListFeatureKey),
/* harmony export */   "postListInitialState": () => (/* binding */ postListInitialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ngrx-store/actions/post.actions */ 3318);

const postListFeatureKey = 'postList';
const postListInitialState = {
    pageRequest: {},
    totalCount: 0,
    items: [],
};
// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state = postListInitialState, action) {
    switch (action.type) {
        case _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.GET_POSTS_SUCCESS:
            const getPostsSuccessAction = action;
            return getPostsSuccessAction.data.result;
        default:
            return state;
    }
}


/***/ }),

/***/ 7799:
/*!***************************************************************************!*\
  !*** ./src/app/features/post/post-list/ngrx-store/post-list.selectors.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPostListItems": () => (/* binding */ selectPostListItems),
/* harmony export */   "selectPostListRequest": () => (/* binding */ selectPostListRequest),
/* harmony export */   "selectPostListState": () => (/* binding */ selectPostListState),
/* harmony export */   "selectPostListTotalCount": () => (/* binding */ selectPostListTotalCount),
/* harmony export */   "selectUserList": () => (/* binding */ selectUserList),
/* harmony export */   "selectUserListState": () => (/* binding */ selectUserListState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _post_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list.reducer */ 5663);
/* harmony import */ var _core_ngrx_store_selectors_entities_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ngrx-store/selectors/entities.selectors */ 2257);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _core_normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/post-schema */ 5503);
/* harmony import */ var _user_list_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list.reducer */ 9781);
/* harmony import */ var _core_normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/user-schema */ 151);







const selectPostListState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)(_post_list_reducer__WEBPACK_IMPORTED_MODULE_0__.postListFeatureKey);
const selectPostListItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectPostListState, _core_ngrx_store_selectors_entities_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEntities, (state, entities) => {
    return (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.denormalize)(state.items, [_core_normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_2__.postSchema], entities);
});
const selectPostListRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectPostListState, (state) => {
    return state.pageRequest;
});
const selectPostListTotalCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectPostListState, (state) => {
    return state.totalCount;
});
const selectUserListState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)(_user_list_reducer__WEBPACK_IMPORTED_MODULE_3__.userListFeatureKey);
const selectUserList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectUserListState, _core_ngrx_store_selectors_entities_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEntities, (state, entities) => {
    return (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.denormalize)(state, [_core_normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__.userSchema], entities);
});


/***/ }),

/***/ 9781:
/*!*************************************************************************!*\
  !*** ./src/app/features/post/post-list/ngrx-store/user-list.reducer.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "userListFeatureKey": () => (/* binding */ userListFeatureKey)
/* harmony export */ });
/* harmony import */ var _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ngrx-store/actions/user.actions */ 5071);

const userListFeatureKey = 'userList';
const initialState = [];
// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state = initialState, action) {
    switch (action.type) {
        case _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.GET_USERS_SUCCESS:
            const getUsersSuccessAction = action;
            return getUsersSuccessAction.data.result.items;
        default:
            return state;
    }
}


/***/ }),

/***/ 7031:
/*!*********************************************************************!*\
  !*** ./src/app/features/post/post-list/post-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListRoutingModule": () => (/* binding */ PostListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_post_list_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/post-list-page.component */ 4235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_post_list_page_component__WEBPACK_IMPORTED_MODULE_0__.PostListPageComponent }];
class PostListRoutingModule {
}
PostListRoutingModule.ɵfac = function PostListRoutingModule_Factory(t) { return new (t || PostListRoutingModule)(); };
PostListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PostListRoutingModule });
PostListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PostListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7287:
/*!*************************************************************!*\
  !*** ./src/app/features/post/post-list/post-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListModule": () => (/* binding */ PostListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _post_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list-routing.module */ 7031);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _components_filter_post_list_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter/post-list-filter.component */ 32);
/* harmony import */ var _components_filter_container_post_list_filter_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/container/post-list-filter-container.component */ 4599);
/* harmony import */ var _components_page_post_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/post-list-page.component */ 4235);
/* harmony import */ var _components_table_post_list_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table/post-list-table.component */ 7516);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_store_post_list_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngrx-store/post-list.reducer */ 5663);
/* harmony import */ var _ngrx_store_user_list_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngrx-store/user-list.reducer */ 9781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);












class PostListModule {
}
PostListModule.ɵfac = function PostListModule_Factory(t) { return new (t || PostListModule)(); };
PostListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PostListModule });
PostListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _post_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostListRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature(_ngrx_store_post_list_reducer__WEBPACK_IMPORTED_MODULE_6__.postListFeatureKey, _ngrx_store_post_list_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature(_ngrx_store_user_list_reducer__WEBPACK_IMPORTED_MODULE_7__.userListFeatureKey, _ngrx_store_user_list_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PostListModule, { declarations: [_components_filter_post_list_filter_component__WEBPACK_IMPORTED_MODULE_2__.PostListFilterComponent,
        _components_filter_container_post_list_filter_container_component__WEBPACK_IMPORTED_MODULE_3__.PostListFilterContainerComponent,
        _components_page_post_list_page_component__WEBPACK_IMPORTED_MODULE_4__.PostListPageComponent,
        _components_table_post_list_table_component__WEBPACK_IMPORTED_MODULE_5__.PostListTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _post_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostListRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule] }); })();


/***/ }),

/***/ 4363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 4423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9904);


function firstValueFrom(source, config) {
    const hasConfig = typeof config === 'object';
    return new Promise((resolve, reject) => {
        const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
            next: (value) => {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: () => {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}


/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_post_post-list_post-list_module_ts.js.map