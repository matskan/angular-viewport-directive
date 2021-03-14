import { InjectionToken } from "@angular/core";
import { IConfig } from "./app.module";

export const ConfigToken = new InjectionToken<IConfig>("config");
