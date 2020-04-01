/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from "@angular/core";
import { EventService } from "../../services/event.service";
export class MatPlayButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFXakMsWUFBb0IsUUFBbUIsRUFBVSxHQUFpQjtRQUE5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJ6RCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRVosZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNDLGFBQVEsR0FBRyxJQUFJLENBQUM7SUFJNEMsQ0FBQzs7OztJQUV0RSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFROzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUTs7OztnQkFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUTs7OztnQkFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDL0csRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVE7Ozs7Z0JBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFROzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtTEFBK0M7O2FBRWhEOzs7O1lBVHdGLFNBQVM7WUFHekYsWUFBWTs7O29CQVFsQixLQUFLO21CQUVMLEtBQUs7MEJBRUwsTUFBTTt1QkFFTixLQUFLO3dCQXNDTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE1Q2hELHVDQUFpQzs7SUFFakMsc0NBQXNCOztJQUV0Qiw2Q0FBb0Q7O0lBRXBELDBDQUF5Qjs7Ozs7SUFFekIsd0NBQStCOzs7OztJQUVuQiwwQ0FBMkI7Ozs7O0lBQUUscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC1wbGF5LWJ1dHRvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBsYXlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICBASW5wdXQoKSBwbGF5ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHBsYXlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcblxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJwbGF5XCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2sodHJ1ZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJwYXVzZVwiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKGZhbHNlKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiBcImR1cmF0aW9uY2hhbmdlXCIsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwiZW5kZWRcIiwgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuc2V0VmlkZW9QbGF5YmFjayhmYWxzZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJjbGlja1wiLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCksIGRpc3Bvc2U6IG51bGwgfVxuICAgIF07XG5cbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIHNldFZpZGVvUGxheWJhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5wbGF5ICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmlkZW9QbGF5YmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkgPSAhdGhpcy5wbGF5O1xuICAgIHRoaXMudXBkYXRlVmlkZW9QbGF5YmFjaygpO1xuICB9XG5cbiAgdXBkYXRlVmlkZW9QbGF5YmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkgPyB0aGlzLnZpZGVvLnBsYXkoKSA6IHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB0aGlzLnBsYXlDaGFuZ2VkLmVtaXQodGhpcy5wbGF5KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cC5zcGFjZVwiLCBbXCIkZXZlbnRcIl0pXG4gIG9uUGxheUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVZpZGVvUGxheWJhY2soKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=