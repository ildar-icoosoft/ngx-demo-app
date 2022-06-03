"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 9126:
/*!************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/header/dashboard-header.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardHeaderComponent": () => (/* binding */ DashboardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DashboardHeaderComponent {
}
DashboardHeaderComponent.ɵfac = function DashboardHeaderComponent_Factory(t) { return new (t || DashboardHeaderComponent)(); };
DashboardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardHeaderComponent, selectors: [["app-dashboard-header"]], decls: 9, vars: 0, consts: [[1, "dashboard-header"], [1, "container", "pt-5", "pb-5", "text-white", "d-flex", "justify-content-between"], ["href", "https://github.com/ildar-icoosoft/ngx-demo-app", "target", "_blank", "title", "Github"], ["src", "assets/icons/GitHub-Mark-Light-64px.png", "alt", "", 1, "dashboard-header__logo"]], template: function DashboardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div")(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ngx Demo App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".dashboard-header[_ngcontent-%COMP%] {\n  background: #2C3E50;\n}\n.dashboard-header__logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzJDM0U1MDtcclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 4164:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/page/dashboard-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageComponent": () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ngxs-store/dashboard.actions */ 2156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/dashboard-header.component */ 9126);
/* harmony import */ var _statistics_container_dashboard_statistics_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics/container/dashboard-statistics-container.component */ 4737);
/* harmony import */ var _posts_dashboard_posts_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/dashboard-posts-container.component */ 9584);
/* harmony import */ var _photos_container_dashboard_photos_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../photos/container/dashboard-photos-container.component */ 1039);







class DashboardPageComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.DashboardActions.GetRecentPhotos());
        this.store.dispatch(new _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.DashboardActions.GetRecentPosts());
        this.store.dispatch(new _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_0__.DashboardActions.GetAlbumsCount());
    }
}
DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) { return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
DashboardPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardPageComponent, selectors: [["app-dashboard-page"]], decls: 6, vars: 0, consts: [[1, "container", "pt-3"], [1, "row"], [1, "col-12", "col-lg-4", "mb-3"]], template: function DashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-dashboard-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-dashboard-statistics-container", 2)(4, "app-dashboard-posts-container", 2)(5, "app-dashboard-photos-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } }, directives: [_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_2__.DashboardHeaderComponent, _statistics_container_dashboard_statistics_container_component__WEBPACK_IMPORTED_MODULE_3__.DashboardStatisticsContainerComponent, _posts_dashboard_posts_container_component__WEBPACK_IMPORTED_MODULE_4__.DashboardPostsContainerComponent, _photos_container_dashboard_photos_container_component__WEBPACK_IMPORTED_MODULE_5__.DashboardPhotosContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 4396:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/photos-item/dashboard-photos-item.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPhotosItemComponent": () => (/* binding */ DashboardPhotosItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function (a2) { return ["/", "photo", a2]; };
function DashboardPhotosItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.photo.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.photo.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx_r0.photo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.photo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.photo.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.photo.title);
} }
class DashboardPhotosItemComponent {
}
DashboardPhotosItemComponent.ɵfac = function DashboardPhotosItemComponent_Factory(t) { return new (t || DashboardPhotosItemComponent)(); };
DashboardPhotosItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardPhotosItemComponent, selectors: [["app-dashboard-photos-item"]], inputs: { photo: "photo" }, decls: 1, vars: 1, consts: [["class", "dashboard-photo-item", 4, "ngIf"], [1, "dashboard-photo-item"], [3, "routerLink"], ["alt", "", 3, "src", "title"], [1, "text-truncate", 3, "title"]], template: function DashboardPhotosItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardPhotosItemComponent_div_0_Template, 6, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".dashboard-photo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1waG90b3MtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJkYXNoYm9hcmQtcGhvdG9zLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXBob3RvLWl0ZW0ge1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 1039:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/photos/container/dashboard-photos-container.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPhotosContainerComponent": () => (/* binding */ DashboardPhotosContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngxs-store/dashboard.state */ 7003);
/* harmony import */ var _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs-labs/actions-executing */ 9431);
/* harmony import */ var _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ngxs-store/dashboard.actions */ 2156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_photos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-photos.component */ 383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








class DashboardPhotosContainerComponent {}

DashboardPhotosContainerComponent.ɵfac = function DashboardPhotosContainerComponent_Factory(t) {
  return new (t || DashboardPhotosContainerComponent)();
};

DashboardPhotosContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardPhotosContainerComponent,
  selectors: [["app-dashboard-photos-container"]],
  decls: 3,
  vars: 6,
  consts: [[3, "photos", "isLoading"]],
  template: function DashboardPhotosContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-dashboard-photos", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("photos", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.photos$))("isLoading", !!_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.loadInProcess$));
    }
  },
  directives: [_dashboard_photos_component__WEBPACK_IMPORTED_MODULE_3__.DashboardPhotosComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcGhvdG9zLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__.DashboardState.photos)], DashboardPhotosContainerComponent.prototype, "photos$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((0,_ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__.actionsExecuting)([_ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPhotos]))], DashboardPhotosContainerComponent.prototype, "loadInProcess$", void 0);

/***/ }),

