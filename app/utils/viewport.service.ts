import { Inject, Injectable } from "@angular/core";
import { IConfig } from "../app.module";
import { ConfigToken } from "../token";

export type ViewSize = "small" | "medium" | "large";

@Injectable()
export class ViewportService {
  config: IConfig;
  validator: Record<ViewSize, (value: number) => boolean>;
  constructor(@Inject(ConfigToken) config: IConfig) {
    this.config = config;
    this.validator = {
      small: value => {
        return value < config.medium;
      },
      medium: value => value >= config.medium && value < config.large,
      large: value => value >= config.large
    };
  }

  get size() {
    return window.innerWidth;
  }

  isVisible(value: ViewSize) {
    const result = this.validator[value](this.size);
    return result;
  }
}
