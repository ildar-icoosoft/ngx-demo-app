"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["src_app_features_user_user-details_user-details_module_ts"],{

/***/ 3112:
/*!***************************************************************************************!*\
  !*** ./src/app/features/user/user-details/components/albums/user-albums.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAlbumsComponent": () => (/* binding */ UserAlbumsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/content-loading-status/content-loading-status.component */ 6974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function (a2) { return ["/", "album", a2]; };
function UserAlbumsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const album_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, album_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](album_r1.title);
} }
class UserAlbumsComponent {
    constructor() {
        this.albums = [];
        this.isLoading = true;
    }
    trackByAlbum(index, post) {
        return post.id;
    }
}
UserAlbumsComponent.ɵfac = function UserAlbumsComponent_Factory(t) { return new (t || UserAlbumsComponent)(); };
UserAlbumsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserAlbumsComponent, selectors: [["app-user-albums"]], inputs: { albums: "albums", isLoading: "isLoading" }, decls: 6, vars: 4, consts: [[1, "card"], [1, "card-header"], [3, "isEmpty", "isLoading"], [1, "list-group", "list-group-flush"], ["class", "list-group-item text-truncate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "list-group-item", "text-truncate"], [3, "routerLink"]], template: function UserAlbumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Albums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-content-loading-status", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserAlbumsComponent_li_5_Template, 3, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isEmpty", !ctx.albums.length)("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.albums)("ngForTrackBy", ctx.trackByAlbum);
    } }, directives: [_shared_components_content_loading_status_content_loading_status_component__WEBPACK_IMPORTED_MODULE_0__.ContentLoadingStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFsYnVtcy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 3141:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/user/user-details/components/header/user-details-header.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsHeaderComponent": () => (/* binding */ UserDetailsHeaderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);




function UserDetailsHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "fa-icon", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faSpinner)("pulse", true);
} }
function UserDetailsHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" @", ctx_r1.user.username, " \u2014 ", ctx_r1.user.email, " \u2014 ", ctx_r1.user.website, " \u2014 ", ctx_r1.user.company.name, " \u2014 ", ctx_r1.user.address.city, " ");
} }
class UserDetailsHeaderComponent {
    constructor() {
        this.user = null;
        this.isLoading = true;
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSpinner;
    }
}
UserDetailsHeaderComponent.ɵfac = function UserDetailsHeaderComponent_Factory(t) { return new (t || UserDetailsHeaderComponent)(); };
UserDetailsHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsHeaderComponent, selectors: [["app-user-details-header"]], inputs: { user: "user", isLoading: "isLoading" }, decls: 4, vars: 2, consts: [[1, "user-details-header"], [1, "container", "pt-5", "pb-5", "text-white"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], ["role", "status", "data-testid", "loading-spinner", 3, "icon", "pulse"], [1, "sr-only"], [1, "mb-3"]], template: function UserDetailsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailsHeaderComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDetailsHeaderComponent_ng_container_3_Template, 5, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".user-details-header[_ngcontent-%COMP%] {\n  background: #2980B9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InVzZXItZGV0YWlscy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kZXRhaWxzLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzI5ODBCOTtcclxuXHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 4232:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/user/user-details/components/page/user-details-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageComponent": () => (/* binding */ UserDetailsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _elf_state_user_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elf-state/user-details.service */ 49);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _elf_state_user_posts_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elf-state/user-posts.repository */ 354);
/* harmony import */ var _elf_state_user_albums_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elf-state/user-albums.repository */ 358);
/* harmony import */ var _elf_state_user_details_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elf-state/user-details.repository */ 1870);
/* harmony import */ var _header_user_details_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/user-details-header.component */ 3141);
/* harmony import */ var _albums_user_albums_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../albums/user-albums.component */ 3112);
/* harmony import */ var _shared_components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/post-list/post-list.component */ 8822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);










class UserDetailsPageComponent {
  constructor(userDetails, route, postsRepo, albumsRepo, userRepo) {
    this.userDetails = userDetails;
    this.route = route;
    this.postsRepo = postsRepo;
    this.albumsRepo = albumsRepo;
    this.userRepo = userRepo;
    this.posts$ = this.postsRepo.userPosts$;
    this.postsPending$ = this.postsRepo.pending$;
    this.albums$ = this.albumsRepo.userAlbums$;
    this.albumsPending$ = this.albumsRepo.pending$;
    this.user$ = this.userRepo.user$;
    this.userPending$ = this.userRepo.pending$;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.userDetails.getUserPosts(id).subscribe();
      this.userDetails.getUserAlbums(id).subscribe();
      this.userDetails.getUser(id).subscribe();
    });
  }

}

UserDetailsPageComponent.ɵfac = function UserDetailsPageComponent_Factory(t) {
  return new (t || UserDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_elf_state_user_details_service__WEBPACK_IMPORTED_MODULE_0__.UserDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_elf_state_user_posts_repository__WEBPACK_IMPORTED_MODULE_1__.UserPostsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_elf_state_user_albums_repository__WEBPACK_IMPORTED_MODULE_2__.UserAlbumsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_elf_state_user_details_repository__WEBPACK_IMPORTED_MODULE_3__.UserDetailsRepository));
};

UserDetailsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: UserDetailsPageComponent,
  selectors: [["app-user-details-page"]],
  decls: 11,
  vars: 18,
  consts: [[3, "user", "isLoading"], [1, "container", "pt-3"], [1, "row"], [1, "col-12", "col-lg-6", "mb-3", 3, "albums", "isLoading"], [1, "col-12", "col-lg-6", "mb-3", 3, "posts", "isLoading"]],
  template: function UserDetailsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-user-details-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-user-albums", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-post-list", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 6, ctx.user$))("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, ctx.userPending$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("albums", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 10, ctx.albums$))("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, ctx.albumsPending$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("posts", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 14, ctx.posts$))("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 16, ctx.postsPending$));
    }
  },
  directives: [_header_user_details_header_component__WEBPACK_IMPORTED_MODULE_4__.UserDetailsHeaderComponent, _albums_user_albums_component__WEBPACK_IMPORTED_MODULE_5__.UserAlbumsComponent, _shared_components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__.PostListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 358:
/*!********************************************************************************!*\
  !*** ./src/app/features/user/user-details/elf-state/user-albums.repository.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAlbumsRepository": () => (/* binding */ UserAlbumsRepository),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/elf */ 6456);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf-entities */ 1193);
/* harmony import */ var _ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf-requests */ 8617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




const store = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.createStore)({ name: 'userAlbums' }, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.withRequestsStatus)());
class UserAlbumsRepository {
    constructor() {
        this.userAlbums$ = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.selectAllEntities)());
        this.pending$ = store.pipe((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.selectIsRequestPending)('user-albums'));
    }
    setUserAlbums(albums) {
        store.update((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.setEntities)(albums));
    }
    setIsLoading(val) {
        store.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.updateRequestStatus)('user-albums', val ? 'pending' : 'idle'));
    }
}
UserAlbumsRepository.ɵfac = function UserAlbumsRepository_Factory(t) { return new (t || UserAlbumsRepository)(); };
UserAlbumsRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserAlbumsRepository, factory: UserAlbumsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1870:
/*!*********************************************************************************!*\
  !*** ./src/app/features/user/user-details/elf-state/user-details.repository.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsRepository": () => (/* binding */ UserDetailsRepository),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/elf */ 6456);
/* harmony import */ var _ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf-requests */ 8617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



const store = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.createStore)({ name: 'userDetails' }, (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.withProps)({
    user: null,
}), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_1__.withRequestsStatus)());
class UserDetailsRepository {
    constructor() {
        this.user$ = store.pipe((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)((state) => state.user));
        this.pending$ = store.pipe((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_1__.selectIsRequestPending)('user-details'));
    }
    updateUser(user) {
        store.update((state) => (Object.assign(Object.assign({}, state), { user })));
    }
    setIsLoading(val) {
        store.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_1__.updateRequestStatus)('user-details', val ? 'pending' : 'idle'));
    }
}
UserDetailsRepository.ɵfac = function UserDetailsRepository_Factory(t) { return new (t || UserDetailsRepository)(); };
UserDetailsRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserDetailsRepository, factory: UserDetailsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49:
/*!******************************************************************************!*\
  !*** ./src/app/features/user/user-details/elf-state/user-details.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsService": () => (/* binding */ UserDetailsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/api.service */ 5384);
/* harmony import */ var _user_posts_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-posts.repository */ 354);
/* harmony import */ var _user_albums_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-albums.repository */ 358);
/* harmony import */ var _user_details_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.repository */ 1870);






class UserDetailsService {
    constructor(apiService, postsRepo, albumsRepo, userRepo) {
        this.apiService = apiService;
        this.postsRepo = postsRepo;
        this.albumsRepo = albumsRepo;
        this.userRepo = userRepo;
    }
    getUserPosts(userId) {
        this.postsRepo.setIsLoading(true);
        return this.apiService
            .getPosts({
            filter: [
                {
                    field: 'userId',
                    value: '' + userId,
                },
            ],
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.items), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((posts) => {
            this.postsRepo.setIsLoading(false);
            this.postsRepo.setUserPosts(posts);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            this.postsRepo.setIsLoading(false);
            throw err;
        }));
    }
    getUserAlbums(userId) {
        this.albumsRepo.setIsLoading(true);
        return this.apiService
            .getAlbums({
            filter: [
                {
                    field: 'userId',
                    value: '' + userId,
                },
            ],
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.items), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((albums) => {
            this.albumsRepo.setIsLoading(false);
            this.albumsRepo.setUserAlbums(albums);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            this.albumsRepo.setIsLoading(false);
            throw err;
        }));
    }
    getUser(userId) {
        this.userRepo.setIsLoading(true);
        return this.apiService.getUser(userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((user) => {
            this.userRepo.setIsLoading(false);
            this.userRepo.updateUser(user);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            this.userRepo.setIsLoading(false);
            throw err;
        }));
    }
}
UserDetailsService.ɵfac = function UserDetailsService_Factory(t) { return new (t || UserDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_user_posts_repository__WEBPACK_IMPORTED_MODULE_1__.UserPostsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_user_albums_repository__WEBPACK_IMPORTED_MODULE_2__.UserAlbumsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_user_details_repository__WEBPACK_IMPORTED_MODULE_3__.UserDetailsRepository)); };
UserDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UserDetailsService, factory: UserDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 354:
/*!*******************************************************************************!*\
  !*** ./src/app/features/user/user-details/elf-state/user-posts.repository.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPostsRepository": () => (/* binding */ UserPostsRepository),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/elf */ 6456);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf-entities */ 1193);
/* harmony import */ var _ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf-requests */ 8617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




const store = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.createStore)({ name: 'userPosts' }, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.withRequestsStatus)());
class UserPostsRepository {
    constructor() {
        this.userPosts$ = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.selectAllEntities)());
        this.pending$ = store.pipe((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.selectIsRequestPending)('user-posts'));
    }
    setUserPosts(posts) {
        store.update((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.setEntities)(posts));
    }
    setIsLoading(val) {
        store.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_2__.updateRequestStatus)('user-posts', val ? 'pending' : 'idle'));
    }
}
UserPostsRepository.ɵfac = function UserPostsRepository_Factory(t) { return new (t || UserPostsRepository)(); };
UserPostsRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserPostsRepository, factory: UserPostsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9229:
/*!***************************************************************************!*\
  !*** ./src/app/features/user/user-details/user-details-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsRoutingModule": () => (/* binding */ UserDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_page_user_details_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page/user-details-page.component */ 4232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _components_page_user_details_page_component__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPageComponent }];
class UserDetailsRoutingModule {
}
UserDetailsRoutingModule.ɵfac = function UserDetailsRoutingModule_Factory(t) { return new (t || UserDetailsRoutingModule)(); };
UserDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserDetailsRoutingModule });
UserDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8537:
/*!*******************************************************************!*\
  !*** ./src/app/features/user/user-details/user-details.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsModule": () => (/* binding */ UserDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details-routing.module */ 9229);
