"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_post_post-details_post-details_module_ts"],{

/***/ 3710:
/*!***************************************************************!*\
  !*** ./src/app/core/ngrx-store/selectors/router.selectors.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCurrentRoute": () => (/* binding */ selectCurrentRoute),
/* harmony export */   "selectFragment": () => (/* binding */ selectFragment),
/* harmony export */   "selectQueryParam": () => (/* binding */ selectQueryParam),
/* harmony export */   "selectQueryParams": () => (/* binding */ selectQueryParams),
/* harmony export */   "selectRouteData": () => (/* binding */ selectRouteData),
/* harmony export */   "selectRouteParam": () => (/* binding */ selectRouteParam),
/* harmony export */   "selectRouteParams": () => (/* binding */ selectRouteParams),
/* harmony export */   "selectUrl": () => (/* binding */ selectUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ 25);

const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, // select the current url
 } = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__.getSelectors();


/***/ }),

/***/ 6046:
/*!*********************************************************************************!*\
  !*** ./src/app/features/post/post-details/ngrx-store/post-details.selectors.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectSinglePost": () => (/* binding */ selectSinglePost),
/* harmony export */   "selectSinglePostBreadcrumbs": () => (/* binding */ selectSinglePostBreadcrumbs)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_ngrx_store_selectors_router_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ngrx-store/selectors/router.selectors */ 3710);
/* harmony import */ var _core_ngrx_store_selectors_entities_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ngrx-store/selectors/entities.selectors */ 2257);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _core_normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/normalizr/schemas/post-schema */ 5503);





const selectSinglePost = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)((0,_core_ngrx_store_selectors_router_selectors__WEBPACK_IMPORTED_MODULE_0__.selectRouteParam)('id'), _core_ngrx_store_selectors_entities_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEntities, (postId, entities) => {
    return (0,normalizr__WEBPACK_IMPORTED_MODULE_4__.denormalize)(postId, _core_normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_2__.postSchema, entities);
});
const selectSinglePostBreadcrumbs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectSinglePost, (post) => {
    if (!post)
        return null;
    return [
        {
            link: '',
            text: 'Dashboard',
        },
        {
            link: ['/', 'posts'],
            text: 'Posts',
        },
        {
            link: null,
            text: post.id + '. ' + post.title,
        },
    ];
});


/***/ }),

/***/ 643:
/*!********************************************************************************!*\
  !*** ./src/app/features/post/post-details/page/post-details-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDetailsPageComponent": () => (/* binding */ PostDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_store_post_details_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx-store/post-details.selectors */ 6046);
/* harmony import */ var _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ngrx-store/actions/post.actions */ 3318);
/* harmony import */ var _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngrx-store/actions/user.actions */ 5071);
/* harmony import */ var _core_ngrx_store_selectors_current_actions_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/ngrx-store/selectors/current-actions.selectors */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/breadcrumbs/breadcrumbs.component */ 2834);












function PostDetailsPageComponent_app_breadcrumbs_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumbs", 4);
  }

  if (rf & 2) {
    const breadcrumbs_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", breadcrumbs_r2);
  }
}

const _c0 = function (a2) {
  return ["/", "user", a2];
};

function PostDetailsPageComponent_ng_container_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, post_r3.user.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r3.user.name);
  }
}

function PostDetailsPageComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PostDetailsPageComponent_ng_container_6_div_3_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const post_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", post_r3.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r3.body);
  }
}

class PostDetailsPageComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
    this.post$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_ngrx_store_post_details_selectors__WEBPACK_IMPORTED_MODULE_0__.selectSinglePost));
    this.loadInProcess$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)((0,_core_ngrx_store_selectors_current_actions_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsActionInProcess)(_core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GET_SINGLE_POST)));
    this.breadcrumbs$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_ngrx_store_post_details_selectors__WEBPACK_IMPORTED_MODULE_0__.selectSinglePostBreadcrumbs));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.store.dispatch(new _core_ngrx_store_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetSinglePost(id));
    });
    this.store.dispatch(new _core_ngrx_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.GetUsers());
  }

}

PostDetailsPageComponent.ɵfac = function PostDetailsPageComponent_Factory(t) {
  return new (t || PostDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
};

PostDetailsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PostDetailsPageComponent,
  selectors: [["app-post-details-page"]],
  decls: 8,
  vars: 12,
  consts: [[1, "container", "pt-3"], [3, "isEmpty", "isLoading"], [3, "items", 4, "ngIf"], [4, "ngIf"], [3, "items"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [3, "routerLink"]],
  template: function PostDetailsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-content-loading-status", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PostDetailsPageComponent_app_breadcrumbs_4_Template, 1, 1, "app-breadcrumbs", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PostDetailsPageComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isEmpty", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx.post$) === undefined)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, ctx.loadInProcess$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, ctx.breadcrumbs$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 10, ctx.post$));
    }
  },
  directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_4__.ContentLoadingStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 1148:
/*!***************************************************************************!*\
  !*** ./src/app/features/post/post-details/post-details-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDetailsRoutingModule": () => (/* binding */ PostDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _page_post_details_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/post-details-page.component */ 643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _page_post_details_page_component__WEBPACK_IMPORTED_MODULE_0__.PostDetailsPageComponent }];
class PostDetailsRoutingModule {
}
PostDetailsRoutingModule.ɵfac = function PostDetailsRoutingModule_Factory(t) { return new (t || PostDetailsRoutingModule)(); };
PostDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PostDetailsRoutingModule });
PostDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PostDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7244:
/*!*******************************************************************!*\
  !*** ./src/app/features/post/post-details/post-details.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDetailsModule": () => (/* binding */ PostDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _post_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-details-routing.module */ 1148);
/* harmony import */ var _page_post_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/post-details-page.component */ 643);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class PostDetailsModule {
}
PostDetailsModule.ɵfac = function PostDetailsModule_Factory(t) { return new (t || PostDetailsModule)(); };
PostDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PostDetailsModule });
PostDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _post_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PostDetailsModule, { declarations: [_page_post_details_page_component__WEBPACK_IMPORTED_MODULE_1__.PostDetailsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _post_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_post_post-details_post-details_module_ts.js.map