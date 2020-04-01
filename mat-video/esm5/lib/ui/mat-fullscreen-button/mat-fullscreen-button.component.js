/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { EventService } from "../../services/event.service";
import { FullscreenService } from "../../services/fullscreen.service";
var MatFullscreenButtonComponent = /** @class */ (function () {
    function MatFullscreenButtonComponent(fscreen, evt) {
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
        { type: Component, args: [{
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
        player: [{ type: Input }],
        fullscreen: [{ type: Input }],
        fullscreenChanged: [{ type: Output }],
        keyboard: [{ type: Input }],
        onFullscreenKey: [{ type: HostListener, args: ["document:keyup.f", ["$event"],] }]
    };
    return MatFullscreenButtonComponent;
}());
export { MatFullscreenButtonComponent };
if (false) {
    /** @type {?} */
    MatFullscreenButtonComponent.prototype.canFullscreen;
    /** @type {?} */
    MatFullscreenButtonComponent.prototype.player;
    /** @type {?} */
    MatFullscreenButtonComponent.prototype.fullscreen;
    /** @type {?} */
    MatFullscreenButtonComponent.prototype.fullscreenChanged;
    /** @type {?} */
    MatFullscreenButtonComponent.prototype.keyboard;
    /**
     * @type {?}
     * @private
     */
    MatFullscreenButtonComponent.prototype.fscreen;
    /**
     * @type {?}
     * @private
     */
    MatFullscreenButtonComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFO0lBZ0JFLHNDQUFvQixPQUEwQixFQUFVLEdBQWlCO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZ6RSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUliLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVqRCxhQUFRLEdBQUcsSUFBSSxDQUFDO0lBRW1ELENBQUM7Ozs7SUFFN0UsK0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBaEcsQ0FBZ0csRUFBQyxDQUFDO0lBQ25JLENBQUM7Ozs7O0lBRUQsb0RBQWE7Ozs7SUFBYixVQUFjLEtBQWM7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQ25ELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELHVEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsMERBQW1COzs7O0lBQW5CLFVBQW9CLEtBQWM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFHRCxzREFBZTs7OztJQURmLFVBQ2dCLEtBQW9CO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG9PQUFxRDs7aUJBRXREOzs7O2dCQU5RLGlCQUFpQjtnQkFEakIsWUFBWTs7O3lCQVdsQixLQUFLOzZCQUVMLEtBQUs7b0NBRUwsTUFBTTsyQkFFTixLQUFLO2tDQWlDTCxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTzlDLG1DQUFDO0NBQUEsQUF0REQsSUFzREM7U0FqRFksNEJBQTRCOzs7SUFDdkMscURBQXNCOztJQUV0Qiw4Q0FBa0M7O0lBRWxDLGtEQUE0Qjs7SUFFNUIseURBQTBEOztJQUUxRCxnREFBeUI7Ozs7O0lBRWIsK0NBQWtDOzs7OztJQUFFLDJDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGdWxsc2NyZWVuU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdWxsc2NyZWVuLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC1mdWxsc2NyZWVuLWJ1dHRvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYW5GdWxsc2NyZWVuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcGxheWVyOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgZnVsbHNjcmVlbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnNjcmVlbjogRnVsbHNjcmVlblNlcnZpY2UsIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZnNjcmVlbi5pc0VuYWJsZWQoKSkge1xuICAgICAgdGhpcy5jYW5GdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmZzY3JlZW4ub25DaGFuZ2UoZXZlbnQgPT4gKHRoaXMuZnNjcmVlbi5pc0Z1bGxzY3JlZW4oKSA/IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbih0cnVlKSA6IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbihmYWxzZSkpKTtcbiAgfVxuXG4gIHNldEZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5jYW5GdWxsc2NyZWVuICYmIHRoaXMuZnVsbHNjcmVlbiAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZUZ1bGxzY3JlZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID8gdGhpcy5mc2NyZWVuLnJlcXVlc3QodGhpcy5wbGF5ZXIpIDogdGhpcy5mc2NyZWVuLmV4aXQoKTtcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2VkLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcbiAgfVxuXG4gIG9uQ2hhbmdlc0Z1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSB2YWx1ZTtcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2VkLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cC5mXCIsIFtcIiRldmVudFwiXSlcbiAgb25GdWxsc2NyZWVuS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==