/* harmony import */ var _components_page_user_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/user-details-page.component */ 4232);
/* harmony import */ var _components_header_user_details_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/user-details-header.component */ 3141);
/* harmony import */ var _components_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/albums/user-albums.component */ 3112);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class UserDetailsModule {
}
UserDetailsModule.ɵfac = function UserDetailsModule_Factory(t) { return new (t || UserDetailsModule)(); };
UserDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UserDetailsModule });
UserDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserDetailsModule, { declarations: [_components_page_user_details_page_component__WEBPACK_IMPORTED_MODULE_1__.UserDetailsPageComponent, _components_header_user_details_header_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailsHeaderComponent, _components_albums_user_albums_component__WEBPACK_IMPORTED_MODULE_3__.UserAlbumsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 1193:
/*!********************************************************!*\
  !*** ./node_modules/@ngneat/elf-entities/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesRef": () => (/* binding */ EntitiesRef),
/* harmony export */   "UIEntitiesRef": () => (/* binding */ UIEntitiesRef),
/* harmony export */   "addActiveIds": () => (/* binding */ addActiveIds),
/* harmony export */   "addEntities": () => (/* binding */ addEntities),
/* harmony export */   "addEntitiesFifo": () => (/* binding */ addEntitiesFifo),
/* harmony export */   "deleteAllEntities": () => (/* binding */ deleteAllEntities),
/* harmony export */   "deleteEntities": () => (/* binding */ deleteEntities),
/* harmony export */   "deleteEntitiesByPredicate": () => (/* binding */ deleteEntitiesByPredicate),
/* harmony export */   "entitiesPropsFactory": () => (/* binding */ entitiesPropsFactory),
/* harmony export */   "getActiveEntities": () => (/* binding */ getActiveEntities),
/* harmony export */   "getActiveEntity": () => (/* binding */ getActiveEntity),
/* harmony export */   "getActiveId": () => (/* binding */ getActiveId),
/* harmony export */   "getActiveIds": () => (/* binding */ getActiveIds),
/* harmony export */   "getAllEntities": () => (/* binding */ getAllEntities),
/* harmony export */   "getAllEntitiesApply": () => (/* binding */ getAllEntitiesApply),
/* harmony export */   "getEntitiesCount": () => (/* binding */ getEntitiesCount),
/* harmony export */   "getEntitiesCountByPredicate": () => (/* binding */ getEntitiesCountByPredicate),
/* harmony export */   "getEntitiesIds": () => (/* binding */ getEntitiesIds),
/* harmony export */   "getEntity": () => (/* binding */ getEntity$1),
/* harmony export */   "hasEntity": () => (/* binding */ hasEntity),
/* harmony export */   "removeActiveIds": () => (/* binding */ removeActiveIds),
/* harmony export */   "resetActiveId": () => (/* binding */ resetActiveId),
/* harmony export */   "resetActiveIds": () => (/* binding */ resetActiveIds),
/* harmony export */   "selectActiveEntities": () => (/* binding */ selectActiveEntities),
/* harmony export */   "selectActiveEntity": () => (/* binding */ selectActiveEntity),
/* harmony export */   "selectActiveId": () => (/* binding */ selectActiveId),
/* harmony export */   "selectActiveIds": () => (/* binding */ selectActiveIds),
/* harmony export */   "selectAllEntities": () => (/* binding */ selectAllEntities),
/* harmony export */   "selectAllEntitiesApply": () => (/* binding */ selectAllEntitiesApply),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectEntitiesCount": () => (/* binding */ selectEntitiesCount),
/* harmony export */   "selectEntitiesCountByPredicate": () => (/* binding */ selectEntitiesCountByPredicate),
/* harmony export */   "selectEntity": () => (/* binding */ selectEntity),
/* harmony export */   "selectEntityByPredicate": () => (/* binding */ selectEntityByPredicate),
/* harmony export */   "selectFirst": () => (/* binding */ selectFirst),
/* harmony export */   "selectLast": () => (/* binding */ selectLast),
/* harmony export */   "selectMany": () => (/* binding */ selectMany),
/* harmony export */   "selectManyByPredicate": () => (/* binding */ selectManyByPredicate),
/* harmony export */   "setActiveId": () => (/* binding */ setActiveId),
/* harmony export */   "setActiveIds": () => (/* binding */ setActiveIds),
/* harmony export */   "setEntities": () => (/* binding */ setEntities),
/* harmony export */   "setEntitiesMap": () => (/* binding */ setEntitiesMap),
/* harmony export */   "toggleActiveIds": () => (/* binding */ toggleActiveIds),
/* harmony export */   "unionEntities": () => (/* binding */ unionEntities),
/* harmony export */   "unionEntitiesAsMap": () => (/* binding */ unionEntitiesAsMap),
/* harmony export */   "updateAllEntities": () => (/* binding */ updateAllEntities),
/* harmony export */   "updateEntities": () => (/* binding */ updateEntities),
/* harmony export */   "updateEntitiesByPredicate": () => (/* binding */ updateEntitiesByPredicate),
/* harmony export */   "updateEntitiesIds": () => (/* binding */ updateEntitiesIds),
/* harmony export */   "upsertEntities": () => (/* binding */ upsertEntities),
/* harmony export */   "upsertEntitiesById": () => (/* binding */ upsertEntitiesById),
/* harmony export */   "withActiveId": () => (/* binding */ withActiveId),
/* harmony export */   "withActiveIds": () => (/* binding */ withActiveIds),
/* harmony export */   "withEntities": () => (/* binding */ withEntities),
/* harmony export */   "withUIEntities": () => (/* binding */ withUIEntities)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/elf */ 6456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2673);




function buildEntities(entities, idKey) {
  const asObject = {};
  const ids = [];

  for (const entity of entities) {
    const id = entity[idKey];
    ids.push(id);
    asObject[id] = entity;
  }

  return {
    ids,
    asObject
  };
}
function findIdsByPredicate(state, ref, predicate) {
  const {
    idsKey,
    entitiesKey
  } = ref;
  const entities = state[entitiesKey];
  return state[idsKey].filter(id => predicate(entities[id]));
}
function findEntityByPredicate(state, ref, predicate) {
  const {
    idsKey,
    entitiesKey
  } = ref;
  const entities = state[entitiesKey];
  const id = state[idsKey].find(id => {
    return predicate(entities[id]);
  });
  return entities[id];
}
function checkPluck(entity, pluck) {
  if (entity && pluck) {
    return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isFunction)(pluck) ? pluck(entity) : entity[pluck];
  } else {
    return entity;
  }
}

