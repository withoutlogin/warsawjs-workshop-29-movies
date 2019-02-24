(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-movie-page-module"],{

/***/ "./src/app/movie/components/@init/movie-list-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/movie/components/@init/movie-list-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  movie-list-page works!\n</p>\n\n<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<ul *ngIf=\"!loading\">\n  <li *ngFor=\"let movie of movies\">\n    movie: <a [routerLink]=\"['./', movie.id]\"> \"{{ movie.title }} </a>\n  </li>\n</ul>\n"

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



var MovieListPageComponent = /** @class */ (function () {
    function MovieListPageComponent(movieService) {
        this.page = 1;
        this.perPage = 4;
        this.loading = false;
        this.movieService = movieService;
    }
    MovieListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.movieService.getLastMovies(this.perPage, (this.page - 1) * this.perPage).then(function (data) {
            _this.movies = data;
            _this.loading = false;
        });
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

module.exports = "<h1>Detale</h1>\n<app-movie-details [movie]=\"movie\"></app-movie-details>\n"

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
        return this.movieService.getMovie(parseInt(route.params.id, 10));
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

module.exports = "<div class=\"movie_details--wrapper\">\n  hej ho\n  <h2>{{ title }}</h2>\n</div>\n"

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
    //
    // get title() {
    //   return this.movie.title;
    // }
    // /**/ description: string;
    //  imageSrc: string;
    function MovieDetailsComponent() {
        // this.description = movie.description;
        // this.imageSrc = movie.posterSrc;
    }
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




var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.data = http.get('http://vps135320.ovh.net:1234/list/');
        // this.data = [
        //   { id: 1, title: 'Matrix Reloaded', description: 'Matrix Reloaded Description'},
        //   { id: 2, title: 'Matrix 2', description: 'Matrix 2 Description'},
        //   { id: 3, title: 'Matrix Impossibru', description: 'Matrix Impossibru Description'},
        //   { id: 4, title: 'Kot w Butach', description: 'Kot w Butach Description'},
        //   { id: 5, title: '13 dzielnica', description: '13 dzielnica Description'},
        // ];
    }
    MovieService_1 = MovieService;
    MovieService.map = function (obj) {
        return new _models_movie_model__WEBPACK_IMPORTED_MODULE_3__["MovieModel"](obj.id, obj.title, "Rating: " + obj.rating, obj.posterSrc);
    };
    MovieService.prototype.getLastMovies = function (limit, offset) {
        if (limit === void 0) { limit = 3; }
        if (offset === void 0) { offset = 0; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data.slice(offset, limit).map(function (obj) { return MovieService_1.map(obj); }) : []];
                }
            });
        });
    };
    MovieService.prototype.getMovie = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            obj = data.find(function (m) { return m.id === id; });
                            if (obj) {
                                return [2 /*return*/, MovieService_1.map(obj)];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
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