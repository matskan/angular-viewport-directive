import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewportService } from "./viewport.service";
import { IfViewportSizeDirective } from "./if-viewport-size.directive";
import { ConfigToken } from "../app.module";

@NgModule({
  imports: [CommonModule],
  declarations: [IfViewportSizeDirective],
  exports: [IfViewportSizeDirective],
  providers: [
    ViewportService
    // {
    //   provide: ViewportService,
    //   useFactory: (config: ConfigToken) => {
    //     return new ViewportService(config);
    //   },
    //   deps: [ConfigToken]
    // }
  ]
})
export class UtilsModule {}
