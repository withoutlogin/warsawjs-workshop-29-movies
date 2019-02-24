(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-movie-page-module"],{

/***/ "./src/app/movie/components/@init/movie-list-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/movie/components/@init/movie-list-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n\n<ul *ngIf=\"!loading\">\n  <li *ngFor=\"let movie of movies\">\n    movie: <a [routerLink]=\"['./', movie.id]\"> \"{{ movie.title }} </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/movie/components/@init/movie-list-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/movie/components/@init/movie-list-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvQGluaXQvbW92aWUtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/movie/components/@init/movie-list-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/movie/components/@init/movie-list-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageComponent", function() { return MovieListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-module/movie.service */ "./src/app/shared-module/movie.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var MovieListPageComponent = /** @class */ (function () {
    function MovieListPageComponent(movieService) {
        this.page = 1;
        this.loading = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.movieService = movieService;
    }
    MovieListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.subs.add(this.movieService.fetchList(this.page).subscribe(function (data) {
            _this.movies = data;
            _this.loading = false;
        }));
    };
    MovieListPageComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    MovieListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-page',
            template: __webpack_require__(/*! ./movie-list-page.component.html */ "./src/app/movie/components/@init/movie-list-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-page.component.scss */ "./src/app/movie/components/@init/movie-list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_module_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieListPageComponent);
    return MovieListPageComponent;
}());



/***/ }),

/***/ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movie-details [movie]=\"movie\"></app-movie-details>\n"

/***/ }),

/***/ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvbW92aWUtbGlzdC1kZXRhaWxzLXBhZ2UvbW92aWUtbGlzdC1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MovieListDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListDetailsPageComponent", function() { return MovieListDetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MovieListDetailsPageComponent = /** @class */ (function () {
    function MovieListDetailsPageComponent(route) {
        this.route = route;
    }
    MovieListDetailsPageComponent.prototype.ngOnInit = function () {
        this.movie = this.route.snapshot.data.movie;
        console.log('movie is', this.movie);
    };
    MovieListDetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-details-page',
            template: __webpack_require__(/*! ./movie-list-details-page.component.html */ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-details-page.component.scss */ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieListDetailsPageComponent);
    return MovieListDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/movie/components/movie-list-item/movie-list-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-item/movie-list-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  movie-list-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/movie/components/movie-list-item/movie-list-item.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-item/movie-list-item.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL2NvbXBvbmVudHMvbW92aWUtbGlzdC1pdGVtL21vdmllLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/movie/components/movie-list-item/movie-list-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/movie/components/movie-list-item/movie-list-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MovieListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListItemComponent", function() { return MovieListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListItemComponent = /** @class */ (function () {
    function MovieListItemComponent() {
    }
    MovieListItemComponent.prototype.ngOnInit = function () {
    };
    MovieListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-item',
            template: __webpack_require__(/*! ./movie-list-item.component.html */ "./src/app/movie/components/movie-list-item/movie-list-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-item.component.scss */ "./src/app/movie/components/movie-list-item/movie-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieListItemComponent);
    return MovieListItemComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie-page-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/movie/movie-page-routing.module.ts ***!
  \****************************************************/
/*! exports provided: MoviePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePageRoutingModule", function() { return MoviePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/movie/components/@init/movie-list-page.component.ts");
/* harmony import */ var _components_movie_list_details_page_movie_list_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-list-details-page/movie-list-details-page.component */ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.ts");
/* harmony import */ var _movie_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie.resolver */ "./src/app/movie/movie.resolver.ts");






var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"],
    },
    {
        path: ':id',
        component: _components_movie_list_details_page_movie_list_details_page_component__WEBPACK_IMPORTED_MODULE_4__["MovieListDetailsPageComponent"],
        resolve: {
            movie: _movie_resolver__WEBPACK_IMPORTED_MODULE_5__["MovieResolver"]
        },
    }
];
var MoviePageRoutingModule = /** @class */ (function () {
    function MoviePageRoutingModule() {
    }
    MoviePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: []
        })
    ], MoviePageRoutingModule);
    return MoviePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/movie/movie-page.module.ts":
/*!********************************************!*\
  !*** ./src/app/movie/movie-page.module.ts ***!
  \********************************************/
/*! exports provided: MoviePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePageModule", function() { return MoviePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-page-routing.module */ "./src/app/movie/movie-page-routing.module.ts");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/movie/components/@init/movie-list-page.component.ts");
/* harmony import */ var _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-list-item/movie-list-item.component */ "./src/app/movie/components/movie-list-item/movie-list-item.component.ts");
/* harmony import */ var _components_movie_list_details_page_movie_list_details_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movie-list-details-page/movie-list-details-page.component */ "./src/app/movie/components/movie-list-details-page/movie-list-details-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie.resolver */ "./src/app/movie/movie.resolver.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");











var MoviePageModule = /** @class */ (function () {
    function MoviePageModule() {
    }
    MoviePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"],
                _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_4__["MovieListItemComponent"],
                _components_movie_list_details_page_movie_list_details_page_component__WEBPACK_IMPORTED_MODULE_5__["MovieListDetailsPageComponent"]
            ],
            imports: [
                _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoviePageRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_10__["SharedModuleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ],
            providers: [
                _movie_resolver__WEBPACK_IMPORTED_MODULE_8__["MovieResolver"]
            ]
        })
    ], MoviePageModule);
    return MoviePageModule;
}());