function getIdKey(context, ref) {
  return context.config[ref.idKeyRef];
}
class EntitiesRef {
  constructor(config) {
    this.idKeyRef = 'idKey';
    this.entitiesKey = config.entitiesKey;
    this.idsKey = config.idsKey;
    this.idKeyRef = config.idKeyRef;
  }

}
function entitiesPropsFactory(feature) {
  const idKeyRef = feature ? `idKey${(0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.capitalize)(feature)}` : 'idKey';
  const ref = new EntitiesRef({
    entitiesKey: feature ? `${feature}Entities` : 'entities',
    idsKey: feature ? `${feature}Ids` : 'ids',
    idKeyRef: idKeyRef
  });

  function propsFactory(config) {
    let entities = {};
    let ids = [];
    const idKey = (config == null ? void 0 : config.idKey) || 'id';

    if (config != null && config.initialValue) {
      ({
        ids,
        asObject: entities
      } = buildEntities(config.initialValue, idKey));
    }

    return {
      props: {
        [ref.entitiesKey]: entities,
        [ref.idsKey]: ids
      },
      config: {
        [idKeyRef]: idKey
      }
    };
  }

  return {
    [`${feature}EntitiesRef`]: ref,
    [`with${(0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.capitalize)(feature)}Entities`]: propsFactory
  };
}
const {
  withEntities,
  EntitiesRef: defaultEntitiesRef
} = entitiesPropsFactory('');
const {
  UIEntitiesRef,
  withUIEntities
} = entitiesPropsFactory('UI');

/**
 *
 * Remove entities
 *
 * @example
 *
 * store.update(deleteEntities(1))
 *
 * store.update(deleteEntities([1, 2, 3])
 *
 */

function deleteEntities(ids, options = {}) {
  return function (state) {
    const {
      ref: {
        idsKey,
        entitiesKey
      } = defaultEntitiesRef
    } = options;
    const idsToRemove = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(ids);
    const newEntities = Object.assign({}, state[entitiesKey]);
    const newIds = state[idsKey].filter(id => !idsToRemove.includes(id));

    for (const id of idsToRemove) {
      Reflect.deleteProperty(newEntities, id);
    }

    return Object.assign({}, state, {
      [entitiesKey]: newEntities,
      [idsKey]: newIds
    });
  };
}
/**
 *
 * Remove entities by predicate
 *
 * @example
 *
 * store.update(deleteEntitiesByPredicate(entity => entity.count === 0))
 *
 */

function deleteEntitiesByPredicate(predicate, options = {}) {
  return function reducer(state, context) {
    const ids = findIdsByPredicate(state, options.ref || defaultEntitiesRef, predicate);

    if (ids.length) {
      return deleteEntities(ids, options)(state, context);
    }

    return state;
  };
}
/**
 *
 * Remove all entities
 *
 * @example
 *
 * store.update(deleteAllEntities())
 *
 */

function deleteAllEntities(options = {}) {
  return function reducer(state) {
    const {
      ref: {
        idsKey,
        entitiesKey
      } = defaultEntitiesRef
    } = options;
    return Object.assign({}, state, {
      [entitiesKey]: {},
      [idsKey]: []
    });
  };
}

/**
 *
 * Add entities
 *
 * @example
 *
 * store.update(addEntities(entity))
 *
 * store.update(addEntities([entity, entity]))
 *
 * store.update(addEntities([entity, entity]), { prepend: true })
 *
 */

function addEntities(entities, options = {}) {
  return function (state, context) {
    const {
      prepend = false,
      ref = defaultEntitiesRef
    } = options;
    const {
      entitiesKey,
      idsKey
    } = ref;
    const idKey = getIdKey(context, ref);
    const asArray = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(entities);
    if (!asArray.length) return state;

    if ((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isDev)()) {
      throwIfEntityExists(asArray, idKey, state, entitiesKey);
      throwIfDuplicateIdKey(asArray, idKey);
    }

    const {
      ids,
      asObject
    } = buildEntities(asArray, idKey);
    return Object.assign({}, state, {
      [entitiesKey]: Object.assign({}, state[entitiesKey], asObject),
      [idsKey]: prepend ? [...ids, ...state[idsKey]] : [...state[idsKey], ...ids]
    });
  };
}
/**
 *
 * Add entities using fifo
 *
 * @example
 *
 *
 * store.update(addEntitiesFifo([entity, entity]), { limit: 3 })
 *
 */

function addEntitiesFifo(entities, options) {
  return function (state, context) {
    const {
      ref = defaultEntitiesRef,
      limit
    } = options;
    const {
      entitiesKey,
      idsKey
    } = ref;
    const currentIds = state[idsKey];
    let normalizedEntities = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(entities);
    let newState = state;

    if (normalizedEntities.length > limit) {
      // Remove new entities that pass the limit
      normalizedEntities = normalizedEntities.slice(normalizedEntities.length - limit);
    }

    const total = currentIds.length + normalizedEntities.length; // Remove exiting entities that passes the limit

    if (total > limit) {
      const idsRemove = currentIds.slice(0, total - limit);
      newState = deleteEntities(idsRemove)(state, context);
    }

    const {
      ids,
      asObject
    } = buildEntities(normalizedEntities, getIdKey(context, ref));
    return Object.assign({}, state, {
      [entitiesKey]: Object.assign({}, newState[entitiesKey], asObject),
      [idsKey]: [...newState[idsKey], ...ids]
    });
  };
}

function throwIfEntityExists(entities, idKey, state, entitiesKey) {
  entities.forEach(entity => {
    const id = entity[idKey];

    if (state[entitiesKey][id]) {
      throw Error(`Entity already exists. ${idKey} ${id}`);
    }
  });
}

function throwIfDuplicateIdKey(entities, idKey) {
  const check = new Set();
  entities.forEach(entity => {
    const id = entity[idKey];

    if (check.has(id)) {
      throw Error(`Duplicate entity id provided. ${idKey} ${id}`);
    }

    check.add(id);
  });
}

/**
 *
 * Set entities
 *
 * @example
 *
 * store.update(setEntities([entity, entity]))
 *
 */

