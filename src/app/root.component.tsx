import { Routing } from "@pages/index";

import { withProviders } from "./providers";

export const Root = withProviders(() => (<Routing />));