/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var EventService = /** @class */ (function () {
    function EventService() {
    }
    /**
     * @param {?} renderer
     * @param {?} events
     * @return {?}
     */
    EventService.prototype.addEvents = /**
     * @param {?} renderer
     * @param {?} events
     * @return {?}
     */
    function (renderer, events) {
        var e_1, _a;
        var _loop_1 = function (event_1) {
            event_1.dispose = renderer.listen(event_1.element, event_1.name, (/**
             * @param {?} newEvent
             * @return {?}
             */
            function (newEvent) { return event_1.callback(newEvent); }));
        };
        try {
            for (var events_1 = tslib_1.__values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                _loop_1(event_1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} events
     * @return {?}
     */
    EventService.prototype.removeEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var e_2, _a;
        try {
            for (var events_2 = tslib_1.__values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                var event_2 = events_2_1.value;
                if (event_2.dispose) {
                    event_2.dispose();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    EventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EventService.ctorParameters = function () { return []; };
    return EventService;
}());
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd0RDtJQUVFO0lBQWUsQ0FBQzs7Ozs7O0lBRWhCLGdDQUFTOzs7OztJQUFULFVBQVUsUUFBbUIsRUFBRSxNQUFzQjs7Z0NBQ3hDLE9BQUs7WUFDZCxPQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFLLENBQUMsSUFBSTs7OztZQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDOzs7WUFEbkcsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQTtnQkFBckIsSUFBTSxPQUFLLG1CQUFBO3dCQUFMLE9BQUs7YUFFZjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBWTs7OztJQUFaLFVBQWEsTUFBc0I7OztZQUNqQyxLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUF2QixJQUFNLE9BQUssbUJBQUE7Z0JBQ2QsSUFBSSxPQUFLLENBQUMsT0FBTyxFQUFFO29CQUNqQixPQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7Ozs7Ozs7OztJQUNILENBQUM7O2dCQWhCRixVQUFVOzs7O0lBaUJYLG1CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZEV2ZW50cyhyZW5kZXJlcjogUmVuZGVyZXIyLCBldmVudHM6IEV2ZW50SGFuZGxlcltdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGV2ZW50LmRpc3Bvc2UgPSByZW5kZXJlci5saXN0ZW4oZXZlbnQuZWxlbWVudCwgZXZlbnQubmFtZSwgbmV3RXZlbnQgPT4gZXZlbnQuY2FsbGJhY2sobmV3RXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudHMoZXZlbnRzOiBFdmVudEhhbmRsZXJbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnQuZGlzcG9zZSkge1xuICAgICAgICBldmVudC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=