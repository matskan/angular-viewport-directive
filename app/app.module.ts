import { InjectionToken, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./test.component";

export interface IConfig {
  medium: number;
  large: number;
}

const config: IConfig = {
  large: 1240,
  medium: 1024
};

const ConfigToken = new InjectionToken<IConfig>("config");

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestComponent],
  providers: [{ provide: ConfigToken, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule {}
