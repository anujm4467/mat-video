/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { EventService } from "../../services/event.service";
var MatVolumeControlComponent = /** @class */ (function () {
    function MatVolumeControlComponent(evt) {
        this.evt = evt;
        this.video = null;
        this.color = "primary";
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this.pMuted = false;
        this.mutedChanged = new EventEmitter();
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
        { type: Component, args: [{
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
        video: [{ type: Input }],
        color: [{ type: Input }],
        volume: [{ type: Input }],
        volumeChanged: [{ type: Output }],
        muted: [{ type: Input }],
        mutedChanged: [{ type: Output }],
        keyboard: [{ type: Input }],
        onMuteKey: [{ type: HostListener, args: ["document:keyup.m", ["$event"],] }]
    };
    return MatVolumeControlComponent;
}());
export { MatVolumeControlComponent };
if (false) {
    /** @type {?} */
    MatVolumeControlComponent.prototype.video;
    /** @type {?} */
    MatVolumeControlComponent.prototype.color;
    /** @type {?} */
    MatVolumeControlComponent.prototype.volume;
    /** @type {?} */
    MatVolumeControlComponent.prototype.volumeChanged;
    /**
     * @type {?}
     * @private
     */
    MatVolumeControlComponent.prototype.pMuted;
    /** @type {?} */
    MatVolumeControlComponent.prototype.mutedChanged;
    /** @type {?} */
    MatVolumeControlComponent.prototype.keyboard;
    /**
     * @type {?}
     * @private
     */
    MatVolumeControlComponent.prototype.evt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVEO0lBNEJFLG1DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBdEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTdDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFVYixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFNUMsYUFBUSxHQUFHLElBQUksQ0FBQztJQUVlLENBQUM7SUFiekMsc0JBQ0ksNENBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUNELFVBQVUsQ0FBVTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLENBQUM7OztPQUpBOzs7OztJQVlELDZDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVE7Ozs7SUFBUixVQUFTLEtBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUdELDZDQUFTOzs7O0lBRFQsVUFDVSxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsMmtCQUFrRDs7aUJBRW5EOzs7O2dCQU5RLFlBQVk7Ozt3QkFRbEIsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsTUFBTTt3QkFHTixLQUFLOytCQVNMLE1BQU07MkJBRU4sS0FBSzs0QkE4QkwsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQU85QyxnQ0FBQztDQUFBLEFBL0RELElBK0RDO1NBMURZLHlCQUF5Qjs7O0lBQ3BDLDBDQUF3Qzs7SUFFeEMsMENBQXlDOztJQUV6QywyQ0FBb0I7O0lBRXBCLGtEQUFxRDs7Ozs7SUFFckQsMkNBQXVCOztJQVV2QixpREFBcUQ7O0lBRXJELDZDQUF5Qjs7Ozs7SUFFYix3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5cbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtdm9sdW1lLWNvbnRyb2xcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSBcInByaW1hcnlcIjtcblxuICBASW5wdXQoKSB2b2x1bWUgPSAxO1xuXG4gIEBPdXRwdXQoKSB2b2x1bWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBwTXV0ZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IG11dGVkKCkge1xuICAgIHJldHVybiB0aGlzLnBNdXRlZDtcbiAgfVxuICBzZXQgbXV0ZWQodjogYm9vbGVhbikge1xuICAgIHRoaXMucE11dGVkID0gdjtcbiAgICB0aGlzLnZpZGVvLm11dGVkID0gdGhpcy5wTXV0ZWQ7XG4gIH1cblxuICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7fVxuXG4gIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52b2x1bWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIHRoaXMudm9sdW1lQ2hhbmdlZC5lbWl0KHRoaXMudm9sdW1lKTtcblxuICAgIGlmICh0aGlzLnZvbHVtZSA+IDApIHtcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldE11dGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXV0ZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTXV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkO1xuICAgIHRoaXMudXBkYXRlTXV0ZWQoKTtcbiAgfVxuXG4gIHVwZGF0ZU11dGVkKCk6IHZvaWQge1xuICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLm11dGVkO1xuICAgIHRoaXMubXV0ZWRDaGFuZ2VkLmVtaXQodGhpcy5tdXRlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5dXAubVwiLCBbXCIkZXZlbnRcIl0pXG4gIG9uTXV0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufVxuIl19