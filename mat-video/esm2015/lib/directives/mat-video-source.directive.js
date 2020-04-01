/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input } from "@angular/core";
import { MatVideoComponent } from "../video.component";
export class MatVideoSourceDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoSourceDirective.decorators = [
    { type: Directive, args: [{
                selector: "[matVideoSource]"
            },] }
];
/** @nocollapse */
MatVideoSourceDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MatVideoSourceDirective.propDecorators = {
    src: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MatVideoSourceDirective.prototype.src;
    /** @type {?} */
    MatVideoSourceDirective.prototype.type;
    /**
     * @type {?}
     * @private
     */
    MatVideoSourceDirective.prototype.init;
    /**
     * @type {?}
     * @private
     */
    MatVideoSourceDirective.prototype.video;
    /**
     * @type {?}
     * @private
     */
    MatVideoSourceDirective.prototype.source;
    /**
     * @type {?}
     * @private
     */
    MatVideoSourceDirective.prototype.matVideoComponent;
    /**
     * @type {?}
     * @private
     */
    MatVideoSourceDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLdkQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFRbEMsWUFBNEIsaUJBQW9DLEVBQVUsRUFBYztRQUE1RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVAvRSxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFFckIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUtsQixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSlEsaUJBQWlCLHVCQWFYLElBQUk7WUFmQyxVQUFVOzs7a0JBUTNCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLHNDQUE0Qjs7SUFDNUIsdUNBQTZCOzs7OztJQUU3Qix1Q0FBb0I7Ozs7O0lBQ3BCLHdDQUFpQzs7Ozs7SUFDakMseUNBQWtDOzs7OztJQUV0QixvREFBb0Q7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tIFwiLi4vdmlkZW8uY29tcG9uZW50XCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbbWF0VmlkZW9Tb3VyY2VdXCJcbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpbml0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSB2aWRlbzogTWF0VmlkZW9Db21wb25lbnQ7XG4gIHByaXZhdGUgc291cmNlOiBIVE1MU291cmNlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgbWF0VmlkZW9Db21wb25lbnQ6IE1hdFZpZGVvQ29tcG9uZW50LCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy52aWRlbyA9IG1hdFZpZGVvQ29tcG9uZW50O1xuICAgIHRoaXMuc291cmNlID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5zcmMgPSB0aGlzLnNyYztcbiAgICB0aGlzLnNvdXJjZS50eXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKCF0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgIH1cbiAgfVxufVxuIl19