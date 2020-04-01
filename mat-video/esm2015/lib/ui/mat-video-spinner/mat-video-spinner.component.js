/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2 } from "@angular/core";
import { EventService } from "../../services/event.service";
export class MatVideoSpinnerComponent {
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
if (false) {
    /** @type {?} */
    MatVideoSpinnerComponent.prototype.video;
    /** @type {?} */
    MatVideoSpinnerComponent.prototype.spinner;
    /** @type {?} */
    MatVideoSpinnerComponent.prototype.videoBuffering;
    /** @type {?} */
    MatVideoSpinnerComponent.prototype.videoLoaded;
    /**
     * @type {?}
     * @private
     */
    MatVideoSpinnerComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    MatVideoSpinnerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MatVideoSpinnerComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3VpL21hdC12aWRlby1zcGlubmVyL21hdC12aWRlby1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFhNUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFTbkMsWUFBb0IsUUFBbUIsRUFBVSxHQUFpQjtRQUE5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVB6RCxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBRTFCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRVosV0FBTSxHQUFtQixFQUFFLENBQUM7SUFFaUMsQ0FBQzs7OztJQUV0RSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFROzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN4RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFROzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUM1RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUTs7OztnQkFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDekcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVE7Ozs7Z0JBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3hHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVE7Ozs7Z0JBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1NBQ2hILENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7OztRQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1FBRTFELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHNGQUFpRDs7YUFRbEQ7Ozs7WUFmb0QsU0FBUztZQUdyRCxZQUFZOzs7b0JBY2xCLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUROLHlDQUFpQzs7SUFDakMsMkNBQTBCOztJQUUxQixrREFBdUI7O0lBQ3ZCLCtDQUFvQjs7Ozs7SUFFcEIsMENBQW9DOzs7OztJQUV4Qiw0Q0FBMkI7Ozs7O0lBQUUsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC12aWRlby1zcGlubmVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXG4gICAgXCIuL21hdC12aWRlby1zcGlubmVyLmNvbXBvbmVudC5zY3NzXCIsXG4gICAgXCIuL2luZGljYXRvcnMvc3Bpbi5zY3NzXCIsXG4gICAgXCIuL2luZGljYXRvcnMvZG90LnNjc3NcIixcbiAgICBcIi4vaW5kaWNhdG9ycy9zcGxpdC1yaW5nLnNjc3NcIixcbiAgICBcIi4vaW5kaWNhdG9ycy9ob3VyZ2xhc3Muc2Nzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9TcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gIEBJbnB1dCgpIHNwaW5uZXIgPSBcInNwaW5cIjtcblxuICB2aWRlb0J1ZmZlcmluZyA9IGZhbHNlO1xuICB2aWRlb0xvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMgPSBbXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwibG9hZHN0YXJ0XCIsIGNhbGxiYWNrOiBldmVudCA9PiAodGhpcy52aWRlb0xvYWRlZCA9IGZhbHNlKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiBcImxvYWRlZG1ldGFkYXRhXCIsIGNhbGxiYWNrOiBldmVudCA9PiAodGhpcy52aWRlb0xvYWRlZCA9IHRydWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwiY2FucGxheVwiLCBjYWxsYmFjazogZXZlbnQgPT4gKHRoaXMudmlkZW9CdWZmZXJpbmcgPSBmYWxzZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogXCJ3YWl0aW5nXCIsIGNhbGxiYWNrOiBldmVudCA9PiAodGhpcy52aWRlb0J1ZmZlcmluZyA9IHRydWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6IFwiZHVyYXRpb25jaGFuZ2VcIiwgY2FsbGJhY2s6IGV2ZW50ID0+ICh0aGlzLnZpZGVvQnVmZmVyaW5nID0gdHJ1ZSksIGRpc3Bvc2U6IG51bGwgfVxuICAgIF07XG5cbiAgICB0aGlzLnZpZGVvLm9ubG9hZGVkZGF0YSA9ICgpID0+ICh0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZSk7XG5cbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWRlby5vbmxvYWRlZGRhdGEgPSBudWxsO1xuXG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxufVxuIl19