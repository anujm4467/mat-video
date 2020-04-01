/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var MatFrameByFrameControlComponent = /** @class */ (function () {
    function MatFrameByFrameControlComponent() {
        this.fps = 29.97;
    }
    /**
     * @return {?}
     */
    MatFrameByFrameControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} nbFrames
     * @return {?}
     */
    MatFrameByFrameControlComponent.prototype.seekFrames = /**
     * @param {?} nbFrames
     * @return {?}
     */
    function (nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        /** @type {?} */
        var currentFrames = this.video.currentTime * this.fps;
        /** @type {?} */
        var newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
        this.video.currentTime = newPos;
    };
    MatFrameByFrameControlComponent.decorators = [
        { type: Component, args: [{
                    selector: "mat-frame-by-frame-control",
                    template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n  <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n  <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatFrameByFrameControlComponent.ctorParameters = function () { return []; };
    MatFrameByFrameControlComponent.propDecorators = {
        video: [{ type: Input }],
        fps: [{ type: Input }]
    };
    return MatFrameByFrameControlComponent;
}());
export { MatFrameByFrameControlComponent };
if (false) {
    /** @type {?} */
    MatFrameByFrameControlComponent.prototype.video;
    /** @type {?} */
    MatFrameByFrameControlComponent.prototype.fps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFTRTtRQUZTLFFBQUcsR0FBRyxLQUFLLENBQUM7SUFFTixDQUFDOzs7O0lBRWhCLGtEQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsb0RBQVU7Ozs7SUFBVixVQUFXLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BCOztZQUVLLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRzs7WUFDakQsTUFBTSxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QywrWkFBMEQ7O2lCQUUzRDs7Ozs7d0JBRUUsS0FBSztzQkFDTCxLQUFLOztJQWVSLHNDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksK0JBQStCOzs7SUFDMUMsZ0RBQWlDOztJQUNqQyw4Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2xcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICBASW5wdXQoKSBmcHMgPSAyOS45NztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHNlZWtGcmFtZXMobmJGcmFtZXM6IG51bWJlcikge1xuICAgIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcbiAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50RnJhbWVzID0gdGhpcy52aWRlby5jdXJyZW50VGltZSAqIHRoaXMuZnBzO1xuICAgIGNvbnN0IG5ld1BvcyA9IChjdXJyZW50RnJhbWVzICsgbmJGcmFtZXMpIC8gdGhpcy5mcHMgKyAwLjAwMDAxO1xuICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSBuZXdQb3M7XG4gIH1cbn1cbiJdfQ==