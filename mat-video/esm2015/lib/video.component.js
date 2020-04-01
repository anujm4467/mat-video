/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { EventService } from "./services/event.service";
export class MatVideoComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbkksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBZ0U1QixZQUFvQixRQUFtQixFQUFVLEdBQWlCO1FBQTlDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBNUR6RCxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUEwQmxELFlBQU8sR0FBRyxLQUFLLENB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S0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsTUFBTTt5QkFFTixNQUFNO21CQUVOLEtBQUs7Ozs7Ozs7SUF2Qk4sbUNBQW1FOzs7OztJQUNuRSxrQ0FBaUU7O0lBRWpFLGdDQUE0Qjs7SUFDNUIsa0NBQThCOztJQUM5QixxQ0FBMEI7O0lBQzFCLG9DQUF3Qjs7SUFDeEIsaUNBQXNCOztJQUN0QixvQ0FBd0I7O0lBQ3hCLHVDQUEyQjs7SUFDM0IsNkNBQWtDOztJQUNsQyxnQ0FBcUI7O0lBQ3JCLHFDQUEwQjs7SUFDMUIsa0NBQXlDOztJQUN6QyxvQ0FBMEI7O0lBQzFCLG1DQUErQjs7SUFDL0IscUNBQXlCOztJQUN6QixvQ0FBaUM7O0lBQ2pDLGtDQUF1Qjs7SUFDdkIsd0NBQW9EOztJQUVwRCx1Q0FBa0Q7O0lBMEJsRCxvQ0FBZ0I7O0lBRWhCLHlDQUFxQjs7SUFFckIsdUNBQW1COztJQUNuQix3Q0FBb0I7O0lBQ3BCLHFDQUFpQjs7SUFFakIsd0NBQW9COzs7OztJQUVwQiwwQ0FBOEI7Ozs7O0lBQzlCLCtDQUF5Qzs7Ozs7SUFDekMsaURBQW9DOzs7OztJQUVwQyxtQ0FBK0I7Ozs7O0lBRW5CLHFDQUEyQjs7Ozs7SUFBRSxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtdmlkZW9cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi92aWRlby5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdmlkZW8uY29tcG9uZW50LnNjc3NcIiwgXCIuL3N0eWxlcy9pY29ucy5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZpZGVvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInBsYXllclwiLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBwbGF5ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJ2aWRlb1wiLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSB2aWRlbzogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBzcmM6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBhdXRvcGxheSA9IGZhbHNlO1xuICBASW5wdXQoKSBwcmVsb2FkID0gdHJ1ZTtcbiAgQElucHV0KCkgbG9vcCA9IGZhbHNlO1xuICBASW5wdXQoKSBxdWFsaXR5ID0gdHJ1ZTtcbiAgQElucHV0KCkgZnVsbHNjcmVlbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dGcmFtZUJ5RnJhbWUgPSBmYWxzZTtcbiAgQElucHV0KCkgZnBzID0gMjkuOTc7XG4gIEBJbnB1dCgpIGRvd25sb2FkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgc3Bpbm5lciA9IFwic3BpblwiO1xuICBASW5wdXQoKSBwb3N0ZXI6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcbiAgQElucHV0KCkgb3ZlcmxheTogYm9vbGVhbiA9IG51bGw7XG4gIEBJbnB1dCgpIG11dGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBtdXRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KCkgdGltZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZpZGVvVGFnKCkuY3VycmVudFRpbWU7XG4gIH1cblxuICBzZXQgdGltZSh2YWw6IG51bWJlcikge1xuICAgIGNvbnN0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gdGhpcy5nZXRWaWRlb1RhZygpO1xuICAgIGlmICh2aWRlbyAmJiB2YWwpIHtcbiAgICAgIGlmICh2YWwgPiB2aWRlby5kdXJhdGlvbikge1xuICAgICAgICB2YWwgPSB2aWRlby5kdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgIHZhbCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodmFsICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGltZUNoYW5nZS5lbWl0KHZpZGVvLmN1cnJlbnRUaW1lKSwgMCk7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGF5aW5nID0gZmFsc2U7XG5cbiAgaXNGdWxsc2NyZWVuID0gZmFsc2U7XG5cbiAgdmlkZW9XaWR0aDogbnVtYmVyO1xuICB2aWRlb0hlaWdodDogbnVtYmVyO1xuICBsYXN0VGltZTogbnVtYmVyO1xuXG4gIHZpZGVvTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpc01vdXNlTW92aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgaXNNb3VzZU1vdmluZ1RpbWVyOiBOb2RlSlMuVGltZXI7XG4gIHByaXZhdGUgaXNNb3VzZU1vdmluZ1RpbWVvdXQgPSAyMDAwO1xuXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRzID0gW1xuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG5hbWU6IFwibG9hZHN0YXJ0XCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiAodGhpcy52aWRlb0xvYWRlZCA9IGZhbHNlKSxcbiAgICAgICAgZGlzcG9zZTogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LFxuICAgICAgICBuYW1lOiBcImxvYWRlZG1ldGFkYXRhXCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TG9hZGVkTWV0YWRhdGEoZXZlbnQpLFxuICAgICAgICBkaXNwb3NlOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG5hbWU6IFwiZXJyb3JcIixcbiAgICAgICAgY2FsbGJhY2s6IGV2ZW50ID0+IGNvbnNvbGUuZXJyb3IoXCJVbmhhbmRsZWQgVmlkZW8gRXJyb3JcIiwgZXZlbnQpLFxuICAgICAgICBkaXNwb3NlOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG5hbWU6IFwiY29udGV4dG1lbnVcIixcbiAgICAgICAgY2FsbGJhY2s6IGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCksXG4gICAgICAgIGRpc3Bvc2U6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgbmFtZTogXCJ0aW1ldXBkYXRlXCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2VGltZVVwZGF0ZShldmVudCksXG4gICAgICAgIGRpc3Bvc2U6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG5hbWU6IFwibW91c2Vtb3ZlXCIsXG4gICAgICAgIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TW91c2VNb3ZlKGV2ZW50KSxcbiAgICAgICAgZGlzcG9zZTogbnVsbFxuICAgICAgfVxuICAgIF07XG5cbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQub25sb2FkZWRkYXRhID0gKCkgPT4gKHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlKTtcblxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQub25sb2FkZWRkYXRhID0gbnVsbDtcblxuICAgIHRoaXMuZXZ0LnJlbW92ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBsb2FkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LmxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRWaWRlb1RhZygpOiBIVE1MVmlkZW9FbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50ID8gKHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCBhcyBIVE1MVmlkZW9FbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBldkxvYWRlZE1ldGFkYXRhKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZpZGVvV2lkdGggPSB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQudmlkZW9XaWR0aDtcbiAgICB0aGlzLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgIHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgZXZNb3VzZU1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IHRydWU7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVyKTtcbiAgICB0aGlzLmlzTW91c2VNb3ZpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc01vdXNlTW92aW5nID0gZmFsc2U7XG4gICAgfSwgdGhpcy5pc01vdXNlTW92aW5nVGltZW91dCk7XG4gIH1cblxuICBldlRpbWVVcGRhdGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0VmlkZW9UYWcoKS5jdXJyZW50VGltZTtcbiAgfVxuXG4gIGdldE92ZXJsYXlDbGFzcyhhY3RpdmVDbGFzczogc3RyaW5nLCBpbmFjdGl2ZUNsYXNzOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICh0aGlzLm92ZXJsYXkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAhdGhpcy5wbGF5aW5nIHx8IHRoaXMuaXNNb3VzZU1vdmluZyA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcbiAgICB9XG4gIH1cbn1cbiJdfQ==