function setEntities(entities, options = {}) {
  return function (state, context) {
    const {
      ref = defaultEntitiesRef
    } = options;
    const {
      entitiesKey,
      idsKey
    } = ref;
    const {
      ids,
      asObject
    } = buildEntities(entities, getIdKey(context, ref));
    return Object.assign({}, state, {
      [entitiesKey]: asObject,
      [idsKey]: ids
    });
  };
}
function setEntitiesMap(entities, options = {}) {
  return setEntities(Object.values(entities), options);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/**
 *
 * Get the entities collection
 *
 * @example
 *
 * store.query(getAllEntities())
 *
 */

function getAllEntities(options = {}) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef
  } = options;
  return function (state) {
    return state[idsKey].map(id => state[entitiesKey][id]);
  };
}
/**
 *
 * Get the entities and apply filter/map
 *
 * @example
 *
 * store.query(getAllEntitiesApply())
 *
 */

function getAllEntitiesApply(options) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef,
    filterEntity = () => true,
    mapEntity = e => e
  } = options;
  return function (state) {
    const result = [];

    for (const id of state[idsKey]) {
      const entity = state[entitiesKey][id];

      if (filterEntity(entity)) {
        result.push(mapEntity(entity));
      }
    }

    return result;
  };
}
/**
 *
 * Get an entity
 *
 * @example
 *
 * store.query(getEntity(1))
 *
 */

function getEntity$1(id, options = {}) {
  return function (state) {
    const {
      ref: {
        entitiesKey
      } = defaultEntitiesRef
    } = options;
    return state[entitiesKey][id];
  };
}
/**
 *
 * Check whether the entity exist
 *
 * @example
 *
 * store.query(hasEntity(1))
 *
 */

function hasEntity(id, options = {}) {
  return function (state) {
    const {
      ref: {
        entitiesKey
      } = defaultEntitiesRef
    } = options;
    return Reflect.has(state[entitiesKey], id);
  };
}
/**
 *
 * Get the entities ids
 *
 * @example
 *
 * store.query(getEntitiesIds())
 *
 */

function getEntitiesIds(options = {}) {
  return function (state) {
    const {
      ref: {
        idsKey
      } = defaultEntitiesRef
    } = options;
    return state[idsKey];
  };
}

const _excluded = ["updater", "creator"];

function toModel(updater, entity) {
  if ((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isFunction)(updater)) {
    return updater(entity);
  }

  return Object.assign({}, entity, updater);
}
/**
 *
 * Update entities
 *
 * @example
 *
 * store.update(updateEntities(id, { name }))
 * store.update(updateEntities(id, entity => ({ ...entity, name })))
 * store.update(updateEntities([id, id, id], { open: true }))
 *
 */


function updateEntities(ids, updater, options = {}) {
  return function (state) {
    const {
      ref: {
        entitiesKey
      } = defaultEntitiesRef
    } = options;
    const updatedEntities = {};

    for (const id of (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(ids)) {
      updatedEntities[id] = toModel(updater, state[entitiesKey][id]);
    }

    return Object.assign({}, state, {
      [entitiesKey]: Object.assign({}, state[entitiesKey], updatedEntities)
    });
  };
}
/**
 *
 * Update entities by predicate
 *
 * @example
 *
 * store.update(updateEntitiesByPredicate(entity => entity.count === 0))
 *
 */

function updateEntitiesByPredicate(predicate, updater, options = {}) {
  return function (state, context) {
    const ids = findIdsByPredicate(state, options.ref || defaultEntitiesRef, predicate);

    if (ids.length) {
      return updateEntities(ids, updater, options)(state, context);
    }

    return state;
  };
}
/**
 *
 * Update all entities
 *
 * @example
 *
 * store.update(updateAllEntities({ name }))
 * store.update(updateAllEntities(entity => ({ ...entity, name })))
 *
 */

function updateAllEntities(updater, options = {}) {
  return function (state, context) {
    const {
      ref: {
        idsKey
      } = defaultEntitiesRef
    } = options;
    return updateEntities(state[idsKey], updater, options)(state, context);
  };
}
/**
 *
 * Update entities that exists, add those who don't
 *
 * @example
 *
 */

function upsertEntitiesById(ids, _ref) {
  let {
    updater,
    creator
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  return function (state, context) {
    const updatedEntitiesIds = [];
    const newEntities = [];
    const asArray = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(ids);
    if (!asArray.length) return state;

    for (const id of asArray) {
      if (hasEntity(id, options)(state)) {
        updatedEntitiesIds.push(id);
      } else {
        let newEntity = creator(id);

        if (options.mergeUpdaterWithCreator) {
          newEntity = toModel(updater, newEntity);
        }

        newEntities.push(newEntity);
      }
    }

    const newState = updateEntities(updatedEntitiesIds, updater, options)(state, context);
    return addEntities(newEntities, options)(newState, context);
  };
}
/**
 *
 * Merge entities that exists, add those who don't
 * Make sure all entities have an id
 *
 * @example
 *
 * // single entity
 * store.update(upsertEntities({ id: 1, completed: true }))
 *
 * // or multiple entities
 * store.update(upsertEntities([{ id: 1, completed: true }, { id: 2, completed: true }]))
 *
 * // or using a custom ref
 * store.update(upsertEntities([{ id: 1, open: true }], { ref: UIEntitiesRef }))
 *
 */

function upsertEntities(entities, options = {}) {
  return function (state, context) {
    const {
      prepend = false,
      ref = defaultEntitiesRef
    } = options;
    const {
      entitiesKey,
      idsKey
    } = ref;
    const idKey = getIdKey(context, ref);
    const asObject = {};
    const ids = [];
    const entitiesArray = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(entities);

    if (!entitiesArray.length) {
      return state;
    }

    for (const entity of entitiesArray) {
      const id = entity[idKey]; // if entity exists, merge update, else add

      if (hasEntity(id, options)(state)) {
        asObject[id] = Object.assign({}, state[entitiesKey][id], entity);
      } else {
        ids.push(id);
        asObject[id] = entity;
      }
    }

    const updatedIds = !ids.length ? {} : {
      [idsKey]: prepend ? [...ids, ...state[idsKey]] : [...state[idsKey], ...ids]
    };
    return Object.assign({}, state, updatedIds, {
      [entitiesKey]: Object.assign({}, state[entitiesKey], asObject)
    });
  };
}
/**
 * Update entities ids
 *
 * @example
 *
 * // Update a single entity id
 * store.update(updateEntitiesIds(1, 2));
 *
 * // Update multiple entities ids
 * store.update(updateEntitiesIds([1, 2], [10, 20]));
 *
 * // Update entity id using a custom ref
 * store.update(updateEntitiesIds(1, 2, { ref: UIEntitiesRef }));
 *
 */

function updateEntitiesIds(oldId, newId, options = {}) {
  return function (state, context) {
    const oldIds = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(oldId);
    const newIds = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.coerceArray)(newId);

    if (oldIds.length !== newIds.length) {
      throw new Error('The number of old and new ids must be equal');
    }

    const {
      ref = defaultEntitiesRef
    } = options;
    const idProp = getIdKey(context, ref);
    const updatedEntities = Object.assign({}, state[ref.entitiesKey]);

    for (let i = 0; i < oldIds.length; i++) {
      const oldVal = oldIds[i];
      const newVal = newIds[i];

      if (state[ref.entitiesKey][newVal]) {
        throw new Error(`Updating id "${oldVal}". The new id "${newVal}" already exists`);
      }

      const oldEntity = state[ref.entitiesKey][oldVal];
      const updated = Object.assign({}, oldEntity, {
        [idProp]: newVal
      });
      updatedEntities[newVal] = updated;
      Reflect.deleteProperty(updatedEntities, oldVal);
    }

    const updatedStateIds = state[ref.idsKey].slice();
    let processedIds = 0;

    for (let i = 0; i < updatedStateIds.length; i++) {
      const currentId = updatedStateIds[i];

      for (let j = 0; j < oldIds.length; j++) {
        const oldVal = oldIds[j];
        const newVal = newIds[j];

        if (currentId === oldVal) {
          updatedStateIds[i] = newVal;
          processedIds++;
          break;
        }
      }

      if (processedIds === oldIds.length) {
        break;
      }
    }

    return Object.assign({}, state, {
      [ref.entitiesKey]: updatedEntities,
      [ref.idsKey]: updatedStateIds
    });
  };
}

function untilEntitiesChanges(key) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)((prev, current) => {
    return prev[key] === current[key];
  });
}
/**
 *
 * Observe entities
 *
 * @example
 *
 * store.pipe(selectAllEntities())
 *
 * store.pipe(selectAllEntities({ ref: UIEntitiesRef }))
 *
 */

