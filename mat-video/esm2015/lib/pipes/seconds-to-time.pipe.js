/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
export class SecondsToTimePipe {
    constructor() {
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
    transform(seconds) {
        if (!seconds) {
            return "0:00";
        }
        else {
            /** @type {?} */
            let timeString = "";
            for (const key in this.times) {
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
    }
}
SecondsToTimePipe.decorators = [
    { type: Pipe, args: [{
                name: "secondsToTime"
            },] }
];
if (false) {
    /** @type {?} */
    SecondsToTimePipe.prototype.times;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by10aW1lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2Vjb25kcy10by10aW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJRSxVQUFLLEdBQUc7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFzQkosQ0FBQzs7Ozs7SUFwQkMsU0FBUyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTs7Z0JBQ0QsVUFBVSxHQUFHLEVBQUU7WUFDbkIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUNyRSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM3RTthQUNGO1lBQ0QsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN4RCxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM1QixVQUFVLElBQUksR0FBRyxDQUFDO2FBQ25CO1lBQ0QsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsT0FBTyxVQUFVLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7WUE5QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxlQUFlO2FBQ3RCOzs7O0lBRUMsa0NBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcInNlY29uZHNUb1RpbWVcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRzVG9UaW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0aW1lcyA9IHtcbiAgICB5ZWFyOiAzMTU1NzYwMCxcbiAgICBtb250aDogMjYyOTc0NixcbiAgICBkYXk6IDg2NDAwLFxuICAgIGhvdXI6IDM2MDBcbiAgfTtcblxuICB0cmFuc2Zvcm0oc2Vjb25kczogbnVtYmVyKSB7XG4gICAgaWYgKCFzZWNvbmRzKSB7XG4gICAgICByZXR1cm4gXCIwOjAwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0aW1lU3RyaW5nID0gXCJcIjtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudGltZXMpIHtcbiAgICAgICAgaWYgKE1hdGguZmxvb3Ioc2Vjb25kcyAvIHRoaXMudGltZXNba2V5XSkgPiAwKSB7XG4gICAgICAgICAgdGltZVN0cmluZyArPSBNYXRoLmZsb29yKHNlY29uZHMgLyB0aGlzLnRpbWVzW2tleV0pLnRvU3RyaW5nKCkgKyBcIjpcIjtcbiAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAtIHRoaXMudGltZXNba2V5XSAqIE1hdGguZmxvb3Ioc2Vjb25kcyAvIHRoaXMudGltZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRpbWVTdHJpbmcgKz0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApLnRvU3RyaW5nKCkgKyBcIjpcIjtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gNjAgKiBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICBpZiAoTWF0aC5mbG9vcihzZWNvbmRzKSA8IDEwKSB7XG4gICAgICAgIHRpbWVTdHJpbmcgKz0gXCIwXCI7XG4gICAgICB9XG4gICAgICB0aW1lU3RyaW5nICs9IE1hdGguZmxvb3Ioc2Vjb25kcykudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxufVxuIl19