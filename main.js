"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 5712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_0__.ContentLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 1104)).then((m) => m.DashboardModule),
            },
            {
                path: 'post/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_post_post-details_post-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/post/post-details/post-details.module */ 7244)).then((m) => m.PostDetailsModule),
            },
            {
                path: 'posts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2015_ngneat-until-destroy_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_post_post-list_post-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/post/post-list/post-list.module */ 7287)).then((m) => m.PostListModule),
            },
            {
                path: 'albums',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2015_ngneat-until-destroy_mjs"), __webpack_require__.e("src_app_features_album_album-list_album-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/album/album-list/album-list.module */ 2484)).then((m) => m.AlbumListModule),
            },
            {
                path: 'album/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2015_ngneat-until-destroy_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_photo_photo-list_album-photos_album-photos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/photo/photo-list/album-photos/album-photos.module */ 7097)).then((m) => m.AlbumPhotosModule),
            },
            {
                path: 'photos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2015_ngneat-until-destroy_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_photo_photo-list_all-photos_all-photos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/photo/photo-list/all-photos/all-photos.module */ 3282)).then((m) => m.AllPhotosModule),
            },
            {
                path: 'photo/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_features_photo_photo-details_photo-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/photo/photo-details/photo-details.module */ 5770)).then((m) => m.PhotoDetailsModule),
            },
            {
                path: 'user/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_features_user_user-details_user-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/user/user-details/user-details.module */ 8537)).then((m) => m.UserDetailsModule),
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 5712);
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/nav/nav.component */ 6017);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_2__.ContentLayoutComponent, _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-store/reducers */ 2572);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store-devtools */ 5811);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _ngrx_store_effects_entity_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-store/effects/entity.effects */ 9084);
/* harmony import */ var _ngrx_store_effects_current_action_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-store/effects/current-action.effects */ 8455);
/* harmony import */ var _ngrx_store_effects_post_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngrx-store/effects/post.effects */ 1558);
/* harmony import */ var _ngrx_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngrx-store/effects/user.effects */ 6930);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngxs-store/state/entities.state */ 6696);
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 2015);
/* harmony import */ var _ngxs_store_state_entities_album_entities_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngxs-store/state/entities/album-entities.state */ 5726);
/* harmony import */ var _ngxs_store_state_entities_user_entities_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngxs-store/state/entities/user-entities.state */ 6933);
/* harmony import */ var _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngxs-labs/actions-executing */ 9431);
/* harmony import */ var _ngxs_store_state_entities_photo_entities_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngxs-store/state/entities/photo-entities.state */ 881);
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ 1499);
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ 1221);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/router-store */ 25);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);































if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_12__.enableAkitaProdMode)();
}
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__.NgxsModule.forRoot([_ngxs_store_state_entities_state__WEBPACK_IMPORTED_MODULE_7__.EntitiesState, _ngxs_store_state_entities_album_entities_state__WEBPACK_IMPORTED_MODULE_9__.AlbumEntitiesState, _ngxs_store_state_entities_user_entities_state__WEBPACK_IMPORTED_MODULE_10__.UserEntitiesState, _ngxs_store_state_entities_photo_entities_state__WEBPACK_IMPORTED_MODULE_11__.PhotoEntitiesState], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production,
                selectorOptions: {
                    // Такие значения рекомендуются в документации. И они будут дефолтными в NGXS 4
                    suppressErrors: false,
                    injectContainerState: false,
                },
            }),
            _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production ? [] : _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__.NgxsReduxDevtoolsPluginModule.forRoot({ name: 'NGXS demo' }),
            _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_16__.NgxsActionsExecutingModule.forRoot(),
            _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production ? [] : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_17__.AkitaNgDevtools.forRoot({ name: 'Akita demo' }),
            _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_18__.AkitaNgRouterStoreModule,
            // Ngrx нужно подключать после Akita, потому что иначе они будут конфликтовать в redux devtools
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot(_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_0__.reducers, { metaReducers: _ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_0__.metaReducers }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_20__.StoreRouterConnectingModule.forRoot(),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__.StoreDevtoolsModule.instrument({ name: 'NgRx demo' }) : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__.EffectsModule.forRoot([_ngrx_store_effects_entity_effects__WEBPACK_IMPORTED_MODULE_2__.EntityEffects, _ngrx_store_effects_current_action_effects__WEBPACK_IMPORTED_MODULE_3__.CurrentActionEffects, _ngrx_store_effects_post_effects__WEBPACK_IMPORTED_MODULE_4__.PostEffects, _ngrx_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_5__.UserEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_8__.NgxsReduxDevtoolsPluginModule, _ngxs_labs_actions_executing__WEBPACK_IMPORTED_MODULE_16__.NgxsActionsExecutingModule, _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_17__.AkitaNgDevtools, _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_18__.AkitaNgRouterStoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_20__.StoreRouterConnectingModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__.EffectsRootModule] }); })();