function selectAllEntities(options = {}) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef
  } = options;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(untilEntitiesChanges(entitiesKey), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => state[idsKey].map(id => state[entitiesKey][id])));
}
/**
 *
 * Observe entities object
 *
 * @example
 *
 * store.pipe(selectEntities())
 *
 * store.pipe(selectEntities({ ref: UIEntitiesRef }))
 *
 */

function selectEntities(options = {}) {
  const {
    ref: {
      entitiesKey
    } = defaultEntitiesRef
  } = options;
  return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => state[entitiesKey]);
}
/**
 *
 * Observe entities and apply filter/map
 *
 * @example
 *
 * store.pipe(selectAllEntitiesApply({
 *   map: (entity) => new Todo(entity),
 *   filter: entity => entity.completed
 * }))
 *
 *
 */

function selectAllEntitiesApply(options) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef,
    filterEntity = () => true,
    mapEntity = e => e
  } = options;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(untilEntitiesChanges(entitiesKey), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => {
    const result = [];

    for (const id of state[idsKey]) {
      const entity = state[entitiesKey][id];

      if (filterEntity(entity)) {
        result.push(mapEntity(entity));
      }
    }

    return result;
  }));
}

function selectEntity(id, options = {}) {
  const {
    ref: {
      entitiesKey
    } = defaultEntitiesRef,
    pluck
  } = options;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(untilEntitiesChanges(entitiesKey), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => getEntity(state[entitiesKey], id, pluck)));
}
function getEntity(entities, id, pluck) {
  const entity = entities[id];

  if ((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(entity)) {
    return undefined;
  }

  if (!pluck) {
    return entity;
  }

  return checkPluck(entity, pluck);
}
function selectEntityByPredicate(predicate, options) {
  const {
    ref = defaultEntitiesRef,
    pluck,
    idKey = 'id'
  } = options || {};
  const {
    entitiesKey
  } = ref;
  let id;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => {
    if ((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(id)) {
      const entity = findEntityByPredicate(state, ref, predicate);
      id = entity && entity[idKey];
    }

    return state[entitiesKey][id];
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(entity => entity ? checkPluck(entity, pluck) : undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
}

/**
 *
 * Observe the first entity
 *
 * @example
 *
 * store.pipe(selectFirst())
 *
 */

function selectFirst(options = {}) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef
  } = options;
  return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => state[entitiesKey][state[idsKey][0]]);
}

/**
 *
 * Observe the last entity
 *
 * @example
 *
 * store.pipe(selectLast())
 *
 */

function selectLast(options = {}) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef
  } = options;
  return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => state[entitiesKey][state[idsKey][state[idsKey].length - 1]]);
}

function selectMany(ids, options = {}) {
  const {
    ref: {
      entitiesKey
    } = defaultEntitiesRef,
    pluck
  } = options;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)((0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => state[entitiesKey]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(entities => {
    if (!ids.length) return [];
    const filtered = [];

    for (const id of ids) {
      const entity = getEntity(entities, id, pluck);
      if (!(0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(entity)) filtered.push(entity);
    }

    return filtered;
  }), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.distinctUntilArrayItemChanged)());
}
function selectManyByPredicate(predicate, options) {
  const {
    ref: {
      entitiesKey,
      idsKey
    } = defaultEntitiesRef,
    pluck
  } = options || {};
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(untilEntitiesChanges(entitiesKey), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => {
    const filteredEntities = [];
    state[idsKey].forEach((id, index) => {
      const entity = state[entitiesKey][id];

      if (predicate(entity, index)) {
        filteredEntities.push(checkPluck(entity, pluck));
      }
    });
    return filteredEntities;
  }), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.distinctUntilArrayItemChanged)());
}