/***/ 383:
/*!************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/photos/dashboard-photos.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPhotosComponent": () => (/* binding */ DashboardPhotosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _photos_item_dashboard_photos_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photos-item/dashboard-photos-item.component */ 4396);




function DashboardPhotosComponent_app_dashboard_photos_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-dashboard-photos-item", 6);
} if (rf & 2) {
    const photo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("photo", photo_r1);
} }
class DashboardPhotosComponent {
    constructor() {
        this.photos = [];
        this.isLoading = true;
    }
    trackByPhoto(index, post) {
        return post.id;
    }
}
DashboardPhotosComponent.ɵfac = function DashboardPhotosComponent_Factory(t) { return new (t || DashboardPhotosComponent)(); };
DashboardPhotosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardPhotosComponent, selectors: [["app-dashboard-photos"]], inputs: { photos: "photos", isLoading: "isLoading" }, decls: 7, vars: 4, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "isEmpty", "isLoading"], [1, "dashboard-photo-list", "d-flex", "flex-wrap"], [3, "photo", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "photo"]], template: function DashboardPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Recent Photos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-content-loading-status", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashboardPhotosComponent_app_dashboard_photos_item_6_Template, 1, 1, "app-dashboard-photos-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isEmpty", !ctx.photos.length)("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.photos)("ngForTrackBy", ctx.trackByPhoto);
    } }, directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__.ContentLoadingStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _photos_item_dashboard_photos_item_component__WEBPACK_IMPORTED_MODULE_1__.DashboardPhotosItemComponent], styles: [".dashboard-photo-list[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.dashboard-photo-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: calc(33.33% - 6.6666666667px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1waG90b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLG9DQUFBO0FBQ0oiLCJmaWxlIjoiZGFzaGJvYXJkLXBob3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtcGhvdG8tbGlzdCB7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICA+ICoge1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMTBweCAqIDIgLyAzKTtcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9584:
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/posts/dashboard-posts-container.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPostsContainerComponent": () => (/* binding */ DashboardPostsContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ngxs-store/dashboard.state */ 7003);
/* harmony import */ var _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs-labs/actions-executing */ 9431);
/* harmony import */ var _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ngxs-store/dashboard.actions */ 2156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/post-list/post-list.component */ 8822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








class DashboardPostsContainerComponent {}

DashboardPostsContainerComponent.ɵfac = function DashboardPostsContainerComponent_Factory(t) {
  return new (t || DashboardPostsContainerComponent)();
};

DashboardPostsContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardPostsContainerComponent,
  selectors: [["app-dashboard-posts-container"]],
  decls: 3,
  vars: 6,
  consts: [["title", "Latest posts", 3, "posts", "isLoading"]],
  template: function DashboardPostsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-post-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("posts", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.posts$))("isLoading", !!_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.loadInProcess$));
    }
  },
  directives: [_shared_components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__.PostListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcG9zdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__.DashboardState.posts)], DashboardPostsContainerComponent.prototype, "posts$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((0,_ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__.actionsExecuting)([_ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPosts]))], DashboardPostsContainerComponent.prototype, "loadInProcess$", void 0);

/***/ }),

/***/ 4737:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/statistics/container/dashboard-statistics-container.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardStatisticsContainerComponent": () => (/* binding */ DashboardStatisticsContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngxs-store/dashboard.state */ 7003);
/* harmony import */ var _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs-labs/actions-executing */ 9431);
/* harmony import */ var _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ngxs-store/dashboard.actions */ 2156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-statistics.component */ 1621);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








class DashboardStatisticsContainerComponent {}

DashboardStatisticsContainerComponent.ɵfac = function DashboardStatisticsContainerComponent_Factory(t) {
  return new (t || DashboardStatisticsContainerComponent)();
};

DashboardStatisticsContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardStatisticsContainerComponent,
  selectors: [["app-dashboard-statistics-container"]],
  decls: 5,
  vars: 12,
  consts: [[3, "totalPostsCount", "totalAlbumsCount", "totalPhotosCount", "isLoading"]],
  template: function DashboardStatisticsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-dashboard-statistics", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("totalPostsCount", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, ctx.totalPostsCount$))("totalAlbumsCount", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, ctx.totalAlbumsCount$))("totalPhotosCount", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, ctx.totalPhotosCount$))("isLoading", !!_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 10, ctx.isStatisticsLoading$));
    }
  },
  directives: [_dashboard_statistics_component__WEBPACK_IMPORTED_MODULE_3__.DashboardStatisticsComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtc3RhdGlzdGljcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__.DashboardState.totalPostsCount)], DashboardStatisticsContainerComponent.prototype, "totalPostsCount$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__.DashboardState.totalPhotosCount)], DashboardStatisticsContainerComponent.prototype, "totalPhotosCount$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_1__.DashboardState.totalAlbumsCount)], DashboardStatisticsContainerComponent.prototype, "totalAlbumsCount$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((0,_ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_7__.actionsExecuting)([_ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPosts, _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPhotos, _ngxs_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetAlbumsCount]))], DashboardStatisticsContainerComponent.prototype, "isStatisticsLoading$", void 0);

/***/ }),

/***/ 1621:
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/statistics/dashboard-statistics.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardStatisticsComponent": () => (/* binding */ DashboardStatisticsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);




function DashboardStatisticsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "fa-icon", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faSpinner)("pulse", true);
} }
function DashboardStatisticsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Albums");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r1.totalPostsCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx_r1.totalAlbumsCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx_r1.totalPhotosCount));
} }
class DashboardStatisticsComponent {
    constructor() {
        this.totalPostsCount = 0;
        this.totalAlbumsCount = 0;
        this.totalPhotosCount = 0;
        this.isLoading = true;
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSpinner;
    }
}
DashboardStatisticsComponent.ɵfac = function DashboardStatisticsComponent_Factory(t) { return new (t || DashboardStatisticsComponent)(); };
DashboardStatisticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardStatisticsComponent, selectors: [["app-dashboard-statistics"]], inputs: { totalPostsCount: "totalPostsCount", totalAlbumsCount: "totalAlbumsCount", totalPhotosCount: "totalPhotosCount", isLoading: "isLoading" }, decls: 6, vars: 2, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["class", "text-center", 4, "ngIf"], ["class", "d-flex justify-content-between", 4, "ngIf"], [1, "text-center"], ["role", "status", "data-testid", "loading-spinner", 3, "icon", "pulse"], [1, "sr-only"], [1, "d-flex", "justify-content-between"], [1, "fs-3", "fw-bold", "text-success"]], template: function DashboardStatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardStatisticsComponent_div_4_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardStatisticsComponent_div_5_Template, 16, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 6231:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/dashboard-page.component */ 4164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.DashboardPageComponent }];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1104:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 6231);
/* harmony import */ var _components_statistics_dashboard_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/statistics/dashboard-statistics.component */ 1621);
/* harmony import */ var _components_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page/dashboard-page.component */ 4164);
/* harmony import */ var _components_photos_dashboard_photos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/photos/dashboard-photos.component */ 383);
/* harmony import */ var _components_photos_container_dashboard_photos_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photos/container/dashboard-photos-container.component */ 1039);
/* harmony import */ var _components_posts_dashboard_posts_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/posts/dashboard-posts-container.component */ 9584);
/* harmony import */ var _components_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/dashboard-header.component */ 9126);
/* harmony import */ var _components_statistics_container_dashboard_statistics_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/statistics/container/dashboard-statistics-container.component */ 4737);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_photos_item_dashboard_photos_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/photos-item/dashboard-photos-item.component */ 4396);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngxs-store/dashboard.state */ 7003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_10__.NgxsModule.forFeature([_ngxs_store_dashboard_state__WEBPACK_IMPORTED_MODULE_11__.DashboardState]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_statistics_dashboard_statistics_component__WEBPACK_IMPORTED_MODULE_1__.DashboardStatisticsComponent,
        _components_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__.DashboardPageComponent,
        _components_photos_dashboard_photos_component__WEBPACK_IMPORTED_MODULE_3__.DashboardPhotosComponent,
        _components_photos_container_dashboard_photos_container_component__WEBPACK_IMPORTED_MODULE_4__.DashboardPhotosContainerComponent,
        _components_posts_dashboard_posts_container_component__WEBPACK_IMPORTED_MODULE_5__.DashboardPostsContainerComponent,
        _components_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_6__.DashboardHeaderComponent,
        _components_statistics_container_dashboard_statistics_container_component__WEBPACK_IMPORTED_MODULE_7__.DashboardStatisticsContainerComponent,
        _components_photos_item_dashboard_photos_item_component__WEBPACK_IMPORTED_MODULE_9__.DashboardPhotosItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["ɵbc"]] }); })();


/***/ }),

/***/ 2156:
/*!********************************************************************!*\
  !*** ./src/app/features/dashboard/ngxs-store/dashboard.actions.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardActions": () => (/* binding */ DashboardActions)
/* harmony export */ });
var DashboardActions;
(function (DashboardActions) {
    class GetRecentPhotos {
    }
    GetRecentPhotos.type = '[Dashboard] GetRecentPhotos';
    DashboardActions.GetRecentPhotos = GetRecentPhotos;
    class GetRecentPosts {
    }
    GetRecentPosts.type = '[Dashboard] GetRecentPosts';
    DashboardActions.GetRecentPosts = GetRecentPosts;
    class GetAlbumsCount {
    }
    GetAlbumsCount.type = '[Dashboard] GetAlbumsCount';
    DashboardActions.GetAlbumsCount = GetAlbumsCount;
})(DashboardActions || (DashboardActions = {}));


/***/ }),

/***/ 7003:
/*!******************************************************************!*\
  !*** ./src/app/features/dashboard/ngxs-store/dashboard.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardState": () => (/* binding */ DashboardState),
/* harmony export */   "lastPhotosCount": () => (/* binding */ lastPhotosCount),
/* harmony export */   "lastPostsCount": () => (/* binding */ lastPostsCount)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/immer-adapter */ 5600);
/* harmony import */ var _dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.actions */ 2156);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api.service */ 5384);







