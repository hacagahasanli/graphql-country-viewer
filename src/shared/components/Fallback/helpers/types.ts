import type { IDateTestId } from "@shared/types";

export interface IFallbackProps extends IDateTestId {
  error: string;
  info: string;
}