/**
 *
 * Observe the entities collection size
 *
 * @example
 *
 * store.pipe(selectEntitiesCount())
 *
 */

function selectEntitiesCount(options = {}) {
  const {
    ref: {
      idsKey
    } = defaultEntitiesRef
  } = options;
  return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.select)(state => state[idsKey].length);
}
/**
 *
 * Observe the entities collection size  that pass the predicate
 *
 * @example
 *
 * store.pipe(selectEntitiesCountByPredicate(entity => entity.completed))
 *
 */

function selectEntitiesCountByPredicate(predicate, options = {}) {
  const ref = options.ref || defaultEntitiesRef;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(untilEntitiesChanges(ref.entitiesKey), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => findIdsByPredicate(state, ref, predicate).length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
}
/**
 *
 * Return the entities collection size
 *
 * @example
 *
 * store.query(getEntitiesCount())
 *
 */

function getEntitiesCount(options = {}) {
  return function (state) {
    const {
      ref: {
        idsKey
      } = defaultEntitiesRef
    } = options;
    return state[idsKey].length;
  };
}
/**
 *
 * Return the entities collection size that pass the predicate
 *
 * @example
 *
 * store.query(getEntitiesCountByPredicate(entity => entity.completed))
 *
 */

function getEntitiesCountByPredicate(predicate, options = {}) {
  return function (state) {
    const ref = options.ref || defaultEntitiesRef;
    return findIdsByPredicate(state, ref, predicate).length;
  };
}

function unionEntities(idKey = 'id') {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => {
    return state.entities.map(entity => {
      return Object.assign({}, entity, state.UIEntities[entity[idKey]]);
    });
  });
}

function unionEntitiesAsMap(idKey = 'id') {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => {
    return Object.fromEntries(state.entities.map(entity => {
      return [entity[idKey], Object.assign({}, entity, state.UIEntities[entity[idKey]])];
    }));
  });
}

const {
  selectActiveId,
  setActiveId,
  withActiveId,
  resetActiveId,
  getActiveId
} = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.propsFactory)('activeId', {
  initialValue: undefined
});
function selectActiveEntity(options = {}) {
  const {
    ref = defaultEntitiesRef
  } = options;
  return function (source) {
    return source.pipe(selectActiveId()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(id => source.pipe(selectEntity(id, {
      ref
    }))));
  };
}
function getActiveEntity(options = {}) {
  const {
    ref: {
      entitiesKey
    } = defaultEntitiesRef
  } = options;
  return function (state) {
    return state[entitiesKey][getActiveId(state)];
  };
}
const {
  setActiveIds,
  resetActiveIds,
  withActiveIds,
  selectActiveIds,
  toggleActiveIds,
  removeActiveIds,
  addActiveIds,
  getActiveIds
} = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.propsArrayFactory)('activeIds', {
  initialValue: []
});
function selectActiveEntities(options = {}) {
  const {
    ref = defaultEntitiesRef
  } = options;
  return function (source) {
    return source.pipe(selectActiveIds()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(ids => source.pipe(selectMany(ids, {
      ref
    }))));
  };
}
function getActiveEntities(options = {}) {
  const {
    ref: {
      entitiesKey
    } = defaultEntitiesRef
  } = options;
  return function (state) {
    const result = [];

    for (const id of getActiveIds(state)) {
      const entity = state[entitiesKey][id];

      if (entity) {
        result.push(entity);
      }
    }

    return result;
  };
}




/***/ }),

/***/ 8617:
/*!********************************************************!*\
  !*** ./node_modules/@ngneat/elf-requests/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearRequestsCache": () => (/* binding */ clearRequestsCache),
/* harmony export */   "clearRequestsStatus": () => (/* binding */ clearRequestsStatus),
/* harmony export */   "createRequestDataSource": () => (/* binding */ createRequestDataSource),
/* harmony export */   "createRequestsCacheOperator": () => (/* binding */ createRequestsCacheOperator),
/* harmony export */   "createRequestsStatusOperator": () => (/* binding */ createRequestsStatusOperator),
/* harmony export */   "getRequestCache": () => (/* binding */ getRequestCache),
/* harmony export */   "getRequestStatus": () => (/* binding */ getRequestStatus),
/* harmony export */   "initializeAsPending": () => (/* binding */ initializeAsPending),
/* harmony export */   "isRequestCached": () => (/* binding */ isRequestCached),
/* harmony export */   "selectIsRequestCached": () => (/* binding */ selectIsRequestCached),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectRequestCache": () => (/* binding */ selectRequestCache),
/* harmony export */   "selectRequestStatus": () => (/* binding */ selectRequestStatus),
/* harmony export */   "updateRequestCache": () => (/* binding */ updateRequestCache),
/* harmony export */   "updateRequestStatus": () => (/* binding */ updateRequestStatus),
/* harmony export */   "updateRequestsCache": () => (/* binding */ updateRequestsCache),
/* harmony export */   "updateRequestsStatus": () => (/* binding */ updateRequestsStatus),
/* harmony export */   "withRequestsCache": () => (/* binding */ withRequestsCache),
/* harmony export */   "withRequestsStatus": () => (/* binding */ withRequestsStatus)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf */ 6456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3453);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);




function withRequestsCache(initialValue) {
  return {
    props: {
      requestsCache: initialValue != null ? initialValue : {}
    },
    config: undefined
  };
}
(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilKeyChanged)('');
function selectRequestCache(key) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilKeyChanged)('requestsCache'), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.select)(state => getRequestCache(key)(state)));
}
function updateRequestsCache(requestsOrKeys, value) {
  let normalized = requestsOrKeys;

  if (value) {
    normalized = requestsOrKeys.reduce((acc, key) => {
      acc[key] = value;
      return acc;
    }, {});
  }

  return function (state) {
    return Object.assign({}, state, {
      requestsCache: Object.assign({}, state.requestsCache, normalized)
    });
  };
}
function updateRequestCache(key, {
  ttl,
  value: v
} = {}) {
  const data = {
    value: v != null ? v : 'full'
  };

  if (ttl) {
    data.timestamp = Date.now() + ttl;
  }

  return function (state) {
    return Object.assign({}, state, {
      requestsCache: Object.assign({}, state.requestsCache, {
        [key]: data
      })
    });
  };
}
function getRequestCache(key) {
  return function (state) {
    var _state$requestsCache$;

    const cacheValue = (_state$requestsCache$ = state.requestsCache[key]) != null ? _state$requestsCache$ : {
      value: 'none'
    };

    if (cacheValue.timestamp && cacheValue.timestamp < Date.now()) {
      return {
        value: 'none'
      };
    }

    return cacheValue;
  };
}
function selectIsRequestCached(key, options) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilKeyChanged)('requestsCache'), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.select)(state => isRequestCached(key, options)(state)));
}
function isRequestCached(key, options) {
  return function (state) {
    var _options$value;

    const type = (_options$value = options == null ? void 0 : options.value) != null ? _options$value : 'full';
    return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(key).some(k => getRequestCache(k)(state).value === type);
  };
}
function skipWhileCached(store, key, options) {
  return function (source) {
    if (store.query(isRequestCached(key, {
      value: options == null ? void 0 : options.value
    }))) {
      var _options$returnSource;

      return (_options$returnSource = options == null ? void 0 : options.returnSource) != null ? _options$returnSource : rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }

    return source;
  };
}
function createRequestsCacheOperator(store) {
  return function (key, options) {
    return skipWhileCached(store, key, options);
  };
}
function clearRequestsCache() {
  return function (state) {
    return Object.assign({}, state, {
      requestsCache: {}
    });
  };
}

function withRequestsStatus(initialValue) {
  return {
    props: {
      requestsStatus: initialValue != null ? initialValue : {}
    },
    config: undefined
  };
}
function updateRequestsStatus(requestsOrKeys, value, error) {
  let normalized = requestsOrKeys;

  if (value) {
    normalized = requestsOrKeys.reduce((acc, key) => {
      acc[key] = resolveStatus(value, error);
      return acc;
    }, {});
  }

  return function (state) {
    return Object.assign({}, state, {
      requestsStatus: Object.assign({}, state.requestsStatus, normalized)
    });
  };
}

function resolveStatus(value, error) {
  const newStatus = {
    value
  };

  if (value === 'error') {
    newStatus.error = error;
  }

  return newStatus;
}

function updateRequestStatus(key, value, error) {
  return function (state) {
    return Object.assign({}, state, {
      requestsStatus: Object.assign({}, state.requestsStatus, {
        [key]: resolveStatus(value, error)
      })
    });
  };
}
function getRequestStatus(key) {
  return function (state) {
    var _state$requestsStatus;

    return (_state$requestsStatus = state.requestsStatus[key]) != null ? _state$requestsStatus : {
      value: 'idle'
    };
  };
}
function selectRequestStatus(key, options) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilKeyChanged)('requestsStatus'), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.select)(state => {
    const base = getRequestStatus(key)(state);

    if (options != null && options.groupKey) {
      const parent = getRequestStatus(options.groupKey)(state);
      return parent.value === 'success' ? parent : base;
    }

    return base;
  }));
}
function selectIsRequestPending(key) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.distinctUntilKeyChanged)('requestsStatus'), (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.select)(state => getRequestStatus(key)(state).value === 'pending'));
}
function trackRequestStatus(store, key, options) {
  return function (source) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.defer)(() => {
      if (store.query(getRequestStatus(key)).value !== 'pending') {
        store.update(updateRequestStatus(key, 'pending'));
      }

      return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
        error(error) {
          store.update(updateRequestStatus(key, 'error', options != null && options.mapError ? options == null ? void 0 : options.mapError(error) : error));
        }

      }));
    });
  };
}
function createRequestsStatusOperator(store) {
  return function (key, options) {
    return trackRequestStatus(store, key, options);
  };
}
function initializeAsPending(keys) {
  return (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(keys).reduce((acc, key) => {
    acc[key] = {
      value: 'pending'
    };
    return acc;
  }, {});
}
function clearRequestsStatus() {
  return function (state) {
    return Object.assign({}, state, {
      requestsStatus: {}
    });
  };
}

function createRequestDataSource(params) {
  const {
    data$,
    store,
    dataKey,
    requestStatusOptions,
    requestKey,
    idleAsPending = false
  } = Reflect.has(params, 'requestKey') ? params : Object.assign({}, params, {
    requestKey: undefined
  });
  return {
    trackRequestStatus: options => trackRequestStatus(store, requestKey != null ? requestKey : options == null ? void 0 : options.key, options),
    skipWhileCached: options => skipWhileCached(store, requestKey != null ? requestKey : options == null ? void 0 : options.key, options),

    setSuccess(options) {
      return updateRequestStatus(requestKey != null ? requestKey : options == null ? void 0 : options.key, 'success');
    },

    setCached(options) {
      return updateRequestCache(requestKey != null ? requestKey : options == null ? void 0 : options.key, options);
    },

    data$: options => store.combine({
      data: data$(requestKey != null ? requestKey : options == null ? void 0 : options.key),
      status: store.pipe(selectRequestStatus(requestKey != null ? requestKey : options == null ? void 0 : options.key, requestStatusOptions || {}))
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({
      data,
      status
    }) => {
      return {
        [dataKey]: data,
        loading: idleAsPending ? status.value === 'pending' || status.value === 'idle' : status.value === 'pending',
        error: status.value === 'error' ? status.error : undefined
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)((a, b) => {
      // if the status is the same, for example, `pending` and `pending`, and the `data` is the same
      // don't emit a redundant value
      return a[dataKey] === b[dataKey] && a.loading === b.loading && a.error === b.error;
    }))
  };
}




/***/ }),

/***/ 3453:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilKeyChanged.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distinctUntilKeyChanged": () => (/* binding */ distinctUntilKeyChanged)
/* harmony export */ });
/* harmony import */ var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distinctUntilChanged */ 8977);

function distinctUntilKeyChanged(key, compare) {
    return (0,_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__.distinctUntilChanged)((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}


/***/ })

}]);
//# sourceMappingURL=src_app_features_user_user-details_user-details_module_ts.js.map