/***/ }),

/***/ "./src/app/movie/movie.resolver.ts":
/*!*****************************************!*\
  !*** ./src/app/movie/movie.resolver.ts ***!
  \*****************************************/
/*! exports provided: MovieResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieResolver", function() { return MovieResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-module/movie.service */ "./src/app/shared-module/movie.service.ts");



var MovieResolver = /** @class */ (function () {
    function MovieResolver(movieService) {
        this.movieService = movieService;
        console.log('test');
    }
    MovieResolver.prototype.resolve = function (route, state) {
        return this.movieService.fetchMovie(parseInt(route.params.id, 10));
    };
    MovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_module_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieResolver);
    return MovieResolver;
}());



/***/ }),

/***/ "./src/app/shared-module/components/movie-details/movie-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-module/components/movie-details/movie-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie_details--wrapper\">\n  <h2>{{ title }}</h2>\n  <p>{{ description }}</p>\n  <img [src]=\"imageSrc\" [alt]=\"title\" style=\"width: 400px\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/shared-module/components/movie-details/movie-details.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-module/components/movie-details/movie-details.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared-module/components/movie-details/movie-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-module/components/movie-details/movie-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/movie-model */ "./src/app/shared-module/models/movie-model.ts");



var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent() {
    }
    Object.defineProperty(MovieDetailsComponent.prototype, "title", {
        //
        get: function () {
            return this.movie.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieDetailsComponent.prototype, "description", {
        get: function () {
            return this.movie.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieDetailsComponent.prototype, "imageSrc", {
        get: function () {
            return this.movie.posterSrc;
        },
        enumerable: true,
        configurable: true
    });
    MovieDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_movie_model__WEBPACK_IMPORTED_MODULE_2__["MovieModel"])
    ], MovieDetailsComponent.prototype, "movie", void 0);
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/shared-module/components/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/shared-module/components/movie-details/movie-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared-module/models/movie-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared-module/models/movie-model.ts ***!
  \*****************************************************/
/*! exports provided: MovieModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModel", function() { return MovieModel; });
var MovieModel = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function MovieModel(_id, _title, _description, _posterSrc) {
        this._id = _id;
        this._title = _title;
        this._description = _description;
        this._posterSrc = _posterSrc;
    }
    Object.defineProperty(MovieModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieModel.prototype, "posterSrc", {
        get: function () {
            return this._posterSrc;
        },
        enumerable: true,
        configurable: true
    });
    return MovieModel;
}());



/***/ }),

/***/ "./src/app/shared-module/movie.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared-module/movie.service.ts ***!
  \************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/movie-model */ "./src/app/shared-module/models/movie-model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var API_URL = 'http://vps135320.ovh.net:1234';
var API_METHODS = {
    fetchList: API_URL + "/list/:page",
    fetchMovie: API_URL + "/movie/:id"
};
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService_1 = MovieService;
    MovieService.map = function (obj) {
        return new _models_movie_model__WEBPACK_IMPORTED_MODULE_3__["MovieModel"](+obj.id, obj.title, "Rating: " + obj.rating, obj.posterSrc);
    };
    MovieService.mapList = function (obs) {
        return obs.map(function (obj) { return new _models_movie_model__WEBPACK_IMPORTED_MODULE_3__["MovieModel"](+obj.id, obj.title, "Rating: " + obj.rating, obj.posterSrc); });
    };
    // public getMovies$(): Observable<MovieModel[]> {
    //   return this.dataSubject.asObservable();
    // }
    //
    // private fetchMovies() {
    //   (this.http.get('http://vps135320.ovh.net:1234/list/') as Observable<RemoteMovieData[]>)
    //     .pipe(map(MovieService.mapList))
    //     .subscribe((res: MovieModel[]) => {
    //       this.dataSubject.next(res);
    //     });
    // }
    //
    // public getMovies(): Observable<MovieModel[]> {
    //   const movies = this.dataSubject.getValue();
    //
    // }
    //
    // public async getMovie(id: number): Promise<MovieModel> {
    //   const obs = new Observable();
    //   const movies = this.dataSubject.subscribe(movies => {
    //     const movie = movies.find(m => m.id === id);
    //     obs.
    //   });
    //   return movies
    // }
    MovieService.prototype.fetchList = function (page) {
        if (page === void 0) { page = 1; }
        return this.makeRequest(API_METHODS.fetchList, {
            page: page
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(MovieService_1.mapList));
    };
    MovieService.prototype.fetchMovie = function (id) {
        return this.makeRequest(API_METHODS.fetchMovie, {
            id: id
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(MovieService_1.map));
    };
    MovieService.prototype.makeRequest = function (url, params) {
        if (params === void 0) { params = {}; }
        Object.entries(params)
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            url = url.replace(":" + key, value);
        });
        return this.http.get(url);
    };
    var MovieService_1;
    MovieService = MovieService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/shared-module/shared-module.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared-module/shared-module.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleModule", function() { return SharedModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "./src/app/shared-module/components/movie-details/movie-details.component.ts");




var SharedModuleModule = /** @class */ (function () {
    function SharedModuleModule() {
    }
    SharedModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"]]
        })
    ], SharedModuleModule);
    return SharedModuleModule;
}());



/***/ })

}]);
//# sourceMappingURL=movie-movie-page-module.js.map