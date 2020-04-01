/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input } from "@angular/core";
import { MatVideoComponent } from "../video.component";
export class MatVideoTrackDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoTrackDirective.decorators = [
    { type: Directive, args: [{
                selector: "[matVideoTrack]"
            },] }
];
/** @nocollapse */
MatVideoTrackDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MatVideoTrackDirective.propDecorators = {
    src: [{ type: Input }],
    kind: [{ type: Input }],
    srclang: [{ type: Input }],
    label: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MatVideoTrackDirective.prototype.src;
    /** @type {?} */
    MatVideoTrackDirective.prototype.kind;
    /** @type {?} */
    MatVideoTrackDirective.prototype.srclang;
    /** @type {?} */
    MatVideoTrackDirective.prototype.label;
    /**
     * @type {?}
     * @private
     */
    MatVideoTrackDirective.prototype.init;
    /**
     * @type {?}
     * @private
     */
    MatVideoTrackDirective.prototype.video;
    /**
     * @type {?}
     * @private
     */
    MatVideoTrackDirective.prototype.track;
    /**
     * @type {?}
     * @private
     */
    MatVideoTrackDirective.prototype.matVideoComponent;
    /**
     * @type {?}
     * @private
     */
    MatVideoTrackDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3ZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBVWpDLFlBQTRCLGlCQUFvQyxFQUFVLEVBQWM7UUFBNUQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUL0UsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUV0QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBS2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBSlEsaUJBQWlCLHVCQWVYLElBQUk7WUFqQkMsVUFBVTs7O2tCQVEzQixLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBSE4scUNBQTRCOztJQUM1QixzQ0FBNkI7O0lBQzdCLHlDQUFnQzs7SUFDaEMsdUNBQThCOzs7OztJQUU5QixzQ0FBb0I7Ozs7O0lBQ3BCLHVDQUFpQzs7Ozs7SUFDakMsdUNBQWdDOzs7OztJQUVwQixtREFBb0Q7Ozs7O0lBQUUsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tIFwiLi4vdmlkZW8uY29tcG9uZW50XCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbbWF0VmlkZW9UcmFja11cIlxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBraW5kOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBzcmNsYW5nOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIGluaXQgPSB0cnVlO1xuICBwcml2YXRlIHZpZGVvOiBNYXRWaWRlb0NvbXBvbmVudDtcbiAgcHJpdmF0ZSB0cmFjazogSFRNTFRyYWNrRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgbWF0VmlkZW9Db21wb25lbnQ6IE1hdFZpZGVvQ29tcG9uZW50LCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy52aWRlbyA9IG1hdFZpZGVvQ29tcG9uZW50O1xuICAgIHRoaXMudHJhY2sgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudHJhY2suc3JjID0gdGhpcy5zcmM7XG4gICAgdGhpcy50cmFjay5raW5kID0gdGhpcy5raW5kO1xuICAgIHRoaXMudHJhY2suc3JjbGFuZyA9IHRoaXMuc3JjbGFuZztcbiAgICB0aGlzLnRyYWNrLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuICAgIGlmICghdGhpcy5pbml0KSB7XG4gICAgICB0aGlzLnZpZGVvLmxvYWQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==