/***/ }),

/***/ 6788:
/*!*******************************************************************!*\
  !*** ./src/app/core/ngrx-store/actions/current-action.actions.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "END_ACTION": () => (/* binding */ END_ACTION),
/* harmony export */   "EndAction": () => (/* binding */ EndAction),
/* harmony export */   "START_ACTION": () => (/* binding */ START_ACTION),
/* harmony export */   "StartAction": () => (/* binding */ StartAction)
/* harmony export */ });
const START_ACTION = '[CurrentAction] StartAction';
class StartAction {
    constructor(startActionType) {
        this.startActionType = startActionType;
        this.type = START_ACTION;
    }
}
const END_ACTION = '[CurrentAction] EndAction';
class EndAction {
    constructor(endActionType) {
        this.endActionType = endActionType;
        this.type = END_ACTION;
    }
}


/***/ }),

/***/ 3640:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx-store/actions/entity.actions.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ENTITIES_SUCCESS": () => (/* binding */ GET_ENTITIES_SUCCESS),
/* harmony export */   "GetEntitiesSuccess": () => (/* binding */ GetEntitiesSuccess)
/* harmony export */ });
/* GetEntities */
const GET_ENTITIES_SUCCESS = '[Entity] GetEntitiesSuccess';
class GetEntitiesSuccess {
    constructor(entities) {
        this.entities = entities;
        this.type = GET_ENTITIES_SUCCESS;
    }
}


/***/ }),

/***/ 3318:
/*!*********************************************************!*\
  !*** ./src/app/core/ngrx-store/actions/post.actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_POSTS": () => (/* binding */ GET_POSTS),
/* harmony export */   "GET_POSTS_FAILED": () => (/* binding */ GET_POSTS_FAILED),
/* harmony export */   "GET_POSTS_SUCCESS": () => (/* binding */ GET_POSTS_SUCCESS),
/* harmony export */   "GET_SINGLE_POST": () => (/* binding */ GET_SINGLE_POST),
/* harmony export */   "GET_SINGLE_POST_FAILED": () => (/* binding */ GET_SINGLE_POST_FAILED),
/* harmony export */   "GET_SINGLE_POST_SUCCESS": () => (/* binding */ GET_SINGLE_POST_SUCCESS),
/* harmony export */   "GetPosts": () => (/* binding */ GetPosts),
/* harmony export */   "GetPostsFailed": () => (/* binding */ GetPostsFailed),
/* harmony export */   "GetPostsSuccess": () => (/* binding */ GetPostsSuccess),
/* harmony export */   "GetSinglePost": () => (/* binding */ GetSinglePost),
/* harmony export */   "GetSinglePostFailed": () => (/* binding */ GetSinglePostFailed),
/* harmony export */   "GetSinglePostSuccess": () => (/* binding */ GetSinglePostSuccess)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/returns-normalized-data */ 3906);
/* harmony import */ var _decorators_start_of_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/start-of-action */ 832);
/* harmony import */ var _decorators_end_of_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/end-of-action */ 503);




/* GetPosts */
const GET_POSTS = '[Post] GetPosts';
const GET_POSTS_SUCCESS = '[Post] GetPostsSuccess';
const GET_POSTS_FAILED = '[Post] GetPostsFailed';
let GetPosts = class GetPosts {
    constructor(pageRequest) {
        this.pageRequest = pageRequest;
        this.type = GET_POSTS;
    }
};
GetPosts = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_start_of_action__WEBPACK_IMPORTED_MODULE_1__.StartOfAction)()
], GetPosts);

let GetPostsSuccess = class GetPostsSuccess {
    constructor(data) {
        this.data = data;
        this.type = GET_POSTS_SUCCESS;
    }
};
GetPostsSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_2__.EndOfAction)(GET_POSTS),
    (0,_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__.ReturnsNormalizedData)()
], GetPostsSuccess);

let GetPostsFailed = class GetPostsFailed {
    constructor(error) {
        this.error = error;
        this.type = GET_POSTS_FAILED;
    }
};
GetPostsFailed = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_2__.EndOfAction)(GET_POSTS)
], GetPostsFailed);

