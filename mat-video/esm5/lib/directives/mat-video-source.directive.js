/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input } from "@angular/core";
import { MatVideoComponent } from "../video.component";
var MatVideoSourceDirective = /** @class */ (function () {
    function MatVideoSourceDirective(matVideoComponent, el) {
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
    MatVideoSourceDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init) {
            this.video.load();
        }
    };
    MatVideoSourceDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[matVideoSource]"
                },] }
    ];
    /** @nocollapse */
    MatVideoSourceDirective.ctorParameters = function () { return [
        { type: MatVideoComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    MatVideoSourceDirective.propDecorators = {
        src: [{ type: Input }],
        type: [{ type: Input }]
    };
    return MatVideoSourceDirective;
}());
export { MatVideoSourceDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQ7SUFXRSxpQ0FBNEIsaUJBQW9DLEVBQVUsRUFBYztRQUE1RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVAvRSxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFFckIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUtsQixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKUSxpQkFBaUIsdUJBYVgsSUFBSTtnQkFmQyxVQUFVOzs7c0JBUTNCLEtBQUs7dUJBQ0wsS0FBSzs7SUFvQlIsOEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXRCWSx1QkFBdUI7OztJQUNsQyxzQ0FBNEI7O0lBQzVCLHVDQUE2Qjs7Ozs7SUFFN0IsdUNBQW9COzs7OztJQUNwQix3Q0FBaUM7Ozs7O0lBQ2pDLHlDQUFrQzs7Ozs7SUFFdEIsb0RBQW9EOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZGVvLmNvbXBvbmVudFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW21hdFZpZGVvU291cmNlXVwiXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZpZGVvU291cmNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgaW5pdCA9IHRydWU7XG4gIHByaXZhdGUgdmlkZW86IE1hdFZpZGVvQ29tcG9uZW50O1xuICBwcml2YXRlIHNvdXJjZTogSFRNTFNvdXJjZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIG1hdFZpZGVvQ29tcG9uZW50OiBNYXRWaWRlb0NvbXBvbmVudCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMudmlkZW8gPSBtYXRWaWRlb0NvbXBvbmVudDtcbiAgICB0aGlzLnNvdXJjZSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2Uuc3JjID0gdGhpcy5zcmM7XG4gICAgdGhpcy5zb3VyY2UudHlwZSA9IHRoaXMudHlwZTtcblxuICAgIGlmICghdGhpcy5pbml0KSB7XG4gICAgICB0aGlzLnZpZGVvLmxvYWQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==