import { FC, ComponentClass, FunctionComponent } from 'react';

type HOC = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <P extends object>(
    Component: ComponentClass<any> | FunctionComponent<P>
  ): FC<P>;
};

export default HOC;