/* GetSinglePost */
const GET_SINGLE_POST = '[Post] GetSinglePost';
const GET_SINGLE_POST_SUCCESS = '[Post] GetSinglePostSuccess';
const GET_SINGLE_POST_FAILED = '[Post] GetSinglePostFailed';
let GetSinglePost = class GetSinglePost {
    constructor(id) {
        this.id = id;
        this.type = GET_SINGLE_POST;
    }
};
GetSinglePost = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_start_of_action__WEBPACK_IMPORTED_MODULE_1__.StartOfAction)()
], GetSinglePost);

let GetSinglePostSuccess = class GetSinglePostSuccess {
    constructor(data) {
        this.data = data;
        this.type = GET_SINGLE_POST_SUCCESS;
    }
};
GetSinglePostSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_2__.EndOfAction)(GET_SINGLE_POST),
    (0,_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__.ReturnsNormalizedData)()
], GetSinglePostSuccess);

let GetSinglePostFailed = class GetSinglePostFailed {
    constructor(error) {
        this.error = error;
        this.type = GET_SINGLE_POST_FAILED;
    }
};
GetSinglePostFailed = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_2__.EndOfAction)(GET_SINGLE_POST)
], GetSinglePostFailed);



/***/ }),

/***/ 5071:
/*!*********************************************************!*\
  !*** ./src/app/core/ngrx-store/actions/user.actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_USERS": () => (/* binding */ GET_USERS),
/* harmony export */   "GET_USERS_FAILED": () => (/* binding */ GET_USERS_FAILED),
/* harmony export */   "GET_USERS_SUCCESS": () => (/* binding */ GET_USERS_SUCCESS),
/* harmony export */   "GetUsers": () => (/* binding */ GetUsers),
/* harmony export */   "GetUsersFailed": () => (/* binding */ GetUsersFailed),
/* harmony export */   "GetUsersSuccess": () => (/* binding */ GetUsersSuccess)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _decorators_start_of_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/start-of-action */ 832);
/* harmony import */ var _decorators_end_of_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/end-of-action */ 503);
/* harmony import */ var _decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/returns-normalized-data */ 3906);




/* GetUsers */
const GET_USERS = '[User] GetUsers';
const GET_USERS_SUCCESS = '[User] GetUsersSuccess';
const GET_USERS_FAILED = '[User] GetUsersFailed';
let GetUsers = class GetUsers {
    constructor() {
        this.type = GET_USERS;
    }
};
GetUsers = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_start_of_action__WEBPACK_IMPORTED_MODULE_0__.StartOfAction)()
], GetUsers);

let GetUsersSuccess = class GetUsersSuccess {
    constructor(data) {
        this.data = data;
        this.type = GET_USERS_SUCCESS;
    }
};
GetUsersSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_1__.EndOfAction)(GET_USERS),
    (0,_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_2__.ReturnsNormalizedData)()
], GetUsersSuccess);

let GetUsersFailed = class GetUsersFailed {
    constructor(error) {
        this.error = error;
        this.type = GET_USERS_FAILED;
    }
};
GetUsersFailed = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_end_of_action__WEBPACK_IMPORTED_MODULE_1__.EndOfAction)(GET_USERS)
], GetUsersFailed);



/***/ }),

/***/ 503:
/*!*************************************************************!*\
  !*** ./src/app/core/ngrx-store/decorators/end-of-action.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndOfAction": () => (/* binding */ EndOfAction)
/* harmony export */ });
function EndOfAction(actionType) {
    return function (Class) {
        Object.defineProperty(Class.prototype, 'triggeredAction', {
            value: actionType,
        });
    };
}


/***/ }),

/***/ 3906:
/*!***********************************************************************!*\
  !*** ./src/app/core/ngrx-store/decorators/returns-normalized-data.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnsNormalizedData": () => (/* binding */ ReturnsNormalizedData)
/* harmony export */ });
function ReturnsNormalizedData() {
    return function (Class) {
        Object.defineProperty(Class.prototype, 'containsNormalizedData', {
            value: true,
        });
    };
}


/***/ }),

/***/ 832:
/*!***************************************************************!*\
  !*** ./src/app/core/ngrx-store/decorators/start-of-action.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartOfAction": () => (/* binding */ StartOfAction)
/* harmony export */ });
function StartOfAction() {
    return function (Class) {
        Object.defineProperty(Class.prototype, 'actionIsStarted', {
            value: true,
        });
    };
}


