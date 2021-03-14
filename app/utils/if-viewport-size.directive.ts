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
export class IfViewportSizeDirective implements AfterContentInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private viewport: ViewportService
  ) {}

  @Input() ifViewportSize: ViewSize;

  @HostListener("window:resize", ["$event"])
  onResize() {}

  ngAfterContentInit() {
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
