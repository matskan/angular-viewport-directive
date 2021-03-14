import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewportService } from "./viewport.service";
import { IfViewportSizeDirective } from "./if-viewport-size.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [IfViewportSizeDirective],
  exports: [IfViewportSizeDirective],
  providers: [ViewportService]
})
export class UtilsModule {}
