/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var MatTimeControlComponent = /** @class */ (function () {
    function MatTimeControlComponent() {
    }
    MatTimeControlComponent.decorators = [
        { type: Component, args: [{
                    selector: "mat-time-control",
                    template: "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\n",
                    styles: [".playtime{display:inline;font-size:12px}"]
                }] }
    ];
    /** @nocollapse */
    MatTimeControlComponent.ctorParameters = function () { return []; };
    MatTimeControlComponent.propDecorators = {
        video: [{ type: Input }]
    };
    return MatTimeControlComponent;
}());
export { MatTimeControlComponent };
if (false) {
    /** @type {?} */
    MatTimeControlComponent.prototype.video;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFRRTtJQUFlLENBQUM7O2dCQVJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNEhBQWdEOztpQkFFakQ7Ozs7O3dCQUVFLEtBQUs7O0lBR1IsOEJBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSx1QkFBdUI7OztJQUNsQyx3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC10aW1lLWNvbnRyb2xcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRpbWVDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19