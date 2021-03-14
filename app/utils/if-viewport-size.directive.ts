import {
  AfterContentInit,
  Directive,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { ViewportService, ViewSize } from "./viewport.service";

@Directive({
  selector: "[ifViewportSize]"
})
export class IfViewportSizeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private viewport: ViewportService
  ) {}

  @Input() set ifViewportSize(value: ViewSize) {
    console.log("check");
    this.check(value);
  }

  @HostListener("document:resize", ["$event"])
  onResize() {
    console.log("RESIZE");
    this.check(this.ifViewportSize);
  }

  check(value: ViewSize) {
    const isVisible = this.viewport.isVisible(value);
    if (isVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }
}
