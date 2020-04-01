/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input } from "@angular/core";
import { MatVideoComponent } from "../video.component";
var MatVideoTrackDirective = /** @class */ (function () {
    function MatVideoTrackDirective(matVideoComponent, el) {
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
    MatVideoTrackDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init) {
            this.video.load();
        }
    };
    MatVideoTrackDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[matVideoTrack]"
                },] }
    ];
    /** @nocollapse */
    MatVideoTrackDirective.ctorParameters = function () { return [
        { type: MatVideoComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    MatVideoTrackDirective.propDecorators = {
        src: [{ type: Input }],
        kind: [{ type: Input }],
        srclang: [{ type: Input }],
        label: [{ type: Input }]
    };
    return MatVideoTrackDirective;
}());
export { MatVideoTrackDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZEO0lBYUUsZ0NBQTRCLGlCQUFvQyxFQUFVLEVBQWM7UUFBNUQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUL0UsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUV0QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBS2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFKUSxpQkFBaUIsdUJBZVgsSUFBSTtnQkFqQkMsVUFBVTs7O3NCQVEzQixLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQXNCUiw2QkFBQztDQUFBLEFBN0JELElBNkJDO1NBMUJZLHNCQUFzQjs7O0lBQ2pDLHFDQUE0Qjs7SUFDNUIsc0NBQTZCOztJQUM3Qix5Q0FBZ0M7O0lBQ2hDLHVDQUE4Qjs7Ozs7SUFFOUIsc0NBQW9COzs7OztJQUNwQix1Q0FBaUM7Ozs7O0lBQ2pDLHVDQUFnQzs7Ozs7SUFFcEIsbURBQW9EOzs7OztJQUFFLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZGVvLmNvbXBvbmVudFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW21hdFZpZGVvVHJhY2tdXCJcbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9UcmFja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkga2luZDogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgc3JjbGFuZzogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpbml0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSB2aWRlbzogTWF0VmlkZW9Db21wb25lbnQ7XG4gIHByaXZhdGUgdHJhY2s6IEhUTUxUcmFja0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIG1hdFZpZGVvQ29tcG9uZW50OiBNYXRWaWRlb0NvbXBvbmVudCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMudmlkZW8gPSBtYXRWaWRlb0NvbXBvbmVudDtcbiAgICB0aGlzLnRyYWNrID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnRyYWNrLnNyYyA9IHRoaXMuc3JjO1xuICAgIHRoaXMudHJhY2sua2luZCA9IHRoaXMua2luZDtcbiAgICB0aGlzLnRyYWNrLnNyY2xhbmcgPSB0aGlzLnNyY2xhbmc7XG4gICAgdGhpcy50cmFjay5sYWJlbCA9IHRoaXMubGFiZWw7XG5cbiAgICBpZiAoIXRoaXMuaW5pdCkge1xuICAgICAgdGhpcy52aWRlby5sb2FkKCk7XG4gICAgfVxuICB9XG59XG4iXX0=