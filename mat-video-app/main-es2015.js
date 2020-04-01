(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/mat-video/fesm2015/mat-video.js":
/*!**********************************************!*\
  !*** ./dist/mat-video/fesm2015/mat-video.js ***!
  \**********************************************/
/*! exports provided: MatVideoModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoModule", function() { return MatVideoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SecondsToTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MatVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MatSliderProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MatPlayButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MatVolumeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return MatDownloadButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return MatFullscreenButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FullscreenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MatTimeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return MatQualityControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return MatVideoSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return MatSeekProgressControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return MatVideoSourceDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return MatVideoTrackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MatFrameByFrameControlComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventService {
    constructor() { }
    /**
     * @param {?} renderer
     * @param {?} events
     * @return {?}
     */
    addEvents(renderer, events) {
        for (const event of events) {
            event.dispose = renderer.listen(event.element, event.name, (/**
             * @param {?} newEvent
             * @return {?}
             */
            newEvent => event.callback(newEvent)));
        }
    }
    /**
     * @param {?} events
     * @return {?}
     */
    removeEvents(events) {
        for (const event of events) {
            if (event.dispose) {
                event.dispose();
            }
        }
    }
}
EventService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
EventService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.src = null;
        this.title = null;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.fullscreen = true;
        this.showFrameByFrame = false;
        this.fps = 29.97;
        this.download = false;
        this.color = "primary";
        this.spinner = "spin";
        this.poster = null;
        this.keyboard = true;
        this.overlay = null;
        this.muted = false;
        this.mutedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playing = false;
        this.isFullscreen = false;
        this.videoLoaded = false;
        this.isMouseMoving = false;
        this.isMouseMovingTimeout = 2000;
    }
    /**
     * @return {?}
     */
    get time() {
        return this.getVideoTag().currentTime;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set time(val) {
        /** @type {?} */
        const video = this.getVideoTag();
        if (video && val) {
            if (val > video.duration) {
                val = video.duration;
            }
            if (val < 0) {
                val = 0;
            }
            if (val !== video.currentTime) {
                video.currentTime = val;
            }
            if (this.lastTime !== video.currentTime) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.timeChange.emit(video.currentTime)), 0);
                this.lastTime = video.currentTime;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            {
                element: this.video.nativeElement,
                name: "loadstart",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoLoaded = false)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "loadedmetadata",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evLoadedMetadata(event)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "error",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => console.error("Unhandled Video Error", event)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "contextmenu",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => event.preventDefault()),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "timeupdate",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evTimeUpdate(event)),
                dispose: null
            },
            {
                element: this.player.nativeElement,
                name: "mousemove",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evMouseMove(event)),
                dispose: null
            }
        ];
        this.video.nativeElement.onloadeddata = (/**
         * @return {?}
         */
        () => (this.videoLoaded = true));
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
    /**
     * @return {?}
     */
    load() {
        if (this.video && this.video.nativeElement) {
            this.video.nativeElement.load();
        }
    }
    /**
     * @return {?}
     */
    getVideoTag() {
        return this.video && this.video.nativeElement ? ((/** @type {?} */ (this.video.nativeElement))) : null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evLoadedMetadata(event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evMouseMove(event) {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.isMouseMoving = false;
        }), this.isMouseMovingTimeout);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evTimeUpdate(event) {
        this.time = this.getVideoTag().currentTime;
    }
    /**
     * @param {?} activeClass
     * @param {?} inactiveClass
     * @return {?}
     */
    getOverlayClass(activeClass, inactiveClass) {
        if (this.overlay === null) {
            return !this.playing || this.isMouseMoving ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    }
}
MatVideoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-video",
                template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.src]=\"src ? src : null\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")}::ng-deep.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"]
            }] }
];
/** @nocollapse */
MatVideoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatVideoComponent.propDecorators = {
    player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["player", { static: false },] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["video", { static: false },] }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showFrameByFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    download: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    poster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    muted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mutedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    timeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoSourceDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoSourceDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[matVideoSource]"
            },] }
];
/** @nocollapse */
MatVideoSourceDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MatVideoSourceDirective.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoTrackDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoTrackDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[matVideoTrack]"
            },] }
];
/** @nocollapse */
MatVideoTrackDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MatVideoTrackDirective.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    kind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    srclang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique IDs for progress bars.
 * @type {?}
 */
