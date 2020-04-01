/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, Renderer2 } from "@angular/core";
import { EventService } from "../../services/event.service";
export class MatSeekProgressControlComponent {
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
if (false) {
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.curTimePercent;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.bufTimePercent;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.video;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.color;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.currentTime;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.currentTimeChanged;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.bufferedTime;
    /** @type {?} */
    MatSeekProgressControlComponent.prototype.bufferedTimeChanged;
    /**
     * @type {?}
     * @private
     */
    MatSeekProgressControlComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    MatSeekProgressControlComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MatSeekProgressControlComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU81RCxNQUFNLE9BQU8sK0JBQStCOzs7OztJQWtCMUMsWUFBb0IsUUFBbUIsRUFBVSxHQUFpQjtRQUE5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpCbEUsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFVixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFFaEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUlVLENBQUM7Ozs7SUFFdEUsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUTs7OztnQkFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZ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O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxxT0FBeUQ7O2FBRTFEOzs7O1lBVjBFLFNBQVM7WUFJM0UsWUFBWTs7O29CQVdsQixLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSztpQ0FFTCxNQUFNOzJCQUVOLEtBQUs7a0NBRUwsTUFBTTs7OztJQWJQLHlEQUFtQjs7SUFDbkIseURBQW1COztJQUVuQixnREFBd0M7O0lBRXhDLGdEQUF5Qzs7SUFFekMsc0RBQXlCOztJQUV6Qiw2REFBMEQ7O0lBRTFELHVEQUEwQjs7SUFFMUIsOERBQTJEOzs7OztJQUUzRCxpREFBK0I7Ozs7O0lBRW5CLG1EQUEyQjs7Ozs7SUFBRSw4Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZXZlbnQtaGFuZGxlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWVrUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgY3VyVGltZVBlcmNlbnQgPSAwO1xuICBidWZUaW1lUGVyY2VudCA9IDA7XG5cbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSBcInByaW1hcnlcIjtcblxuICBASW5wdXQoKSBjdXJyZW50VGltZSA9IDA7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRUaW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpIGJ1ZmZlcmVkVGltZSA9IDA7XG5cbiAgQE91dHB1dCgpIGJ1ZmZlcmVkVGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJzZWVraW5nXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUN1cnJlbnRUaW1lKHRoaXMudmlkZW8uY3VycmVudFRpbWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwiY2FucGxheXRocm91Z2hcIiwgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQnVmZmVyZWRUaW1lKCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJ0aW1ldXBkYXRlXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUN1cnJlbnRUaW1lKHRoaXMudmlkZW8uY3VycmVudFRpbWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwicHJvZ3Jlc3NcIiwgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQnVmZmVyZWRUaW1lKCksIGRpc3Bvc2U6IG51bGwgfVxuICAgIF07XG5cbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIHNlZWtWaWRlbyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IHZhbHVlIC8gMTAwO1xuICAgIGNvbnN0IG5ld1RpbWUgPSB0aGlzLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudGFnZTtcbiAgICB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcbiAgfVxuXG4gIHVwZGF0ZUN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuICAgIHRoaXMuY3VyVGltZVBlcmNlbnQgPSB0aGlzLnVwZGF0ZVRpbWUodGhpcy5jdXJyZW50VGltZUNoYW5nZWQsIHRoaXMuY3VycmVudFRpbWUpO1xuICB9XG5cbiAgdXBkYXRlQnVmZmVyZWRUaW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvLmJ1ZmZlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsYXJnZXN0QnVmZmVyVmFsdWUgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZpZGVvLmJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudmlkZW8uY3VycmVudFRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy52aWRlby5idWZmZXJlZC5zdGFydChpKTtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy52aWRlby5idWZmZXJlZC5lbmQoaSk7XG4gICAgICAgIGlmIChzdGFydCA8PSBjdXIgJiYgZW5kID4gY3VyICYmIGVuZCAtIHN0YXJ0ID4gbGFyZ2VzdEJ1ZmZlclZhbHVlKSB7XG4gICAgICAgICAgbGFyZ2VzdEJ1ZmZlclZhbHVlID0gZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmJ1ZmZlcmVkVGltZSA9IGxhcmdlc3RCdWZmZXJWYWx1ZTtcbiAgICAgIHRoaXMuYnVmVGltZVBlcmNlbnQgPSB0aGlzLnVwZGF0ZVRpbWUodGhpcy5idWZmZXJlZFRpbWVDaGFuZ2VkLCB0aGlzLmJ1ZmZlcmVkVGltZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGltZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiwgdGltZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBlbWl0dGVyLmVtaXQodGltZSk7XG4gICAgcmV0dXJuICh0aW1lIC8gdGhpcy52aWRlby5kdXJhdGlvbikgKiAxMDA7XG4gIH1cbn1cbiJdfQ==