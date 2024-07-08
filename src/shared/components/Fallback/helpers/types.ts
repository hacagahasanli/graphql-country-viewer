import type { IDataTestId } from "@shared/types";

export interface IFallbackProps extends IDataTestId {
  error: string;
  info: string;
}
