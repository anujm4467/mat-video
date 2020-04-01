/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { EventService } from "../../services/event.service";
export class MatVolumeControlComponent {
    /**
     * @param {?} evt
     */
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = "primary";
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this.pMuted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    get muted() {
        return this.pMuted;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set muted(v) {
        this.pMuted = v;
        this.video.muted = this.pMuted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0) {
            this.setMuted(false);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMuted(value) {
        if (this.muted !== value) {
            this.toggleMuted();
        }
    }
    /**
     * @return {?}
     */
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    /**
     * @return {?}
     */
    updateMuted() {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
}
MatVolumeControlComponent.decorators = [
    { type: Component, args: [{
                selector: "mat-volume-control",
                template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\"> </mat-slider>\n</div>\n",
                styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
            }] }
];
/** @nocollapse */
MatVolumeControlComponent.ctorParameters = () => [
    { type: EventService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUF1QnBDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUF0QjVCLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBRS9CLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBRWhDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFFVixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVViLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQUcsSUFBSSxDQUFDO0lBRWUsQ0FBQzs7OztJQWJ6QyxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFRRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsMmtCQUFrRDs7YUFFbkQ7Ozs7WUFOUSxZQUFZOzs7b0JBUWxCLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLOzRCQUVMLE1BQU07b0JBR04sS0FBSzsyQkFTTCxNQUFNO3VCQUVOLEtBQUs7d0JBOEJMLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWxENUMsMENBQXdDOztJQUV4QywwQ0FBeUM7O0lBRXpDLDJDQUFvQjs7SUFFcEIsa0RBQXFEOzs7OztJQUVyRCwyQ0FBdUI7O0lBVXZCLGlEQUFxRDs7SUFFckQsNkNBQXlCOzs7OztJQUViLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC12b2x1bWUtY29udHJvbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IG51bGw7XG5cbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9IFwicHJpbWFyeVwiO1xuXG4gIEBJbnB1dCgpIHZvbHVtZSA9IDE7XG5cbiAgQE91dHB1dCgpIHZvbHVtZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIHBNdXRlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgbXV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucE11dGVkO1xuICB9XG4gIHNldCBtdXRlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5wTXV0ZWQgPSB2O1xuICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLnBNdXRlZDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBtdXRlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2UpIHt9XG5cbiAgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZvbHVtZSA9IHZhbHVlO1xuICAgIHRoaXMudmlkZW8udm9sdW1lID0gdGhpcy52b2x1bWU7XG4gICAgdGhpcy52b2x1bWVDaGFuZ2VkLmVtaXQodGhpcy52b2x1bWUpO1xuXG4gICAgaWYgKHRoaXMudm9sdW1lID4gMCkge1xuICAgICAgdGhpcy5zZXRNdXRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TXV0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdXRlZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudG9nZ2xlTXV0ZWQoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNdXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm11dGVkID0gIXRoaXMubXV0ZWQ7XG4gICAgdGhpcy51cGRhdGVNdXRlZCgpO1xuICB9XG5cbiAgdXBkYXRlTXV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMubXV0ZWQ7XG4gICAgdGhpcy5tdXRlZENoYW5nZWQuZW1pdCh0aGlzLm11dGVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cC5tXCIsIFtcIiRldmVudFwiXSlcbiAgb25NdXRlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlTXV0ZWQoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=