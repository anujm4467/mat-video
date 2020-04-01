/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
export class FullscreenService {
    constructor() {
        this.fnMap = [
            // Object keys
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Mozilla
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            // MS
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        this.keyboardAllowed = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;
        /** @type {?} */
        const ret = {};
        /** @type {?} */
        let val;
        for (let i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    request(elem) {
        /** @type {?} */
        const request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? ((/** @type {?} */ (Element))).ALLOW_KEYBOARD_INPUT : {});
        }
    }
    /**
     * @return {?}
     */
    exit() {
        document[this.fn.exitFullscreen]();
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    toggle(elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onChange(callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onError(callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    }
    /**
     * @return {?}
     */
    isFullscreen() {
        return Boolean(document[this.fn.fullscreenElement]);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    }
    /**
     * @return {?}
     */
    getElement() {
        return document[this.fn.fullscreenElement];
    }
}
FullscreenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FullscreenService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullscreenService.prototype.fnMap;
    /**
     * @type {?}
     * @private
     */
    FullscreenService.prototype.fn;
    /**
     * @type {?}
     * @private
     */
    FullscreenService.prototype.keyboardAllowed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8saUJBQWlCO0lBc0M1QjtRQXJDUSxVQUFLLEdBQWU7WUFDMUIsY0FBYztZQUNkLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7WUFDeEgsYUFBYTtZQUNiO2dCQUNFLHlCQUF5QjtnQkFDekIsc0JBQXNCO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7YUFDeEI7WUFDRCwwQkFBMEI7WUFDMUI7Z0JBQ0UseUJBQXlCO2dCQUN6Qix3QkFBd0I7Z0JBQ3hCLGdDQUFnQztnQkFDaEMsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUN4QjtZQUNELFVBQVU7WUFDVjtnQkFDRSxzQkFBc0I7Z0JBQ3RCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixzQkFBc0I7Z0JBQ3RCLHFCQUFxQjtnQkFDckIsb0JBQW9CO2FBQ3JCO1lBQ0QsS0FBSztZQUNMLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7U0FDckksQ0FBQztRQU1BLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLHNCQUFzQixJQUFJLE9BQU8sQ0FBQzs7Y0FDckYsR0FBRyxHQUFRLEVBQUU7O1lBQ2YsR0FBRztRQUVQLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQy9CLDJDQUEyQztvQkFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNDO2dCQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLElBQVM7O2NBQ2hCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQjtRQUV6QyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFFeEMsa0RBQWtEO1FBQ2xELGlEQUFpRDtRQUNqRCwrQ0FBK0M7UUFDL0MsNEJBQTRCO1FBQzVCLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEY7SUFDSCxDQUFDOzs7O0lBRU0sSUFBSTtRQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsSUFBUztRQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLFFBQWE7UUFDM0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLFFBQWE7UUFDMUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCwwQ0FBMEM7UUFDMUMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXZHRixVQUFVOzs7Ozs7Ozs7SUFFVCxrQ0FnQ0U7Ozs7O0lBRUYsK0JBQStCOzs7OztJQUMvQiw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZ1bGxzY3JlZW5Db250cm9scyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Z1bGxzY3JlZW4tY29udHJvbHMuaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuU2VydmljZSB7XG4gIHByaXZhdGUgZm5NYXA6IHN0cmluZ1tdW10gPSBbXG4gICAgLy8gT2JqZWN0IGtleXNcbiAgICBbXCJyZXF1ZXN0RnVsbHNjcmVlblwiLCBcImV4aXRGdWxsc2NyZWVuXCIsIFwiZnVsbHNjcmVlbkVsZW1lbnRcIiwgXCJmdWxsc2NyZWVuRW5hYmxlZFwiLCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgXCJmdWxsc2NyZWVuZXJyb3JcIl0sXG4gICAgLy8gTmV3IFdlYktpdFxuICAgIFtcbiAgICAgIFwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIixcbiAgICAgIFwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixcbiAgICAgIFwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcIixcbiAgICAgIFwid2Via2l0RnVsbHNjcmVlbkVuYWJsZWRcIixcbiAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxuICAgICAgXCJ3ZWJraXRmdWxsc2NyZWVuZXJyb3JcIlxuICAgIF0sXG4gICAgLy8gT2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcbiAgICBbXG4gICAgICBcIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXCIsXG4gICAgICBcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcbiAgICAgIFwid2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50XCIsXG4gICAgICBcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcbiAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxuICAgICAgXCJ3ZWJraXRmdWxsc2NyZWVuZXJyb3JcIlxuICAgIF0sXG4gICAgLy8gTW96aWxsYVxuICAgIFtcbiAgICAgIFwibW96UmVxdWVzdEZ1bGxTY3JlZW5cIixcbiAgICAgIFwibW96Q2FuY2VsRnVsbFNjcmVlblwiLFxuICAgICAgXCJtb3pGdWxsU2NyZWVuRWxlbWVudFwiLFxuICAgICAgXCJtb3pGdWxsU2NyZWVuRW5hYmxlZFwiLFxuICAgICAgXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXG4gICAgICBcIm1vemZ1bGxzY3JlZW5lcnJvclwiXG4gICAgXSxcbiAgICAvLyBNU1xuICAgIFtcIm1zUmVxdWVzdEZ1bGxzY3JlZW5cIiwgXCJtc0V4aXRGdWxsc2NyZWVuXCIsIFwibXNGdWxsc2NyZWVuRWxlbWVudFwiLCBcIm1zRnVsbHNjcmVlbkVuYWJsZWRcIiwgXCJNU0Z1bGxzY3JlZW5DaGFuZ2VcIiwgXCJNU0Z1bGxzY3JlZW5FcnJvclwiXVxuICBdO1xuXG4gIHByaXZhdGUgZm46IEZ1bGxzY3JlZW5Db250cm9scztcbiAgcHJpdmF0ZSBrZXlib2FyZEFsbG93ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5rZXlib2FyZEFsbG93ZWQgPSB0eXBlb2YgRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcIkFMTE9XX0tFWUJPQVJEX0lOUFVUXCIgaW4gRWxlbWVudDtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIGxldCB2YWw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm5NYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbCA9IHRoaXMuZm5NYXBbaV07XG4gICAgICBpZiAodmFsICYmIHZhbFsxXSBpbiBkb2N1bWVudCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gTWFwIGV2ZXJ5dGhpbmcgdG8gdGhlIGZpcnN0IGxpc3Qgb2Yga2V5c1xuICAgICAgICAgIHJldFt0aGlzLmZuTWFwWzBdW2ldLnRvU3RyaW5nKCldID0gdmFsW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm4gPSByZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlcXVlc3QoZWxlbTogYW55KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuZm4ucmVxdWVzdEZ1bGxzY3JlZW47XG5cbiAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAvLyBXb3JrIGFyb3VuZCBTYWZhcmkgNS4xIGJ1ZzogcmVwb3J0cyBzdXBwb3J0IGZvclxuICAgIC8vIGtleWJvYXJkIGluIGZ1bGxzY3JlZW4gZXZlbiB0aG91Z2ggaXQgZG9lc24ndC5cbiAgICAvLyBCcm93c2VyIHNuaWZmaW5nLCBzaW5jZSB0aGUgYWx0ZXJuYXRpdmUgd2l0aFxuICAgIC8vIHNldFRpbWVvdXQgaXMgZXZlbiB3b3JzZS5cbiAgICBpZiAoLzVcXC4xWy5cXGRdKiBTYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIGVsZW1bcmVxdWVzdF0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbVtyZXF1ZXN0XSh0aGlzLmtleWJvYXJkQWxsb3dlZCA/IChFbGVtZW50IGFzIGFueSkuQUxMT1dfS0VZQk9BUkRfSU5QVVQgOiB7fSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGV4aXQoKSB7XG4gICAgZG9jdW1lbnRbdGhpcy5mbi5leGl0RnVsbHNjcmVlbl0oKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoZWxlbTogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICAgIHRoaXMuZXhpdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlcXVlc3QoZWxlbSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGNhbGxiYWNrOiBhbnkpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm4uZnVsbHNjcmVlbmNoYW5nZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkVycm9yKGNhbGxiYWNrOiBhbnkpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm4uZnVsbHNjcmVlbmVycm9yLCBjYWxsYmFjaywgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGlzRnVsbHNjcmVlbigpIHtcbiAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XG4gIH1cblxuICBwdWJsaWMgaXNFbmFibGVkKCkge1xuICAgIC8vIENvZXJjZSB0byBib29sZWFuIGluIGNhc2Ugb2Ygb2xkIFdlYktpdFxuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W3RoaXMuZm4uZnVsbHNjcmVlbkVuYWJsZWRdKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbGVtZW50XTtcbiAgfVxufVxuIl19