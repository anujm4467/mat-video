/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
export class EventService {
    constructor() { }
    /**
     * @param {?} renderer
     * @param {?} events
     * @return {?}
     */
    addEvents(renderer, events) {
        for (const event of events) {
            event.dispose = renderer.listen(event.element, event.name, (/**
             * @param {?} newEvent
             * @return {?}
             */
            newEvent => event.callback(newEvent)));
        }
    }
    /**
     * @param {?} events
     * @return {?}
     */
    removeEvents(events) {
        for (const event of events) {
            if (event.dispose) {
                event.dispose();
            }
        }
    }
}
EventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EventService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSXRELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLGdCQUFlLENBQUM7Ozs7OztJQUVoQixTQUFTLENBQUMsUUFBbUIsRUFBRSxNQUFzQjtRQUNuRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSTs7OztZQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1NBQ2xHO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBc0I7UUFDakMsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7OztZQWhCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkRXZlbnRzKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGV2ZW50czogRXZlbnRIYW5kbGVyW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgZXZlbnQuZGlzcG9zZSA9IHJlbmRlcmVyLmxpc3RlbihldmVudC5lbGVtZW50LCBldmVudC5uYW1lLCBuZXdFdmVudCA9PiBldmVudC5jYWxsYmFjayhuZXdFdmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cyhldmVudHM6IEV2ZW50SGFuZGxlcltdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudC5kaXNwb3NlKSB7XG4gICAgICAgIGV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==