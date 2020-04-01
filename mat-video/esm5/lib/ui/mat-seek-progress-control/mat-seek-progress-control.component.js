/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, Renderer2 } from "@angular/core";
import { EventService } from "../../services/event.service";
var MatSeekProgressControlComponent = /** @class */ (function () {
    function MatSeekProgressControlComponent(renderer, evt) {
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
        { type: Component, args: [{
                    selector: "mat-seek-progress-control",
                    template: "<mat-slider-progress-bar\n  [color]=\"color\"\n  mode=\"buffer\"\n  step=\"0.01\"\n  [value]=\"curTimePercent\"\n  [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"\n></mat-slider-progress-bar>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatSeekProgressControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    MatSeekProgressControlComponent.propDecorators = {
        video: [{ type: Input }],
        color: [{ type: Input }],
        currentTime: [{ type: Input }],
        currentTimeChanged: [{ type: Output }],
        bufferedTime: [{ type: Input }],
        bufferedTimeChanged: [{ type: Output }]
    };
    return MatSeekProgressControlComponent;
}());
export { MatSeekProgressControlComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU1RDtJQXVCRSx5Q0FBb0IsUUFBbUIsRUFBVSxHQUFpQjtRQUE5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpCbEUsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFVixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFFaEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUlVLENBQUM7Ozs7SUFFdEUseURBQWU7OztJQUFmO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVE7Ozs7Z0JBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJ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QyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDNUMsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxxT0FBeUQ7O2lCQUUxRDs7OztnQkFWMEUsU0FBUztnQkFJM0UsWUFBWTs7O3dCQVdsQixLQUFLO3dCQUVMLEtBQUs7OEJBRUwsS0FBSztxQ0FFTCxNQUFNOytCQUVOLEtBQUs7c0NBRUwsTUFBTTs7SUFvRFQsc0NBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWxFWSwrQkFBK0I7OztJQUMxQyx5REFBbUI7O0lBQ25CLHlEQUFtQjs7SUFFbkIsZ0RBQXdDOztJQUV4QyxnREFBeUM7O0lBRXpDLHNEQUF5Qjs7SUFFekIsNkRBQTBEOztJQUUxRCx1REFBMEI7O0lBRTFCLDhEQUEyRDs7Ozs7SUFFM0QsaURBQStCOzs7OztJQUVuQixtREFBMkI7Ozs7O0lBQUUsOENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5cbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGN1clRpbWVQZXJjZW50ID0gMDtcbiAgYnVmVGltZVBlcmNlbnQgPSAwO1xuXG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gXCJwcmltYXJ5XCI7XG5cbiAgQElucHV0KCkgY3VycmVudFRpbWUgPSAwO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKSBidWZmZXJlZFRpbWUgPSAwO1xuXG4gIEBPdXRwdXQoKSBidWZmZXJlZFRpbWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBldmVudHM6IEV2ZW50SGFuZGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMgPSBbXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwic2Vla2luZ1wiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiBcImNhbnBsYXl0aHJvdWdoXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUJ1ZmZlcmVkVGltZSgpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwidGltZXVwZGF0ZVwiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiBcInByb2dyZXNzXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUJ1ZmZlcmVkVGltZSgpLCBkaXNwb3NlOiBudWxsIH1cbiAgICBdO1xuXG4gICAgdGhpcy5ldnQuYWRkRXZlbnRzKHRoaXMucmVuZGVyZXIsIHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZXZ0LnJlbW92ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBzZWVrVmlkZW8odmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB2YWx1ZSAvIDEwMDtcbiAgICBjb25zdCBuZXdUaW1lID0gdGhpcy52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG4gICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IG5ld1RpbWU7XG4gIH1cblxuICB1cGRhdGVDdXJyZW50VGltZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICB0aGlzLmN1clRpbWVQZXJjZW50ID0gdGhpcy51cGRhdGVUaW1lKHRoaXMuY3VycmVudFRpbWVDaGFuZ2VkLCB0aGlzLmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1ZmZlcmVkVGltZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGFyZ2VzdEJ1ZmZlclZhbHVlID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMudmlkZW8uYnVmZmVyZWQuc3RhcnQoaSk7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudmlkZW8uYnVmZmVyZWQuZW5kKGkpO1xuICAgICAgICBpZiAoc3RhcnQgPD0gY3VyICYmIGVuZCA+IGN1ciAmJiBlbmQgLSBzdGFydCA+IGxhcmdlc3RCdWZmZXJWYWx1ZSkge1xuICAgICAgICAgIGxhcmdlc3RCdWZmZXJWYWx1ZSA9IGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5idWZmZXJlZFRpbWUgPSBsYXJnZXN0QnVmZmVyVmFsdWU7XG4gICAgICB0aGlzLmJ1ZlRpbWVQZXJjZW50ID0gdGhpcy51cGRhdGVUaW1lKHRoaXMuYnVmZmVyZWRUaW1lQ2hhbmdlZCwgdGhpcy5idWZmZXJlZFRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRpbWUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPG51bWJlcj4sIHRpbWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgZW1pdHRlci5lbWl0KHRpbWUpO1xuICAgIHJldHVybiAodGltZSAvIHRoaXMudmlkZW8uZHVyYXRpb24pICogMTAwO1xuICB9XG59XG4iXX0=