/***/ }),

/***/ 8455:
/*!*******************************************************************!*\
  !*** ./src/app/core/ngrx-store/effects/current-action.effects.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentActionEffects": () => (/* binding */ CurrentActionEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/current-action.actions */ 6788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class CurrentActionEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.startAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((action) => !!action.actionIsStarted), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((action) => new _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__.StartAction(action.type))));
        this.endAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((action) => !!action.triggeredAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((action) => new _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__.EndAction(action.triggeredAction))));
    }
}
CurrentActionEffects.ɵfac = function CurrentActionEffects_Factory(t) { return new (t || CurrentActionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions)); };
CurrentActionEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CurrentActionEffects, factory: CurrentActionEffects.ɵfac });


/***/ }),

/***/ 9084:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx-store/effects/entity.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityEffects": () => (/* binding */ EntityEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/entity.actions */ 3640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class EntityEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.getEntitiesSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((action) => !!action.containsNormalizedData), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((action) => new _actions_entity_actions__WEBPACK_IMPORTED_MODULE_0__.GetEntitiesSuccess(action.data.entities))));
    }
}
EntityEffects.ɵfac = function EntityEffects_Factory(t) { return new (t || EntityEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions)); };
EntityEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EntityEffects, factory: EntityEffects.ɵfac });


/***/ }),

/***/ 1558:
/*!*********************************************************!*\
  !*** ./src/app/core/ngrx-store/effects/post.effects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostEffects": () => (/* binding */ PostEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../normalizr/schemas/post-schema */ 5503);
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post.actions */ 3318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5384);








class PostEffects {
    constructor(actions$, api) {
        this.actions$ = actions$;
        this.api = api;
        this.getPosts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GET_POSTS), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)((action) => this.api.getPosts(action.pageRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((pageResult) => (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(pageResult, _normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_0__.postListSchema)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((data) => new _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetPostsSuccess(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetPostsFailed(error)))))));
        this.getSinglePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GET_SINGLE_POST), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)((action) => this.api.getSinglePost(action.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((post) => (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(post, _normalizr_schemas_post_schema__WEBPACK_IMPORTED_MODULE_0__.postSchema)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((data) => new _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetSinglePostSuccess(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__.GetSinglePostFailed(error)))))));
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
PostEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac });


/***/ }),

/***/ 6930:
/*!*********************************************************!*\
  !*** ./src/app/core/ngrx-store/effects/user.effects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ 5071);
/* harmony import */ var _normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../normalizr/schemas/user-schema */ 151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5384);








class UserEffects {
    constructor(actions$, api) {
        this.actions$ = actions$;
        this.api = api;
        this.getUsers$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.GET_USERS), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.api.getUsers({}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((pageResult) => (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(pageResult, _normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_1__.userListSchema)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((data) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.GetUsersSuccess(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.GetUsersFailed(error)))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
UserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ 3377:
/*!*********************************************************************!*\
  !*** ./src/app/core/ngrx-store/reducers/current-actions.reducer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentActionsFeatureKey": () => (/* binding */ currentActionsFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/current-action.actions */ 6788);

const currentActionsFeatureKey = 'currentActions';
const initialState = [];
// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__.START_ACTION:
            const startAction = action;
            return [...state, startAction.startActionType];
        case _actions_current_action_actions__WEBPACK_IMPORTED_MODULE_0__.END_ACTION:
            const endAction = action;
            return state.filter((item) => item !== endAction.endActionType);
        default:
            return state;
    }
}


/***/ }),

/***/ 5597:
/*!**************************************************************!*\
  !*** ./src/app/core/ngrx-store/reducers/entities.reducer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entitiesFeatureKey": () => (/* binding */ entitiesFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/entity.actions */ 3640);

const entitiesFeatureKey = 'entities';
const initialState = {
    users: {},
    posts: {},
};
// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_entity_actions__WEBPACK_IMPORTED_MODULE_0__.GET_ENTITIES_SUCCESS:
            const getEntityAction = action;
            return {
                users: Object.assign({}, state.users, getEntityAction.entities['users']),
                posts: Object.assign({}, state.posts, getEntityAction.entities['posts']),
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 2572:
/*!***************************************************!*\
  !*** ./src/app/core/ngrx-store/reducers/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ 25);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities.reducer */ 5597);
/* harmony import */ var _current_actions_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-actions.reducer */ 3377);




