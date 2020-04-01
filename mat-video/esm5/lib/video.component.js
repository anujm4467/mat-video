/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { EventService } from "./services/event.service";
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
        this.mutedChange = new EventEmitter();
        this.timeChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "mat-video",
                    template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.src]=\"src ? src : null\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                    styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")}::ng-deep.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"]
                }] }
    ];
    /** @nocollapse */
    MatVideoComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
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
    return MatVideoComponent;
}());
export { MatVideoComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.player;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.video;
    /** @type {?} */
    MatVideoComponent.prototype.src;
    /** @type {?} */
    MatVideoComponent.prototype.title;
    /** @type {?} */
    MatVideoComponent.prototype.autoplay;
    /** @type {?} */
    MatVideoComponent.prototype.preload;
    /** @type {?} */
    MatVideoComponent.prototype.loop;
    /** @type {?} */
    MatVideoComponent.prototype.quality;
    /** @type {?} */
    MatVideoComponent.prototype.fullscreen;
    /** @type {?} */
    MatVideoComponent.prototype.showFrameByFrame;
    /** @type {?} */
    MatVideoComponent.prototype.fps;
    /** @type {?} */
    MatVideoComponent.prototype.download;
    /** @type {?} */
    MatVideoComponent.prototype.color;
    /** @type {?} */
    MatVideoComponent.prototype.spinner;
    /** @type {?} */
    MatVideoComponent.prototype.poster;
    /** @type {?} */
    MatVideoComponent.prototype.keyboard;
    /** @type {?} */
    MatVideoComponent.prototype.overlay;
    /** @type {?} */
    MatVideoComponent.prototype.muted;
    /** @type {?} */
    MatVideoComponent.prototype.mutedChange;
    /** @type {?} */
    MatVideoComponent.prototype.timeChange;
    /** @type {?} */
    MatVideoComponent.prototype.playing;
    /** @type {?} */
    MatVideoComponent.prototype.isFullscreen;
    /** @type {?} */
    MatVideoComponent.prototype.videoWidth;
    /** @type {?} */
    MatVideoComponent.prototype.videoHeight;
    /** @type {?} */
    MatVideoComponent.prototype.lastTime;
    /** @type {?} */
    MatVideoComponent.prototype.videoLoaded;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.isMouseMoving;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.isMouseMovingTimer;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.isMouseMovingTimeout;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MatVideoComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbkksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhEO0lBcUVFLDJCQUFvQixRQUFtQixFQUFVLEdBQWlCO1FBQTlDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBNUR6RCxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUEwQmxELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUJBQVksR0FBRyxL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RSxLQUFLLEVBQUU7d0JBQ3JDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQUVwQyxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLE1BQU07NkJBRU4sTUFBTTt1QkFFTixLQUFLOztJQWdJUix3QkFBQztDQUFBLEFBN0pELElBNkpDO1NBeEpZLGlCQUFpQjs7Ozs7O0lBQzVCLG1DQUFtRTs7Ozs7SUFDbkUsa0NBQWlFOztJQUVqRSxnQ0FBNEI7O0lBQzVCLGtDQUE4Qjs7SUFDOUIscUNBQTBCOztJQUMxQixvQ0FBd0I7O0lBQ3hCLGlDQUFzQjs7SUFDdEIsb0NBQXdCOztJQUN4Qix1Q0FBMkI7O0lBQzNCLDZDQUFrQzs7SUFDbEMsZ0NBQXFCOztJQUNyQixxQ0FBMEI7O0lBQzFCLGtDQUF5Qzs7SUFDekMsb0NBQTBCOztJQUMxQixtQ0FBK0I7O0lBQy9CLHFDQUF5Qjs7SUFDekIsb0NBQWlDOztJQUNqQyxrQ0FBdUI7O0lBQ3ZCLHdDQUFvRDs7SUFFcEQsdUNBQWtEOztJQTBCbEQsb0NBQWdCOztJQUVoQix5Q0FBcUI7O0lBRXJCLHVDQUFtQjs7SUFDbkIsd0NBQW9COztJQUNwQixxQ0FBaUI7O0lBRWpCLHdDQUFvQjs7Ozs7SUFFcEIsMENBQThCOzs7OztJQUM5QiwrQ0FBeUM7Ozs7O0lBQ3pDLGlEQUFvQzs7Ozs7SUFFcEMsbUNBQStCOzs7OztJQUVuQixxQ0FBMkI7Ozs7O0lBQUUsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZXZlbnQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LXZpZGVvXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdmlkZW8uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3ZpZGVvLmNvbXBvbmVudC5zY3NzXCIsIFwiLi9zdHlsZXMvaWNvbnMuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoXCJwbGF5ZXJcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgcGxheWVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwidmlkZW9cIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdmlkZW86IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgYXV0b3BsYXkgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJlbG9hZCA9IHRydWU7XG4gIEBJbnB1dCgpIGxvb3AgPSBmYWxzZTtcbiAgQElucHV0KCkgcXVhbGl0eSA9IHRydWU7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93RnJhbWVCeUZyYW1lID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZwcyA9IDI5Ljk3O1xuICBASW5wdXQoKSBkb3dubG9hZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIHNwaW5uZXIgPSBcInNwaW5cIjtcbiAgQElucHV0KCkgcG9zdGVyOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBrZXlib2FyZCA9IHRydWU7XG4gIEBJbnB1dCgpIG92ZXJsYXk6IGJvb2xlYW4gPSBudWxsO1xuICBASW5wdXQoKSBtdXRlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIHRpbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgc2V0IHRpbWUodmFsOiBudW1iZXIpIHtcbiAgICBjb25zdCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IHRoaXMuZ2V0VmlkZW9UYWcoKTtcbiAgICBpZiAodmlkZW8gJiYgdmFsKSB7XG4gICAgICBpZiAodmFsID4gdmlkZW8uZHVyYXRpb24pIHtcbiAgICAgICAgdmFsID0gdmlkZW8uZHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICB2YWwgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCAhPT0gdmlkZW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5sYXN0VGltZSAhPT0gdmlkZW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVDaGFuZ2UuZW1pdCh2aWRlby5jdXJyZW50VGltZSksIDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdmlkZW8uY3VycmVudFRpbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxheWluZyA9IGZhbHNlO1xuXG4gIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gIHZpZGVvV2lkdGg6IG51bWJlcjtcbiAgdmlkZW9IZWlnaHQ6IG51bWJlcjtcbiAgbGFzdFRpbWU6IG51bWJlcjtcblxuICB2aWRlb0xvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaXNNb3VzZU1vdmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lcjogTm9kZUpTLlRpbWVyO1xuICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lb3V0ID0gMjAwMDtcblxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LFxuICAgICAgICBuYW1lOiBcImxvYWRzdGFydFwiLFxuICAgICAgICBjYWxsYmFjazogZXZlbnQgPT4gKHRoaXMudmlkZW9Mb2FkZWQgPSBmYWxzZSksXG4gICAgICAgIGRpc3Bvc2U6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgbmFtZTogXCJsb2FkZWRtZXRhZGF0YVwiLFxuICAgICAgICBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldkxvYWRlZE1ldGFkYXRhKGV2ZW50KSxcbiAgICAgICAgZGlzcG9zZTogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LFxuICAgICAgICBuYW1lOiBcImVycm9yXCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiBjb25zb2xlLmVycm9yKFwiVW5oYW5kbGVkIFZpZGVvIEVycm9yXCIsIGV2ZW50KSxcbiAgICAgICAgZGlzcG9zZTogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LFxuICAgICAgICBuYW1lOiBcImNvbnRleHRtZW51XCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxuICAgICAgICBkaXNwb3NlOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG5hbWU6IFwidGltZXVwZGF0ZVwiLFxuICAgICAgICBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldlRpbWVVcGRhdGUoZXZlbnQpLFxuICAgICAgICBkaXNwb3NlOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LFxuICAgICAgICBuYW1lOiBcIm1vdXNlbW92ZVwiLFxuICAgICAgICBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldk1vdXNlTW92ZShldmVudCksXG4gICAgICAgIGRpc3Bvc2U6IG51bGxcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9ICgpID0+ICh0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZSk7XG5cbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9IG51bGw7XG5cbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbG9hZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5sb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmlkZW9UYWcoKTogSFRNTFZpZGVvRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCA/ICh0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgZXZMb2FkZWRNZXRhZGF0YShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy52aWRlb1dpZHRoID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgdGhpcy52aWRlb0hlaWdodCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGV2TW91c2VNb3ZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlzTW91c2VNb3ZpbmcgPSB0cnVlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmlzTW91c2VNb3ZpbmdUaW1lcik7XG4gICAgdGhpcy5pc01vdXNlTW92aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IGZhbHNlO1xuICAgIH0sIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVvdXQpO1xuICB9XG5cbiAgZXZUaW1lVXBkYXRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUgPSB0aGlzLmdldFZpZGVvVGFnKCkuY3VycmVudFRpbWU7XG4gIH1cblxuICBnZXRPdmVybGF5Q2xhc3MoYWN0aXZlQ2xhc3M6IHN0cmluZywgaW5hY3RpdmVDbGFzczogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5vdmVybGF5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gIXRoaXMucGxheWluZyB8fCB0aGlzLmlzTW91c2VNb3ZpbmcgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XG4gICAgfVxuICB9XG59XG4iXX0=