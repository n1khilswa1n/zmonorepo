// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { isEvenOrOdd } from '@zero/is-even-or-odd';
import { Loader } from '../../../../libs/loader/loader';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="editor" /> */}
      {/* is 10 a odd number */}
      <h1>Is Even Or Odd</h1>
      <p>Check If 10 is an even or odd number.</p>
      <p>10 is {isEvenOrOdd(10)}</p>
      <Loader />
    </div>
  );
}

export default App;
