import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ViewportService, ViewSize } from "./viewport.service";

@Directive({
  selector: "[ifViewportSize]"
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private viewport: ViewportService
  ) {}

  #viewSize: ViewSize; 
  @Input("ifViewportSize") set size(value: ViewSize) {
    this.check(value);
    this.#viewSize = value;
  }

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, "resize");
    this.resizeSubscription$ = this.resizeObservable$.subscribe(event => {
      this.check(this.#viewSize);
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  check(value: ViewSize) {
    this.viewContainer.clear();
    const isVisible = this.viewport.isVisible(value);
    if (isVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
  }
}