const lastPhotosCount = 18;
const lastPostsCount = 18;
let DashboardState = class DashboardState {
    constructor(api) {
        this.api = api;
    }
    getRecentPhotos(ctx) {
        const request = {
            page: {
                number: 1,
                size: lastPhotosCount,
            },
            sort: {
                direction: 'desc',
                field: 'id',
            },
        };
        return this.api.getPhotos(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            ctx.setState((state) => {
                state.photos = result.items;
                state.statistics.totalPhotosCount = result.totalCount;
                return state;
            });
        }));
    }
    getRecentPosts(ctx) {
        const request = {
            page: {
                number: 1,
                size: lastPostsCount,
            },
            sort: {
                direction: 'desc',
                field: 'id',
            },
        };
        return this.api.getPosts(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            ctx.setState((state) => {
                state.posts = result.items;
                state.statistics.totalPostsCount = result.totalCount;
                return state;
            });
        }));
    }
    getAlbumsCount(ctx) {
        const request = {
            page: {
                number: 1,
                size: 1,
            },
        };
        return this.api.getAlbums(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((result) => {
            const albumsCount = result.totalCount;
            ctx.setState((state) => {
                state.statistics.totalAlbumsCount = albumsCount;
                return state;
            });
            return albumsCount;
        }));
    }
    static posts(state) {
        return state.posts;
    }
    static photos(state) {
        return state.photos;
    }
    static totalPostsCount(state) {
        return state.statistics.totalPostsCount;
    }
    static totalAlbumsCount(state) {
        return state.statistics.totalAlbumsCount;
    }
    static totalPhotosCount(state) {
        return state.statistics.totalPhotosCount;
    }
};
DashboardState.ɵfac = function DashboardState_Factory(t) { return new (t || DashboardState)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService)); };
DashboardState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DashboardState, factory: DashboardState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPhotos),
    (0,_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_1__.ImmutableContext)()
], DashboardState.prototype, "getRecentPhotos", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetRecentPosts),
    (0,_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_1__.ImmutableContext)()
], DashboardState.prototype, "getRecentPosts", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.DashboardActions.GetAlbumsCount),
    (0,_ngxs_labs_immer_adapter__WEBPACK_IMPORTED_MODULE_1__.ImmutableContext)()
], DashboardState.prototype, "getAlbumsCount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], DashboardState, "posts", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], DashboardState, "photos", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], DashboardState, "totalPostsCount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], DashboardState, "totalAlbumsCount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], DashboardState, "totalPhotosCount", null);
DashboardState = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'dashboard',
        defaults: {
            posts: [],
            photos: [],
            statistics: {
                totalPostsCount: 0,
                totalAlbumsCount: 0,
                totalPhotosCount: 0,
            },
        },
    })
], DashboardState);



/***/ }),

/***/ 5600:
/*!************************************************************************************************!*\
  !*** ./node_modules/@ngxs-labs/immer-adapter/__ivy_ngcc__/fesm2015/ngxs-labs-immer-adapter.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImmutableContext": () => (/* binding */ ImmutableContext),
/* harmony export */   "ImmutableSelector": () => (/* binding */ ImmutableSelector),
/* harmony export */   "Mutation": () => (/* binding */ Mutation),
/* harmony export */   "produce": () => (/* binding */ produce$1)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ 2736);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An utility function, that determines if provided target is defined and not nullable
 *
 * @template T
 * @param {?} target - Value to check for being `undefined` or `null`
 * @return {?} - True if the passed target is not `undefined` and not `null`
 */
function isDefined(target) {
    return target !== undefined && target !== null;
}
/**
 * An utility function, that determines if provided object is valid
 *
 * @template T
 * @param {?} ctx - `StateContext` plain object
 * @return {?} - True if provided object is valid and has necessary methods
 */
