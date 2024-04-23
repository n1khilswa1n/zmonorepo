// import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';
import { isEvenOrOdd } from '@zero/is-even-or-odd';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="renderer" /> */}

      {/* is even or odd. */}
      <h1>Is Even or Odd</h1>
      <p>Check if 5 number is even or odd.</p>
      <p>5 is {isEvenOrOdd(5)}</p>
    </div>
  );
}

export default App;