let sliderprogressbarId = 0;
class MatSliderProgressBarComponent extends _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"] {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} changeDetectorRef
     * @param {?} dir
     * @param {?} tabIndex
     */
    constructor(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.mode = "buffer";
        this.value = 0;
        this.pBufferValue = 0;
        /**
         * The id of the progress bar.
         */
        this.sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;
        this.tabIndex = parseInt(tabIndex, 10) || 0;
    }
    /**
     * Buffer value of the progress bar. Defaults to zero.
     * @return {?}
     */
    get bufferValue() {
        return this.pBufferValue;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set bufferValue(v) {
        this.pBufferValue = clamp(v || 0);
    }
    /**
     * CSS styles for the track fill element.
     * @return {?}
     */
    get _trackBufferStyles() {
        if (this.mode === "buffer") {
            /** @type {?} */
            const axis = this.vertical ? "Y" : "X";
            return {
                transform: `translate${axis}(0px) scale${axis}(${this.pBufferValue / 100})`
            };
        }
    }
}
MatSliderProgressBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-slider-progress-bar",
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n      <defs>\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n        </pattern>\n      </defs>\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n    </svg>\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
                providers: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MAT_SLIDER_VALUE_ACCESSOR"]],
                host: {
                    "(focus)": "_onFocus()",
                    "(blur)": "_onBlur()",
                    "(click)": 'this["_onClick"] ? this["_onClick"]($event) : null',
                    // Angular 5/6 support
                    "(mousedown)": 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
                    // Angular 7 support
                    "(keydown)": "_onKeydown($event)",
                    "(keyup)": "_onKeyup()",
                    "(mouseenter)": "_onMouseenter()",
                    "(slide)": "_onSlide($event)",
                    "(slideend)": "_onSlideEnd()",
                    "(slidestart)": "_onSlideStart($event)",
                    class: "mat-slider",
                    role: "slider",
                    "[tabIndex]": "tabIndex",
                    "[attr.aria-disabled]": "disabled",
                    "[attr.aria-valuemax]": "max",
                    "[attr.aria-valuemin]": "min",
                    "[attr.aria-valuenow]": "value",
                    "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
                    "[class.mat-slider-disabled]": "disabled",
                    "[class.mat-slider-has-ticks]": "tickInterval",
                    "[class.mat-slider-horizontal]": "!vertical",
                    "[class.mat-slider-axis-inverted]": "_invertAxis",
                    "[class.mat-slider-sliding]": "_isSliding",
                    "[class.mat-slider-thumb-label-showing]": "thumbLabel",
                    "[class.mat-slider-vertical]": "vertical",
                    "[class.mat-slider-min-value]": "_isMinValue",
                    "[class.mat-slider-hide-last-tick]": "disabled || _isMinValue && _thumbGap && _invertAxis"
                },
                inputs: ["disabled", "color", "tabIndex"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
            }] }
];
/** @nocollapse */
MatSliderProgressBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ["tabindex",] }] }
];
MatSliderProgressBarComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SecondsToTimePipe {
    constructor() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600
        };
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    transform(seconds) {
        if (!seconds) {
            return "0:00";
        }
        else {
            /** @type {?} */
            let timeString = "";
            for (const key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    timeString += Math.floor(seconds / this.times[key]).toString() + ":";
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            timeString += Math.floor(seconds / 60).toString() + ":";
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10) {
                timeString += "0";
            }
            timeString += Math.floor(seconds).toString();
            return timeString;
        }
    }
}
SecondsToTimePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: "secondsToTime"
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullscreenService {
    constructor() {
        this.fnMap = [
            // Object keys
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Mozilla
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            // MS
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        this.keyboardAllowed = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;
        /** @type {?} */
        const ret = {};
        /** @type {?} */
        let val;
        for (let i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    request(elem) {
        /** @type {?} */
        const request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? ((/** @type {?} */ (Element))).ALLOW_KEYBOARD_INPUT : {});
        }
    }
    /**
     * @return {?}
     */
    exit() {
        document[this.fn.exitFullscreen]();
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    toggle(elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onChange(callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onError(callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    }
    /**
     * @return {?}
     */
    isFullscreen() {
        return Boolean(document[this.fn.fullscreenElement]);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    }
    /**
     * @return {?}
     */
    getElement() {
        return document[this.fn.fullscreenElement];
    }
}
FullscreenService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
FullscreenService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDownloadButtonComponent {
    constructor() { }
}
MatDownloadButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-download-button",
                template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>\n",
                styles: ["a{color:inherit;text-decoration:none}"]
            }] }
];
/** @nocollapse */
MatDownloadButtonComponent.ctorParameters = () => [];
MatDownloadButtonComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFrameByFrameControlComponent {
    constructor() {
        this.fps = 29.97;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} nbFrames
     * @return {?}
     */
    seekFrames(nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        /** @type {?} */
        const currentFrames = this.video.currentTime * this.fps;
        /** @type {?} */
        const newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
        this.video.currentTime = newPos;
    }
}
MatFrameByFrameControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-frame-by-frame-control",
                template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n  <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n  <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatFrameByFrameControlComponent.ctorParameters = () => [];
MatFrameByFrameControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFullscreenButtonComponent {
    /**
     * @param {?} fscreen
     * @param {?} evt
     */
    constructor(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fscreen.isEnabled()) {
            this.canFullscreen = true;
        }
        this.fscreen.onChange((/**
         * @param {?} event
         * @return {?}
         */
        event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setFullscreen(value) {
        if (this.canFullscreen && this.fullscreen !== value) {
            this.toggleFullscreen();
        }
    }
    /**
     * @return {?}
     */
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    }
    /**
     * @return {?}
     */
    updateFullscreen() {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChangesFullscreen(value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFullscreenKey(event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    }
}
MatFullscreenButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-fullscreen-button",
                template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatFullscreenButtonComponent.ctorParameters = () => [
    { type: FullscreenService },
    { type: EventService }
];
MatFullscreenButtonComponent.propDecorators = {
    player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreenChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onFullscreenKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.f", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPlayButtonComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "play", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(true)), dispose: null },
            { element: this.video, name: "pause", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "durationchange", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "ended", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "click", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.toggleVideoPlayback()), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setVideoPlayback(value) {
        if (this.play !== value) {
            this.toggleVideoPlayback();
        }
    }
    /**
     * @return {?}
     */
    toggleVideoPlayback() {
        this.play = !this.play;
        this.updateVideoPlayback();
    }
    /**
     * @return {?}
     */
    updateVideoPlayback() {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPlayKey(event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    }
}
MatPlayButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-play-button",
                template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatPlayButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatPlayButtonComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    play: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    playChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onPlayKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.space", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatQualityControlComponent {
    constructor() { }
}
MatQualityControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-quality-control",
                template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">{{ video.videoHeight }}p</div>\n",
                styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
            }] }
];
/** @nocollapse */
MatQualityControlComponent.ctorParameters = () => [];
MatQualityControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatSeekProgressControlComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.curTimePercent = 0;
        this.bufTimePercent = 0;
        this.video = null;
        this.color = "primary";
        this.currentTime = 0;
        this.currentTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "seeking", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateCurrentTime(this.video.currentTime)), dispose: null },
            { element: this.video, name: "canplaythrough", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateBufferedTime()), dispose: null },
            { element: this.video, name: "timeupdate", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateCurrentTime(this.video.currentTime)), dispose: null },
            { element: this.video, name: "progress", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateBufferedTime()), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    seekVideo(value) {
        /** @type {?} */
        const percentage = value / 100;
        /** @type {?} */
        const newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    updateCurrentTime(time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    }
    /**
     * @return {?}
     */
    updateBufferedTime() {
        if (this.video.buffered.length > 0) {
            /** @type {?} */
            let largestBufferValue = 0;
            for (let i = 0; i < this.video.buffered.length; i++) {
                /** @type {?} */
                const cur = this.video.currentTime;
                /** @type {?} */
                const start = this.video.buffered.start(i);
                /** @type {?} */
                const end = this.video.buffered.end(i);
                if (start <= cur && end > cur && end - start > largestBufferValue) {
                    largestBufferValue = end;
                }
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    }
    /**
     * @param {?} emitter
     * @param {?} time
     * @return {?}
     */
    updateTime(emitter, time) {
        emitter.emit(time);
        return (time / this.video.duration) * 100;
    }
}
MatSeekProgressControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-seek-progress-control",
                template: "<mat-slider-progress-bar\n  [color]=\"color\"\n  mode=\"buffer\"\n  step=\"0.01\"\n  [value]=\"curTimePercent\"\n  [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"\n></mat-slider-progress-bar>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatSeekProgressControlComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatSeekProgressControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    bufferedTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bufferedTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTimeControlComponent {
    constructor() { }
}
MatTimeControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-time-control",
                template: "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\n",
                styles: [".playtime{display:inline;font-size:12px}"]
            }] }
];
/** @nocollapse */
MatTimeControlComponent.ctorParameters = () => [];
MatTimeControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoSpinnerComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.spinner = "spin";
        this.videoBuffering = false;
        this.videoLoaded = false;
        this.events = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "loadstart", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoLoaded = false)), dispose: null },
            { element: this.video, name: "loadedmetadata", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoLoaded = true)), dispose: null },
            { element: this.video, name: "canplay", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = false)), dispose: null },
            { element: this.video, name: "waiting", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = true)), dispose: null },
            { element: this.video, name: "durationchange", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = true)), dispose: null }
        ];
        this.video.onloadeddata = (/**
         * @return {?}
         */
        () => (this.videoLoaded = true));
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.video.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
}
MatVideoSpinnerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-video-spinner",
                template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>\n",
                styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
            }] }
];
/** @nocollapse */
MatVideoSpinnerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatVideoSpinnerComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVolumeControlComponent {
    /**
     * @param {?} evt
     */
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = "primary";
        this.volume = 1;
        this.volumeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pMuted = false;
        this.mutedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    get muted() {
        return this.pMuted;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set muted(v) {
        this.pMuted = v;
        this.video.muted = this.pMuted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0) {
            this.setMuted(false);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMuted(value) {
        if (this.muted !== value) {
            this.toggleMuted();
        }
    }
    /**
     * @return {?}
     */
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    /**
     * @return {?}
     */
    updateMuted() {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
}
MatVolumeControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "mat-volume-control",
                template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\"> </mat-slider>\n</div>\n",
                styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
            }] }
];
/** @nocollapse */
MatVolumeControlComponent.ctorParameters = () => [
    { type: EventService }
];
MatVolumeControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    volume: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    volumeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    muted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mutedChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onMuteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.m", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoModule {
}
MatVideoModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    SecondsToTimePipe,
                    MatVideoComponent,
                    MatSliderProgressBarComponent,
                    MatPlayButtonComponent,
                    MatVolumeControlComponent,
                    MatDownloadButtonComponent,
                    MatFullscreenButtonComponent,
                    MatTimeControlComponent,
                    MatQualityControlComponent,
                    MatVideoSpinnerComponent,
                    MatSeekProgressControlComponent,
                    MatVideoSourceDirective,
                    MatVideoTrackDirective,
                    MatFrameByFrameControlComponent
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]],
                exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
                providers: [FullscreenService, EventService]
            },] }
];


