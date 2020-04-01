/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from "@angular/core";
import { EventService } from "../../services/event.service";
var MatPlayButtonComponent = /** @class */ (function () {
    function MatPlayButtonComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "mat-play-button",
                    template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatPlayButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    MatPlayButtonComponent.propDecorators = {
        video: [{ type: Input }],
        play: [{ type: Input }],
        playChanged: [{ type: Output }],
        keyboard: [{ type: Input }],
        onPlayKey: [{ type: HostListener, args: ["document:keyup.space", ["$event"],] }]
    };
    return MatPlayButtonComponent;
}());
export { MatPlayButtonComponent };
if (false) {
    /** @type {?} */
    MatPlayButtonComponent.prototype.video;
    /** @type {?} */
    MatPlayButtonComponent.prototype.play;
    /** @type {?} */
    MatPlayButtonComponent.prototype.playChanged;
    /** @type {?} */
    MatPlayButtonComponent.prototype.keyboard;
    /**
     * @type {?}
     * @private
     */
    MatPlayButtonComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    MatPlayButtonComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MatPlayButtonComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFNUQ7SUFnQkUsZ0NBQW9CLFFBQW1CLEVBQVUsR0FBaUI7UUFBOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFSekQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVaLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUzQyxhQUFRLEdBQUcsSUFBSSxDQUFDO0lBSTRDLENBQUM7Ozs7SUFFdEUsZ0RBQWU7OztJQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Z0JBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQTNCLENBQTJCLENBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3BHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFROzs7O2dCQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFROzs7O2dCQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUMvRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUTs7OztnQkFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVE7Ozs7Z0JBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7U0FDckcsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYztRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELG9EQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG9EQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFHRCwwQ0FBUzs7OztJQURULFVBQ1UsS0FBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbUxBQStDOztpQkFFaEQ7Ozs7Z0JBVHdGLFNBQVM7Z0JBR3pGLFlBQVk7Ozt3QkFRbEIsS0FBSzt1QkFFTCxLQUFLOzhCQUVMLE1BQU07MkJBRU4sS0FBSzs0QkFzQ0wsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQU9sRCw2QkFBQztDQUFBLEFBekRELElBeURDO1NBcERZLHNCQUFzQjs7O0lBQ2pDLHVDQUFpQzs7SUFFakMsc0NBQXNCOztJQUV0Qiw2Q0FBb0Q7O0lBRXBELDBDQUF5Qjs7Ozs7SUFFekIsd0NBQStCOzs7OztJQUVuQiwwQ0FBMkI7Ozs7O0lBQUUscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC1wbGF5LWJ1dHRvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBsYXlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICBASW5wdXQoKSBwbGF5ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHBsYXlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcblxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJwbGF5XCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2sodHJ1ZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJwYXVzZVwiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKGZhbHNlKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiBcImR1cmF0aW9uY2hhbmdlXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwiZW5kZWRcIiwgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuc2V0VmlkZW9QbGF5YmFjayhmYWxzZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJjbGlja1wiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCksIGRpc3Bvc2U6IG51bGwgfVxuICAgIF07XG5cbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIHNldFZpZGVvUGxheWJhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5wbGF5ICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmlkZW9QbGF5YmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkgPSAhdGhpcy5wbGF5O1xuICAgIHRoaXMudXBkYXRlVmlkZW9QbGF5YmFjaygpO1xuICB9XG5cbiAgdXBkYXRlVmlkZW9QbGF5YmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkgPyB0aGlzLnZpZGVvLnBsYXkoKSA6IHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB0aGlzLnBsYXlDaGFuZ2VkLmVtaXQodGhpcy5wbGF5KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cC5zcGFjZVwiLCBbXCIkZXZlbnRcIl0pXG4gIG9uUGxheUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVZpZGVvUGxheWJhY2soKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=