const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__.routerReducer,
    [_entities_reducer__WEBPACK_IMPORTED_MODULE_1__.entitiesFeatureKey]: _entities_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
    [_current_actions_reducer__WEBPACK_IMPORTED_MODULE_2__.currentActionsFeatureKey]: _current_actions_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];


/***/ }),

/***/ 220:
/*!**********************************************************!*\
  !*** ./src/app/core/ngxs-store/actions/album.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumActions": () => (/* binding */ AlbumActions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ngrx-store/decorators/returns-normalized-data */ 3906);


var AlbumActions;
(function (AlbumActions) {
    class GetAlbums {
        constructor(pageRequest) {
            this.pageRequest = pageRequest;
        }
    }
    GetAlbums.type = '[Album] GetAlbums';
    AlbumActions.GetAlbums = GetAlbums;
    let GetAlbumsSuccess = class GetAlbumsSuccess {
        constructor(data) {
            this.data = data;
        }
    };
    GetAlbumsSuccess.type = '[Album] GetAlbumsSuccess';
    GetAlbumsSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__.ReturnsNormalizedData)()
    ], GetAlbumsSuccess);
    AlbumActions.GetAlbumsSuccess = GetAlbumsSuccess;
})(AlbumActions || (AlbumActions = {}));


/***/ }),

/***/ 7056:
/*!***********************************************************!*\
  !*** ./src/app/core/ngxs-store/actions/entity.actions.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityActions": () => (/* binding */ EntityActions)
/* harmony export */ });
var EntityActions;
(function (EntityActions) {
    class GetEntitiesSuccess {
        constructor(entities) {
            this.entities = entities;
        }
    }
    GetEntitiesSuccess.type = '[Entity] GetEntitiesSuccess';
    EntityActions.GetEntitiesSuccess = GetEntitiesSuccess;
})(EntityActions || (EntityActions = {}));


/***/ }),

/***/ 620:
/*!**********************************************************!*\
  !*** ./src/app/core/ngxs-store/actions/photo.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoActions": () => (/* binding */ PhotoActions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ngrx-store/decorators/returns-normalized-data */ 3906);


var PhotoActions;
(function (PhotoActions) {
    class GetPhotos {
        constructor(pageRequest) {
            this.pageRequest = pageRequest;
        }
    }
    GetPhotos.type = '[Photo] GetPhotos';
    PhotoActions.GetPhotos = GetPhotos;
    let GetPhotosSuccess = class GetPhotosSuccess {
        constructor(data, pageResult) {
            this.data = data;
            this.pageResult = pageResult;
        }
    };
    GetPhotosSuccess.type = '[Photo] GetPhotosSuccess';
    GetPhotosSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__.ReturnsNormalizedData)()
    ], GetPhotosSuccess);
    PhotoActions.GetPhotosSuccess = GetPhotosSuccess;
})(PhotoActions || (PhotoActions = {}));


/***/ }),

/***/ 2481:
/*!*********************************************************!*\
  !*** ./src/app/core/ngxs-store/actions/user.actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActions": () => (/* binding */ UserActions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ngrx-store/decorators/returns-normalized-data */ 3906);


var UserActions;
(function (UserActions) {
    class GetUsers {
        constructor(pageRequest) {
            this.pageRequest = pageRequest;
        }
    }
    GetUsers.type = '[User] GetUsers';
    UserActions.GetUsers = GetUsers;
    let GetUsersSuccess = class GetUsersSuccess {
        constructor(data) {
            this.data = data;
        }
    };
    GetUsersSuccess.type = '[User] GetUsersSuccess';
    GetUsersSuccess = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_ngrx_store_decorators_returns_normalized_data__WEBPACK_IMPORTED_MODULE_0__.ReturnsNormalizedData)()
    ], GetUsersSuccess);
    UserActions.GetUsersSuccess = GetUsersSuccess;
})(UserActions || (UserActions = {}));


/***/ }),

/***/ 6696:
/*!*********************************************************!*\
  !*** ./src/app/core/ngxs-store/state/entities.state.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesState": () => (/* binding */ EntitiesState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _entities_album_entities_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/album-entities.state */ 5726);
/* harmony import */ var _entities_user_entities_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/user-entities.state */ 6933);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/entity.actions */ 7056);
/* harmony import */ var _entities_photo_entities_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/photo-entities.state */ 881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









