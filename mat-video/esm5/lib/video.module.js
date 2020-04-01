/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatVideoSourceDirective } from "./directives/mat-video-source.directive";
import { MatVideoTrackDirective } from "./directives/mat-video-track.directive";
import { MatSliderProgressBarComponent } from "./internal/mat-slider-progress-bar/mat-slider-progress-bar.component";
import { SecondsToTimePipe } from "./pipes/seconds-to-time.pipe";
import { EventService } from "./services/event.service";
import { FullscreenService } from "./services/fullscreen.service";
import { MatDownloadButtonComponent } from "./ui/mat-download-button/mat-download-button.component";
import { MatFrameByFrameControlComponent } from "./ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component";
import { MatFullscreenButtonComponent } from "./ui/mat-fullscreen-button/mat-fullscreen-button.component";
import { MatPlayButtonComponent } from "./ui/mat-play-button/mat-play-button.component";
import { MatQualityControlComponent } from "./ui/mat-quality-control/mat-quality-control.component";
import { MatSeekProgressControlComponent } from "./ui/mat-seek-progress-control/mat-seek-progress-control.component";
import { MatTimeControlComponent } from "./ui/mat-time-control/mat-time-control.component";
import { MatVideoSpinnerComponent } from "./ui/mat-video-spinner/mat-video-spinner.component";
import { MatVolumeControlComponent } from "./ui/mat-volume-control/mat-volume-control.component";
import { MatVideoComponent } from "./video.component";
var MatVideoModule = /** @class */ (function () {
    function MatVideoModule() {
    }
    MatVideoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SecondsToTimePipe,
                        MatVideoComponent,
                        MatSliderProgressBarComponent,
                        MatPlayButtonComponent,
                        MatVolumeControlComponent,
                        MatDownloadButtonComponent,
                        MatFullscreenButtonComponent,
                        MatTimeControlComponent,
                        MatQualityControlComponent,
                        MatVideoSpinnerComponent,
                        MatSeekProgressControlComponent,
                        MatVideoSourceDirective,
                        MatVideoTrackDirective,
                        MatFrameByFrameControlComponent
                    ],
                    imports: [CommonModule, MatIconModule, MatButtonModule, MatSliderModule],
                    exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
                    providers: [FullscreenService, EventService]
                },] }
    ];
    return MatVideoModule;
}());
export { MatVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsibGliL3ZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXREO0lBQUE7SUFxQjZCLENBQUM7O2dCQXJCN0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLCtCQUErQjt3QkFDL0IsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLCtCQUErQjtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO29CQUN4RSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDN0UsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO2lCQUM3Qzs7SUFDNEIscUJBQUM7Q0FBQSxBQXJCOUIsSUFxQjhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXJcIjtcblxuaW1wb3J0IHsgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL21hdC12aWRlby1zb3VyY2UuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9tYXQtdmlkZW8tdHJhY2suZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gXCIuL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2Vjb25kc1RvVGltZVBpcGUgfSBmcm9tIFwiLi9waXBlcy9zZWNvbmRzLXRvLXRpbWUucGlwZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9mdWxsc2NyZWVuLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1hdERvd25sb2FkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0RnVsbHNjcmVlbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL3VpL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYXRQbGF5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LXBsYXktYnV0dG9uL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hdFF1YWxpdHlDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3VpL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hdFRpbWVDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0VmlkZW9TcGlubmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LXZpZGVvLXNwaW5uZXIvbWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvbWF0LXZvbHVtZS1jb250cm9sL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlkZW8uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlY29uZHNUb1RpbWVQaXBlLFxuICAgIE1hdFZpZGVvQ29tcG9uZW50LFxuICAgIE1hdFNsaWRlclByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIE1hdFBsYXlCdXR0b25Db21wb25lbnQsXG4gICAgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCxcbiAgICBNYXREb3dubG9hZEJ1dHRvbkNvbXBvbmVudCxcbiAgICBNYXRGdWxsc2NyZWVuQnV0dG9uQ29tcG9uZW50LFxuICAgIE1hdFRpbWVDb250cm9sQ29tcG9uZW50LFxuICAgIE1hdFF1YWxpdHlDb250cm9sQ29tcG9uZW50LFxuICAgIE1hdFZpZGVvU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNYXRTZWVrUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LFxuICAgIE1hdFZpZGVvU291cmNlRGlyZWN0aXZlLFxuICAgIE1hdFZpZGVvVHJhY2tEaXJlY3RpdmUsXG4gICAgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdFNsaWRlck1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRWaWRlb0NvbXBvbmVudCwgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUsIE1hdFZpZGVvVHJhY2tEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtGdWxsc2NyZWVuU2VydmljZSwgRXZlbnRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb01vZHVsZSB7fVxuIl19