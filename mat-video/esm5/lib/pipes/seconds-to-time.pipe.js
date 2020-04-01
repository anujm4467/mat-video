/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
var SecondsToTimePipe = /** @class */ (function () {
    function SecondsToTimePipe() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600
        };
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    SecondsToTimePipe.prototype.transform = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds) {
            return "0:00";
        }
        else {
            /** @type {?} */
            var timeString = "";
            for (var key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    timeString += Math.floor(seconds / this.times[key]).toString() + ":";
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            timeString += Math.floor(seconds / 60).toString() + ":";
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10) {
                timeString += "0";
            }
            timeString += Math.floor(seconds).toString();
            return timeString;
        }
    };
    SecondsToTimePipe.decorators = [
        { type: Pipe, args: [{
                    name: "secondsToTime"
                },] }
    ];
    return SecondsToTimePipe;
}());
export { SecondsToTimePipe };
if (false) {
    /** @type {?} */
    SecondsToTimePipe.prototype.times;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by10aW1lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2Vjb25kcy10by10aW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7UUFJRSxVQUFLLEdBQUc7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFzQkosQ0FBQzs7Ozs7SUFwQkMscUNBQVM7Ozs7SUFBVCxVQUFVLE9BQWU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTs7Z0JBQ0QsVUFBVSxHQUFHLEVBQUU7WUFDbkIsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUNyRSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM3RTthQUNGO1lBQ0QsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN4RCxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM1QixVQUFVLElBQUksR0FBRyxDQUFDO2FBQ25CO1lBQ0QsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsT0FBTyxVQUFVLENBQUM7U0FDbkI7SUFDSCxDQUFDOztnQkE5QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxlQUFlO2lCQUN0Qjs7SUE2QkQsd0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTVCWSxpQkFBaUI7OztJQUM1QixrQ0FLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7XG4gIG5hbWU6IFwic2Vjb25kc1RvVGltZVwiXG59KVxuZXhwb3J0IGNsYXNzIFNlY29uZHNUb1RpbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRpbWVzID0ge1xuICAgIHllYXI6IDMxNTU3NjAwLFxuICAgIG1vbnRoOiAyNjI5NzQ2LFxuICAgIGRheTogODY0MDAsXG4gICAgaG91cjogMzYwMFxuICB9O1xuXG4gIHRyYW5zZm9ybShzZWNvbmRzOiBudW1iZXIpIHtcbiAgICBpZiAoIXNlY29uZHMpIHtcbiAgICAgIHJldHVybiBcIjA6MDBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRpbWVTdHJpbmcgPSBcIlwiO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy50aW1lcykge1xuICAgICAgICBpZiAoTWF0aC5mbG9vcihzZWNvbmRzIC8gdGhpcy50aW1lc1trZXldKSA+IDApIHtcbiAgICAgICAgICB0aW1lU3RyaW5nICs9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIHRoaXMudGltZXNba2V5XSkudG9TdHJpbmcoKSArIFwiOlwiO1xuICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gdGhpcy50aW1lc1trZXldICogTWF0aC5mbG9vcihzZWNvbmRzIC8gdGhpcy50aW1lc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGltZVN0cmluZyArPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkudG9TdHJpbmcoKSArIFwiOlwiO1xuICAgICAgc2Vjb25kcyA9IHNlY29uZHMgLSA2MCAqIE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgIGlmIChNYXRoLmZsb29yKHNlY29uZHMpIDwgMTApIHtcbiAgICAgICAgdGltZVN0cmluZyArPSBcIjBcIjtcbiAgICAgIH1cbiAgICAgIHRpbWVTdHJpbmcgKz0gTWF0aC5mbG9vcihzZWNvbmRzKS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=