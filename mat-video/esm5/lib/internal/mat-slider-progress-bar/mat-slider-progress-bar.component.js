/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Attribute } from "@angular/core";
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from "@angular/material/slider";
import { FocusMonitor } from "@angular/cdk/a11y";
import { Directionality } from "@angular/cdk/bidi";
/**
 * Counter used to generate unique IDs for progress bars.
 * @type {?}
 */
var sliderprogressbarId = 0;
var MatSliderProgressBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatSliderProgressBarComponent, _super);
    function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
        _this.mode = "buffer";
        _this.value = 0;
        _this.pBufferValue = 0;
        /**
         * The id of the progress bar.
         */
        _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
        _this.tabIndex = parseInt(tabIndex, 10) || 0;
        return _this;
    }
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        function () {
            return this.pBufferValue;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.pBufferValue = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
        /** CSS styles for the track fill element. */
        get: /**
         * CSS styles for the track fill element.
         * @return {?}
         */
        function () {
            if (this.mode === "buffer") {
                /** @type {?} */
                var axis = this.vertical ? "Y" : "X";
                return {
                    transform: "translate" + axis + "(0px) scale" + axis + "(" + this.pBufferValue / 100 + ")"
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    MatSliderProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: "mat-slider-progress-bar",
                    template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n      <defs>\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n        </pattern>\n      </defs>\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n    </svg>\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
                    providers: [MAT_SLIDER_VALUE_ACCESSOR],
                    host: {
                        "(focus)": "_onFocus()",
                        "(blur)": "_onBlur()",
                        "(click)": 'this["_onClick"] ? this["_onClick"]($event) : null',
                        // Angular 5/6 support
                        "(mousedown)": 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
                        // Angular 7 support
                        "(keydown)": "_onKeydown($event)",
                        "(keyup)": "_onKeyup()",
                        "(mouseenter)": "_onMouseenter()",
                        "(slide)": "_onSlide($event)",
                        "(slideend)": "_onSlideEnd()",
                        "(slidestart)": "_onSlideStart($event)",
                        class: "mat-slider",
                        role: "slider",
                        "[tabIndex]": "tabIndex",
                        "[attr.aria-disabled]": "disabled",
                        "[attr.aria-valuemax]": "max",
                        "[attr.aria-valuemin]": "min",
                        "[attr.aria-valuenow]": "value",
                        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
                        "[class.mat-slider-disabled]": "disabled",
                        "[class.mat-slider-has-ticks]": "tickInterval",
                        "[class.mat-slider-horizontal]": "!vertical",
                        "[class.mat-slider-axis-inverted]": "_invertAxis",
                        "[class.mat-slider-sliding]": "_isSliding",
                        "[class.mat-slider-thumb-label-showing]": "thumbLabel",
                        "[class.mat-slider-vertical]": "vertical",
                        "[class.mat-slider-min-value]": "_isMinValue",
                        "[class.mat-slider-hide-last-tick]": "disabled || _isMinValue && _thumbGap && _invertAxis"
                    },
                    inputs: ["disabled", "color", "tabIndex"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
                }] }
    ];
    /** @nocollapse */
    MatSliderProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Attribute, args: ["tabindex",] }] }
    ]; };
    MatSliderProgressBarComponent.propDecorators = {
        mode: [{ type: Input }],
        value: [{ type: Input }],
        bufferValue: [{ type: Input }]
    };
    return MatSliderProgressBarComponent;
}(MatSlider));
export { MatSliderProgressBarComponent };
if (false) {
    /** @type {?} */
    MatSliderProgressBarComponent.prototype.mode;
    /** @type {?} */
    MatSliderProgressBarComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    MatSliderProgressBarComponent.prototype.pBufferValue;
    /**
     * The id of the progress bar.
     * @type {?}
     */
    MatSliderProgressBarComponent.prototype.sliderprogressbarId;
}
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxTQUFTLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztJQUcvQyxtQkFBbUIsR0FBRyxDQUFDO0FBRTNCO0lBcUNtRCx5REFBUztJQWdCMUQsdUNBQ0UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3hCLEdBQW1CLEVBQ1IsUUFBZ0I7UUFMekMsWUFPRSxrQkFBTSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FFbEU7UUF4QlEsVUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBU1gsa0JBQVksR0FBRyxDQUFDLENBQUM7Ozs7UUFHekIseUJBQW1CLEdBQUcsNkJBQTJCLG1CQUFtQixFQUFJLENBQUM7UUFVdkUsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDOUMsQ0FBQztJQXJCRCxzQkFDSSxzREFBVztRQUZmLDBEQUEwRDs7Ozs7UUFDMUQ7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixDQUFTO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQXFCRCxzQkFBSSw2REFBa0I7UUFEdEIsNkNBQTZDOzs7OztRQUM3QztZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7O29CQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUN0QyxPQUFPO29CQUNMLFNBQVMsRUFBRSxjQUFZLElBQUksbUJBQWMsSUFBSSxTQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxNQUFHO2lCQUM1RSxDQUFDO2FBQ0g7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBeEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxrdENBQXVEO29CQUV2RCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDdEMsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixRQUFRLEVBQUUsV0FBVzt3QkFDckIsU0FBUyxFQUFFLG9EQUFvRDs7d0JBQy9ELGFBQWEsRUFBRSw0REFBNEQ7O3dCQUMzRSxXQUFXLEVBQUUsb0JBQW9CO3dCQUNqQyxTQUFTLEVBQUUsWUFBWTt3QkFDdkIsY0FBYyxFQUFFLGlCQUFpQjt3QkFDakMsU0FBUyxFQUFFLGtCQUFrQjt3QkFDN0IsWUFBWSxFQUFFLGVBQWU7d0JBQzdCLGNBQWMsRUFBRSx1QkFBdUI7d0JBQ3ZDLEtBQUssRUFBRSxZQUFZO3dCQUNuQixJQUFJLEVBQUUsUUFBUTt3QkFDZCxZQUFZLEVBQUUsVUFBVTt3QkFDeEIsc0JBQXNCLEVBQUUsVUFBVTt3QkFDbEMsc0JBQXNCLEVBQUUsS0FBSzt3QkFDN0Isc0JBQXNCLEVBQUUsS0FBSzt3QkFDN0Isc0JBQXNCLEVBQUUsT0FBTzt3QkFDL0IseUJBQXlCLEVBQUUsc0NBQXNDO3dCQUNqRSw2QkFBNkIsRUFBRSxVQUFVO3dCQUN6Qyw4QkFBOEIsRUFBRSxjQUFjO3dCQUM5QywrQkFBK0IsRUFBRSxXQUFXO3dCQUM1QyxrQ0FBa0MsRUFBRSxhQUFhO3dCQUNqRCw0QkFBNEIsRUFBRSxZQUFZO3dCQUMxQyx3Q0FBd0MsRUFBRSxZQUFZO3dCQUN0RCw2QkFBNkIsRUFBRSxVQUFVO3dCQUN6Qyw4QkFBOEIsRUFBRSxhQUFhO3dCQUM3QyxtQ0FBbUMsRUFBRSxxREFBcUQ7cUJBQzNGO29CQUNELE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQTVDMEIsVUFBVTtnQkFFNUIsWUFBWTtnQkFGa0IsaUJBQWlCO2dCQUcvQyxjQUFjLHVCQThEbEIsUUFBUTs2Q0FDUixTQUFTLFNBQUMsVUFBVTs7O3VCQXBCdEIsS0FBSzt3QkFDTCxLQUFLOzhCQUVMLEtBQUs7O0lBZ0NSLG9DQUFDO0NBQUEsQUF6RUQsQ0FxQ21ELFNBQVMsR0FvQzNEO1NBcENZLDZCQUE2Qjs7O0lBQ3hDLDZDQUF5Qjs7SUFDekIsOENBQW1COzs7OztJQVNuQixxREFBeUI7Ozs7O0lBR3pCLDREQUF5RTs7Ozs7Ozs7O0FBeUIzRSxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsR0FBTyxFQUFFLEdBQVM7SUFBbEIsb0JBQUEsRUFBQSxPQUFPO0lBQUUsb0JBQUEsRUFBQSxTQUFTO0lBQzFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCwgQXR0cmlidXRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdFNsaWRlciwgTUFUX1NMSURFUl9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXJcIjtcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2JpZGlcIjtcblxuLyoqIENvdW50ZXIgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzIGZvciBwcm9ncmVzcyBiYXJzLiAqL1xubGV0IHNsaWRlcnByb2dyZXNzYmFySWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LXNsaWRlci1wcm9ncmVzcy1iYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3NcIl0sXG4gIHByb3ZpZGVyczogW01BVF9TTElERVJfVkFMVUVfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgXCIoZm9jdXMpXCI6IFwiX29uRm9jdXMoKVwiLFxuICAgIFwiKGJsdXIpXCI6IFwiX29uQmx1cigpXCIsXG4gICAgXCIoY2xpY2spXCI6ICd0aGlzW1wiX29uQ2xpY2tcIl0gPyB0aGlzW1wiX29uQ2xpY2tcIl0oJGV2ZW50KSA6IG51bGwnLCAvLyBBbmd1bGFyIDUvNiBzdXBwb3J0XG4gICAgXCIobW91c2Vkb3duKVwiOiAndGhpc1tcIl9vbk1vdXNlZG93blwiXSA/IHRoaXNbXCJfb25Nb3VzZWRvd25cIl0oJGV2ZW50KSA6IG51bGwnLCAvLyBBbmd1bGFyIDcgc3VwcG9ydFxuICAgIFwiKGtleWRvd24pXCI6IFwiX29uS2V5ZG93bigkZXZlbnQpXCIsXG4gICAgXCIoa2V5dXApXCI6IFwiX29uS2V5dXAoKVwiLFxuICAgIFwiKG1vdXNlZW50ZXIpXCI6IFwiX29uTW91c2VlbnRlcigpXCIsXG4gICAgXCIoc2xpZGUpXCI6IFwiX29uU2xpZGUoJGV2ZW50KVwiLFxuICAgIFwiKHNsaWRlZW5kKVwiOiBcIl9vblNsaWRlRW5kKClcIixcbiAgICBcIihzbGlkZXN0YXJ0KVwiOiBcIl9vblNsaWRlU3RhcnQoJGV2ZW50KVwiLFxuICAgIGNsYXNzOiBcIm1hdC1zbGlkZXJcIixcbiAgICByb2xlOiBcInNsaWRlclwiLFxuICAgIFwiW3RhYkluZGV4XVwiOiBcInRhYkluZGV4XCIsXG4gICAgXCJbYXR0ci5hcmlhLWRpc2FibGVkXVwiOiBcImRpc2FibGVkXCIsXG4gICAgXCJbYXR0ci5hcmlhLXZhbHVlbWF4XVwiOiBcIm1heFwiLFxuICAgIFwiW2F0dHIuYXJpYS12YWx1ZW1pbl1cIjogXCJtaW5cIixcbiAgICBcIlthdHRyLmFyaWEtdmFsdWVub3ddXCI6IFwidmFsdWVcIixcbiAgICBcIlthdHRyLmFyaWEtb3JpZW50YXRpb25dXCI6ICd2ZXJ0aWNhbCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiJyxcbiAgICBcIltjbGFzcy5tYXQtc2xpZGVyLWRpc2FibGVkXVwiOiBcImRpc2FibGVkXCIsXG4gICAgXCJbY2xhc3MubWF0LXNsaWRlci1oYXMtdGlja3NdXCI6IFwidGlja0ludGVydmFsXCIsXG4gICAgXCJbY2xhc3MubWF0LXNsaWRlci1ob3Jpem9udGFsXVwiOiBcIiF2ZXJ0aWNhbFwiLFxuICAgIFwiW2NsYXNzLm1hdC1zbGlkZXItYXhpcy1pbnZlcnRlZF1cIjogXCJfaW52ZXJ0QXhpc1wiLFxuICAgIFwiW2NsYXNzLm1hdC1zbGlkZXItc2xpZGluZ11cIjogXCJfaXNTbGlkaW5nXCIsXG4gICAgXCJbY2xhc3MubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nXVwiOiBcInRodW1iTGFiZWxcIixcbiAgICBcIltjbGFzcy5tYXQtc2xpZGVyLXZlcnRpY2FsXVwiOiBcInZlcnRpY2FsXCIsXG4gICAgXCJbY2xhc3MubWF0LXNsaWRlci1taW4tdmFsdWVdXCI6IFwiX2lzTWluVmFsdWVcIixcbiAgICBcIltjbGFzcy5tYXQtc2xpZGVyLWhpZGUtbGFzdC10aWNrXVwiOiBcImRpc2FibGVkIHx8IF9pc01pblZhbHVlICYmIF90aHVtYkdhcCAmJiBfaW52ZXJ0QXhpc1wiXG4gIH0sXG4gIGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJjb2xvclwiLCBcInRhYkluZGV4XCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCBleHRlbmRzIE1hdFNsaWRlciB7XG4gIEBJbnB1dCgpIG1vZGUgPSBcImJ1ZmZlclwiO1xuICBASW5wdXQoKSB2YWx1ZSA9IDA7XG4gIC8qKiBCdWZmZXIgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGJhci4gRGVmYXVsdHMgdG8gemVyby4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGJ1ZmZlclZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucEJ1ZmZlclZhbHVlO1xuICB9XG4gIHNldCBidWZmZXJWYWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLnBCdWZmZXJWYWx1ZSA9IGNsYW1wKHYgfHwgMCk7XG4gIH1cbiAgcHJpdmF0ZSBwQnVmZmVyVmFsdWUgPSAwO1xuXG4gIC8qKiBUaGUgaWQgb2YgdGhlIHByb2dyZXNzIGJhci4gKi9cbiAgc2xpZGVycHJvZ3Jlc3NiYXJJZCA9IGBtYXQtc2xpZGVyLXByb2dyZXNzLWJhci0ke3NsaWRlcnByb2dyZXNzYmFySWQrK31gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGRpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgQEF0dHJpYnV0ZShcInRhYmluZGV4XCIpIHRhYkluZGV4OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNNb25pdG9yLCBjaGFuZ2VEZXRlY3RvclJlZiwgZGlyLCB0YWJJbmRleCk7XG4gICAgdGhpcy50YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4LCAxMCkgfHwgMDtcbiAgfVxuXG4gIC8qKiBDU1Mgc3R5bGVzIGZvciB0aGUgdHJhY2sgZmlsbCBlbGVtZW50LiAqL1xuICBnZXQgX3RyYWNrQnVmZmVyU3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGlmICh0aGlzLm1vZGUgPT09IFwiYnVmZmVyXCIpIHtcbiAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLnZlcnRpY2FsID8gXCJZXCIgOiBcIlhcIjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSR7YXhpc30oMHB4KSBzY2FsZSR7YXhpc30oJHt0aGlzLnBCdWZmZXJWYWx1ZSAvIDEwMH0pYFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gdHdvIG51bWJlcnMsIGJ5IGRlZmF1bHQgMCBhbmQgMTAwLiAqL1xuZnVuY3Rpb24gY2xhbXAodjogbnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxMDApIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2KSk7XG59XG4iXX0=