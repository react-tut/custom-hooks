import { Fragment } from 'react';
import ForwardCounter from './ForwardCounter';
import BackwardCounter from './ForwardCounter';

const CounterDemo = () =>  {
  return (
<Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </Fragment>
  );
}

export default CounterDemo;