// в generic не указываю EntitiesStateModel, т.к. тогда компилятор ругается на пустой defaults
let EntitiesState = class EntitiesState {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.actions$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)((actionContext) => {
            return (!!actionContext.action.containsNormalizedData &&
                actionContext.status === "SUCCESSFUL" /* Successful */);
        }))
            .subscribe((actionContext) => {
            this.store.dispatch(new _actions_entity_actions__WEBPACK_IMPORTED_MODULE_3__.EntityActions.GetEntitiesSuccess(actionContext.action.data.entities));
        });
    }
};
EntitiesState.ɵfac = function EntitiesState_Factory(t) { return new (t || EntitiesState)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Actions)); };
EntitiesState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: EntitiesState, factory: EntitiesState.ɵfac });
EntitiesState = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'entities',
        defaults: {},
        children: [_entities_album_entities_state__WEBPACK_IMPORTED_MODULE_1__.AlbumEntitiesState, _entities_user_entities_state__WEBPACK_IMPORTED_MODULE_2__.UserEntitiesState, _entities_photo_entities_state__WEBPACK_IMPORTED_MODULE_4__.PhotoEntitiesState],
    })
], EntitiesState);



/***/ }),

/***/ 5726:
/*!************************************************************************!*\
  !*** ./src/app/core/ngxs-store/state/entities/album-entities.state.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumEntitiesState": () => (/* binding */ AlbumEntitiesState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _normalizr_schemas_album_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../normalizr/schemas/album-schema */ 3349);
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/entity.actions */ 7056);
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/album.actions */ 220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ 5384);









let AlbumEntitiesState = class AlbumEntitiesState {
    constructor(api) {
        this.api = api;
    }
    getAlbums(ctx, action) {
        return this.api.getAlbums(action.pageRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            const normalizedData = (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(result, _normalizr_schemas_album_schema__WEBPACK_IMPORTED_MODULE_1__.albumListSchema);
            ctx.dispatch(new _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.AlbumActions.GetAlbumsSuccess(normalizedData));
        }));
    }
    getEntitiesSuccess(ctx, action) {
        if (action.entities['albums']) {
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), action.entities['albums']));
        }
    }
};
AlbumEntitiesState.ɵfac = function AlbumEntitiesState_Factory(t) { return new (t || AlbumEntitiesState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService)); };
AlbumEntitiesState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AlbumEntitiesState, factory: AlbumEntitiesState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__.AlbumActions.GetAlbums)
], AlbumEntitiesState.prototype, "getAlbums", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_entity_actions__WEBPACK_IMPORTED_MODULE_2__.EntityActions.GetEntitiesSuccess)
], AlbumEntitiesState.prototype, "getEntitiesSuccess", null);
AlbumEntitiesState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'albums',
        defaults: {},
    })
], AlbumEntitiesState);



/***/ }),

/***/ 881:
/*!************************************************************************!*\
  !*** ./src/app/core/ngxs-store/state/entities/photo-entities.state.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoEntitiesState": () => (/* binding */ PhotoEntitiesState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/entity.actions */ 7056);
/* harmony import */ var _actions_photo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/photo.actions */ 620);
/* harmony import */ var _normalizr_schemas_photo_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../normalizr/schemas/photo-schema */ 6462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ 5384);









let PhotoEntitiesState = class PhotoEntitiesState {
    constructor(api) {
        this.api = api;
    }
    getPhotos(ctx, action) {
        return this.api.getPhotos(action.pageRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            const normalizedData = (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(result, _normalizr_schemas_photo_schema__WEBPACK_IMPORTED_MODULE_3__.photoListSchema);
            ctx.dispatch(new _actions_photo_actions__WEBPACK_IMPORTED_MODULE_2__.PhotoActions.GetPhotosSuccess(normalizedData, result));
        }));
    }
    getEntitiesSuccess(ctx, action) {
        if (action.entities['photos']) {
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), action.entities['photos']));
        }
    }
};
PhotoEntitiesState.ɵfac = function PhotoEntitiesState_Factory(t) { return new (t || PhotoEntitiesState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService)); };
PhotoEntitiesState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PhotoEntitiesState, factory: PhotoEntitiesState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_photo_actions__WEBPACK_IMPORTED_MODULE_2__.PhotoActions.GetPhotos)
], PhotoEntitiesState.prototype, "getPhotos", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_entity_actions__WEBPACK_IMPORTED_MODULE_1__.EntityActions.GetEntitiesSuccess)
], PhotoEntitiesState.prototype, "getEntitiesSuccess", null);
PhotoEntitiesState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'photos',
        defaults: {},
    })
], PhotoEntitiesState);



