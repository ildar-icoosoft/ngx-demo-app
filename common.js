"use strict";
(self["webpackChunkngx_demo_app"] = self["webpackChunkngx_demo_app"] || []).push([["common"],{

/***/ 8198:
/*!************************************************************************!*\
  !*** ./src/app/core/ngrx-store/selectors/current-actions.selectors.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCurrentActionsState": () => (/* binding */ selectCurrentActionsState),
/* harmony export */   "selectIsActionInProcess": () => (/* binding */ selectIsActionInProcess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _reducers_current_actions_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/current-actions.reducer */ 3377);


const selectCurrentActionsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_reducers_current_actions_reducer__WEBPACK_IMPORTED_MODULE_0__.currentActionsFeatureKey);
const selectIsActionInProcess = (actionType) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectCurrentActionsState, (state) => {
    return state.includes(actionType);
});


/***/ }),

/***/ 2257:
/*!*****************************************************************!*\
  !*** ./src/app/core/ngrx-store/selectors/entities.selectors.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _reducers_entities_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/entities.reducer */ 5597);


const selectEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_reducers_entities_reducer__WEBPACK_IMPORTED_MODULE_0__.entitiesFeatureKey);


/***/ }),

/***/ 236:
/*!**********************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/akita-state/photo-list-albums.store.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoListAlbumsStore": () => (/* binding */ PhotoListAlbumsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



let PhotoListAlbumsStore = class PhotoListAlbumsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.EntityStore {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }
};
PhotoListAlbumsStore.ɵfac = function PhotoListAlbumsStore_Factory(t) { return new (t || PhotoListAlbumsStore)(); };
PhotoListAlbumsStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoListAlbumsStore, factory: PhotoListAlbumsStore.ɵfac, providedIn: 'root' });
PhotoListAlbumsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'photo-list-albums' })
], PhotoListAlbumsStore);



/***/ }),

/***/ 445:
/*!***************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/akita-state/photo-list.query.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoListQuery": () => (/* binding */ PhotoListQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _photo_list_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-list.store */ 1117);



class PhotoListQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.QueryEntity {
    constructor(store) {
        super(store);
        this.store = store;
    }
    isLastPage() {
        return this.select((state) => {
            return state.totalCount === state.ids.length;
        });
    }
}
PhotoListQuery.ɵfac = function PhotoListQuery_Factory(t) { return new (t || PhotoListQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_photo_list_store__WEBPACK_IMPORTED_MODULE_1__.PhotoListStore)); };
PhotoListQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PhotoListQuery, factory: PhotoListQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8490:
/*!*****************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/akita-state/photo-list.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoListService": () => (/* binding */ PhotoListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _photo_list_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-list.store */ 1117);
/* harmony import */ var _photo_list_albums_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-list-albums.store */ 236);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/api.service */ 5384);




class PhotoListService {
    constructor(photoStore, albumsStore, apiService) {
        this.photoStore = photoStore;
        this.albumsStore = albumsStore;
        this.apiService = apiService;
    }
    getPhotos(pageRequest) {
        this.photoStore.setLoading(true);
        this.apiService.getPhotos(pageRequest).subscribe({
            next: (pageResult) => {
                this.photoStore.setLoading(false);
                this.photoStore.updateList(pageResult);
            },
            error: () => {
                this.photoStore.setLoading(false);
            },
        });
    }
    getNextPhotos() {
        const state = this.photoStore.getValue();
        const currentPageRequest = state.pageRequest;
        this.getPhotos(Object.assign(Object.assign({}, currentPageRequest), { page: {
                number: currentPageRequest.page.number + 1,
                size: currentPageRequest.page.size,
            } }));
    }
    getAlbums(pageRequest) {
        this.apiService.getAlbums(pageRequest).subscribe((pageResult) => {
            this.albumsStore.set(pageResult.items);
        });
    }
    updateFilter(filter) {
        const state = this.photoStore.getValue();
        const currentPageRequest = state.pageRequest;
        this.getPhotos(Object.assign(Object.assign({}, currentPageRequest), { page: {
                number: 1,
                size: currentPageRequest.page.size,
            }, filter }));
    }
}
PhotoListService.ɵfac = function PhotoListService_Factory(t) { return new (t || PhotoListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_photo_list_store__WEBPACK_IMPORTED_MODULE_0__.PhotoListStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_photo_list_albums_store__WEBPACK_IMPORTED_MODULE_1__.PhotoListAlbumsStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
PhotoListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PhotoListService, factory: PhotoListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1117:
/*!***************************************************************************!*\
  !*** ./src/app/features/photo/photo-list/akita-state/photo-list.store.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoListStore": () => (/* binding */ PhotoListStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const initialState = {
    totalCount: 0,
    pageRequest: {},
};
let PhotoListStore = class PhotoListStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.EntityStore {
    constructor() {
        super(initialState);
    }
    updateList(pageResult) {
        var _a;
        const { items, totalCount, pageRequest } = pageResult;
        if (((_a = pageResult.pageRequest.page) === null || _a === void 0 ? void 0 : _a.number) === 1) {
            this.set(items);
        }
        else {
            this.add(items);
        }
        this.update({
            totalCount,
            pageRequest,
        });
    }
};
PhotoListStore.ɵfac = function PhotoListStore_Factory(t) { return new (t || PhotoListStore)(); };
PhotoListStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoListStore, factory: PhotoListStore.ɵfac, providedIn: 'root' });
PhotoListStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'photo-list' })
], PhotoListStore);



/***/ })

}]);
//# sourceMappingURL=common.js.map