function isValidContext(ctx) {
    return isDefined(ctx) && typeof ctx.getState === 'function' && typeof ctx.setState === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An adapter function for the `produce` from `immer` library
 *
 * @deprecated - use immutable helpers from ngxs v3.4.x
 * @template T
 * @param {?} ctx - Reference to the `StateContext` plain object
 * @param {?} recipe - Function that receives a proxy of the current state
 * @return {?} - New state or throws an error
 */
function produce$1(ctx, recipe) {
    /** @type {?} */
    const invalidContext = !isValidContext(ctx);
    if (invalidContext) {
        throw new Error('You should provide `StateContext` object as the first argument of the `produce` function');
    }
    return ctx.setState((/** @type {?} */ (((/**
     * @param {?} state
     * @return {?}
     */
    (state) => (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(state, recipe))))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ImmutableStateContext {
    /**
     * @param {?} ctx
     */
    constructor(ctx) {
        this.ctx = ctx;
        this.frozenState = null;
        ImmutableStateContext.autobindStateContext(this);
    }
    /**
     * @private
     * @param {?} context
     * @return {?}
     */
    static autobindStateContext(context) {
        for (const prop of Object.getOwnPropertyNames(Object.getPrototypeOf(context))) {
            if (prop === 'constructor' || typeof context[prop] !== 'function') {
                continue;
            }
            context[prop] = context[prop].bind(context);
        }
    }
    /**
     * @return {?}
     */
    getState() {
        this.frozenState = (/** @type {?} */ ((0,immer__WEBPACK_IMPORTED_MODULE_0__.createDraft)(this.ctx.getState())));
        return this.frozenState;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setState(val) {
        /** @type {?} */
        let state;
        if (typeof val === 'function') {
            /** @type {?} */
            let newState;
            /** @type {?} */
            const oldState = (/** @type {?} */ ((0,immer__WEBPACK_IMPORTED_MODULE_0__.createDraft)(this.ctx.getState())));
            /** @type {?} */
            const operator = (/** @type {?} */ (val));
            /** @type {?} */
            const mutatedOldState = operator(oldState);
            if (this.frozenState === mutatedOldState) {
                newState = (0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(this.frozenState);
                (0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(oldState);
            }
            else {
                /** @type {?} */
                const mutateOutsideOperator = oldState !== mutatedOldState;
                if (mutateOutsideOperator) {
                    newState = mutatedOldState;
                    (0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(oldState);
                }
                else {
                    newState = (0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(mutatedOldState);
                }
            }
            state = newState;
        }
        else {
            state = (0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(val);
        }
        this.frozenState = null;
        return this.ctx.setState(state);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    patchState(val) {
        return this.ctx.patchState((/** @type {?} */ ((0,immer__WEBPACK_IMPORTED_MODULE_0__.finishDraft)(val))));
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    dispatch(actions) {
        return this.ctx.dispatch(actions);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated - use ImmutableContext instead Mutation
 * @return {?}
 */
function Mutation() {
    return (/**
     * @param {?} _target
     * @param {?} _key
     * @param {?} descriptor
     * @return {?}
     */
    function (_target, _key, descriptor) {
        /** @type {?} */
        const method = descriptor.value;
        descriptor.value = (/**
         * @param {?} ctx
         * @param {?} action
         * @param {...?} args
         * @return {?}
         */
        function (ctx, action, ...args) {
            return method.apply(this, [new ImmutableStateContext(ctx), action, ...args]);
        });
        return descriptor;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function ImmutableContext() {
    return (/**
     * @param {?} _target
     * @param {?} _key
     * @param {?} descriptor
     * @return {?}
     */
    function (_target, _key, descriptor) {
        /** @type {?} */
        const method = descriptor.value;
        descriptor.value = (/**
         * @param {?} ctx
         * @param {?} action
         * @param {...?} args
         * @return {?}
         */
        function (ctx, action, ...args) {
            return method.apply(this, [new ImmutableStateContext(ctx), action, ...args]);
        });
        return descriptor;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function ImmutableSelector() {
    return (/**
     * @param {?} _target
     * @param {?} _key
     * @param {?} descriptor
     * @return {?}
     */
    function (_target, _key, descriptor) {
        /** @type {?} */
        const method = descriptor.value;
        descriptor.value = (/**
         * @param {?} state
         * @param {...?} args
         * @return {?}
         */
        function (state, ...args) {
            return method.apply(this, [(0,immer__WEBPACK_IMPORTED_MODULE_0__.createDraft)(state), ...args]);
        });
        return descriptor;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 2736:
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": () => (/* binding */ un),
/* harmony export */   "applyPatches": () => (/* binding */ pn),
/* harmony export */   "castDraft": () => (/* binding */ K),
/* harmony export */   "castImmutable": () => (/* binding */ $),
/* harmony export */   "createDraft": () => (/* binding */ ln),
/* harmony export */   "current": () => (/* binding */ D),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "enableAllPlugins": () => (/* binding */ J),
/* harmony export */   "enableES5": () => (/* binding */ N),
/* harmony export */   "enableMapSet": () => (/* binding */ C),
/* harmony export */   "enablePatches": () => (/* binding */ T),
/* harmony export */   "finishDraft": () => (/* binding */ dn),
/* harmony export */   "freeze": () => (/* binding */ d),
/* harmony export */   "immerable": () => (/* binding */ L),
/* harmony export */   "isDraft": () => (/* binding */ r),
/* harmony export */   "isDraftable": () => (/* binding */ t),
/* harmony export */   "nothing": () => (/* binding */ H),
/* harmony export */   "original": () => (/* binding */ e),
/* harmony export */   "produce": () => (/* binding */ fn),
/* harmony export */   "produceWithPatches": () => (/* binding */ cn),
/* harmony export */   "setAutoFreeze": () => (/* binding */ sn),
/* harmony export */   "setUseProxies": () => (/* binding */ vn)
/* harmony export */ });
function n(n) {
  for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];

  if (true) {
    var i = Y[n],
        o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function (n) {
    return "'" + n + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function r(n) {
  return !!n && !!n[Q];
}

function t(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var r = Object.getPrototypeOf(n);
    if (null === r) return !0;
    var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
  }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
}

function e(t) {
  return r(t) || n(23, t), t[Q].t;
}

function i(n, r, t) {
  void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function (e) {
    t && "symbol" == typeof e || r(e, n[e], n);
  }) : n.forEach(function (t, e) {
    return r(e, t, n);
  });
}

function o(n) {
  var r = n[Q];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}

function u(n, r) {
  return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}

function a(n, r) {
  return 2 === o(n) ? n.get(r) : n[r];
}

function f(n, r, t) {
  var e = o(n);
  2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
}

function c(n, r) {
  return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}

function s(n) {
  return X && n instanceof Map;
}

function v(n) {
  return q && n instanceof Set;
}

function p(n) {
  return n.o || n.t;
}

function l(n) {
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  var r = rn(n);
  delete r[Q];

  for (var t = nn(r), e = 0; e < t.length; e++) {
    var i = t[e],
        o = r[i];
    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: n[i]
    });
  }

  return Object.create(Object.getPrototypeOf(n), r);
}

function d(n, e) {
  return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, r) {
    return d(r, !0);
  }, !0), n);
}

function h() {
  n(2);
}

function y(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function b(r) {
  var t = tn[r];
  return t || n(18, r), t;
}

function m(n, r) {
  tn[n] || (tn[n] = r);
}

function _() {
  return  false || U || n(0), U;
}

function j(n, r) {
  r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}

function O(n) {
  g(n), n.p.forEach(S), n.p = null;
}

function g(n) {
  n === U && (U = n.l);
}

function w(n) {
  return U = {
    p: [],
    l: U,
    h: n,
    m: !0,
    _: 0
  };
}

function S(n) {
  var r = n[Q];
  0 === r.i || 1 === r.i ? r.j() : r.O = !0;
}

function P(r, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== r && r !== i;
  return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}

function M(n, r, t) {
  if (y(r)) return r;
  var e = r[Q];
  if (!e) return i(r, function (i, o) {
    return A(n, e, r, i, o, t);
  }, !0), r;
  if (e.A !== n) return r;
  if (!e.P) return x(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o) : o, function (r, i) {
      return A(n, e, o, r, i, t);
    }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
  }

  return e.o;
}

function A(e, i, o, a, c, s) {
  if ( true && c === o && n(5), r(c)) {
    var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
    if (f(o, a, v), !r(v)) return;
    e.m = !1;
  }

  if (t(c) && !y(c)) {
    if (!e.h.F && e._ < 1) return;
    M(e, c), i && i.A.l || x(e, c);
  }
}

function x(n, r, t) {
  void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
}

function z(n, r) {
  var t = n[Q];
  return (t ? p(t) : n)[r];
}

function I(n, r) {
  if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
    var e = Object.getOwnPropertyDescriptor(t, r);
    if (e) return e;
    t = Object.getPrototypeOf(t);
  }
}

function k(n) {
  n.P || (n.P = !0, n.l && k(n.l));
}

function E(n) {
  n.o || (n.o = l(n.t));
}

function R(n, r, t) {
  var e = s(r) ? b("MapSet").N(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function (n, r) {
    var t = Array.isArray(n),
        e = {
      i: t ? 1 : 0,
      A: r ? r.A : _(),
      P: !1,
      I: !1,
      D: {},
      l: r,
      t: n,
      k: null,
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = en;
    t && (i = [e], o = on);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(r, t) : b("ES5").J(r, t);
  return (t ? t.A : _()).p.push(e), e;
}

function D(e) {
  return r(e) || n(22, e), function n(r) {
    if (!t(r)) return r;
    var e,
        u = r[Q],
        c = o(r);

    if (u) {
      if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
      u.I = !0, e = F(r, c), u.I = !1;
    } else e = F(r, c);

    return i(e, function (r, t) {
      u && a(u.t, r) === t || f(e, r, n(t));
    }), 3 === c ? new Set(e) : e;
  }(e);
}

function F(n, r) {
  switch (r) {
    case 2:
      return new Map(n);

    case 3:
      return Array.from(n);
  }

  return l(n);
}

function N() {
  function t(n, r) {
    var t = s[n];
    return t ? t.enumerable = r : s[n] = t = {
      configurable: !0,
      enumerable: r,
      get: function () {
        var r = this[Q];
        return  true && f(r), en.get(r, n);
      },
      set: function (r) {
        var t = this[Q];
         true && f(t), en.set(t, n, r);
      }
    }, t;
  }

  function e(n) {
    for (var r = n.length - 1; r >= 0; r--) {
      var t = n[r][Q];
      if (!t.P) switch (t.i) {
        case 5:
          a(t) && k(t);
          break;

        case 4:
          o(t) && k(t);
      }
    }
  }

  function o(n) {
    for (var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--) {
      var o = e[i];

      if (o !== Q) {
        var a = r[o];
        if (void 0 === a && !u(r, o)) return !0;
        var f = t[o],
            s = f && f[Q];
        if (s ? s.t !== a : !c(f, a)) return !0;
      }
    }

    var v = !!r[Q];
    return e.length !== nn(r).length + (v ? 0 : 1);
  }

  function a(n) {
    var r = n.k;
    if (r.length !== n.t.length) return !0;
    var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
    if (t && !t.get) return !0;

    for (var e = 0; e < r.length; e++) if (!r.hasOwnProperty(e)) return !0;

    return !1;
  }

  function f(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var s = {};
  m("ES5", {
    J: function (n, r) {
      var e = Array.isArray(n),
          i = function (n, r) {
        if (n) {
          for (var e = Array(r.length), i = 0; i < r.length; i++) Object.defineProperty(e, "" + i, t(i, !0));

          return e;
        }

        var o = rn(r);
        delete o[Q];

        for (var u = nn(o), a = 0; a < u.length; a++) {
          var f = u[a];
          o[f] = t(f, n || !!o[f].enumerable);
        }

        return Object.create(Object.getPrototypeOf(r), o);
      }(e, n),
          o = {
        i: e ? 5 : 4,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: r,
        t: n,
        k: i,
        o: null,
        O: !1,
        C: !1
      };

      return Object.defineProperty(i, Q, {
        value: o,
        writable: !0
      }), i;
    },
    S: function (n, t, o) {
      o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
        if (r && "object" == typeof r) {
          var t = r[Q];

          if (t) {
            var e = t.t,
                o = t.k,
                f = t.D,
                c = t.i;
            if (4 === c) i(o, function (r) {
              r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
            }), i(e, function (n) {
              void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
            });else if (5 === c) {
              if (a(t) && (k(t), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

              for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
            }
          }
        }
      }(n.p[0]), e(n.p));
    },
    K: function (n) {
      return 4 === n.i ? o(n) : a(n);
    }
  });
}

function T() {
  function e(n) {
    if (!t(n)) return n;
    if (Array.isArray(n)) return n.map(e);
    if (s(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], e(n[1])];
    }));
    if (v(n)) return new Set(Array.from(n).map(e));
    var r = Object.create(Object.getPrototypeOf(n));

    for (var i in n) r[i] = e(n[i]);

    return u(n, L) && (r[L] = n[L]), r;
  }

  function f(n) {
    return r(n) ? e(n) : n;
  }

  var c = "add";
  m("Patches", {
    $: function (r, t) {
      return t.forEach(function (t) {
        for (var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++) {
          var v = o(f),
              p = "" + i[s];
          0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
        }

        var l = o(f),
            d = e(t.value),
            h = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (l) {
              case 2:
                return f.set(h, d);

              case 3:
                n(16);

              default:
                return f[h] = d;
            }

          case c:
            switch (l) {
              case 1:
                return "-" === h ? f.push(d) : f.splice(h, 0, d);

              case 2:
                return f.set(h, d);

              case 3:
                return f.add(d);

              default:
                return f[h] = d;
            }

          case "remove":
            switch (l) {
              case 1:
                return f.splice(h, 1);

              case 2:
                return f.delete(h);

              case 3:
                return f.delete(t.value);

              default:
                return delete f[h];
            }

          default:
            n(17, u);
        }
      }), r;
    },
    R: function (n, r, t, e) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, r, t, e) {
            var o = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(o, n),
                  p = a(s, n),
                  l = i ? u(o, n) ? "replace" : c : "remove";

              if (v !== p || "replace" !== l) {
                var d = r.concat(n);
                t.push("remove" === l ? {
                  op: l,
                  path: d
                } : {
                  op: l,
                  path: d,
                  value: p
                }), e.push(l === c ? {
                  op: "remove",
                  path: d
                } : "remove" === l ? {
                  op: c,
                  path: d,
                  value: f(v)
                } : {
                  op: "replace",
                  path: d,
                  value: f(v)
                });
              }
            });
          }(n, r, t, e);

        case 5:
        case 1:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.D,
                u = n.o;

            if (u.length < i.length) {
              var a = [u, i];
              i = a[0], u = a[1];
              var s = [e, t];
              t = s[0], e = s[1];
            }

            for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
              var p = r.concat([v]);
              t.push({
                op: "replace",
                path: p,
                value: f(u[v])
              }), e.push({
                op: "replace",
                path: p,
                value: f(i[v])
              });
            }

            for (var l = i.length; l < u.length; l++) {
              var d = r.concat([l]);
              t.push({
                op: c,
                path: d,
                value: f(u[l])
              });
            }

            i.length < u.length && e.push({
              op: "replace",
              path: r.concat(["length"]),
              value: i.length
            });
          }(n, r, t, e);

        case 3:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = r.concat([u]);
                t.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: c,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = r.concat([u]);
                t.push({
                  op: c,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, r, t, e);
      }
    },
    M: function (n, r, t, e) {
      t.push({
        op: "replace",
        path: [],
        value: r === H ? void 0 : r
      }), e.push({
        op: "replace",
        path: [],
        value: n
      });
    }
  });
}

function C() {
  function r(n, r) {
    function t() {
      this.constructor = n;
    }

    a(n, r), n.prototype = (t.prototype = r.prototype, new t());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function o(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (r) {
      if (t(r)) {
        var e = R(n.A.h, r, n);
        n.p.set(r, e), n.o.add(e);
      } else n.o.add(r);
    }));
  }

  function u(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var a = function (n, r) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, r) {
      n.__proto__ = r;
    } || function (n, r) {
      for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
    })(n, r);
  },
      f = function () {
    function n(n, r) {
      return this[Q] = {
        i: 2,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    r(n, Map);
    var o = n.prototype;
    return Object.defineProperty(o, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o.has = function (n) {
      return p(this[Q]).has(n);
    }, o.set = function (n, r) {
      var t = this[Q];
      return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.D.set(n, !0), t.o.set(n, r), t.D.set(n, !0)), this;
    }, o.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), e(r), k(r), r.t.has(n) ? r.D.set(n, !1) : r.D.delete(n), r.o.delete(n), !0;
    }, o.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (e(n), k(n), n.D = new Map(), i(n.t, function (r) {
        n.D.set(r, !1);
      }), n.o.clear());
    }, o.forEach = function (n, r) {
      var t = this;
      p(this[Q]).forEach(function (e, i) {
        n.call(r, t.get(i), i, t);
      });
    }, o.get = function (n) {
      var r = this[Q];
      u(r);
      var i = p(r).get(n);
      if (r.I || !t(i)) return i;
      if (i !== r.t.get(n)) return i;
      var o = R(r.A.h, i, r);
      return e(r), r.o.set(n, o), o;
    }, o.keys = function () {
      return p(this[Q]).keys();
    }, o.values = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.values();
      }, n.next = function () {
        var n = t.next();
        return n.done ? n : {
          done: !1,
          value: r.get(n.value)
        };
      }, n;
    }, o.entries = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.entries();
      }, n.next = function () {
        var n = t.next();
        if (n.done) return n;
        var e = r.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, o[V] = function () {
      return this.entries();
    }, n;
  }(),
      c = function () {
    function n(n, r) {
      return this[Q] = {
        i: 3,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    r(n, Set);
    var t = n.prototype;
    return Object.defineProperty(t, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), t.has = function (n) {
      var r = this[Q];
      return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
    }, t.add = function (n) {
      var r = this[Q];
      return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
    }, t.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
    }, t.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (o(n), k(n), n.o.clear());
    }, t.values = function () {
      var n = this[Q];
      return u(n), o(n), n.o.values();
    }, t.entries = function () {
      var n = this[Q];
      return u(n), o(n), n.o.entries();
    }, t.keys = function () {
      return this.values();
    }, t[V] = function () {
      return this.values();
    }, t.forEach = function (n, r) {
      for (var t = this.values(), e = t.next(); !e.done;) n.call(r, e.value, e.value, this), e = t.next();
    }, n;
  }();

  m("MapSet", {
    N: function (n, r) {
      return new f(n, r);
    },
    T: function (n, r) {
      return new c(n, r);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n) {
  return n;
}

function $(n) {
  return n;
}

var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
  },
  22: function (n) {
    return "'current' expects a draft, got: " + n;
  },
  23: function (n) {
    return "'original' expects a draft, got: " + n;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    rn = Object.getOwnPropertyDescriptors || function (n) {
  var r = {};
  return nn(n).forEach(function (t) {
    r[t] = Object.getOwnPropertyDescriptor(n, t);
  }), r;
},
    tn = {},
    en = {
  get: function (n, r) {
    if (r === Q) return n;
    var e = p(n);
    if (!u(e, r)) return function (n, r, t) {
      var e,
          i = I(r, t);
      return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
    }(n, e, r);
    var i = e[r];
    return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
  },
  has: function (n, r) {
    return r in p(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(p(n));
  },
  set: function (n, r, t) {
    var e = I(p(n), r);
    if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;

    if (!n.P) {
      var i = z(p(n), r),
          o = null == i ? void 0 : i[Q];
      if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
      if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
      E(n), k(n);
    }

    return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
  },
  deleteProperty: function (n, r) {
    return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
  },
  getOwnPropertyDescriptor: function (n, r) {
    var t = p(n),
        e = Reflect.getOwnPropertyDescriptor(t, r);
    return e ? {
      writable: !0,
      configurable: 1 !== n.i || "length" !== r,
      enumerable: e.enumerable,
      value: t[r]
    } : e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

i(en, function (n, r) {
  on[n] = function () {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
}), on.deleteProperty = function (r, t) {
  return  true && isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function (r, t, e) {
  return  true && "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};

var un = function () {
  function e(r) {
    var e = this;
    this.g = B, this.F = !0, this.produce = function (r, i, o) {
      if ("function" == typeof r && "function" != typeof i) {
        var u = i;
        i = r;
        var a = e;
        return function (n) {
          var r = this;
          void 0 === n && (n = u);

          for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];

          return a.produce(n, function (n) {
            var t;
            return (t = i).call.apply(t, [r, n].concat(e));
          });
        };
      }

      var f;

      if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
        var c = w(e),
            s = R(e, r, void 0),
            v = !0;

        try {
          f = i(s), v = !1;
        } finally {
          v ? O(c) : g(c);
        }

        return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
          return j(c, o), P(n, c);
        }, function (n) {
          throw O(c), n;
        }) : (j(c, o), P(f, c));
      }

      if (!r || "object" != typeof r) {
        if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
          var p = [],
              l = [];
          b("Patches").M(r, f, p, l), o(p, l);
        }

        return f;
      }

      n(21, r);
    }, this.produceWithPatches = function (n, r) {
      if ("function" == typeof n) return function (r) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];

        return e.produceWithPatches(r, function (r) {
          return n.apply(void 0, [r].concat(i));
        });
      };
      var t,
          i,
          o = e.produce(n, r, function (n, r) {
        t = n, i = r;
      });
      return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (n) {
        return [n, t, i];
      }) : [o, t, i];
    }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
  }

  var i = e.prototype;
  return i.createDraft = function (e) {
    t(e) || n(8), r(e) && (e = D(e));
    var i = w(this),
        o = R(this, e, void 0);
    return o[Q].C = !0, g(i), o;
  }, i.finishDraft = function (r, t) {
    var e = r && r[Q];
     true && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return j(i, t), P(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.F = n;
  }, i.setUseProxies = function (r) {
    r && !B && n(20), this.g = r;
  }, i.applyPatches = function (n, t) {
    var e;

    for (e = t.length - 1; e >= 0; e--) {
      var i = t[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    e > -1 && (t = t.slice(e + 1));
    var o = b("Patches").$;
    return r(n) ? o(n, t) : this.produce(n, function (n) {
      return o(n, t);
    });
  }, e;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);


/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map