/***/ }),

/***/ 6933:
/*!***********************************************************************!*\
  !*** ./src/app/core/ngxs-store/state/entities/user-entities.state.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEntitiesState": () => (/* binding */ UserEntitiesState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/user.actions */ 2481);
/* harmony import */ var _normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../normalizr/schemas/user-schema */ 151);
/* harmony import */ var _actions_entity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/entity.actions */ 7056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ 5384);









let UserEntitiesState = class UserEntitiesState {
    constructor(api) {
        this.api = api;
    }
    getUsers(ctx, action) {
        return this.api.getUsers(action.pageRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            const normalizedData = (0,normalizr__WEBPACK_IMPORTED_MODULE_6__.normalize)(result, _normalizr_schemas_user_schema__WEBPACK_IMPORTED_MODULE_2__.userListSchema);
            ctx.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.GetUsersSuccess(normalizedData));
        }));
    }
    getEntitiesSuccess(ctx, action) {
        if (action.entities['users']) {
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), action.entities['users']));
        }
    }
};
UserEntitiesState.ɵfac = function UserEntitiesState_Factory(t) { return new (t || UserEntitiesState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService)); };
UserEntitiesState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UserEntitiesState, factory: UserEntitiesState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.GetUsers)
], UserEntitiesState.prototype, "getUsers", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_entity_actions__WEBPACK_IMPORTED_MODULE_3__.EntityActions.GetEntitiesSuccess)
], UserEntitiesState.prototype, "getEntitiesSuccess", null);
UserEntitiesState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'users',
        defaults: {},
    })
], UserEntitiesState);



/***/ }),

/***/ 3349:
/*!********************************************************!*\
  !*** ./src/app/core/normalizr/schemas/album-schema.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "albumListSchema": () => (/* binding */ albumListSchema),
/* harmony export */   "albumSchema": () => (/* binding */ albumSchema)
/* harmony export */ });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-schema */ 151);


const albumSchema = new normalizr__WEBPACK_IMPORTED_MODULE_1__.schema.Entity('albums', {
    user: _user_schema__WEBPACK_IMPORTED_MODULE_0__.userSchema,
});
const albumListSchema = {
    items: [albumSchema],
};


/***/ }),

/***/ 6462:
/*!********************************************************!*\
  !*** ./src/app/core/normalizr/schemas/photo-schema.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoListSchema": () => (/* binding */ photoListSchema),
/* harmony export */   "photoSchema": () => (/* binding */ photoSchema)
/* harmony export */ });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _album_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-schema */ 3349);


const photoSchema = new normalizr__WEBPACK_IMPORTED_MODULE_1__.schema.Entity('photos', {
    album: _album_schema__WEBPACK_IMPORTED_MODULE_0__.albumSchema,
});
const photoListSchema = {
    items: [photoSchema],
};


/***/ }),

/***/ 5503:
/*!*******************************************************!*\
  !*** ./src/app/core/normalizr/schemas/post-schema.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postListSchema": () => (/* binding */ postListSchema),
/* harmony export */   "postSchema": () => (/* binding */ postSchema)
/* harmony export */ });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalizr */ 4009);
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-schema */ 151);


const postSchema = new normalizr__WEBPACK_IMPORTED_MODULE_1__.schema.Entity('posts', {
    user: _user_schema__WEBPACK_IMPORTED_MODULE_0__.userSchema,
});
const postListSchema = {
    items: [postSchema],
};


/***/ }),

/***/ 151:
/*!*******************************************************!*\
  !*** ./src/app/core/normalizr/schemas/user-schema.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userListSchema": () => (/* binding */ userListSchema),
/* harmony export */   "userSchema": () => (/* binding */ userSchema)
/* harmony export */ });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ 4009);

const userSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__.schema.Entity('users');
const userListSchema = {
    items: [userSchema],
};


/***/ }),

/***/ 5384:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/prepare-data */ 8989);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/url */ 6841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);





