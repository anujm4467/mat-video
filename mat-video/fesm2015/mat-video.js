import { CommonModule } from '@angular/common';
import { Injectable, EventEmitter, Component, Renderer2, ViewChild, Input, Output, Directive, Host, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Attribute, Pipe, HostListener, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR, MatSliderModule } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';

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
    { type: Injectable }
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
        this.mutedChange = new EventEmitter();
        this.timeChange = new EventEmitter();
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
    { type: Component, args: [{
                selector: "mat-video",
                template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.src]=\"src ? src : null\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")}::ng-deep.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"]
            }] }
];
/** @nocollapse */
MatVideoComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
MatVideoComponent.propDecorators = {
    player: [{ type: ViewChild, args: ["player", { static: false },] }],
    video: [{ type: ViewChild, args: ["video", { static: false },] }],
    src: [{ type: Input }],
    title: [{ type: Input }],
    autoplay: [{ type: Input }],
    preload: [{ type: Input }],
    loop: [{ type: Input }],
    quality: [{ type: Input }],
    fullscreen: [{ type: Input }],
    showFrameByFrame: [{ type: Input }],
    fps: [{ type: Input }],
    download: [{ type: Input }],
    color: [{ type: Input }],
    spinner: [{ type: Input }],
    poster: [{ type: Input }],
    keyboard: [{ type: Input }],
    overlay: [{ type: Input }],
    muted: [{ type: Input }],
    mutedChange: [{ type: Output }],
    timeChange: [{ type: Output }],
    time: [{ type: Input }]
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
    { type: Directive, args: [{
                selector: "[matVideoSource]"
            },] }
];
/** @nocollapse */
MatVideoSourceDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MatVideoSourceDirective.propDecorators = {
    src: [{ type: Input }],
    type: [{ type: Input }]
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
    { type: Directive, args: [{
                selector: "[matVideoTrack]"
            },] }
];
/** @nocollapse */
MatVideoTrackDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MatVideoTrackDirective.propDecorators = {
    src: [{ type: Input }],
    kind: [{ type: Input }],
    srclang: [{ type: Input }],
    label: [{ type: Input }]
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
class MatSliderProgressBarComponent extends MatSlider {
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
    { type: Component, args: [{
                selector: "mat-slider-progress-bar",
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n      <defs>\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n        </pattern>\n      </defs>\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n    </svg>\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
                providers: [MAT_SLIDER_VALUE_ACCESSOR],
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
            }] }
];
/** @nocollapse */
MatSliderProgressBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Attribute, args: ["tabindex",] }] }
];
MatSliderProgressBarComponent.propDecorators = {
    mode: [{ type: Input }],
    value: [{ type: Input }],
    bufferValue: [{ type: Input }]
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
    { type: Pipe, args: [{
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
    { type: Injectable }
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
    { type: Component, args: [{
                selector: "mat-download-button",
                template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>\n",
                styles: ["a{color:inherit;text-decoration:none}"]
            }] }
];
/** @nocollapse */
MatDownloadButtonComponent.ctorParameters = () => [];
MatDownloadButtonComponent.propDecorators = {
    video: [{ type: Input }],
    title: [{ type: Input }]
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
    { type: Component, args: [{
                selector: "mat-frame-by-frame-control",
                template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n  <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n  <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatFrameByFrameControlComponent.ctorParameters = () => [];
MatFrameByFrameControlComponent.propDecorators = {
    video: [{ type: Input }],
    fps: [{ type: Input }]
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
        this.fullscreenChanged = new EventEmitter();
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
    { type: Component, args: [{
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
    player: [{ type: Input }],
    fullscreen: [{ type: Input }],
    fullscreenChanged: [{ type: Output }],
    keyboard: [{ type: Input }],
    onFullscreenKey: [{ type: HostListener, args: ["document:keyup.f", ["$event"],] }]
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
        this.playChanged = new EventEmitter();
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
    { type: Component, args: [{
                selector: "mat-play-button",
                template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatPlayButtonComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
MatPlayButtonComponent.propDecorators = {
    video: [{ type: Input }],
    play: [{ type: Input }],
    playChanged: [{ type: Output }],
    keyboard: [{ type: Input }],
    onPlayKey: [{ type: HostListener, args: ["document:keyup.space", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatQualityControlComponent {
    constructor() { }
}
MatQualityControlComponent.decorators = [
    { type: Component, args: [{
                selector: "mat-quality-control",
                template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">{{ video.videoHeight }}p</div>\n",
                styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
            }] }
];
/** @nocollapse */
MatQualityControlComponent.ctorParameters = () => [];
MatQualityControlComponent.propDecorators = {
    video: [{ type: Input }]
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
        this.currentTimeChanged = new EventEmitter();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new EventEmitter();
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
    { type: Component, args: [{
                selector: "mat-seek-progress-control",
                template: "<mat-slider-progress-bar\n  [color]=\"color\"\n  mode=\"buffer\"\n  step=\"0.01\"\n  [value]=\"curTimePercent\"\n  [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"\n></mat-slider-progress-bar>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatSeekProgressControlComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
MatSeekProgressControlComponent.propDecorators = {
    video: [{ type: Input }],
    color: [{ type: Input }],
    currentTime: [{ type: Input }],
    currentTimeChanged: [{ type: Output }],
    bufferedTime: [{ type: Input }],
    bufferedTimeChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTimeControlComponent {
    constructor() { }
}
MatTimeControlComponent.decorators = [
    { type: Component, args: [{
                selector: "mat-time-control",
                template: "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\n",
                styles: [".playtime{display:inline;font-size:12px}"]
            }] }
];
/** @nocollapse */
MatTimeControlComponent.ctorParameters = () => [];
MatTimeControlComponent.propDecorators = {
    video: [{ type: Input }]
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
    { type: Component, args: [{
                selector: "mat-video-spinner",
                template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>\n",
                styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
            }] }
];
/** @nocollapse */
MatVideoSpinnerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
MatVideoSpinnerComponent.propDecorators = {
    video: [{ type: Input }],
    spinner: [{ type: Input }]
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
        this.volumeChanged = new EventEmitter();
        this.pMuted = false;
        this.mutedChanged = new EventEmitter();
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
    { type: Component, args: [{
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
    video: [{ type: Input }],
    color: [{ type: Input }],
    volume: [{ type: Input }],
    volumeChanged: [{ type: Output }],
    muted: [{ type: Input }],
    mutedChanged: [{ type: Output }],
    keyboard: [{ type: Input }],
    onMuteKey: [{ type: HostListener, args: ["document:keyup.m", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoModule {
}
MatVideoModule.decorators = [
    { type: NgModule, args: [{
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
                imports: [CommonModule, MatIconModule, MatButtonModule, MatSliderModule],
                exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
                providers: [FullscreenService, EventService]
            },] }
];

export { MatVideoModule, SecondsToTimePipe as ɵa, MatVideoComponent as ɵb, EventService as ɵc, MatSliderProgressBarComponent as ɵd, MatPlayButtonComponent as ɵe, MatVolumeControlComponent as ɵf, MatDownloadButtonComponent as ɵg, MatFullscreenButtonComponent as ɵh, FullscreenService as ɵi, MatTimeControlComponent as ɵj, MatQualityControlComponent as ɵk, MatVideoSpinnerComponent as ɵl, MatSeekProgressControlComponent as ɵm, MatVideoSourceDirective as ɵn, MatVideoTrackDirective as ɵo, MatFrameByFrameControlComponent as ɵp };
//# sourceMappingURL=mat-video.js.map