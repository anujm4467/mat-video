/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { EventService } from "../../services/event.service";
import { FullscreenService } from "../../services/fullscreen.service";
export class MatFullscreenButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3RFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBV3ZDLFlBQW9CLE9BQTBCLEVBQVUsR0FBaUI7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnpFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSWIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVsQixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWpELGFBQVEsR0FBRyxJQUFJLENBQUM7SUFFbUQsQ0FBQzs7OztJQUU3RSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFROzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNuSSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFjO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUdELGVBQWUsQ0FBQyxLQUFvQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxvT0FBcUQ7O2FBRXREOzs7O1lBTlEsaUJBQWlCO1lBRGpCLFlBQVk7OztxQkFXbEIsS0FBSzt5QkFFTCxLQUFLO2dDQUVMLE1BQU07dUJBRU4sS0FBSzs4QkFpQ0wsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBekM1QyxxREFBc0I7O0lBRXRCLDhDQUFrQzs7SUFFbEMsa0RBQTRCOztJQUU1Qix5REFBMEQ7O0lBRTFELGdEQUF5Qjs7Ozs7SUFFYiwrQ0FBa0M7Ozs7O0lBQUUsMkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEZ1bGxzY3JlZW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LWZ1bGxzY3JlZW4tYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RnVsbHNjcmVlbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhbkZ1bGxzY3JlZW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBwbGF5ZXI6IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgQElucHV0KCkgZnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBmdWxsc2NyZWVuQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBrZXlib2FyZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmc2NyZWVuOiBGdWxsc2NyZWVuU2VydmljZSwgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mc2NyZWVuLmlzRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmNhbkZ1bGxzY3JlZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZnNjcmVlbi5vbkNoYW5nZShldmVudCA9PiAodGhpcy5mc2NyZWVuLmlzRnVsbHNjcmVlbigpID8gdGhpcy5vbkNoYW5nZXNGdWxsc2NyZWVuKHRydWUpIDogdGhpcy5vbkNoYW5nZXNGdWxsc2NyZWVuKGZhbHNlKSkpO1xuICB9XG5cbiAgc2V0RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmNhbkZ1bGxzY3JlZW4gJiYgdGhpcy5mdWxsc2NyZWVuICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhdGhpcy5mdWxsc2NyZWVuO1xuICAgIHRoaXMudXBkYXRlRnVsbHNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmZzY3JlZW4ucmVxdWVzdCh0aGlzLnBsYXllcikgOiB0aGlzLmZzY3JlZW4uZXhpdCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgb25DaGFuZ2VzRnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IHZhbHVlO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmtleXVwLmZcIiwgW1wiJGV2ZW50XCJdKVxuICBvbkZ1bGxzY3JlZW5LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgdGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufVxuIl19