(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/slider'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('mat-video', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/slider', '@angular/cdk/a11y', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory(global['mat-video'] = {}, global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.slider, global.ng.cdk.a11y, global.ng.cdk.bidi));
}(this, function (exports, common, core, button, icon, slider, a11y, bidi) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EventService = /** @class */ (function () {
        function EventService() {
        }
        /**
         * @param {?} renderer
         * @param {?} events
         * @return {?}
         */
        EventService.prototype.addEvents = /**
         * @param {?} renderer
         * @param {?} events
         * @return {?}
         */
        function (renderer, events) {
            var e_1, _a;
            var _loop_1 = function (event_1) {
                event_1.dispose = renderer.listen(event_1.element, event_1.name, (/**
                 * @param {?} newEvent
                 * @return {?}
                 */
                function (newEvent) { return event_1.callback(newEvent); }));
            };
            try {
                for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                    var event_1 = events_1_1.value;
                    _loop_1(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @param {?} events
         * @return {?}
         */
        EventService.prototype.removeEvents = /**
         * @param {?} events
         * @return {?}
         */
        function (events) {
            var e_2, _a;
            try {
                for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                    var event_2 = events_2_1.value;
                    if (event_2.dispose) {
                        event_2.dispose();
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        EventService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        EventService.ctorParameters = function () { return []; };
        return EventService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVideoComponent = /** @class */ (function () {
        function MatVideoComponent(renderer, evt) {
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
            this.mutedChange = new core.EventEmitter();
            this.timeChange = new core.EventEmitter();
            this.playing = false;
            this.isFullscreen = false;
            this.videoLoaded = false;
            this.isMouseMoving = false;
            this.isMouseMovingTimeout = 2000;
        }
        Object.defineProperty(MatVideoComponent.prototype, "time", {
            get: /**
             * @return {?}
             */
            function () {
                return this.getVideoTag().currentTime;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                /** @type {?} */
                var video = this.getVideoTag();
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
                        function () { return _this.timeChange.emit(video.currentTime); }), 0);
                        this.lastTime = video.currentTime;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatVideoComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.events = [
                {
                    element: this.video.nativeElement,
                    name: "loadstart",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoLoaded = false); }),
                    dispose: null
                },
                {
                    element: this.video.nativeElement,
                    name: "loadedmetadata",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.evLoadedMetadata(event); }),
                    dispose: null
                },
                {
                    element: this.video.nativeElement,
                    name: "error",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return console.error("Unhandled Video Error", event); }),
                    dispose: null
                },
                {
                    element: this.video.nativeElement,
                    name: "contextmenu",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return event.preventDefault(); }),
                    dispose: null
                },
                {
                    element: this.video.nativeElement,
                    name: "timeupdate",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.evTimeUpdate(event); }),
                    dispose: null
                },
                {
                    element: this.player.nativeElement,
                    name: "mousemove",
                    callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.evMouseMove(event); }),
                    dispose: null
                }
            ];
            this.video.nativeElement.onloadeddata = (/**
             * @return {?}
             */
            function () { return (_this.videoLoaded = true); });
            this.evt.addEvents(this.renderer, this.events);
        };
        /**
         * @return {?}
         */
        MatVideoComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.video.nativeElement.onloadeddata = null;
            this.evt.removeEvents(this.events);
        };
        /**
         * @return {?}
         */
        MatVideoComponent.prototype.load = /**
         * @return {?}
         */
        function () {
            if (this.video && this.video.nativeElement) {
                this.video.nativeElement.load();
            }
        };
        /**
         * @return {?}
         */
        MatVideoComponent.prototype.getVideoTag = /**
         * @return {?}
         */
        function () {
            return this.video && this.video.nativeElement ? ((/** @type {?} */ (this.video.nativeElement))) : null;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatVideoComponent.prototype.evLoadedMetadata = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.videoWidth = this.video.nativeElement.videoWidth;
            this.videoHeight = this.video.nativeElement.videoHeight;
            this.videoLoaded = true;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatVideoComponent.prototype.evMouseMove = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            this.isMouseMoving = true;
            clearTimeout(this.isMouseMovingTimer);
            this.isMouseMovingTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isMouseMoving = false;
            }), this.isMouseMovingTimeout);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatVideoComponent.prototype.evTimeUpdate = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.time = this.getVideoTag().currentTime;
        };
        /**
         * @param {?} activeClass
         * @param {?} inactiveClass
         * @return {?}
         */
        MatVideoComponent.prototype.getOverlayClass = /**
         * @param {?} activeClass
         * @param {?} inactiveClass
         * @return {?}
         */
        function (activeClass, inactiveClass) {
            if (this.overlay === null) {
                return !this.playing || this.isMouseMoving ? activeClass : inactiveClass;
            }
            else {
                return this.overlay ? activeClass : inactiveClass;
            }
        };
        MatVideoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-video",
                        template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.src]=\"src ? src : null\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                        styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")}::ng-deep.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"]
                    }] }
        ];
        /** @nocollapse */
        MatVideoComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        MatVideoComponent.propDecorators = {
            player: [{ type: core.ViewChild, args: ["player", { static: false },] }],
            video: [{ type: core.ViewChild, args: ["video", { static: false },] }],
            src: [{ type: core.Input }],
            title: [{ type: core.Input }],
            autoplay: [{ type: core.Input }],
            preload: [{ type: core.Input }],
            loop: [{ type: core.Input }],
            quality: [{ type: core.Input }],
            fullscreen: [{ type: core.Input }],
            showFrameByFrame: [{ type: core.Input }],
            fps: [{ type: core.Input }],
            download: [{ type: core.Input }],
            color: [{ type: core.Input }],
            spinner: [{ type: core.Input }],
            poster: [{ type: core.Input }],
            keyboard: [{ type: core.Input }],
            overlay: [{ type: core.Input }],
            muted: [{ type: core.Input }],
            mutedChange: [{ type: core.Output }],
            timeChange: [{ type: core.Output }],
            time: [{ type: core.Input }]
        };
        return MatVideoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVideoSourceDirective = /** @class */ (function () {
        function MatVideoSourceDirective(matVideoComponent, el) {
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
        MatVideoSourceDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.source.src = this.src;
            this.source.type = this.type;
            if (!this.init) {
                this.video.load();
            }
        };
        MatVideoSourceDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[matVideoSource]"
                    },] }
        ];
        /** @nocollapse */
        MatVideoSourceDirective.ctorParameters = function () { return [
            { type: MatVideoComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef }
        ]; };
        MatVideoSourceDirective.propDecorators = {
            src: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        return MatVideoSourceDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVideoTrackDirective = /** @class */ (function () {
        function MatVideoTrackDirective(matVideoComponent, el) {
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
        MatVideoTrackDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.track.src = this.src;
            this.track.kind = this.kind;
            this.track.srclang = this.srclang;
            this.track.label = this.label;
            if (!this.init) {
                this.video.load();
            }
        };
        MatVideoTrackDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[matVideoTrack]"
                    },] }
        ];
        /** @nocollapse */
        MatVideoTrackDirective.ctorParameters = function () { return [
            { type: MatVideoComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef }
        ]; };
        MatVideoTrackDirective.propDecorators = {
            src: [{ type: core.Input }],
            kind: [{ type: core.Input }],
            srclang: [{ type: core.Input }],
            label: [{ type: core.Input }]
        };
        return MatVideoTrackDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Counter used to generate unique IDs for progress bars.
     * @type {?}
     */
    var sliderprogressbarId = 0;
    var MatSliderProgressBarComponent = /** @class */ (function (_super) {
        __extends(MatSliderProgressBarComponent, _super);
        function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
            var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
            _this.mode = "buffer";
            _this.value = 0;
            _this.pBufferValue = 0;
            /**
             * The id of the progress bar.
             */
            _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
            _this.tabIndex = parseInt(tabIndex, 10) || 0;
            return _this;
        }
        Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
            /** Buffer value of the progress bar. Defaults to zero. */
            get: /**
             * Buffer value of the progress bar. Defaults to zero.
             * @return {?}
             */
            function () {
                return this.pBufferValue;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this.pBufferValue = clamp(v || 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
            /** CSS styles for the track fill element. */
            get: /**
             * CSS styles for the track fill element.
             * @return {?}
             */
            function () {
                if (this.mode === "buffer") {
                    /** @type {?} */
                    var axis = this.vertical ? "Y" : "X";
                    return {
                        transform: "translate" + axis + "(0px) scale" + axis + "(" + this.pBufferValue / 100 + ")"
                    };
                }
            },
            enumerable: true,
            configurable: true
        });
        MatSliderProgressBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-slider-progress-bar",
                        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n      <defs>\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n        </pattern>\n      </defs>\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n    </svg>\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
                        providers: [slider.MAT_SLIDER_VALUE_ACCESSOR],
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
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
                    }] }
        ];
        /** @nocollapse */
        MatSliderProgressBarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: String, decorators: [{ type: core.Attribute, args: ["tabindex",] }] }
        ]; };
        MatSliderProgressBarComponent.propDecorators = {
            mode: [{ type: core.Input }],
            value: [{ type: core.Input }],
            bufferValue: [{ type: core.Input }]
        };
        return MatSliderProgressBarComponent;
    }(slider.MatSlider));
    /**
     * Clamps a value to be between two numbers, by default 0 and 100.
     * @param {?} v
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function clamp(v, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.max(min, Math.min(max, v));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SecondsToTimePipe = /** @class */ (function () {
        function SecondsToTimePipe() {
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
        SecondsToTimePipe.prototype.transform = /**
         * @param {?} seconds
         * @return {?}
         */
        function (seconds) {
            if (!seconds) {
                return "0:00";
            }
            else {
                /** @type {?} */
                var timeString = "";
                for (var key in this.times) {
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
        };
        SecondsToTimePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: "secondsToTime"
                    },] }
        ];
        return SecondsToTimePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullscreenService = /** @class */ (function () {
        function FullscreenService() {
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
            var ret = {};
            /** @type {?} */
            var val;
            for (var i = 0; i < this.fnMap.length; i++) {
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
        FullscreenService.prototype.request = /**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            /** @type {?} */
            var request = this.fn.requestFullscreen;
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
        };
        /**
         * @return {?}
         */
        FullscreenService.prototype.exit = /**
         * @return {?}
         */
        function () {
            document[this.fn.exitFullscreen]();
        };
        /**
         * @param {?} elem
         * @return {?}
         */
        FullscreenService.prototype.toggle = /**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            if (this.isFullscreen()) {
                this.exit();
            }
            else {
                this.request(elem);
            }
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        FullscreenService.prototype.onChange = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            document.addEventListener(this.fn.fullscreenchange, callback, false);
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        FullscreenService.prototype.onError = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            document.addEventListener(this.fn.fullscreenerror, callback, false);
        };
        /**
         * @return {?}
         */
        FullscreenService.prototype.isFullscreen = /**
         * @return {?}
         */
        function () {
            return Boolean(document[this.fn.fullscreenElement]);
        };
        /**
         * @return {?}
         */
        FullscreenService.prototype.isEnabled = /**
         * @return {?}
         */
        function () {
            // Coerce to boolean in case of old WebKit
            return Boolean(document[this.fn.fullscreenEnabled]);
        };
        /**
         * @return {?}
         */
        FullscreenService.prototype.getElement = /**
         * @return {?}
         */
        function () {
            return document[this.fn.fullscreenElement];
        };
        FullscreenService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FullscreenService.ctorParameters = function () { return []; };
        return FullscreenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatDownloadButtonComponent = /** @class */ (function () {
        function MatDownloadButtonComponent() {
        }
        MatDownloadButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-download-button",
                        template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>\n",
                        styles: ["a{color:inherit;text-decoration:none}"]
                    }] }
        ];
        /** @nocollapse */
        MatDownloadButtonComponent.ctorParameters = function () { return []; };
        MatDownloadButtonComponent.propDecorators = {
            video: [{ type: core.Input }],
            title: [{ type: core.Input }]
        };
        return MatDownloadButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatFrameByFrameControlComponent = /** @class */ (function () {
        function MatFrameByFrameControlComponent() {
            this.fps = 29.97;
        }
        /**
         * @return {?}
         */
        MatFrameByFrameControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} nbFrames
         * @return {?}
         */
        MatFrameByFrameControlComponent.prototype.seekFrames = /**
         * @param {?} nbFrames
         * @return {?}
         */
        function (nbFrames) {
            if (!this.video.paused) {
                this.video.pause();
            }
            /** @type {?} */
            var currentFrames = this.video.currentTime * this.fps;
            /** @type {?} */
            var newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
            this.video.currentTime = newPos;
        };
        MatFrameByFrameControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-frame-by-frame-control",
                        template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n  <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n  <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatFrameByFrameControlComponent.ctorParameters = function () { return []; };
        MatFrameByFrameControlComponent.propDecorators = {
            video: [{ type: core.Input }],
            fps: [{ type: core.Input }]
        };
        return MatFrameByFrameControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatFullscreenButtonComponent = /** @class */ (function () {
        function MatFullscreenButtonComponent(fscreen, evt) {
            this.fscreen = fscreen;
            this.evt = evt;
            this.canFullscreen = false;
            this.fullscreen = false;
            this.fullscreenChanged = new core.EventEmitter();
            this.keyboard = true;
        }
        /**
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.fscreen.isEnabled()) {
                this.canFullscreen = true;
            }
            this.fscreen.onChange((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return (_this.fscreen.isFullscreen() ? _this.onChangesFullscreen(true) : _this.onChangesFullscreen(false)); }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.setFullscreen = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.canFullscreen && this.fullscreen !== value) {
                this.toggleFullscreen();
            }
        };
        /**
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.toggleFullscreen = /**
         * @return {?}
         */
        function () {
            this.fullscreen = !this.fullscreen;
            this.updateFullscreen();
        };
        /**
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.updateFullscreen = /**
         * @return {?}
         */
        function () {
            this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
            this.fullscreenChanged.emit(this.fullscreen);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.onChangesFullscreen = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = value;
            this.fullscreenChanged.emit(this.fullscreen);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatFullscreenButtonComponent.prototype.onFullscreenKey = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.keyboard) {
                this.toggleFullscreen();
                event.preventDefault();
            }
        };
        MatFullscreenButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-fullscreen-button",
                        template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatFullscreenButtonComponent.ctorParameters = function () { return [
            { type: FullscreenService },
            { type: EventService }
        ]; };
        MatFullscreenButtonComponent.propDecorators = {
            player: [{ type: core.Input }],
            fullscreen: [{ type: core.Input }],
            fullscreenChanged: [{ type: core.Output }],
            keyboard: [{ type: core.Input }],
            onFullscreenKey: [{ type: core.HostListener, args: ["document:keyup.f", ["$event"],] }]
        };
        return MatFullscreenButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatPlayButtonComponent = /** @class */ (function () {
        function MatPlayButtonComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.play = false;
            this.playChanged = new core.EventEmitter();
            this.keyboard = true;
        }
        /**
         * @return {?}
         */
        MatPlayButtonComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.events = [
                { element: this.video, name: "play", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.setVideoPlayback(true); }), dispose: null },
                { element: this.video, name: "pause", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.setVideoPlayback(false); }), dispose: null },
                { element: this.video, name: "durationchange", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.setVideoPlayback(false); }), dispose: null },
                { element: this.video, name: "ended", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.setVideoPlayback(false); }), dispose: null },
                { element: this.video, name: "click", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.toggleVideoPlayback(); }), dispose: null }
            ];
            this.evt.addEvents(this.renderer, this.events);
        };
        /**
         * @return {?}
         */
        MatPlayButtonComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.evt.removeEvents(this.events);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        MatPlayButtonComponent.prototype.setVideoPlayback = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.play !== value) {
                this.toggleVideoPlayback();
            }
        };
        /**
         * @return {?}
         */
        MatPlayButtonComponent.prototype.toggleVideoPlayback = /**
         * @return {?}
         */
        function () {
            this.play = !this.play;
            this.updateVideoPlayback();
        };
        /**
         * @return {?}
         */
        MatPlayButtonComponent.prototype.updateVideoPlayback = /**
         * @return {?}
         */
        function () {
            this.play ? this.video.play() : this.video.pause();
            this.playChanged.emit(this.play);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatPlayButtonComponent.prototype.onPlayKey = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.keyboard) {
                this.toggleVideoPlayback();
                event.preventDefault();
            }
        };
        MatPlayButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-play-button",
                        template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatPlayButtonComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        MatPlayButtonComponent.propDecorators = {
            video: [{ type: core.Input }],
            play: [{ type: core.Input }],
            playChanged: [{ type: core.Output }],
            keyboard: [{ type: core.Input }],
            onPlayKey: [{ type: core.HostListener, args: ["document:keyup.space", ["$event"],] }]
        };
        return MatPlayButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatQualityControlComponent = /** @class */ (function () {
        function MatQualityControlComponent() {
        }
        MatQualityControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-quality-control",
                        template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">{{ video.videoHeight }}p</div>\n",
                        styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
                    }] }
        ];
        /** @nocollapse */
        MatQualityControlComponent.ctorParameters = function () { return []; };
        MatQualityControlComponent.propDecorators = {
            video: [{ type: core.Input }]
        };
        return MatQualityControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatSeekProgressControlComponent = /** @class */ (function () {
        function MatSeekProgressControlComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.curTimePercent = 0;
            this.bufTimePercent = 0;
            this.video = null;
            this.color = "primary";
            this.currentTime = 0;
            this.currentTimeChanged = new core.EventEmitter();
            this.bufferedTime = 0;
            this.bufferedTimeChanged = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.events = [
                { element: this.video, name: "seeking", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.updateCurrentTime(_this.video.currentTime); }), dispose: null },
                { element: this.video, name: "canplaythrough", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.updateBufferedTime(); }), dispose: null },
                { element: this.video, name: "timeupdate", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.updateCurrentTime(_this.video.currentTime); }), dispose: null },
                { element: this.video, name: "progress", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.updateBufferedTime(); }), dispose: null }
            ];
            this.evt.addEvents(this.renderer, this.events);
        };
        /**
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.evt.removeEvents(this.events);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.seekVideo = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var percentage = value / 100;
            /** @type {?} */
            var newTime = this.video.duration * percentage;
            this.video.currentTime = newTime;
        };
        /**
         * @param {?} time
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.updateCurrentTime = /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this.currentTime = time;
            this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
        };
        /**
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.updateBufferedTime = /**
         * @return {?}
         */
        function () {
            if (this.video.buffered.length > 0) {
                /** @type {?} */
                var largestBufferValue = 0;
                for (var i = 0; i < this.video.buffered.length; i++) {
                    /** @type {?} */
                    var cur = this.video.currentTime;
                    /** @type {?} */
                    var start = this.video.buffered.start(i);
                    /** @type {?} */
                    var end = this.video.buffered.end(i);
                    if (start <= cur && end > cur && end - start > largestBufferValue) {
                        largestBufferValue = end;
                    }
                }
                this.bufferedTime = largestBufferValue;
                this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
            }
        };
        /**
         * @param {?} emitter
         * @param {?} time
         * @return {?}
         */
        MatSeekProgressControlComponent.prototype.updateTime = /**
         * @param {?} emitter
         * @param {?} time
         * @return {?}
         */
        function (emitter, time) {
            emitter.emit(time);
            return (time / this.video.duration) * 100;
        };
        MatSeekProgressControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-seek-progress-control",
                        template: "<mat-slider-progress-bar\n  [color]=\"color\"\n  mode=\"buffer\"\n  step=\"0.01\"\n  [value]=\"curTimePercent\"\n  [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"\n></mat-slider-progress-bar>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatSeekProgressControlComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        MatSeekProgressControlComponent.propDecorators = {
            video: [{ type: core.Input }],
            color: [{ type: core.Input }],
            currentTime: [{ type: core.Input }],
            currentTimeChanged: [{ type: core.Output }],
            bufferedTime: [{ type: core.Input }],
            bufferedTimeChanged: [{ type: core.Output }]
        };
        return MatSeekProgressControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTimeControlComponent = /** @class */ (function () {
        function MatTimeControlComponent() {
        }
        MatTimeControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-time-control",
                        template: "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\n",
                        styles: [".playtime{display:inline;font-size:12px}"]
                    }] }
        ];
        /** @nocollapse */
        MatTimeControlComponent.ctorParameters = function () { return []; };
        MatTimeControlComponent.propDecorators = {
            video: [{ type: core.Input }]
        };
        return MatTimeControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVideoSpinnerComponent = /** @class */ (function () {
        function MatVideoSpinnerComponent(renderer, evt) {
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
        MatVideoSpinnerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.events = [
                { element: this.video, name: "loadstart", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoLoaded = false); }), dispose: null },
                { element: this.video, name: "loadedmetadata", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoLoaded = true); }), dispose: null },
                { element: this.video, name: "canplay", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoBuffering = false); }), dispose: null },
                { element: this.video, name: "waiting", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoBuffering = true); }), dispose: null },
                { element: this.video, name: "durationchange", callback: (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return (_this.videoBuffering = true); }), dispose: null }
            ];
            this.video.onloadeddata = (/**
             * @return {?}
             */
            function () { return (_this.videoLoaded = true); });
            this.evt.addEvents(this.renderer, this.events);
        };
        /**
         * @return {?}
         */
        MatVideoSpinnerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.video.onloadeddata = null;
            this.evt.removeEvents(this.events);
        };
        MatVideoSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-video-spinner",
                        template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>\n",
                        styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        MatVideoSpinnerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        MatVideoSpinnerComponent.propDecorators = {
            video: [{ type: core.Input }],
            spinner: [{ type: core.Input }]
        };
        return MatVideoSpinnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVolumeControlComponent = /** @class */ (function () {
        function MatVolumeControlComponent(evt) {
            this.evt = evt;
            this.video = null;
            this.color = "primary";
            this.volume = 1;
            this.volumeChanged = new core.EventEmitter();
            this.pMuted = false;
            this.mutedChanged = new core.EventEmitter();
            this.keyboard = true;
        }
        Object.defineProperty(MatVolumeControlComponent.prototype, "muted", {
            get: /**
             * @return {?}
             */
            function () {
                return this.pMuted;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this.pMuted = v;
                this.video.muted = this.pMuted;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        MatVolumeControlComponent.prototype.setVolume = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.volume = value;
            this.video.volume = this.volume;
            this.volumeChanged.emit(this.volume);
            if (this.volume > 0) {
                this.setMuted(false);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        MatVolumeControlComponent.prototype.setMuted = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.muted !== value) {
                this.toggleMuted();
            }
        };
        /**
         * @return {?}
         */
        MatVolumeControlComponent.prototype.toggleMuted = /**
         * @return {?}
         */
        function () {
            this.muted = !this.muted;
            this.updateMuted();
        };
        /**
         * @return {?}
         */
        MatVolumeControlComponent.prototype.updateMuted = /**
         * @return {?}
         */
        function () {
            this.video.muted = this.muted;
            this.mutedChanged.emit(this.muted);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatVolumeControlComponent.prototype.onMuteKey = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.keyboard) {
                this.toggleMuted();
                event.preventDefault();
            }
        };
        MatVolumeControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "mat-volume-control",
                        template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\"> </mat-slider>\n</div>\n",
                        styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
                    }] }
        ];
        /** @nocollapse */
        MatVolumeControlComponent.ctorParameters = function () { return [
            { type: EventService }
        ]; };
        MatVolumeControlComponent.propDecorators = {
            video: [{ type: core.Input }],
            color: [{ type: core.Input }],
            volume: [{ type: core.Input }],
            volumeChanged: [{ type: core.Output }],
            muted: [{ type: core.Input }],
            mutedChanged: [{ type: core.Output }],
            keyboard: [{ type: core.Input }],
            onMuteKey: [{ type: core.HostListener, args: ["document:keyup.m", ["$event"],] }]
        };
        return MatVolumeControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatVideoModule = /** @class */ (function () {
        function MatVideoModule() {
        }
        MatVideoModule.decorators = [
            { type: core.NgModule, args: [{
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
                        imports: [common.CommonModule, icon.MatIconModule, button.MatButtonModule, slider.MatSliderModule],
                        exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
                        providers: [FullscreenService, EventService]
                    },] }
        ];
        return MatVideoModule;
    }());

    exports.MatVideoModule = MatVideoModule;
    exports.ɵa = SecondsToTimePipe;
    exports.ɵb = MatVideoComponent;
    exports.ɵc = EventService;
    exports.ɵd = MatSliderProgressBarComponent;
    exports.ɵe = MatPlayButtonComponent;
    exports.ɵf = MatVolumeControlComponent;
    exports.ɵg = MatDownloadButtonComponent;
    exports.ɵh = MatFullscreenButtonComponent;
    exports.ɵi = FullscreenService;
    exports.ɵj = MatTimeControlComponent;
    exports.ɵk = MatQualityControlComponent;
    exports.ɵl = MatVideoSpinnerComponent;
    exports.ɵm = MatSeekProgressControlComponent;
    exports.ɵn = MatVideoSourceDirective;
    exports.ɵo = MatVideoTrackDirective;
    exports.ɵp = MatFrameByFrameControlComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mat-video.umd.js.map