//# sourceMappingURL=mat-video.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"side\" class=\"sidenav\">\n    <mat-toolbar color=\"primary\">\n      <span class=\"title\">\n        Settings\n      </span>\n    </mat-toolbar>\n    <div class=\"content options\">\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"url\" [(ngModel)]=\"src\" placeholder=\"Source\" />\n        <mat-hint align=\"end\"\n          >Download button will only work for\n          <a href=\"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy\" target=\"_blank\">\n            same-origin URLs\n          </a>\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"url\" [(ngModel)]=\"poster\" placeholder=\"Poster\" />\n      </mat-form-field>\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"text\" [(ngModel)]=\"title\" placeholder=\"Title\" />\n      </mat-form-field>\n\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"text\" [(ngModel)]=\"currentTime\" placeholder=\"Current Time\" />\n      </mat-form-field>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Autoplay:</div>\n        <mat-slide-toggle [(ngModel)]=\"autoplay\" (change)=\"vid.load()\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Preload:</div>\n        <mat-slide-toggle [(ngModel)]=\"preload\" (change)=\"vid.load()\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Loop:</div>\n        <mat-slide-toggle [(ngModel)]=\"loop\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Muted:</div>\n        <mat-slide-toggle [(ngModel)]=\"muted\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Quality:</div>\n        <mat-slide-toggle [(ngModel)]=\"quality\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Download:</div>\n        <mat-slide-toggle [(ngModel)]=\"download\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Fullscreen:</div>\n        <mat-slide-toggle [(ngModel)]=\"fullscreen\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Frame-by-Frame:</div>\n        <mat-slide-toggle [(ngModel)]=\"showFrameByFrame\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Keyboard:</div>\n        <mat-slide-toggle [(ngModel)]=\"keyboard\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Overlay:</div>\n        <mat-radio-group [(ngModel)]=\"overlay\">\n          <mat-radio-button class=\"item-margin\" [value]=\"null\" [color]=\"color\">\n            Default\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" [value]=\"false\" [color]=\"color\">\n            Off\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" [value]=\"true\" [color]=\"color\">\n            On\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Color:</div>\n        <mat-radio-group [(ngModel)]=\"color\">\n          <mat-radio-button class=\"item-margin\" value=\"primary\" [color]=\"color\">\n            Primary\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"accent\" [color]=\"color\">\n            Accent\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"warn\" [color]=\"color\">\n            Warn\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Spinner:</div>\n        <mat-radio-group [(ngModel)]=\"spinner\">\n          <mat-radio-button class=\"item-margin\" value=\"spin\" [color]=\"color\">\n            Spin\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"dot\" [color]=\"color\">\n            Dot\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"split-ring\" [color]=\"color\">\n            Split Ring\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"hourglass\" [color]=\"color\">\n            Hourglass\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">CSS Examples:</div>\n        <mat-radio-group [(ngModel)]=\"ngclass\">\n          <mat-radio-button class=\"item-margin\" value=\"mat-video-responsive\" [color]=\"color\">\n            Responsive\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"mat-video-fixed\" [color]=\"color\">\n            Fixed\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </div>\n\n    <div class=\"mat-toolbar mat-primary mat-toolbar-single-row footer\">\n      <div class=\"badges\">\n        <a href=\"https://badge.fury.io/js/mat-video\" target=\"_blank\">\n          <img alt=\"npm version\" src=\"https://badge.fury.io/js/mat-video.svg\" />\n        </a>\n        <a href=\"https://travis-ci.org/nkoehler/mat-video\" target=\"_blank\">\n          <img alt=\"Build Status\" src=\"https://travis-ci.org/nkoehler/mat-video.svg?branch=master\" />\n        </a>\n        <a href=\"https://codeclimate.com/github/nkoehler/mat-video/\" target=\"_blank\">\n          <img alt=\"Maintainability\" src=\"https://api.codeclimate.com/v1/badges/46fb1a751d60d0f8b316/maintainability\" />\n        </a>\n      </div>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" matTooltip=\"Settings\">\n        <mat-icon>settings</mat-icon>\n      </button>\n\n      <span class=\"title\"> <span class=\"name\">mat-video</span> for Angular {{ version }} </span>\n\n      <a mat-icon-button href=\"https://github.com/nkoehler/mat-video\" class=\"github\" matTooltip=\"GitHub\">\n        <svg height=\"32\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\">\n          <path\n            fill-rule=\"evenodd\"\n            d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"\n          ></path>\n        </svg>\n      </a>\n    </mat-toolbar>\n\n    <div class=\"content video\">\n      <mat-video\n        #vid\n        [ngClass]=\"ngclass\"\n        [src]=\"src\"\n        [title]=\"title\"\n        [autoplay]=\"autoplay\"\n        [preload]=\"preload\"\n        [loop]=\"loop\"\n        [fullscreen]=\"fullscreen\"\n        [download]=\"download\"\n        [quality]=\"quality\"\n        [keyboard]=\"keyboard\"\n        [color]=\"color\"\n        [spinner]=\"spinner\"\n        [poster]=\"poster\"\n        [overlay]=\"overlay\"\n        [(muted)]=\"muted\"\n        [showFrameByFrame]=\"showFrameByFrame\"\n        [(time)]=\"currentTime\"\n      >\n      </mat-video>\n    </div>\n\n    <div class=\"mat-toolbar mat-primary mat-toolbar-single-row footer\">\n      <div class=\"version\">Version {{ appversion }}</div>\n      <div class=\"copyright\">\n        Nicholas Koehler\n        <mat-icon class=\"icon\">copyright</mat-icon> 2019\n      </div>\n      <div class=\"license\">\n        MIT License\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, license, scripts, private, repository, keywords, author, bugs, homepage, dependencies, devDependencies, husky, lint-staged, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"mat-video-app\",\"version\":\"2.7.2\",\"description\":\"mat-video is an Angular 5/6/7/8+ video player using Material\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"prettier\":\"prettier --write \\\"**/*.{scss,ts,component.html}\\\"\",\"start\":\"ng serve mat-video && ng build\",\"build\":\"ng build mat-video && ng build\",\"build:lib\":\"ng build mat-video && cp README.md CHANGELOG.md LICENSE ./dist/mat-video/\",\"test\":\"ng test mat-video --code-coverage\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"clean\":\"rm -rf dist\"},\"private\":false,\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/nkoehler/mat-video.git\"},\"keywords\":[\"angular\",\"material\",\"javascript\",\"angular 5\",\"angular 6\",\"angular 7\",\"angular 8\",\"video\",\"playback\",\"mp4\",\"mat\",\"mat-video\",\"material-video\",\"player\",\"html5\"],\"author\":\"Nicholas Koehler\",\"bugs\":{\"url\":\"https://github.com/nkoehler/mat-video/issues\"},\"homepage\":\"https://github.com/nkoehler/mat-video\",\"dependencies\":{\"@angular/animations\":\"8.2.2\",\"@angular/cdk\":\"8.1.3\",\"@angular/common\":\"8.2.2\",\"@angular/compiler\":\"8.2.2\",\"@angular/core\":\"8.2.2\",\"@angular/forms\":\"8.2.2\",\"@angular/material\":\"8.1.3\",\"@angular/platform-browser\":\"8.2.2\",\"@angular/platform-browser-dynamic\":\"8.2.2\",\"@angular/router\":\"8.2.2\",\"@schuchard/prettier\":\"3.1.0\",\"hammerjs\":\"2.0.8\",\"rxjs\":\"6.5.2\",\"tslib\":\"1.10.0\",\"zone.js\":\"0.10.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"0.802.2\",\"@angular-devkit/build-ng-packagr\":\"0.802.2\",\"@angular/cli\":\"8.2.2\",\"@angular/compiler-cli\":\"8.2.2\",\"@angular/language-service\":\"8.2.2\",\"@types/node\":\"12.7.2\",\"@types/jasmine\":\"3.4.0\",\"@types/jasminewd2\":\"2.0.6\",\"codelyzer\":\"5.1.0\",\"husky\":\"3.0.1\",\"jasmine-core\":\"3.4.0\",\"jasmine-spec-reporter\":\"4.2.1\",\"karma\":\"4.2.0\",\"karma-chrome-launcher\":\"3.1.0\",\"karma-coverage-istanbul-reporter\":\"2.1.0\",\"karma-jasmine\":\"2.0.1\",\"karma-jasmine-html-reporter\":\"1.4.2\",\"lint-staged\":\"9.2.1\",\"ng-packagr\":\"5.4.3\",\"prettier\":\"1.18.2\",\"protractor\":\"5.4.2\",\"ts-node\":\"8.3.0\",\"tsickle\":\"0.36.0\",\"tslint\":\"5.18.0\",\"tslint-config-prettier\":\"1.18.0\",\"typescript\":\"3.5.3\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.{scss,ts,component.html}\":[\"prettier --write\",\"git add\"]}}");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.content {\n  margin: 8px;\n}\n\n.video {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.mat-video-responsive {\n  width: 50%;\n}\n\n.mat-video-fixed {\n  width: 600px;\n}\n\n.sidenav-container {\n  height: 100vh;\n}\n\n.sidenav {\n  width: 500px;\n}\n\n.github {\n  fill: white;\n}\n\n.title {\n  font-weight: bold;\n  margin: auto;\n}\n\n.title .name {\n  font-style: italic;\n}\n\n.options {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 48px;\n  font-size: 12px;\n  z-index: 2;\n}\n\n.footer .badges {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 12px;\n}\n\n.footer .icon {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n.footer .version {\n  text-align: left;\n}\n\n.footer .copyright {\n  text-align: center;\n  margin: auto;\n}\n\n.footer .license {\n  text-align: right;\n}\n\n.mat-drawer-container {\n  background-color: white;\n}\n\n.mat-drawer-side {\n  border-right: none;\n}\n\n.item-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 40px;\n}\n\n.item-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC12aWRlby1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1hdC12aWRlby1maXhlZCB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5naXRodWIge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIC5uYW1lIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyIC5iYWRnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uZm9vdGVyIC5pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmZvb3RlciAudmVyc2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9vdGVyIC5saWNlbnNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uaXRlbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pdGVtLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIiwiZGl2IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC12aWRlby1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1hdC12aWRlby1maXhlZCB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5naXRodWIge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIC5uYW1lIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyIC5iYWRnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uZm9vdGVyIC5pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmZvb3RlciAudmVyc2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9vdGVyIC5saWNlbnNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uaXRlbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pdGVtLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../package.json */ "./package.json", 1);



let AppComponent = class AppComponent {
    constructor() {
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.appversion = _package_json__WEBPACK_IMPORTED_MODULE_2__.version;
        this.ngclass = "mat-video-responsive";
        this.src = "assets/NASA.mp4";
        this.title = "NASA Rocket Launch";
        this.width = 600;
        this.height = 337.5;
        this.currentTime = 0;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.download = true;
        this.fullscreen = true;
        this.showFrameByFrame = false;
        this.keyboard = true;
        this.color = "primary";
        this.spinner = "spin";
        this.poster = "assets/NASA.jpg";
        this.overlay = null;
        this.muted = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mat-video */ "./dist/mat-video/fesm2015/mat-video.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            mat_video__WEBPACK_IMPORTED_MODULE_15__["MatVideoModule"]
        ],
        exports: [mat_video__WEBPACK_IMPORTED_MODULE_15__["MatVideoModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener("DOMContentLoaded", () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/nkoehler/mat-video/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map