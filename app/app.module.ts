import { InjectionToken, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./test.component";
import { UtilsModule } from "./utils/utils.module";
import { ConfigToken } from "./token";

export interface IConfig {
  medium: number;
  large: number;
}

const config: IConfig = Object.freeze({
  large: 1240,
  medium: 768
});

@NgModule({
  imports: [BrowserModule, FormsModule, UtilsModule],
  declarations: [AppComponent, HelloComponent, TestComponent],
  providers: [{ provide: ConfigToken, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule {}