class ApiService {
    constructor(http) {
        this.http = http;
    }
    getPosts(pageRequest) {
        return this.http
            .get('https://jsonplaceholder.typicode.com/posts?' + (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.pageRequestToString)(pageRequest), {
            observe: 'response',
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                pageRequest,
                totalCount: Number(response.headers.get('x-total-count')),
                items: response.body.map(_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.preparePost),
            };
        }));
    }
    getSinglePost(id) {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((post) => (0,_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.preparePost)(post)));
    }
    getUsers(pageRequest) {
        return this.http
            .get('https://jsonplaceholder.typicode.com/users' + (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.pageRequestToString)(pageRequest), {
            observe: 'response',
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                pageRequest,
                totalCount: Number(response.headers.get('x-total-count')),
                items: response.body,
            };
        }));
    }
    getUser(userId) {
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
    getAlbums(pageRequest) {
        return this.http
            .get('https://jsonplaceholder.typicode.com/albums?' + (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.pageRequestToString)(pageRequest), {
            observe: 'response',
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                pageRequest,
                totalCount: Number(response.headers.get('x-total-count')),
                items: response.body.map(_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.prepareAlbum),
            };
        }));
    }
    getSingleAlbum(id) {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((post) => (0,_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.prepareAlbum)(post)));
    }
    getPhotos(pageRequest) {
        return this.http
            .get('https://jsonplaceholder.typicode.com/photos?' + (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.pageRequestToString)(pageRequest), {
            observe: 'response',
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return {
                pageRequest,
                totalCount: Number(response.headers.get('x-total-count')),
                items: response.body.map(_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.preparePhoto),
            };
        }));
    }
    getSinglePhoto(id) {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((post) => (0,_utils_prepare_data__WEBPACK_IMPORTED_MODULE_0__.preparePhoto)(post)));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8989:
/*!********************************************!*\
  !*** ./src/app/core/utils/prepare-data.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareAlbum": () => (/* binding */ prepareAlbum),
/* harmony export */   "preparePhoto": () => (/* binding */ preparePhoto),
/* harmony export */   "preparePost": () => (/* binding */ preparePost)
/* harmony export */ });
// функции немного меняют формат данных, которые приходят с бэка. Например переименовывают userId в user.
// Это нужно для нашего механизма нормализации. После денормализации в этом свойстве будет объект User
const preparePost = (post) => {
    post.user = post.userId;
    delete post.userId;
    return post;
};
const prepareAlbum = (album) => {
    album.user = album.userId;
    delete album.userId;
    return album;
};
const preparePhoto = (photo) => {
    photo.album = photo.albumId;
    delete photo.albumId;
    return photo;
};


/***/ }),

/***/ 6841:
/*!***********************************!*\
  !*** ./src/app/core/utils/url.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryParamsForPageRequest": () => (/* binding */ buildQueryParamsForPageRequest),
/* harmony export */   "pageRequestToString": () => (/* binding */ pageRequestToString)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

/**
 * Формирует объект запроса списка элементов из бэкэнд сервиса jsonplaceholder typicode
 * @param pageRequest
 */
const buildQueryParamsForPageRequest = (pageRequest) => {
    const queryParams = {};
    if (pageRequest.page) {
        queryParams['_page'] = pageRequest.page.number;
        queryParams['_limit'] = pageRequest.page.size;
    }
    if (pageRequest.sort) {
        queryParams['_sort'] = pageRequest.sort.field;
        queryParams['_order'] = pageRequest.sort.direction;
    }
    if (pageRequest.filter) {
        pageRequest.filter.forEach((filterItem) => {
            if (!queryParams[filterItem.field])
                queryParams[filterItem.field] = [];
            queryParams[filterItem.field].push(filterItem.value);
        });
    }
    return queryParams;
};
/**
 * Формирует строку запроса списка элементов из бэкэнд сервиса jsonplaceholder typicode
 * @param pageRequest
 */
const pageRequestToString = (pageRequest) => {
    const queryParams = buildQueryParamsForPageRequest(pageRequest);
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: queryParams });
    return httpParams.toString();
};


/***/ }),

/***/ 5712:
/*!*******************************************************************!*\
  !*** ./src/app/layout/content-layout/content-layout.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/nav.component */ 6017);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class ContentLayoutComponent {
}
ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(); };
ContentLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], decls: 7, vars: 0, consts: [[1, "d-flex"], [1, "left-col", "p-3", "min-vh-100"], [1, "h5"], [1, "col"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".left-col[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY29udGVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb2wge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6017:
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return { exact: true }; };
class NavComponent {
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 9, vars: 6, consts: [[1, "nav", "nav-pills", "flex-column"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "photos");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ngneat_elf_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/elf-devtools */ 8651);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .then((moduleRef) => {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0,_ngneat_elf_devtools__WEBPACK_IMPORTED_MODULE_4__.devTools)({
            name: 'Elf demo',
            postTimelineUpdate: () => moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef).tick(),
        });
    }
})
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map