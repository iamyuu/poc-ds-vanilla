// import styles from './App.module.css';
import * as styles from './App.css.ts';
import { Button } from './components/Button';

const App = () => {
  return (
    <div className={styles.content}>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button>Click me</Button>
    </div>
  );
};

export default App;
